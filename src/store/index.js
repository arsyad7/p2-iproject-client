import Vue from "vue";
import Vuex from "vuex";
import http from "../apis/http";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: localStorage.access_token,
    products: [],
    details: null,
    imageUrl: '',
    price: '',
    currency: ''
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
    },
    SET_CURRENCY(state, payload) {
      state.currency = payload
    }
  },
  actions: {
    register(context, payload) {
      return http.post('/users/register', payload)
    },
    login(context, payload) {
      return http.post('/users/login', payload)
    },
    fetchProducts({ commit }, params) {
      if (!params) {
        params = ""
      }
      console.log(params);
      http.get(`/products${params}`)
        .then(resp => {
          console.log(resp.data);
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
          resp.data.product.price = price;
          resp.data.product.imageUrl = imageUrl;
          commit('SET_DETAILS', resp.data.product)
        })
        .catch(err => {
          console.log(err);
        })
    },
    addToWishlist(context, payload) {
      http.post('/wishlists/add', payload, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(resp => {
          console.log(resp.data);
        })
        .catch(err => {
          console.log(err);
        })
    },
    getCurrency({ commit }, currency) {
      http.post('/products', currency)
        .then(resp => {
          console.log(resp.data);
          commit('SET_CURRENCY', resp.data)
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  modules: {},
});


// results.price.value <<< untuk ambil mentahan price