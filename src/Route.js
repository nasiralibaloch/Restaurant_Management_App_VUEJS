import { createRouter, createWebHistory } from "vue-router";
import HomeCom from "./components/HomeCom.vue";
import SignUp from "./components/SignUp.vue";
import LoginCom from "./components/LoginCom.vue";

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
  {
    path: "/login",
    name: "login",
    component: LoginCom,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
