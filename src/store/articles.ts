import { GET_FIELDS } from './gql/articles.gql'
import { myClient } from './gql/graphql.client'
import { FieldEntity, Query } from './gql/types'

export default {
  namespaced: true,
  state: {
    fields: []
  },
  mutations: {
    // 获取领域
    setFields(state: any, fields: FieldEntity[]) {
      state.fields = { ...fields }
    }
  },
  actions: {
    // 获取领域
    async getFields({ commit }: any) {
      const res = await myClient.query<Query>({
        query: GET_FIELDS,
        variables: {},
        fetchPolicy: "no-cache"
      })
      commit('setFields', res.data.fields)
      return res.data.fields;
    }
  }
}