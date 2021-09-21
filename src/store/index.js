import Vue from "vue";
import Vuex from "vuex";
import http from "../apis/http";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    products: []
  },
  mutations: {
    SET_ISLOGGEDIN(state, payload) {
      state.isLoggedIn = payload
    },
    SET_PRODUCTS(state, payload) {
      state.products = payload
    }
  },
  actions: {
    register(context, payload) {
      return http.post('/users/register', payload)
    },
    login(context, payload) {
      return http.post('/users/login', payload)
    },
    fetchProducts({ commit }) {
      http.get('/products')
        .then(resp => {
          console.log(resp.data.results);
          commit('SET_PRODUCTS', resp.data)
        })  
        .catch(err => {
          console.log(err);
        })
    }
  },
  modules: {},
});
