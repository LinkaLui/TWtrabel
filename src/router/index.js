import { createRouter,createWebHistory } from "vue-router";

const routes = [
    { path: '/', component: () => import('../views/Home.vue') },
    { path: '/attraction', component: () => import('../views/Attraction.vue') },
    { path: '/food', component: () => import('../views/Food.vue') },
    { path: '/hotel', component: () => import('../views/Hotel.vue') },
    { path: '/travel', component: () => import('../views/Travel.vue') }
];

export default createRouter({
    history: createWebHistory(),
    routes,
})