import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import SetupPage from '@/components/SetupPage.vue';


const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/setup',
    name: 'SetupPage',
    component: SetupPage
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router
