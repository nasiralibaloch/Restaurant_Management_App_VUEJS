import { createRouter, createWebHistory } from "vue-router";
import HomeCom from "./components/HomeCom.vue";
import SignUp from "./components/SignUp.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeCom,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
