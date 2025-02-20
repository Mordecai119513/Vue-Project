import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/fronted/HomeView.vue'

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
      import(/* webpackChunkName: "about" */ '../views/fronted/AboutView.vue')
  },
  {
    path: '/Login',
    component: () => import('../views/fronted/LoginPage.vue')
  },
  {
    path: '/fronted/ProductsView.vue',
    component: () => import('../views/fronted/ProductsView.vue')
  },
  {
    path: '/404NotFound',
    name: '404',
    component: () => import('../views/fronted/404NotFound.vue'),
    meta: { title: 'ToyHaven | 找不到頁面' }
  },
  // {
  //   path: '/:pathMatch(.*)',
  //   redirect: '/404NotFound'
  // },
  {
    path: '/DashBoard',
    component: () => import('../views/DashBoard.vue'),
    children: [
      {
        path: 'Products',
        component: () => import('../views/ProductsPage.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/OrdersView.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/CouponsView.vue')
      }
    ]
  },
  {
    path: '/user',
    component: () => import('../views/fronted/UserBoard.vue'),
    children: [
      {
        path: 'cart',
        component: () => import('../views/fronted/UserCart.vue')
      },
      {
        path: 'product/:productId',
        component: () => import('../views/fronted/UserProduct.vue')
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/fronted/UserCheckout.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
