import { createRouter, createMemoryHistory, createWebHistory } from "vue-router";
import routes from "./routes";
const router = createRouter({
    history: createWebHistory(),
    routes,
    // scrollBehavior(to, from, savedPosition) {
    //     console.log(to, from, savedPosition);
    //     return { top: 100 }
    // }
})
export default router
