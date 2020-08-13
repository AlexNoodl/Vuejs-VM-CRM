import Vue from "vue";
import Vuex from "vuex";
import auth from  "./auth";
import info from '@/store/info';
import category from '@/store/category';
import record from '@/store/record';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  getters: {
    error: state => state.error
  },
  actions: {
    async fetchCurrency() {
      const res = await fetch(`https://api.exchangeratesapi.io/latest?base=USD`)
      return await res.json()
    }
  },
  modules: {
    auth, info, category, record
  }
});
