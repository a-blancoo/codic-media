import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    courses: [],
    link:
      "//aka.ms/ampembed?url=https://endpoint-codicmediasvc-euwe.streaming.media.azure.net/f9616233-1f5b-48be-b6ec-6b2c83ff8369/L101intro.ism/manifest",
  },
  mutations: {
    async fetchData(state) {
      const url = "https://codic-server.azurewebsites.net/get-data"
      const res = await fetch(url, { method: "GET" })
      const data = await res.json()

      state.courses = data.courses
    },
    saveLink(state, vid) {
      let courseFound = state.courses.find((crs) => crs.courseName == vid)
      state.link = courseFound.courseLink
    },
  },
  actions: {
    getCourses(ctx) {
      ctx.commit("fetchData")
    },
    getVid(ctx, vid) {
      ctx.commit("saveLink", vid)
    },
  },
  modules: {},
})
