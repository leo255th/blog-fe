import { myClient } from './gql/graphql.client'
import { GET_USER_DATE_SET, GET_USER_FIELDS, USER_INFO_GET, USER_LOGIN, USER_REGISTER } from './gql/user.gql';
import storage from 'store2'
import { ByPwdInput, ByUserNameInput, LoginRes, Mutation, Query, RegisterRes, FieldCount, DateCount } from './gql/types';

export default {
  namespaced: true,
  state: {
    isLogin: false,
    isMyHome: false,
    // url不带有userId，本地storage里也没有信息，无法填充下面两个userInfo
    // isEmpty=true时，根组件需要重定向至login界面
    isEmpty: true,
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
    // 从url进入网页，或者刷新网页时，调用这个方法
    // 检测本地localstorage信息与刚去服务器查询的userInfo信息
    initUserInfo(state: any, payload: {
      userInfo?: any,
      hasUserId?: boolean
    }) {
      const jwt = storage.get('jwt');
      if (jwt) { // 如果有jwt，那么认为用户已登录
        state.isLogin = true;
        state.isEmpty = false;
        const userId = storage.get('userId');
        const userName = storage.get('userName');
        console.log('jwt存在，获取到的用户名密码分别是:')
        console.log('userId', userId);
        console.log('userName', userName);
        state.myUserInfo.userId = userId;
        state.myUserInfo.userName = userName;
        if (payload.userInfo) {
          // 如果url带有userId,请求到了用户信息
          if (userId != payload.userInfo.userId) {
            // 如果本地userId和url里带有的userId不同，那么是进入了其他人的首页
            state.isMyHome = false;
            state.otherUserInfo = { ...payload.userInfo }
          } else {
            state.isMyHome = true;
            state.myUserInfo = { ...payload.userInfo };
          }
        } else {
          // url没带有userId
          state.isMyHome = true;
          state.myUserInfo = {
            userId,
            userName
          }
        }
      } else { // 没有登录
        state.isLogin = false;
        state.isMyHome = false;
        if (!payload.hasUserId) {
          // 既没有登录，url又不带userId
          state.isEmpty = true;
        } else {
          // 没有登录，但是url带有userId
          state.isEmpty = false;
          state.otherUserInfo = { ...payload.userInfo }
        }
      }
    },
    // 登陆与注册后调用这个方法更改登陆状态
    refreshLoginState(state: any, loginRes: LoginRes) {
      console.log('登陆结果', loginRes);
      if (loginRes && loginRes.res && loginRes.res.done == true) {
        // 如果登陆成功
        state.isLogin = true;
        state.isEmpty = false;
        state.isMyHome = false;
        if (state.otherUserInfo.userId) {
          // 如果进入过其他人的页面
          if (state.otherUserInfo.userId == loginRes.user?.userId) {
            // 如果那个页面是自己的页面，跳转到自己的页面
            state.isMyHome = true;
          } else {
            // 如果那个页面不是自己的页面，跳转到其他人的页面
            state.isMyHome = false;
          }
        } else {
          // 跳转到自己的页面
          state.isMyHome = true;
        }
        state.myUserInfo.userId = loginRes.user?.userId;
        state.myUserInfo.userName = loginRes.user?.userName;
        storage.set('userId', state.myUserInfo.userId);
        storage.set('userName', state.myUserInfo.userName);
        storage.set('jwt', 'abcd')
        return
      }
    },
    refreshRegisterState(state: any, registerRes: RegisterRes) {
      console.log('注册结果', registerRes);
      if (registerRes && registerRes.res && registerRes.res.done == true) {
        // 如果注册成功
        state.isMyHome = false;
        state.isLogin = true;
        state.isEmpty = false;
        if (state.otherUserInfo.userId) {
          // 如果之前已经进入过其他人的页面，注册完成后跳转到其他人的页面
          state.isMyHome = false;
        } else {
          // 如果没有，那么注册完成后会进入自己的页面
          state.isMyHome = true;
        }
        state.myUserInfo.userId = registerRes.user?.userId;
        state.myUserInfo.userName = registerRes.user?.userName;
        storage.set('userId', state.myUserInfo.userId);
        storage.set('userName', state.myUserInfo.userName);
        storage.set('jwt', 'abcd')
        return
      }
    },
    logout(state: any) {
      state.isLogin = false;
      state.isMyHome = false;
      state.otherUserInfo = { ...state.myUserInfo };
      storage.remove('userId');
      storage.remove('userName');
      storage.remove('jwt');
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

    // 初始化导航栏，通过url进入页面时调用
    // 两种情况，Url带有userId,url没带有userId
    async initNavInfo({ commit }: any, payload: { hasUserId?: boolean, userId?: number }) {
      console.log('payload-userId:', payload.userId)
      console.log('payload-hasUserId:', payload.hasUserId)
      if (payload.hasUserId) {
        // 如果url带有userId，查询对应用户信息
        const res = await myClient.query<Query>({
          query: USER_INFO_GET,
          variables: {
            userId: payload.userId
          },
          fetchPolicy: 'no-cache'
        })
        const userInfo = res.data.user
        commit('initUserInfo', { userInfo, hasUserId: true })
        return userInfo;
      } else {
        // 如果不带有userId
        commit('initUserInfo', { hasUserId: false })
        if (storage.get('jwt')) {
          return true;
        } else {
          return false;
        }
      }
    },
    // // 初始化导航栏需要的用户信息
    // async initNavUserInfo({ commit }: any, userId: number) {
    //   const res = await myClient.query<Query>({
    //     query: USER_INFO_GET,
    //     variables: {
    //       userId
    //     },
    //     fetchPolicy: 'no-cache'
    //   })
    //   const userInfo = res.data.user
    //   commit('initUserInfo', userInfo)
    //   return userInfo;
    // },

    // 注册
    async register({ commit }: any, input: ByUserNameInput) {
      const res = await myClient.mutate<Mutation>({
        mutation: USER_REGISTER,
        variables: {
          byUserName: input
        },
        fetchPolicy: 'no-cache'
      })
      commit('refreshRegisterState', res.data?.register);
      return res;
    },
    // 获取用户领域
    async getUserFields({ commit }: any, userId: number): Promise<FieldCount[] | boolean | undefined | null> {
      const res = await myClient.query<Query>({
        query: GET_USER_FIELDS,
        variables: {
          userId
        },
        fetchPolicy: "no-cache"
      })
      if (res.data) {
        if (res.data.user) {
          return res.data.user.fields
        }
      } else {
        return false;
      }
    },

    // 获取用户文章时间归档
    async getUsetTimeSet({ commit }: any, userId: number): Promise<DateCount[] | boolean | undefined | null> {
      const res = await myClient.query<Query>({
        query: GET_USER_DATE_SET,
        variables: {
          userId
        },
        fetchPolicy: "no-cache"
      })
      if (res.data) {
        if (res.data.user) {
          return res.data.user.dateSet;
        }
      } else {
        return false;
      }
    }
  }
}