import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/LoginPage',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/DashBoard',
    component: () => import('../views/DashBoard')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
