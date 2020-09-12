import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('../views/main'),
        children: [
            {
                path: '',
                meta: { keepAlive: true },
                component: () => import('../views/home')
            },
            {
                path: '/detail/:id',
                component: () => import('../views/detail')
            },
            {
                path: '/banner/:id',
                component: () => import('../views/banner')
            },
        ]
    },
    {
        path: '/login',
        // name: 'login',
        component: () => import('../views/login')
    },
]

const router = new VueRouter({
    mode: 'history',
    //base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if(to.meta.auth) {
        const token = localStorage.getItem('token');
        if(token) {
            next();
        } else {
            next({
                path: '/login',
                query: {
                    redirect: to.path // 登陆成功之后跳转至该路由
                }
            });
        }
    } else {
        next();
    }
});

export default router;