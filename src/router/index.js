import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
const city = () => import("../views/el-city.vue");
const login = () => import("../views/el-login.vue");
const forget = () => import("../views/el-forget.vue");
const msite = () => import("../views/el-msite.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/city/:id/:names",
    name: "city",
    component: city
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: "/forget",
    name: "forget",
    component: forget
  },
  {
    path: "/msite/:mName",
    name: "msite",
    component: msite
  }
];

const router = new VueRouter({
  routes
});
export default router;
