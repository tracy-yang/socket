import Vue from 'vue'
import Router from 'vue-router'
import userList from '@/views/userList/userList';
import login from '@/views/login/login';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path:'/home',
      name:'home',
      component:userList
    }
  ]
})
