import { createRouter, createWebHistory } from 'vue-router'
import CheatSheetVue from './views/CheatSheet.vue'
import HelloWorldVue from './views/HelloWorld.vue'
// import LoginPage from "./views/LoginPage.vue"
// import Home from './views/Home.vue'
import palyGroundVue from './views/palyGround.vue'
import ExpenditureDashboard from "./views/ExpenditureDashboard.vue"

let history = createWebHistory()
let routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorldVue
  },
  // {
  //   path: '/login/',
  //   name: "login-page",
  //   component: LoginPage
  // },
  {
    path: '/play-ground/',
    name: "Play Ground",
    component: palyGroundVue
  },
  {
    path: '/cheat-sheet/',
    name: "Cheat Sheet",
    component: CheatSheetVue
  },
  {
    path: '/expenditure-dashboard/',
    name: "Expenditure Dashboard",
    component: ExpenditureDashboard
  },
]

export default createRouter({ history, routes })