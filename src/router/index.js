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
    path: '/Login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/404NotFound',
    name: '404',
    component: () => import('../views/404NotFound.vue'),
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
    component: () => import('../views/UserBoard.vue'),
    children: [
      {
        path: 'cart',
        component: () => import('../views/UserCart.vue')
      },
      {
        path: 'product/:productId',
        component: () => import('../views/UserProduct.vue')
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/UserCheckout.vue')
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
