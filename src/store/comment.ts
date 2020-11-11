
import { GET_COMMENTS_TO_USER, SEND_COMMENT_TO_USER, GET_COMMENTS_TO_ARTICLE, SEND_COMMENT_TO_ARTICLE } from './gql/comment.gql'
import { myClient } from './gql/graphql.client'
import { AddCommentRes, Comment2ArticleAddInput, Comment2ArticleGetInput, Comment2UserAddInput, Comment2UserGetInput, CommentList, Mutation, Query } from './gql/types'

export default {
  namespaced: true,
  state: {
  },
  mutations: {

  },
  actions: {
    // 获取对用户的评论
    async getComments2User({ commit }: any, userId: number): Promise<CommentList | boolean> {
      const input: Comment2UserGetInput = {
        commentedUserId: userId
      }
      const res = await myClient.query<Query>({
        query: GET_COMMENTS_TO_USER,
        variables: {
          toUser: input
        },
        fetchPolicy: 'no-cache'
      })
      if (res.data) {
        return res.data.comments
      } else {
        return false;
      }
    },
    // 发送对用户的评论
    async sendComment2User({ commit }: any, input: Comment2UserAddInput): Promise<AddCommentRes | boolean> {
      const res = await myClient.mutate<Mutation>({
        mutation: SEND_COMMENT_TO_USER,
        variables: {
          toUser: input
        },
        fetchPolicy: "no-cache"
      })
      if (res.data) {
        return res.data.addComment
      } else {
        return false;
      }
    },
    // 获取对用户的评论
    async getComments2Article({ commit }: any, articleId: number): Promise<CommentList | boolean> {
      const input: Comment2ArticleGetInput = {
        commentedArticleId: articleId
      }
      const res = await myClient.query<Query>({
        query: GET_COMMENTS_TO_ARTICLE,
        variables: {
          toArticle: input
        },
        fetchPolicy: 'no-cache'
      })
      if (res.data) {
        return res.data.comments
      } else {
        return false;
      }
    },
    // 发送对用户的评论
    async sendComment2Article({ commit }: any, input: Comment2ArticleAddInput): Promise<AddCommentRes | boolean> {
      const res = await myClient.mutate<Mutation>({
        mutation: SEND_COMMENT_TO_ARTICLE,
        variables: {
          toArticle: input
        },
        fetchPolicy: "no-cache"
      })
      if (res.data) {
        return res.data.addComment
      } else {
        return false;
      }

    },
  },
}