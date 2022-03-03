<template>
    <div class="w-full p-4 mt-8 md:ml-4 rounded-2xl bg-haiti-500 md:mt-0">
          <form ref="form" @submit.prevent="sendEmail">
                <input name="name" v-model="name" type="text" class="w-full px-4 py-2 mb-4 font-bold text-white rounded-lg bg-haiti-700" placeholder="Your name"><br>
                <input name="email" v-model="email" type="text" class="w-full px-4 py-2 mb-4 font-bold text-white rounded-lg bg-haiti-700" placeholder="Your email address"><br>
                <textarea name="message" v-model="message" type="text" class="w-full px-4 py-2 mb-2 font-bold text-white rounded-lg resize-none bg-haiti-700" cols="50" rows="8" placeholder="Message"/><br>
                <input type="submit" value="Send" class="px-5 py-2 font-bold rounded-lg cursor-pointer bg-haiti-700 hover:bg-haiti-500" />
          </form>
      </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  name: 'EmailForm',
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    sendEmail() {
      emailjs.sendForm('service_z1uurti', 'template_do36qzk', this.$refs.form, 'xx-G8RLGLMEEZt5LR').then((response) => {
        console.log('Success', response.status, response.text);
      }).catch((error) => {
        console.log('Error', error);
      });

      this.name = '';
      this.email = '';
      this.message = '';
    },
  },
};
</script>
