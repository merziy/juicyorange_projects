import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import EnterCode from '../views/EnterCode.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'enterCode',
    component: EnterCode
  },
  {
    path: '/FormPage',
    name: 'Form',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FormPage.vue')
  },
  {
    path: '/ThankYou',
    name: 'Thanks',
    component: () => import('../views/ThankYou.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
