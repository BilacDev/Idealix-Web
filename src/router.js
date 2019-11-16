import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home'),
      meta: { requiresAuth: false },
      redirect: 'profile',
      children: [
        {
          path: '/dashboard/',
          redirect: 'profile'
        },
        {
          name: 'dashboard',
          path: '/dashboard/:id',
          component: () => import(/* webpackChunkName: "dashboard" */ '@/views/sub/Dashboard')
        },
        {
          name: 'profile',
          path: '/profile',
          component: () => import(/* webpackChunkName: "profile" */ '@/views/sub/Profile')
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

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth) {
    if (Store.getters.isLoggedIn) {
      next()
    } else next('login')
  }
  else if (from.query.token) next(false)
  else next()
})

export default router
