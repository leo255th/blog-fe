
import { GET_COMMENTS_TO_USER, SEND_COMMENT_TO_USER } from './gql/comment.gql'
import { myClient } from './gql/graphql.client'
import { AddCommentRes, Comment2UserAddInput, Comment2UserGetInput, CommentList, Mutation, Query } from './gql/types'

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
    }
  }
}