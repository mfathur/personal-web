<template>
 <div class="w-full overflow-hidden bg-white rounded-lg shadow-lg md:max-w-sm ">
  <img class="w-full" src="{{imageUrl}}" alt="{{title}}">
  <div class="px-6 py-4">
    <h4 class="mb-2 text-xl font-bold text-black">{{title}}</h4>
    <p class="text-base font-medium text-gray-700">{{description}}</p>
  </div>
  <div class="flex items-center px-6 pb-4">
      <router-link :to="{name:'DetailProject',params: { id: id }}" class="text-sm font-bold text-red-600">READ MORE</router-link>
      <fa :icon="['fa','arrow-right']" class="ml-2 text-sm text-red-600"/>
  </div>
</div>
</template>

<script>
export default {
  name: 'itemProject',
  props: {
    id: Number,
    imageUrl: String,
    title: String,
    description: String,
  },
};
</script>
