import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import Error from '/src/views/Error.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    componet: Home,
  },
  {
    path: '/error',
    name: 'Error',
    component: Error,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
