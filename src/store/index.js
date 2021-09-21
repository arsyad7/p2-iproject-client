import Vue from "vue";
import Vuex from "vuex";
import http from "../apis/http";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
  },
  mutations: {
    SET_ISLOGGEDIN(state, payload) {
      state.isLoggedIn = payload
    }
  },
  actions: {
    register(context, payload) {
      return http.post('/users/register', payload)
    },
    login(context, payload) {
      return http.post('/users/login', payload)
    }
  },
  modules: {},
});
