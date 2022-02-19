<template>
  <div class="items-center justify-around text-white md:flex home">
    <div class="ml-4 text-center md:text-left">
      <h2 class="text-lg font-bold md:text-3xl">Hi, I'm {{getProfile.name}} </h2>
      <h2 class="pt-3 sm:text-base md:text-2xl">{{getProfile.job}}</h2>
    </div>
    <img src="./../assets/images/myphoto-home.png" alt="My-photo" class="pb-8 px-7 md:px-0">
  </div>
</template>

<script>
// @ is an alias to /src
import profileMapGetters from '@/mixins/profile';

export default {
  name: 'Home',
  components: {},
  mixins: [profileMapGetters],
};
</script>
