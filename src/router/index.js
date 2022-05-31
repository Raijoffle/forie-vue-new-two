import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/Error/NotFound.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },

    {
        path: "/contact",
        name: "Contact",
        component: () => import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
    },
    {
        path: "/products",
        name: "Products",
        component: () => import(/* webpackChunkName: "products" */ "../views/Products.vue"),
    },
    {
        path: `/productdetail/:id`,
        name: "Product Detail",
        component: () => import(/* webpackChunkName: "productdetail" */ "../views/ProductDetail.vue"),
    },
    {
        path: `/nologgedin`,
        name: "You are not authorized to access",
        component: () => import(/* webpackChunkName: "notAuth" */ "../views/Error/NotAuth.vue"),
    },
    {
        path: `/servererror`,
        name: "500 Server Error",
        component: () => import(/* webpackChunkName: "serverError" */ "../views/Error/ServerError.vue"),
    },
    { path: "/:pathMatch(.*)*", name: "This Page Doesn't Exist", component: NotFound },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
