<script setup>

import api from '@/services/api.js';
import Footer from '@/views/Footer.vue'

api.get('/test')
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.error(123, err);
  });

</script>

<template>
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
</style>

<!-- DEPLOYMENT -->
<!-- After npm run build, manually upload contents of dist to server -->
