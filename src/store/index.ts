import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import articles from './articles'
import comment from './comment'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    articles,
    comment
  }
})
