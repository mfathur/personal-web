<template>
    <header>
        <the-nav />
        <slot />
    </header>
</template>

<script>
import TheNav from '@/components/Nav.vue';

export default {
  name: 'the-main',
  components: {
    TheNav,
  },
};
</script>
