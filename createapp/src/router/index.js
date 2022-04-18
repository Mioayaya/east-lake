import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/loginview',
      name: 'loginview',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
    },
    {
      path: '/registerview',
      name: 'registerview',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/personview',
      name: 'personview',
      component: () => import('../views/PersonView.vue')
    },
    {
      path: '/forumview',
      name: 'forumview',
      component: () => import('../views/ForumView.vue')
    },
    {
      path: '/teacherview',
      name: 'teacherview',
      component: () => import('../views/TeacherView.vue')
    },
    {
      path: '/consultview',
      name: 'consultview',
      component: () => import('../views/ConsultView.vue')
    },
    {
      path: '/forumblankview',
      name: 'forumblankview',
      component: () => import('../views/ForumBlankView.vue')
    },
    {
      path: '/applyview',
      name: 'applyview',
      component: () => import('../views/ApplyView.vue')
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
