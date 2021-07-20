import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout'
const routes = [
    {
        path: '/login',
        name: 'login',
        meta:{
            title: '登录',
        },
        component: () => require('@/views/auth/login'),
    },
    {
        path: '/',
        component: Layout,
        redirect: 'index',
        children: [
            {
                path: 'index',
                name: 'Index',
                component: () => require('@/views/home'),
                meta: {
                    title: '首页',
                    icon: 'home',
                    affix: true,
                },
            },
        ],
    },
]
const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes
})
export default router
