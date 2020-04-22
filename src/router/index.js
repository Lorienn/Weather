import Vue from 'vue'
import VueRouter from 'vue-router'

import Weather from '@/views/Weather'
import Detail from '@/views/Detail'
import News from '@/views/News'
import Center from '@/views/Center'
import Login from '@/views/Login'
import Register from '@/views/Register'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/weather',
      component: Weather
    },
    {
      path: '/detail/:id',
      component: Detail
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/center',
      component: Center
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '*',
      redirect: '/weather'
    }
  ]
})

export default router
