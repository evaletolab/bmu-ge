import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Landing from '../views/Landing.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '*',
    name: 'Landing',
    component: Landing
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition: any) {
    //console.log("--DBG: route position",savedPosition);
    return savedPosition || {
      x:0,
      y:undefined
    };
  },

});

export default router
