import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import Error from '/src/views/Error.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/error',
    name: 'Error',
    component: Error,
    props: { message: 'Something wrong with weather api.', backToHome: false },
  },
  {
    path: '/404',
    name: 'Error404',
    component: Error,
    props: { message: 'Page not found!', backToHome: true },
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
