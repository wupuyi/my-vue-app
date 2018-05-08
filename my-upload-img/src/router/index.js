import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Upload from '@/components/Upload'
import UploadTest from '@/components/UploadTest'
import UploadIdcard from '@/components/UploadIdcard'
import Avatar from '@/components/Avatar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    },
    {
      path: '/uploadtest',
      name: 'UploadTest',
      component: UploadTest
    },
    {
      path: '/uploadidcard',
      name: 'UploadIdcard',
      component: UploadIdcard
    },
    {
      path: '/avatar',
      name: 'Avatar',
      component: Avatar
    }
  ]
})
