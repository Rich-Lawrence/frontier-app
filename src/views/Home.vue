<template>
  <div class="mainImage">
    <img :src="logo" alt="Logo" class="logo"/>
  </div>
  <div class="carousel">
  <Carousel :images="images"/>
  </div>
  <div>
    <TextBox v-if="room" :room="room" class="TextBox"/>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import api from '@/services/api.js';
  import logo from '@/assets/logo_black.jpg'
  import Carousel from '@/components/Carousel.vue'

  import img1 from '@/assets/studio/img1.jpg'
  import img2 from '@/assets/studio/img2.jpg'
  import img3 from '@/assets/studio/img3.webp'
  import img4 from '@/assets/studio/img4.jpg'
  import img5 from '@/assets/studio/img5.webp'
  import img6 from '@/assets/studio/img6.webp'
  import TextBox from '@/components/TextBox.vue'

  const images = [
    { src: img1, title: 'room1', alt: 'Room 1' },
    { src: img2, title: 'room2', alt: 'Room 2' },
    { src: img3, title: 'room3', alt: 'Room 3' },
    { src: img4, title: 'room4', alt: 'Room 4' },
    { src: img5, title: 'room5', alt: 'Room 5' },
    { src: img6, title: 'room6', alt: 'Room 6' },
  ]

  const room = ref([]);

  onMounted(async () => {
    const res = await api.get("/rooms");
    room.value = res.data[0];
  });

</script>

<style scoped>
.mainImage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 100%;
  height: 40vh;
  object-fit: cover;
  display: block;
}

.logo{
  margin-top: 20px;
}

.header{
  padding: 30px;
}

.carousel {
  width: 70%;
  padding: 50px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}

.carousel img {
  width: 100%;
  object-fit: cover;
}

.TextBox{
  padding-top: 30px;
  padding-bottom: 50px;
}

/* Mobile */
@media(max-width: 600px) {

  .logo {
    width: 100%;
    height: 20%;
    margin: 0px;
    object-fit: cover;
    display: block;
  }

  .carousel {
    width: 100%;
    padding: 0px;
  }

}
</style>
