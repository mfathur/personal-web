<template>
    <div class="px-12 pt-20 text-white">
        <h1 class="text-4xl font-bold text-center md:text-left">{{projectById.name}}</h1>
        <div class="flex justify-around my-8 ">
            <div class="w-full">
                <img :src="projectById.image_url" :alt="projectById.image_url" class="block mt-8 md:hidden rounded-xl">
                <h2 class="mt-4 text-2xl font-semibold">Project brief</h2>
                <p class="mt-4">{{projectById.description}}</p>
            </div>
            <div class="hidden max-w-3xl ml-10 md:block">
              <img :src="projectById.image_url" :alt="projectById.image_url" class="rounded-xl">
            </div>
        </div>
    </div>
</template>

<script>
import projectMixin from '@/mixins/project';

export default {
  name: 'DetailProject',
  computed: {
    projectById() {
      const { id } = this.$route.params;
      const data = this.getProjects.find((element) => element.id === Number(id));
      return data;
    },
  },
  mixins: [projectMixin],
};
</script>
