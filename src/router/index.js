import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AdminHome from '../views/admin/Home.vue';
import OwnerRegister from '../views/owner/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin',
      name: 'adminHome',
      component: AdminHome
    },
    {
      path: '/owner/register',
      name: 'ownerRegister',
      component: OwnerRegister
    }
  ]
})

export default router
