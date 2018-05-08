// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vant from 'vant'
import 'vant/lib/vant-css/index.css'
import VueAxios from 'vue-axios'
import Axios from 'axios'
import Croppa from 'vue-croppa'

Vue.use(Croppa)

Vue.use(vant)

Vue.use(VueAxios, Axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
