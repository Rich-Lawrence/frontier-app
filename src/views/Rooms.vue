<script setup>
  import { ref, onMounted } from 'vue'
  import api from '@/services/api.js'
  import TextBox from '@/components/TextBox.vue'

  const rooms = ref([])

  onMounted(async () => {
    const res = await api.get("/rooms");
    rooms.value = res.data.slice(1)
  });

</script>

<template>
  <div>
    <TextBox v-for="(room, index) in rooms" :key="room.id" :room="room" class="TextBox" :reverse="index % 2 === 1"/>
  </div>
</template>

<style scoped>
.TextBox{
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
