import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import List from '@/views/list'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld,
    //   meta: {
    //     title: '我是首页！'
    //   }
    // }
    {
      path: '/list',
      name: 'List',
      component: List,
      meta: {
        title: '商品列表'
      }
    },
    {
      path: '*',
      redirect: '/list'
    }
  ]
})
