import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    product: {}
  },
  getters: {
    GET_PRODUCT(state) {
      return state.product
    }
  },
  mutations: {
    GET_ONE_PRODUCT: (state, product) => {
      state.product = product
    }
  },
  actions: {
    VIEW_PRODUCT({ commit }, product) {
      commit("GET_ONE_PRODUCT", product)
    }
  },
  modules: {},
  plugins: [createPersistedState()]
});
