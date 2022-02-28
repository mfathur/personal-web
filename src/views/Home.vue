<template>
  <intro/>
  <div class="mt-20 md:mt-60"/>
  <about-me/>
  <div class="mt-20 md:mt-60"/>
  <contact-me/>
</template>

<script>
// @ is an alias to /src
import AboutMe from '@/components/AboutMe.vue';
import Intro from '@/components/Intro.vue';
import ContactMe from '../components/ContactMe.vue';

export default {
  name: 'Home',
  components: { AboutMe, Intro, ContactMe },
};
</script>
