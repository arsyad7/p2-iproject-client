import Vue from "vue";
import Vuex from "vuex";
import http from "../apis/http";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    register(context, payload) {
      return http.post('/users/register', payload)
    }
  },
  modules: {},
});
