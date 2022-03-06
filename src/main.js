import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faMapMarker, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faLinkedinIn,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import Notifications from '@kyvg/vue3-notification';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';

library.add(faArrowRight, faEnvelope, faMapMarker, faFacebookSquare, faLinkedinIn, faInstagram, faGithub);

createApp(App)
  .use(Notifications)
  .use(store)
  .use(router)
  .component('fa', FontAwesomeIcon)
  .mount('#app');
