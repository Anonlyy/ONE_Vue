import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/layout/index'
import List from '@/layout/list'
import Details from '@/layout/details'
import readingDetails from '@/components/readingDetails'
import musicDetails from '@/components/musicDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/details'
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
    },
    {
      path: '/details',
      name: 'details',
      component: Details,
      children: [
        // 当 /user/:id 匹配成功，
        // UserHome 会被渲染在 User 的 <router-view> 中
        { path: 'reading/:id',name:'reading', component: readingDetails },
        { path: 'music/:id',name:'music', component: musicDetails },

        // ...其他子路由
      ]
    }
  ]
})
