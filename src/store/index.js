import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allList:[]
  },
  mutations: {
    setList(state,payload){
      state.allList=payload
    }
  },
  actions: {
    getList(context){
      axios.get('/list').then(res=>{
        context.commit('setList',res.data)
      })
    }
  }
})
