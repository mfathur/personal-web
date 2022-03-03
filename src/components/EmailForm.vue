<template>
    <div class="w-full p-4 mt-8 md:ml-4 rounded-2xl bg-haiti-500 md:mt-0">
          <form>
                <input type="text" class="w-full px-4 py-2 mb-4 font-bold text-white rounded-lg bg-haiti-700" placeholder="Your name"><br>
                <input type="text" class="w-full px-4 py-2 mb-4 font-bold text-white rounded-lg bg-haiti-700" placeholder="Your email address"><br>
                <textarea type="text" class="w-full px-4 py-2 mb-2 font-bold text-white rounded-lg resize-none bg-haiti-700" cols="50" rows="8" placeholder="Message"/><br>
                <button class="px-5 py-2 font-bold rounded-lg bg-haiti-700 hover:bg-haiti-500">Submit</button>
          </form>
      </div>
</template>

<script>
export default {
  name: 'EmailForm',
};
</script>
