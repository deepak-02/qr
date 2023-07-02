import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue';
import QRGenerator from '../views/QRGenerator.vue'

const routes = [
  {
    path: '/',
    name: 'qrgen',
    component: QRGenerator
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
