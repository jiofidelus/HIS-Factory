import Vue from 'vue'
import Vuex from 'vuex'
import ProjectModule from './modules/project.module'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    project: ProjectModule
  }
})
