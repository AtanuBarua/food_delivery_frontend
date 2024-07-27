import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AdminHome from '../views/admin/Home.vue';
import OwnerRegister from '../views/owner/Register.vue'
import OwnerHome from '../views/owner/Home.vue';
import OwnerLogin from '../views/owner/Login.vue'

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
    },
    {
      path: '/owner/login',
      name: 'ownerLogin',
      component: OwnerLogin
    },
    {
      path: '/owner',
      name: 'ownerHome',
      component: OwnerHome
    },
  ]
})

export default router
