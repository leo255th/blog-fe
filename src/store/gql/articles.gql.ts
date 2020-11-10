import gql from 'graphql-tag';

export const GET_FIELDS=gql`
query{
  fields{
    id
    field
  }
}
`