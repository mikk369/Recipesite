import { createStore } from 'vuex';

export default createStore({
  state: {
    token: null,
    message: '',
  },
  getters: {
    // check if user logged in or not
    isLoggedIn: (state) => {
      // check if token is not null
      return state.token !== null;
    },
  },
  mutations: {
    // check if user still authenticated
    authorized(state) {
      if (sessionStorage.getItem('super_trooper')) {
        state.token = sessionStorage.getItem('super_trooper');
      } else {
        return (state.token = null);
      }
    },
    setMessage(state, message) {
      state.message = message;
    },
    logout(state) {
      sessionStorage.removeItem('super_trooper');
      sessionStorage.removeItem('user');
      state.token = null;
    },
  },
  actions: {
    getMessage({ commit }, { message }) {
      commit('setMessage', message);
    },
  },
});
