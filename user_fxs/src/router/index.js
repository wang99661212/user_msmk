import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    component: () => import('@/views/index'),
    redirect: "/home",
    children: [
      {
        path: '/home',
        component: () => import('@/views/home')
      },
      {
        path: '/course',
        component: () => import('@/views/course')
      },
      {
        path: '/consult',
        component: () => import('@/views/consult')
      },
      {
        path: '/books',
        component: () => import('@/views/books')
      },
      {
        path: '/my',
        component: () => import('@/views/my')
      },
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '/sign',
    component: () => import('@/views/sign')
  },
  {
    path: '/xiang',
    component: () => import('@/views/xiang')
  },
  {
    path: '/Basis',
    component: () => import('@/views/Basis')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;