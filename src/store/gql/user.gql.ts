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
export const USER_LOGIN=gql`
mutation($byPwd: ByPwdInput){
  login(byPwd:$byPwd){
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