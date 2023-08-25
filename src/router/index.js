import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'leagues',
      component:  () => import('@/views/Leagues.vue'),
      meta: { title: 'Лиги' }
    },
    {
      path: '/leagues/:id/',
      name: 'leagueDetail',
      component: () => import('@/views/LeagueDetail.vue'),
      meta: { title: 'Лига' }
    },
    {
      path: '/teams/',
      name: 'teams',
      component:  () => import('@/views/Teams.vue'),
      meta: { title: 'Команды' }
    },
    {
      path: '/teams/:id/',
      name: 'teamDetail',
      component: () => import('@/views/TeamDetail.vue'),
      meta: { title: 'Команда' }
    },
    {
      path: '/matches/:id/',
      name: 'matchDetail',
      component: () => import('@/views/MatchDetail.vue'),
      meta: { title: 'Матч' }
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: () => import('@/views/NotFound.vue'),
      meta: { title: 'Страница не найдена' }
    },
  ]
})

export default router
