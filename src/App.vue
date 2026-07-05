<script setup>

import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import api from '@/services/api.js';
import Footer from '@/views/Footer.vue'

const user = ref(null)
const route = useRoute()

const loadUser = () => {
  const stored = localStorage.getItem('user')
  user.value = stored ? JSON.parse(stored) : null
}

loadUser()

watch(route, () => {
  loadUser()
})

function logout () {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    location.reload()
}

</script>

<template>

  <div class="header">
    <div class="login-text" v-if="user">
      Logged in as: {{ user.name }}
      <button @click="logout">Logout</button>
    </div>
  </div>

  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/login">Login</router-link>
  </nav>

  <main class="content">
    <router-view />
  </main>

  <Footer/>
</template>

<style>

html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

nav {
  display: flex;
  justify-content: center;
  gap: 10px;
}

nav a {
  text-decoration: none;
  transition: transform 0.2s ease, color 0.2s ease;
  display: inline-block;
  background: transparent !important;
}

nav a:hover {
  transform: scale(1.15);
}

nav a.router-link-active {
  font-weight: bold;
  color: hsla(160, 100%, 57%, 1);
}

.content {
  flex: 1;
}

.header {
  display: flex;
  justify-content: flex-end;
}
</style>

<!-- DEPLOYMENT -->
<!-- After npm run build, manually upload contents of dist to server -->
