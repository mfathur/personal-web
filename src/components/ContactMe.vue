 <template>
  <section class="font-bold text-white">
    <h2 class="text-lg text-center md:text-4xl">Let’s Get In Touch!</h2>
    <div class="flex justify-around mt-20 ">
      <div class="text-left bg-red-500 grow">
        <h4>mfathur17@gmail.com</h4>
        <h4>Yogyakarta, Indonesia</h4>
      </div>
      <div class="flex-col p-4 bg-haiti-500">
          <form action="">
                <input type="text" class="px-4 py-2 font-bold text-white rounded-lg bg-haiti-700" placeholder="Your name">
                <input type="text" class="px-4 py-2 font-bold text-white rounded-lg bg-haiti-700" placeholder="Your email address">
                <textarea type="text" class="px-4 py-2 font-bold text-white rounded-lg bg-haiti-700" cols="50" rows="4" placeholder="Message"/>
                <button class="px-5 py-2 font-bold rounded-lg bg-haiti-700">Submit</button>
            </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactMe',
};
</script>
