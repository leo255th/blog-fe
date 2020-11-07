import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

// 该文件提供单独的一个apollo客户端

const httpLink = createHttpLink({
  uri: 'http://49.234.219.90:3000/graphql',
})

// 缓存实现
const cache = new InMemoryCache()

// 创建 apollo 客户端
export const myClient = new ApolloClient({
  link: httpLink,
  cache,
})
