import { ADD_ARTICLE, GET_ARTICLE, GET_ARTICLES, GET_FIELDS, RE_EDIT_ARTICLE } from './gql/articles.gql'
import { myClient } from './gql/graphql.client'
import { AddArticleInput, AddArticleRes, ArticleEntity, ArticleList, ArticlesFilterInput, EditArticleInput, EditArticleRes, FieldEntity, Mutation, Query } from './gql/types'

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
    },

    // 创建文章
    // 暂时只需要获取结果，不需要更新store
    async addArticle({commit}:any,input:AddArticleInput) :Promise<AddArticleRes|boolean>{
      const res=await myClient.mutate<Mutation>({
        mutation:ADD_ARTICLE,
        variables:{
          input
        },
        fetchPolicy:'no-cache'
      })
      if(res.data){
        return res.data?.addArticle
      }else{
        return false;
      }
    },
    // 编辑文章
    // 暂时只需要获取结果，不需要更新store
    async editArticle({commit}:any,input:EditArticleInput) :Promise<EditArticleRes|boolean>{
      const res=await myClient.mutate<Mutation>({
        mutation:RE_EDIT_ARTICLE,
        variables:{
          input
        },
        fetchPolicy:'no-cache'
      })
      if(res.data){
        return res.data?.editArticle
      }else{
        return false;
      }
    },
    
    // 查询文章列表
    async getArticles({commit}:any,input:ArticlesFilterInput):Promise<ArticleList|boolean>{
      const res=await myClient.query<Query>({
        query:GET_ARTICLES,
        variables:{
          input
        },
        fetchPolicy:"no-cache"
      })
      if(res.data){
        return res.data?.articles
      }else{
        return false;
      }
    },
    
    // 获取文章详情
    async getArticleDetail({commit}:any,articleId:number):Promise<ArticleEntity|boolean>{
      const res=await myClient.query<Query>({
        query:GET_ARTICLE,
        variables:{
          articleId
        },
        fetchPolicy:'no-cache'
      })
      if(res.data){
        return res.data?.article.data
      }else{
        return false;
      }
    },
  }
}