import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
//import Home from '../views/Home.vue'
import HomePage from '../pages/HomePage.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'HomePage',
    redirect: {name: 'Login'},
    component: HomePage,
    children:[
      {
        path: 'auth/login',
        name: 'Login',
        component: () => import('../pages/partials/Login.vue')
      },
      {
        path: 'auth/register',
        name: 'Register',
        component: () => import('../pages/partials/Register.vue')
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../pages/Dashboard.vue'),
    redirect: {name: 'ProjectList'},
    children:[
      {
        path: 'project-list',
        name: 'ProjectList',
        component: () => import('../pages/partials/ProjectList.vue')
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('../pages/partials/Profile.vue')
      }
    ]
  },
  {
    path: '/dashboard/workspace',
    name: 'Workspace',
    component: () => import('../pages/Workspace.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
