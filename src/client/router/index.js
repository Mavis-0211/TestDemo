import Vue from 'vue'
import Router from 'vue-router'

import User from '@/views/User'
import UserInfo from '@/views/UserInfo'
import PhoneChange from '@/views/PhoneChange'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/user',
      name: 'User',
      component: User
    }, {
      path: '*',
      component: User
    }, {
      path: '/info',
      component: UserInfo
    }, {
      path: '/phone_change',
      component: PhoneChange
    }
  ]
})
