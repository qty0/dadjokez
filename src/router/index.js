import Vue from 'vue'
import VueRouter from 'vue-router'
import {Home, Favourites, Search} from '../routed/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/fav',
    name: 'Favourites',
    component: Favourites
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  }
]

const router = new VueRouter({
  routes
})

export default router
