import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Courses from "../views/Courses.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/courses",
    name: "Courses",
    component: Courses,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
