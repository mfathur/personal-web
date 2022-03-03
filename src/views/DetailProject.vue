<template>
    <div class="px-12 text-white">
        <h1 class="text-4xl font-bold text-center md:text-left">{{projectById.title}}</h1>
        <div class="flex items-center my-8 md:items-stretch">
            <div class="mr-4 ">
                <img src="{{projectById.image_url}}" alt="{{projectById.title}}" class="block mt-8 md:hidden rounded-xl">
                <h2 class="mt-4 text-2xl font-semibold">Project brief</h2>
                <p class="mt-4">{{projectById.description}}</p>
            </div>
        <div class="hidden mx-auto ml-10 md:block">
            <img src="{{projectById.image_url}}" alt="" class="rounded-xl">
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailProject',
  computed: {
    projectById() {
      console.log('params', this.$route.params.id);
      return this.getProjects.find((project) => project.id === this.$route.params.id);
    },
  },
};
</script>
