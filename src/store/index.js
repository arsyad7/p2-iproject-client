import Vue from "vue";
import Vuex from "vuex";
import swal from "sweetalert";
import http from "../apis/http";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: localStorage.access_token,
    products: [],
    details: null,
    imageUrl: "",
    price: "",
    currency: null,
    wishlists: [],
  },
  mutations: {
    SET_ISLOGGEDIN(state, payload) {
      state.isLoggedIn = payload;
    },
    SET_PRODUCTS(state, payload) {
      state.products = payload;
    },
    SET_DETAILS(state, payload) {
      state.details = payload;
    },
    SET_IMAGEURL(state, payload) {
      state.imageUrl = payload;
    },
    SET_PRICE(state, payload) {
      state.price = payload;
    },
    SET_CURRENCY(state, payload) {
      state.currency = payload;
    },
    SET_WISHLISTS(state, payload) {
      state.wishlists = payload;
    },
  },
  actions: {
    register(context, payload) {
      return http.post("/users/register", payload);
    },
    login(context, payload) {
      return http.post("/users/login", payload);
    },
    fetchProducts({ commit }, params) {
      if (!params) {
        params = "";
      }

      http
        .get(`/products${params}`)
        .then((resp) => {
          commit("SET_PRODUCTS", resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getDetails({ commit }, payload) {
      const code = payload.code;
      const price = payload.price;
      const imageUrl = payload.imageUrl;

      http
        .get(`/products/${code}`)
        .then((resp) => {
          resp.data.product.price = price;
          resp.data.product.imageUrl = imageUrl;
          commit("SET_DETAILS", resp.data.product);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addToWishlist(context, payload) {
      http
        .post("/wishlists/add", payload, {
          headers: {
            access_token: localStorage.access_token,
          },
        })
        .then(() => {
          swal("Added!!", "Added to your wishlist", "success");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCurrency({ commit }, currency) {
      http
        .post("/products", { currency })
        .then((resp) => {
          commit("SET_CURRENCY", resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchWishlists({ commit }) {
      http
        .get("/wishlists", {
          headers: {
            access_token: localStorage.access_token,
          },
        })
        .then((resp) => {
          console.log("kepanggil");
          commit("SET_WISHLISTS", resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteWishlist(context, id) {
      return http.delete(`/wishlists/${id}`, {
        headers: {
          access_token: localStorage.access_token,
        },
      });
    },
  },
  modules: {},
});

// results.price.value <<< untuk ambil mentahan price
