import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListPosts from "../views/Posts/List.vue";
import EditPosts from "../views/Posts/Edit.vue";
import CreatePosts from "../views/Posts/Create.vue";
import ViewPosts from "../views/Posts/Detail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/posts/",
      name: "listPosts",
      component: ListPosts,
    },
    {
      path: "/posts/new",
      name: "createPosts",
      component: CreatePosts,
    },
    {
      path: "/posts/:id",
      name: "viewPosts",
      component: ViewPosts,
    },
    {
      path: "/posts/:id/edit",
      name: "editPosts",
      component: EditPosts,
    },
  ],
});

export default router;
