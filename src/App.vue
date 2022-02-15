<template>
  <the-main>
      <router-view/>
  </the-main>
  <!-- <router-view/> -->
</template>

<script>
import TheMain from '@/layouts/main.vue';

export default {
  name: 'the-app',
  components: {
    TheMain,
  },
};
</script>
