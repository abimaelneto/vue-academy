import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PersonView from "../views/PersonView.vue";
import CurrencyView from "../views/CurrencyView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/people/:id",
      name: "personView",
      component: PersonView,
    },
    {
      path: "/currency",
      name: "currency",
      component: CurrencyView,
    },
  ],
});

export default router;
