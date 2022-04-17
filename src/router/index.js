import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        meta: { layout: "vHome" },
        component: () => import("../pages/v-home.vue"),
    },
    {
        path: "/auth",
        name: "auth",
        meta: { layout: "vAuth" },
        component: () => import("../pages/v-auth.vue"),
    },
    {
        path: "/reg",
        name: "reg",
        meta: { layout: "vReg" },
        component: () => import("../pages/v-reg.vue"),
    },
    {
        path: "/catalog",
        name: "catalog",
        meta: { layout: "vCatalog" },
        component: () => import("../pages/v-catalog.vue"),
    },
    {
        path: "/cart",
        name: "cart",
        meta: { layout: "vCart" },
        component: () => import("../pages/v-cart.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
