 <template>
  <section class="mx-8 font-bold text-white">
    <h2 id="contactme" class="text-lg text-center md:text-4xl">Contact Me</h2>
    <div class="justify-around mt-16 md:flex">
      <contact-list/>
      <email-form />
    </div>
  </section>
</template>

<script>
import EmailForm from './EmailForm.vue';
import ContactList from './ContactList.vue';

export default {
  name: 'ContactMe',
  components: {
    EmailForm,
    ContactList,
  },
};
</script>
