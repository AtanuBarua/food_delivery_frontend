import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdminHome from "../views/admin/Home.vue";
import OwnerRegister from "../views/owner/Register.vue";
import OwnerHome from "../views/owner/Home.vue";
import OwnerLogin from "../views/owner/Login.vue";
import { useOwnerStore } from "@/stores/owner";
import RestaurantList from "@/views/owner/RestaurantList.vue";
import RestaurantAdd from "@/views/owner/RestaurantAdd.vue";

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
      path: "/owner/register",
      name: "ownerRegister",
      component: OwnerRegister,
      meta: {
        middleware: "ownerGuest",
      },
    },
    {
      path: "/owner/login",
      name: "ownerLogin",
      component: OwnerLogin,
      meta: {
        middleware: "ownerGuest",
      },
    },
    {
      path: "/owner",
      name: "ownerHome",
      component: OwnerHome,
      meta: {
        middleware: "ownerAuth",
      },
    },
    {
      path: "/owner/restaurants",
      name: "ownerRestaurantList",
      component: RestaurantList,
      meta: {
        middleware: "ownerAuth",
      },
    },
    {
      path: "/owner/restaurant/add",
      name: "ownerRestaurantAdd",
      component: RestaurantAdd,
      meta: {
        middleware: "ownerAuth",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const store = new useOwnerStore();
  const isAuthenticated = store.isAuthenticated;
  if (to.meta.middleware == "ownerAuth" && !isAuthenticated) {
    next({ name: "ownerLogin" });
  } else if (to.meta.middleware == "ownerGuest" && isAuthenticated) {
    next({ name: "ownerHome" });
  } else {
    next();
  }
});

export default router;
