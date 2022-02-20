<template>
    <header>
        <the-nav />
    </header>
    <body>
        <slot />
    </body>
     <the-footer/>
</template>

<script>
import TheNav from '@/components/Nav.vue';
import TheFooter from '@/components/Footer.vue';

export default {
  name: 'the-main',
  components: {
    TheNav,
    TheFooter,
  },
};
</script>
