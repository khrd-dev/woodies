import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        meta: { layout: "home" },
        component: () => import("../pages/v-home.vue"),
    },
    {
        path: "/auth",
        name: "auth",
        meta: { layout: "auth" },
        component: () => import("../pages/v-auth.vue"),
    },
    {
        path: "/reg",
        name: "reg",
        meta: { layout: "reg" },
        component: () => import("../pages/v-reg.vue"),
    },
    {
        path: "/catalog",
        name: "catalog",
        meta: { layout: "catalog" },
        component: () => import("../pages/v-catalog.vue"),
    },
    {
        path: "/cart",
        name: "cart",
        meta: { layout: "cart" },
        component: () => import("../pages/v-cart.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
