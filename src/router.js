import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home'),
      redirect: 'profile',
      children: [
        {
          path: '/dashboard/',
          redirect: 'profile'
        },
        {
          name: 'dashboard',
          path: '/dashboard/:id',
          component: () => import(/* webpackChunkName: "dashboard" */ '@/views/partials/Dashboard')
        },
        {
          name: 'profile',
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
