import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
// import MyApp from '@/components/MyApp'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello
  }]
})
