import { myClient } from './gql/graphql.client'
import { USER_INFO_GET, USER_LOGIN, USER_REGISTER } from './gql/user.gql';
import localStore from 'store2'
import { Store, Commit } from 'vuex'
import { ByPwdInput, LoginRes, Mutation, Query } from './gql/types';

export default {
  namespaced: true,
  state: {
    isLogin: false,
    isMyHome: false,
    myUserInfo: {
      userId: null,
      userName: ''
    },
    otherUserInfo: {
      userId: null,
      userName: ''
    },
  },
  mutations: {
    // 检测本地localstorage信息与刚去服务器查询的userInfo信息
    initUserInfo(state: any, userInfo: any) {
      const jwt = localStore.get('jwt');
      if (jwt) { // 如果有jwt，那么认为用户已登录
        state.isLogin = true;
        const userId = localStore.get('userId');
        const userName = localStore.get('userName');
        state.myUserInfo.userId = userId;
        state.myUserInfo.userName = userName;
        if (userId != userInfo.userId) {
          // 如果本地userId和url里带有的userId不同，那么是进入了其他人的首页
          state.isMyHome = false;
          state.otherUserInfo = { ...userInfo }
        } else {
          state.isMyHome = true;
          state.myUserInfo = { ...userInfo };
        }
      } else { // 没有登录
        state.isLogin=false;
        state.isMyHome = false;
        state.otherUserInfo = { ...userInfo }
      }
    },
    refreshLoginState(state: any, loginRes: LoginRes) {
      console.log('登陆结果', loginRes);
      if (loginRes && loginRes.res && loginRes.res.done == true) {
        state.isLogin = true;
        if(state.otherUserInfo.userId&&state.otherUserInfo.userId==loginRes.user?.userId){
          state.isMyHome=true
        }else{
          state.isMyHome=false;
        }
        state.myUserInfo.userId = loginRes.user?.userId;
        state.myUserInfo.userName = loginRes.user?.userName;
        localStore.set('userId', state.myUserInfo.userId);
        localStore.set('userName', state.myUserInfo.userName);
        localStore.set('jwt', 'abcd')
        return
      }
    },
    logout(state: any) {
      state.isLogin = false;
      state.isMyHome=false;
      state.otherUserInfo={...state.myUserInfo};
      localStore.remove('userId');
      localStore.remove('userName');
      localStore.remove('jwt');
    }
  },
  actions: {
    // 登陆
    async login({ commit }: any, input: ByPwdInput) {
      const res = await myClient.mutate<Mutation>({
        mutation: USER_LOGIN,
        variables: {
          byPwd: input
        },
        fetchPolicy: 'no-cache'
      });
      commit('refreshLoginState', res.data?.login);
      return res;
    },

    // 初始化导航栏需要的用户信息
    async initNavUserInfo({ commit }: any, userId: number) {
      const res=await myClient.query<Query>({
        query:USER_INFO_GET,
        variables:{
          userId
        },
        fetchPolicy:'no-cache'
      })
      const userInfo = res.data.user
      commit('initUserInfo', userInfo)
      return userInfo;
    }

  }
}