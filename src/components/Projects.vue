<template>
    <section class="px-8 font-bold text-white">
        <h2 class="mb-16 text-2xl text-center md:text-4xl">Projects</h2>
        <div class="justify-center space-y-8 md:space-y-0 md:space-x-8 md:flex">
          <item-project/>
        </div>
    </section>
</template>

<script>
import ItemProject from './ItemProject.vue';

export default {
  name: 'Projects',
  components: { ItemProject },
};
</script>
