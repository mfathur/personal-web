import { createStore } from 'vuex';

import profileData from '../services/profileModel';
import skillsData from '../services/skillModel';

export default createStore({
  state: {
    profile: profileData,
    skills: skillsData,
  },
  mutations: {
  },
  getters: {
    getProfile(state) {
      return state.profile;
    },
    getSkills(state) {
      return state.skills;
    },
  },
  actions: {
  },
  modules: {
  },
});
