import { createStore } from 'vuex';

import profileData from '../services/profileModel';
import skillsData from '../services/skillModel';
import contactData from '../services/contactModel';

export default createStore({
  state: {
    profile: profileData,
    skills: skillsData,
    contacts: contactData,
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
    getContacts(state) {
      return state.contacts;
    },
  },
  actions: {
  },
  modules: {
  },
});
