import gql from 'graphql-tag';

export const USER_REGISTER=gql`
mutation($byUserName:ByUserNameInput){
  register(byUserName:$byUserName){
    res{
      done,
      errMsg
    }
    user{
      userId
    }
  }
}
`