import { createRouter, createWebHistory } from 'vue-router'
import HelloWorldVue from '../components/HelloWorld.vue'
import LoginPage from "../components/LoginPage.vue"
import Home from '../components/Home.vue'
import palyGroundVue from '../components/palyGround.vue'

let history = createWebHistory()
let routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorldVue
  },{
    path: '/login/',
    name: "login-page",
    component: LoginPage
  },{
    path: '/play-ground/',
    name: "playGround",
    component: palyGroundVue
  }
]

export default createRouter({ history, routes })