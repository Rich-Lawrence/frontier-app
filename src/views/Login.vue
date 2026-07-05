<script setup>

import { ref } from 'vue';
import api from '@/services/api.js';
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

const login = async () => {
  error.value = ''
  loading.value = true

  try {
    const res = await api.post('/login', {
      email: email.value,
      password: password.value
    })

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    console.log('Login success:', res.data)

    router.push('/')

  } catch (err) {
    console.error(err)
    error.value = 'Invalid email or password'
  } finally {
    loading.value = false
  }
}

</script>

<template>
  <div>
    <p class="login-p">Welcome to the Login page!</p>

    <div class="login-container">
      <form @submit.prevent="login">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          required
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit" :disabled="loading">
          {{ loading ? 'Logging in...' : 'Login' }}
        </button>

        <p v-if="error" class="error">{{ error }}</p>

        <p>Not already a member? <router-link class="register" to="/register">Register</router-link></p>

      </form>
    </div>

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
