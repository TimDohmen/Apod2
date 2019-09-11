import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import moment from 'moment'

Vue.use(Vuex)

let apodApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=d4c9i95vV8Tbn80gZ8yedJ5ZB2Wc9LocxQGVY30B&date='
})

let searchApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/'
})

let urlParams = 'apod?api_key=d4c9i95vV8Tbn80gZ8yedJ5ZB2Wc9LocxQGVY30B&date='

let catApi = axios.create({
  baseURL: 'http://cat-fact.herokuapp.com/facts'
})

export default new Vuex.Store({
  state: {
    picture: {},
    catFact: {}
  },
  mutations: {
    setApod(state, Apod) {
      state.picture = Apod
    },
    setFact(state, data) {
      state.catFact = data
    }
  },
  actions: {
    async getApod({ commit, dispatch }) {
      try {
        let res = await apodApi.get()
        commit('setApod', res.data)
      } catch (error) {

      }
    },
    async apodSearch({ commit, dispatch }, query) {
      try {
        let res = await searchApi.get(urlParams + query)
        commit('setApod', res.data)
      } catch (error) {

      }
    },
    async randomPic({ commit, dispatch }) {

      try {
        let res = await searchApi.get(urlParams + moment(new Date(+(new Date()) - Math.floor(Math.random() * 10000000000)))
          .format('YYYY-MM-DD'))
        commit('setApod', res.data)
      } catch (error) {
      }
    },
    async getFact({ commit, dispatch }) {
      try {
        let res = await catApi.get()
        for (let i = 0; i < res.data.all.length; i++) {

          commit('setFact', res.data.All[i])
        }

      } catch (error) {

      }
    }


  }

})
