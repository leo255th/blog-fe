import { myClient } from './gql/graphql.client'
import { USER_LOGIN, USER_REGISTER } from './gql/user.gql';
import localStore from 'store2'
import { Store, Commit } from 'vuex'
import { ByPwdInput, LoginRes, Mutation, Query } from './gql/types';

export default {
  namespaced: true,
  state: {
    isLogin: false,
    userId: null,
  },
  mutations: {
    // testGraphql(state: any, data: any) {
    //   console.log(data);
    // }
    refreshLoginState(state: any, loginRes: LoginRes) {
      console.log('登陆结果', loginRes);
      state.isLogin = true;
      state.userId = loginRes.user?.userId;
      localStore.set('userId', state.userId);
    }
  },
  actions: {

    async sendGraphql({ commit }: any) {
      let byUserName: {
        userName: string,
        pwd: string
      } = {
        userName: '用户1号',
        pwd: 'abc123'
      }
      const res = await myClient.mutate({
        mutation: USER_REGISTER,
        variables: {
          byUserName
        }
      });
      commit('testGraphql', res)
    },

    // 登陆
    async login({ commit }: any, input: ByPwdInput) {
      const res = await myClient.mutate<Mutation>({
        mutation: USER_LOGIN,
        variables: {
          byPwd: input
        },
        fetchPolicy:'no-cache'
      });
      commit('refreshLoginState', res.data?.login);
    }

  }
}