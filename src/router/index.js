import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage.vue'
import CloneGitHub from '../components/CloneGitHub.vue'
import CatchAll from '../components/CatchAll.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/clone/:id',
    name: 'CloneGitHub',
    component: CloneGitHub
  },
  {
    path: '/*',
    name: 'CatchAll',
    component: CatchAll
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
