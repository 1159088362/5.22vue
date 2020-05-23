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
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/login')
    }
]
const router = new VueRouter({
    linkActiveClass:"active",
    routes,
    mode: 'history'
})
router.beforeEach((to, from, next) => {
  const { fullPath } = to
  if (!sessionStorage.getItem("token") && fullPath !=="/login") {
    next('/login')
  } else {
    next ()
  }
})
export default router