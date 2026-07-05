<script setup>

import api from '@/services/api.js';

api.get('/test')
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.error(123, err);
  });

</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style scoped></style>

<!-- DEPLOYMENT -->
<!-- After npm run build, manually upload contents of dist to server -->
