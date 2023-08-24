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
    {
      path: '/teams/:id(\\d+)+/',
      name: 'team',
      props: true,
      component:  () => import('../views/Team.vue')
    },
  ]
})

export default router
