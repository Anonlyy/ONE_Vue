import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/layout/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})
