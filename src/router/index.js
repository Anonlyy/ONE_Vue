import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/layout/index'
import List from '@/layout/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/list/:type',
      name: 'list',
      component: List
    }
  ]
})
