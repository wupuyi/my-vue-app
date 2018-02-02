import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ShoppingCart from '@/components/shopping-cart/shopping-cart'
import InputNumber from '@/components/input-number/input-number'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Hello'
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/shopping-cart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/input-number',
      name: 'InputNumber',
      component: InputNumber
    },
    {
      path: '*',
      redirect: '/Hello'
    }
  ]
})
