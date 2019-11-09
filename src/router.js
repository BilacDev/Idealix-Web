import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home'),
      redirect: 'dashboard',
      children: [
        {
          name: 'dashboard',
          path: '/dashboard/:id',
          component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard')
        },
        {
          name: 'phofile',
          path: '/profile',
          component: () => import(/* webpackChunkName: "profile" */ '@/views/Profile')
        }
      ]
    },
    {
      name: 'login',
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
