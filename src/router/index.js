import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/front/HomeView.vue')
      },
      {
        path: 'products',
        component: () => import('../views/front/ProductsView.vue')
      },
      {
        path: 'product/:id',
        component: () => import('../views/front/ProductView.vue')
      },
      {
        path: 'calculate',
        component: () => import('../views/front/CalculateView.vue')
      },
      {
        path: 'favorite',
        component: () => import('../views/front/FavoriteView.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/front/CartView.vue')
      },
      {
        path: 'orderComplete',
        component: () => import('../views/front/OrderCompletedView.vue')
      },
      {
        path: 'orderInformation',
        component: () => import('../views/front/OrderInformationView.vue')
      },
      {
        path: 'payment',
        component: () => import('../views/front/PaymentView.vue')
      }
    ]
  }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: () => import('../views/HomeView.vue')
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
