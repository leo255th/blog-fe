import { myClient } from './gql/graphql.client'
import { USER_REGISTER } from './gql/user.gql';
export default {
  namespaced: true,
  state: {
    
  },
  mutations: {
    testGraphql(state:any , data: any) {
      console.log(data);
    }
  },
  actions: {
    async sendGraphql({commit}:any) {
      let byUserName:{
        userName:string,
        pwd:string
      }={
        userName:'用户1号',
        pwd:'abc123'
      }
      const res=await myClient.mutate({
        mutation:USER_REGISTER,
        variables:{
          byUserName
        }
      });
      commit('testGraphql',res)

    }

  }
}