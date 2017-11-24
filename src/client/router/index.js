import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import User from '@/views/User'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },{
      path: '*',
      component: Home
    }
  ]
})
