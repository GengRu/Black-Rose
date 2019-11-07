import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const city = () => import('../views/el-city.vue')
const login = () => import('../views/el-login.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/city/:id',
    name: 'city',
    component: city
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = new VueRouter({
  routes
})

export default router
