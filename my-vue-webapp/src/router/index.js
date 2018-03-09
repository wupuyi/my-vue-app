import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Index from '@/components/home'
import Search from '@/components/Search'
import Vip from '@/components/Vip'
import Car from '@/components/Car'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          redirect: 'index'
        },
        {
          path: 'index',
          name: 'Index',
          component: Index
        },
        {
          path: 'search',
          name: 'Search',
          component: Search
        },
        {
          path: 'vip',
          name: 'Vip',
          component: Vip
        }
      ]
    },
    {
      path: '/car',
      name: 'Car',
      component: Car
    }
  ]
})
