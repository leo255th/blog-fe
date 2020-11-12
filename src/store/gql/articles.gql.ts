import gql from 'graphql-tag';

export const GET_FIELDS=gql`
query{
  fields{
    id
    field
  }
}
`
export const ADD_ARTICLE=gql`
mutation($input:AddArticleInput!){
  addArticle(input:$input){
    res{
      done
      errMsg
    }
    article{
      articleId
      data{
        id
        userId
        title
        description
      }
    }
  }
}
`
export const RE_EDIT_ARTICLE=gql`
mutation($input:EditArticleInput!){
  editArticle(input:$input){
    res{
      done
      errMsg
    }
    article{
      articleId
      data{
        id
        userId
        title
        description
      }
    }
  }
}
`

export const GET_ARTICLES=gql`
query($input:ArticlesFilterInput!){
  articles(input:$input){
    list{
      id
      userId
      title
      description
      field
      tags
    }
    total
  }
}
`
export const GET_ARTICLE=gql`
query($articleId:Int!){
  article(articleId:$articleId){
    articleId
    data{
      id
      userId
      userName
      title
      description
      content
      field
      createdAt
      tags
    }
  }
}
`