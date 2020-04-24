import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityExist: false,
    cityName: '',
    cityData: [],
    isTabbarShow: true,
    topNews: [],
    isLogin: false,
    username: ''
  },
  mutations: {
    cityExistMutation (state, data) {
      state.cityExist = data
    },
    cityNameMutation (state, data) {
      state.cityName = data
    },
    cityDataMutation (state, data) {
      if (data.future) {
        data.future.pop()
      }
      state.cityData = data
    },
    showTabbar (state, data) {
      state.isTabbarShow = data
    },
    topNewsMutation (state, data) {
      state.topNews = data
    },
    loginMutation (state, data) {
      state.isLogin = data.isLogin
      state.username = data.username
    }
  },
  actions: {
    async queryCity (store) {
      const res = await axios.get(`/simpleWeather/query?city=${store.state.cityName}&key=738f37aa8cb7b0cc8df46d795695a716`)
      store.commit('cityExistMutation', !res.data.error_code)
    },
    async getCityData (store) {
      const res = await axios.get(`/simpleWeather/query?city=${store.state.cityName}&key=738f37aa8cb7b0cc8df46d795695a716`)
      store.commit('cityDataMutation', res.data.result)
    },
    async getTopNews (store) {
      const res = await axios.get('/toutiao/index?type=top&key=7c502deb63c7135c7270f2b43ecb93da')
      store.commit('topNewsMutation', res.data.result.data)
    }
  }
})
