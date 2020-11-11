import gql from 'graphql-tag';

export const GET_COMMENTS_TO_USER = gql`
query($toUser:Comment2UserGetInput){
  comments(toUser:$toUser){
    list{
      id
      userId
      userName
      content
      createdAt   
    }
    total
  }
}
`

export const SEND_COMMENT_TO_USER=gql`
mutation($toUser:Comment2UserAddInput){
  addComment(toUser:$toUser){
    res{
      done
      errMsg
    }
    comment{
      commentId
    }
  }
}
`