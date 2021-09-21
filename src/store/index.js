import Vue from "vue";
import Vuex from "vuex";
import http from "../apis/http";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    products: [],
    details: null,
    imageUrl: '',
    price: ''
  },
  mutations: {
    SET_ISLOGGEDIN(state, payload) {
      state.isLoggedIn = payload
    },
    SET_PRODUCTS(state, payload) {
      state.products = payload
    },
    SET_DETAILS(state, payload) {
      state.details = payload
    },
    SET_IMAGEURL(state, payload) {
      state.imageUrl = payload
    },
    SET_PRICE(state, payload) {
      state.price = payload
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
          commit('SET_PRODUCTS', resp.data)
        })  
        .catch(err => {
          console.log(err);
        })
    },
    getDetails({ commit }, payload) {
      const code = payload.code;
      const price = payload.price;
      const imageUrl = payload.imageUrl;
      http.get(`/products/${code}`)
        .then(resp => {
          console.log(resp.data);
          resp.data.product.price = price;
          resp.data.product.imageUrl = imageUrl;
          commit('SET_DETAILS', resp.data.product)
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  modules: {},
});
