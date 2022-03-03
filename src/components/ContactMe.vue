 <template>
  <section class="mx-8 font-bold text-white">
    <h2 class="text-lg text-center md:text-4xl">Let’s Get In Touch!</h2>
    <div class="justify-around mt-16 md:flex">
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
      <div class="w-full p-4 mt-8 md:ml-4 rounded-2xl bg-haiti-500 md:mt-0">
          <form>
                <input type="text" class="w-full px-4 py-2 mb-4 font-bold text-white rounded-lg bg-haiti-700" placeholder="Your name"><br>
                <input type="text" class="w-full px-4 py-2 mb-4 font-bold text-white rounded-lg bg-haiti-700" placeholder="Your email address"><br>
                <textarea type="text" class="w-full px-4 py-2 mb-2 overflow-y-scroll font-bold text-white rounded-lg resize-none bg-haiti-700" cols="50" rows="8" placeholder="Message"/><br>
                <button class="px-5 py-2 font-bold rounded-lg bg-haiti-700 hover:bg-haiti-500">Submit</button>
            </form>
      </div>
    </div>
  </section>
</template>

<script>
import contactsMixin from '@/mixins/contact';
import profileMixin from '@/mixins/profile';

export default {
  name: 'ContactMe',
  mixins: [contactsMixin, profileMixin],
  methods: {
    openUrl(link) {
      window.open(link, '_blank');
    },
  },
};
</script>
