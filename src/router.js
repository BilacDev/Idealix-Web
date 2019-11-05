import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'dashboard',
      component: () => import(/* webpackChunkName: "container" */ '@/views/Container.vue'),
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard'),
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
