import { createStore } from 'vuex';

import profileData from '../services/profileModel';
import skillsData from '../services/skillModel';
import contactData from '../services/contactModel';
import projectsData from '../services/projectModel';

export default createStore({
  state: {
    profile: profileData,
    skills: skillsData,
    contacts: contactData,
    projects: projectsData,
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
    getProjects(state) {
      return state.projects;
    },
  },
  actions: {
  },
  modules: {
  },
});
