import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import OtherView from "@/views/OtherView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/other",
    name: "OtherView",
    component: OtherView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
