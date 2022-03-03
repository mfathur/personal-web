<template>
    <section class="items-center content-center font-bold text-white md:mx-28">
        <h2 class="text-lg text-center md:text-4xl ">About me</h2>
        <div class="items-center mt-8 align-middle md:flex">
            <img src="./../assets/images/myphoto-aboutme.png" alt="My photo" class="hidden md:block">
            <div class="mx-8 mt-8 text-left md:ml-14">
                <h4 class="text-sm md:text-lg">{{getProfile.overview}}</h4>
                <h3 class="mt-10 mb-8 text-lg text-center md:text-2xl md:text-left">Skills:</h3>
                <div class="flex flex-row flex-wrap justify-around md:space-x-8 md:justify-start " >
                    <img v-for="(skill ,index) in getSkills" :key="index" v-bind:src="skill.image_url" @error="skill.name" class="mb-6 w-14 h-14">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import profileMixin from '@/mixins/profile';
import skillsMixin from '@/mixins/skill';

export default {
  name: 'AboutMe',
  mixins: [profileMixin, skillsMixin],
};

</script>
