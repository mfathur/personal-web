<template>
    <div class="px-12 text-white">
        <h1 class="text-4xl font-bold text-center md:text-left">{{title}}</h1>
        <div class="flex items-center my-8 md:items-stretch">
            <div class="mr-4 ">
                <img src="https://user-images.githubusercontent.com/54427272/156501982-393ddd3e-4e7f-48f2-bd6e-90002f3fea34.jpg" alt="" class="block mt-8 md:hidden rounded-xl">
                <h2 class="mt-4 text-2xl font-semibold">Project brief</h2>
                <p class="mt-4">{{description}}</p>
            </div>
        <div class="hidden mx-auto ml-10 md:block">
            <img src="{{imageUrl}}" alt="" class="rounded-xl">
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailProject',
  props: {
    title: String,
    description: String,
    imageUrl: String,
  },
};
</script>
