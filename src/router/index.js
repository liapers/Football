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
      path: '/leagues/:id/',
      name: 'leagueDetail',
      component: () => import('@/views/LeagueDetail.vue')
    },
    {
      path: '/teams/',
      name: 'teams',
      component:  () => import('../views/Teams.vue')
    },
    {
      path: '/teams/:id/',
      name: 'teamDetail',
      component: () => import('@/views/LeagueDetail.vue')
    },
    {
      path: '/matches/:id/',
      name: 'matchDetail',
      component: () => import('@/views/LeagueDetail.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: () => import('@/views/NotFound.vue'),
    },
    {
      path: '/teams/',
      name: 'teams',
      component:  () => import('../views/Teams.vue')
    },
  ]
})

export default router
