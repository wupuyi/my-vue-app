/*
 * @Author: Puyi Wu
 * @Date: 2018-03-08 15:07:05
 * @Last Modified by: Puyi Wu
 * @Last Modified time: 2018-03-08 15:09:41
 */

import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import todo from './modules/todo/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    todo
  }
})
