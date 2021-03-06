import Vue from 'vue'
import Router from 'vue-router'
import setWechatTitle from '../assets/js/SetWechatTitle'

import User from '@/client/components/User'
import UserInfo from '@/client/components/UserInfo'
import PhoneChange from '@/client/components/PhoneChange'
import VisitorsList from '@/client/components/VisitorsList'

Vue.use(Router)


const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/user',
      name: 'User',
      component: User,
      name: '个人中心'
    }, {
      path: '/',
      redirect: '/user'
    }, {
      path: '/info',
      component: UserInfo,
      name: '个人信息'
    }, {
      path: '/phone_change',
      component: PhoneChange,
      name: '修改手机号'
    }, {
      path: '/visitors',
      component: VisitorsList,
      name: '就诊人管理'
    }
  ]
})

router.beforeEach((to, from, next) => {
  let title = to.name ? to.name : '腾讯医疗';
  setWechatTitle(title);
  next();
});

export default router
