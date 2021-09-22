import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/details/:code",
    name: "Details",
    component: () => import("../views/Details.vue"),
  },
  {
    path: "/wishlists",
    name: "Wishlist",
    component: () => import("../views/Wishlist.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const access_token = localStorage.access_token;
  const destination = to.name;

  switch (destination) {
    case "Login":
      access_token ? next("/") : next();
      break;
    case "Register":
      access_token ? next("/") : next();
      break;
    case "Wishlist":
      access_token ? next() : next("/login");
      break;
    default:
      next();
      break;
  }
});

export default router;
