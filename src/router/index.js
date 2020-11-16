import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import(/* webpackChunkName: "home" */ '@/views/home/Home'),
      meta: { requiresAuth: false },
      redirect: 'dashboard',
      children: [
        {
          name: 'dashboard',
          path: '/dashboard/:id',
          component: () => import(/* webpackChunkName: "dashboard" */ '@/views/home/partials/Dashboard')
        }
      ]
    },
    {
      name: 'external',
      path: '/external',
      component: () => import(/* webpackChunkName: "external" */ '@/views/external/External'),
      meta: { requiresAuth: false },
      redirect: 'login',
      children: [
        {
          name: 'login',
          path: '/login',
          component: () => import(/* webpackChunkName: "login" */ '@/views/external/partials/Login')
        },
        {
          name: 'register',
          path: '/register',
          component: () => import(/* webpackChunkName: "register" */ '@/views/external/partials/Register')
        },
        {
          name: 'terms',
          path: '/terms',
          component: () => import(/* webpackChunkName: "terms" */ '@/views/external/partials/Terms')
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    Store.getters.isLoggedIn ? next() : next('login')
  } else if (from.query.token) {
    next(false)
  } else {
    next()
  }
})

export default router
