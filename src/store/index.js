import { createStore } from 'vuex';

import profileData from '@/services/profileModel';

export default createStore({
  state: {
    profile: profileData,
  },
  mutations: {
  },
  getters: {
    getProfile(state) {
      return state.profile;
    },
  },
  actions: {
  },
  modules: {
  },
});
