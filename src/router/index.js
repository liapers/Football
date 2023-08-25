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
      path: '/leagues/:id(\\d+)+/',
      name: 'league',
      component: () => import('@/views/Leagues.vue'),
      meta: { title: 'Лига' }
    },
    {
      path: '/teams/',
      name: 'teams',
      component:  () => import('@/views/Teams.vue'),
      meta: { title: 'Команды' }
    },
    {
      path: '/match/:id(\\d+)+/',
      name: 'match',
      props: true,
      component: () => import('@/views/Match.vue'),
      meta: { title: 'Матч' }
    },
    {
      path: '/team/:id(\\d+)+/',
      name: 'team',
      props: true,
      component: () => import('@/views/Teams.vue')
    }
  ]
})

export default router
