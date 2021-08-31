import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import VuexPersistence from "vuex-persist";
// import axios from 'axios';
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,//存储的位置
})
export default new Vuex.Store({
  state: {
   token:"",
   num: 0,
  //  weather:{} 异步
  },
  mutations: {
    // saveWeather(state,arg){ 异步
    //   state.weather=arg
    // },
    tokenSms(state,token){
      state.token = token
    },
    tab(state,num){
      state.num = num
    },
    tabBar(state){
      state.num = 1
    }
  },
  getters: {
    
  },
  actions: {
    // async findWeather(ctx,arg){ 异步
    //   let res = await axios.get(`${arg}`)
    //   ctx.commit("saveWeather",res.data)
    // }
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
