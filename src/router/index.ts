import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/views/MainView/index.vue'),
    },
    {
      path: '/insight',
      name: 'insight',
      component: () => import('@/views/InsightView/index.vue'),
    },
    {
      path: '/news/:id',
      name: 'detail',
      component: () => import('@/views/DetailView/index.vue'),
    },
    {
      path: '/saved',
      name: 'saved',
      component: () => import('@/views/SavedView/index.vue'),
    },
  ],
})

export default router
