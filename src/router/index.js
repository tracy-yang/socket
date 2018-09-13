import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import userList from '@/views/userList/userList';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'userList',
      component: userList
    }
  ]
})
