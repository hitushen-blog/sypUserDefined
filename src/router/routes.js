const routes = [
    {
        path: '/',
        name: '首页',
        component: () => import('../view/Home.vue'),
        meta: {
            login: false,
            breadcrumb: true
        },
    },
    {
        path: '/err',
        name: '404',
        component: () => import('../view/err/NotFound.vue')
    }
]
export default routes