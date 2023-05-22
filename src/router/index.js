import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import ImagePage from '@/components/ImagePage.vue'

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/image',
    component: ImagePage,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router
