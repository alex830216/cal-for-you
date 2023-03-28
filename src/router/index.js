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
        path: 'cart',
        component: () => import('../views/front/CartView.vue')
      },
      {
        path: 'orderInformation',
        component: () => import('../views/front/OrderInformationView.vue')
      },
      {
        path: 'payment',
        name: 'payment',
        component: () => import('../views/front/PaymentView.vue')
      },
      {
        path: 'orderCompleted',
        name: 'orderCompleted',
        component: () => import('../views/front/OrderCompletedView.vue')
      },
      {
        path: 'login',
        component: () => import('../views/front/LoginView.vue')
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('../views/front/NotFound.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'orders',
        component: () => import('../views/admin/AdminOrders.vue')
      },
      {
        path: 'products',
        component: () => import('../views/admin/AdminProducts.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
  scrollBehavior (to) {
    if (to.fullPath.match('/')) {
      return {
        top: 0
      }
    }
    return {}
  }
})

export default router
