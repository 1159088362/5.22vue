import Vue from 'vue'
import Vuex from 'vuex'
import { login } from './modules'
import api from '../services/api'
import axios from '../utils/http'
import { 
  FETCH_LIST_DATA,
  FETCH_DATA,
  FETCH_DEIETE,
  FETCH_SHOW,
  FETCH_ADD,
  FETCH_EDIT,
  FETCH_UPDATE,
 }
  from '../constansts/actionTypes'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:[],
    dialogFormVisible:false,
    title:'',
    context:"立即添加",
    opt:null
  },
  mutations: {
    [FETCH_DATA] ( state, action) {
      state.data=action
    },
    [FETCH_SHOW] (state , a) {
      state.dialogFormVisible = !state.dialogFormVisible
      if( a === 0) {
        state.title = "添加供应商"
        state.context = "立即添加"
      } else {
        state.title = "编辑供应商"
        state.context = "立即修改"
      }
    },
    [FETCH_EDIT] ( state, opt) {
      state.opt=opt
    }
  },
  actions: {
     //获取接口数据
     async [FETCH_LIST_DATA] ({commit}) {
      const res = await axios.get(api.list)
      //存返回的数据
      commit ('FETCH_DATA', res.data)
    },
    //删除数据
    async [FETCH_DEIETE] (context, payload) {
      const res = await axios.post(api.delete,payload)
      if ( res.code === 200 ){
        context.dispatch("FETCH_LIST_DATA");
      }
    },
    //添加接口
    async [FETCH_ADD] (context, payload) {
      const res = await axios.post(api.add,payload)
      if ( res.code === 200 ){
        context.dispatch("FETCH_LIST_DATA");
      }
    },
    //编辑接口
    async [FETCH_UPDATE] (context, payload) {
      const res = await axios.post(api.update,payload)
      if ( res.code === 200 ){
        context.dispatch("FETCH_LIST_DATA");
      }
    },
  },
  modules: {
    login,
  }
})
