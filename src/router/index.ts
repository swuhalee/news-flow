import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView,
    },
    {
      path: '/insight',
      name: 'insight',
      component: () => import('@/views/InsightView.vue'),
    },
    {
      path: '/news/:id',
      name: 'detail',
      component: () => import('@/views/DetailView.vue'),
    },
    {
      path: '/saved',
      name: 'saved',
      component: () => import('@/views/SavedView.vue'),
    },
  ],
})

export default router
