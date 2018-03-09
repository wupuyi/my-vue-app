export const LOGIN_SUC = 'LOGIN_SUC'
export const SHOW_LOGIN = 'SHOW_LOGIN'
export default {
  state: {
    mobile: '',
    password: '',
    isShowLogin: false
  },
  actions: {
    addMyInfo ({ commit }, loginInfo) {
      commit('LOGIN_SUC', loginInfo)
    },
    showLogin ({ commit }, flag) {
      commit(SHOW_LOGIN, flag)
    }
  },
  mutations: {
    // 记录登陆的手机号？
    [LOGIN_SUC] (state, loginInfo) {
      state.mobile = loginInfo.mobile
    },
    // 是否显示登陆
    [SHOW_LOGIN] (state, flag) {
      state.isShowLogin = flag
    }
  }
}
