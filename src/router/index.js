import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import elm from '@/components/elm'
import dl from '@/components/dl'
import xq from '@/components/xq'
import wd from '@/components/wd'
import wm from '@/components/wm'
import ss from '@/components/ss'
import dd from '@/components/dd'
import wdd from '@/components/wdd'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/elm'
  },
  {
    path: '/elm',
    name: 'elm',
    component: elm
  },
  {
    path: '/elm?id',
    name: 'elm',
    component: elm
  },
  {
    path: '/dl',
    name: 'dl',
    component: dl
  },
  {
    path: '/xq',
    name: 'xq',
    component: xq
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  //我的
  {
    path: '/wd',
    name: 'wd',
    component: wd,

    children: [
      {
        path: '/wm',
        name: 'wm',
        component: wm
      },
      {
        path: '/ss',
        name: 'ss',
        component: ss
      },
      {
        path: '/dd',
        name: 'dd',
        component: dd
      },
      {
        path: '/wdd',
        name: 'wdd',
        component: wdd,
      }
    ]


  }
]

const router = new VueRouter({
  routes
})

export default router
