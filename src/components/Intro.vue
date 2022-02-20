<template>
    <div class="items-center justify-around mx-8 text-white md:flex home ">
        <div class="ml-4 text-center md:text-left">
            <h2 class="text-lg font-bold md:text-3xl">Hi, I'm {{getProfile.name}} </h2>
            <h3 class="pt-3 sm:text-base md:text-2xl">{{getProfile.job}}</h3>
        </div>
        <img src="./../assets/images/myphoto-home.png" alt="My-photo" class="pb-8 px-7 md:px-0">
    </div>
</template>

<script>
import profileMapGetters from '@/mixins/profile';

export default {
  name: 'Intro',
  mixins: [profileMapGetters],
};
</script>
