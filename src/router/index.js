import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'leagues',
      component:  () => import('../views/Leagues.vue')
    },
    {
      path: '/teams/',
      name: 'teams',
      component:  () => import('../views/Teams.vue')
    },
  ]
})

export default router
