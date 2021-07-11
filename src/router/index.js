import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Authenticate from "../views/Authenticate.vue";
import { LoginCallback, navigationGuard } from "@okta/okta-vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    meta: {
      requiresAuth: true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/profile/:username",
    name: "Profile",
    meta: {
      requiresAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
  },
  {
    path: "/upload",
    name: "Upload",
    meta: {
      requiresAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "upload" */ "../views/Upload.vue"),
  },
  {
    path: "/explore",
    name: "Explore",
    meta: {
      requiresAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "explore" */ "../views/Explore.vue"),
  },
  {
    path: "/authenticate",
    name: "Authenticate",
    component: Authenticate,
  },
  {
    path: "/login/callback",
    name: "LoginCallback",
    component: LoginCallback,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Due to navigation guards mixin issue in vue-router-next, navigation guard logic need to be added manually
router.beforeEach(navigationGuard);

export default router;
