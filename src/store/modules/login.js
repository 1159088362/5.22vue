//login的vuex
import api from '../../services/api'
import axios from '../../utils/http'
import { 
  FETCH_LOGIN, 
  FETCH_LOGIN_DATA, 
  FETCH_USERNAME, 
} from '../../constansts/actionTypes'

export default{
  namespaced: true,
  state: {
    Status:0,
    username:""
  },
  mutations: {
    //修改Status
    [FETCH_LOGIN_DATA] ( state, action) {
      state.Status=action
    },
    //修改用户名
    [FETCH_USERNAME] ( state, action) {
      state.username=action
    }
  },
  actions: {
    //登录
    async [FETCH_LOGIN] ({commit},data) {
      const res = await axios.post(api.login,data)
      //存返回的status值
     commit ('FETCH_LOGIN_DATA', res.code)
     //存储用户名
     commit ('FETCH_USERNAME', data.username)
    }
  },
  modules: {
  }
}
