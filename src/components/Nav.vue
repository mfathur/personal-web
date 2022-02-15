<template>
    <nav class="py-2.5 px-2 sm:px-4 border-gray-200">
        <div class="items-center justify-end block mx-auto md:flex ">
            <button data-collapse-toggle="mobile-menu" type="button" class="items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-haiti-500 focus:outline-none focus:ring-2 focus:ring-gray-500" aria-controls="mobile-menu-2" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        <div class="block w-full md:w-auto" id="mobile-menu">
        <ul class="flex flex-col mt-4 font-medium text-white md:flex-row md:space-x-8 md:mt-3 md:text-sm md:font-bold">
                <li>
                    <router-link to="/" class="block py-2 pl-3 pr-4 rounded bg-haiti-500 md:bg-transparent" aria-current="page">Home</router-link>
                </li>
                <li>
                    <router-link to="/" class="block py-2 pl-3 pr-4">About</router-link>
                </li>
                <li>
                    <router-link to="/" class="block py-2 pl-3 pr-4">Projects</router-link>
                </li>
                <li>
                    <router-link to="/" class="block py-2 pl-3 pr-4">Contact Me</router-link>
                </li>
            </ul>`
        </div>
        </div>
  </nav>
</template>

<script>
export default {
  name: 'the-nav',
};
</script>
