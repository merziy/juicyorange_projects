import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PageOne from '../views/PageOne.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'PageOne',
    component: PageOne
  },
  {
    path: '/form',
    name: 'PageTwo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PageTwo.vue')
  },
  {
    path: '/thankyou',
    name: 'PageThree',
    component: () => import('../views/PageThree.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
