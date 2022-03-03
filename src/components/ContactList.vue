<template>
    <div class="w-full mr-4 text-left md:p-20">
          <div class="flex items-center justify-center md:justify-start">
            <fa icon="envelope" class="mr-4 text-2xl"/>
            <h4 class="p-2 text-lg">{{getProfile.email}}</h4>
          </div>
          <div class="flex items-center justify-center mt-4 md:justify-start">
            <fa icon="map-marker" class="ml-1 mr-5 text-2xl"/>
            <h4 class="p-2 text-lg">{{getProfile.origin}}</h4>
          </div>
        <div class="mt-8 space-x-8 text-center md:text-left">
          <fa :icon="['fab','instagram']" class="text-4xl cursor-pointer text-haiti-500 hover:text-white" @click="openUrl('https://www.instagram.com/mfathoerr_/')"/>
          <fa :icon="['fab','facebook-square']" class="text-4xl cursor-pointer text-haiti-500 hover:text-white" @click="openUrl('https://www.facebook.com/profile.php?id=100013550419114')"/>
          <fa :icon="['fab','github']" class="text-4xl cursor-pointer text-haiti-500 hover:text-white" @click="openUrl('https://github.com/mfathur/')"/>
          <fa :icon="['fab','linkedin-in']" class="text-4xl cursor-pointer text-haiti-500 hover:text-white" @click="openUrl('https://www.linkedin.com/in/mfathoer/')"/>
        </div>
      </div>
</template>

<script>
import profileMixin from '@/mixins/profile';

export default {
  name: 'ContactList',
  mixins: [profileMixin],
  methods: {
    openUrl(link) {
      window.open(link, '_blank');
    },
  },
};
</script>
