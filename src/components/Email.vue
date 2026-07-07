<script setup>
  import api from '@/services/api.js';
  import { ref } from 'vue'

  const name = ref('')
  const email = ref('')
  const subject = ref('')
  const message = ref('')
  const error = ref('')
  const sending = ref(false)

  const sendEmail = async() => {
    error.value = ''
    sending.value = true

    try {
      const res = await api.post('/supportEmail', {
        'name': name.value,
        'email': email.value,
        'subject': subject.value,
        'message': message.value
      })

      console.log('Email success:', res.data)

    } catch(err) {
      error.value = err.response.data.message || 'Something Went Wrong...'
    } finally {
      sending.value = false
    }
  }

</script>

<template>
  <div class="login-container">

    <p>Send Us A Message</p>
    <form @submit.prevent="sendEmail">
      <input
        v-model="name"
        type="name"
        placeholder="Name"
        required
      />
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        required
      />
      <input
        v-model="subject"
        type="text"
        placeholder="Subject"
        required
      />
      <input
        v-model="message"
        type="text-box"
        placeholder="Enter Message Here..."
        required
      />
      <button type="submit" :disabled="sending">
        {{ sending ? 'Sending...' : 'Send' }}
      </button>

      <p v-if="error" class="error">{{ error }}</p>

    </form>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-p{
  padding-top: 30px;
}

.login-container {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /*min-height: 100vh;*/
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 250px;
}

input {
  padding: 10px;
  font-size: 16px;
}

button {
  padding: 10px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

button:hover {
  transform: scale(1.05);
}

.error {
  color: red;
  font-size: 14px;
}

.register {
  text-decoration: none;
  transition: transform 0.2s ease, color 0.2s ease;
  display: inline-block;
  background: transparent !important;
}
</style>
