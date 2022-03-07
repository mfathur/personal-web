<template>
    <header>
        <the-nav />
    </header>
    <body>
        <slot class="pt-20"/>
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
