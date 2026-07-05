<template>
  <div>
    <h1>Contact Page</h1>
    <p>Welcome to the Contact page!</p>
  </div>
</template>

<script setup>
import api from '@/services/api.js';

api.get('/me')
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.error(123, err);
  });
</script>
