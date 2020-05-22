import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home'
Vue.use(VueRouter)
const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/reg',
        name: 'reg',
        component: () =>
            import ('../views/reg')
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/login')
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router