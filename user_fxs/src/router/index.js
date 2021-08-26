import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    component: () => import('@/views/index'),
    children:[
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