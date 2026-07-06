<template>
  <div class="mainImage">
    <h2 class="header">Our Equipment</h2>
  </div>
  <div class="carousel">
    <Carousel :images="images"/>
  </div>
</template>

<script setup>
import Carousel from '@/components/Carousel.vue'

import img1 from '@/assets/gear/Neve.png'
import img2 from '@/assets/gear/neve3.webp'
import img3 from '@/assets/gear/neve2.webp'
import img4 from '@/assets/gear/s-l1600.webp'
import img5 from '@/assets/gear/SE_ASP4816_490-2000px.png'
import img6 from '@/assets/gear/SolidStateLogic.jpg'


const images = [
  { src: img1, title: 'desk1', alt: 'Desk 1' },
  { src: img2, title: 'desk2', alt: 'Desk 2' },
  { src: img3, title: 'desk3', alt: 'Desk 3' },
  { src: img4, title: 'desk4', alt: 'Desk 4' },
  { src: img5, title: 'desk5', alt: 'Desk 5' },
  { src: img6, title: 'desk6', alt: 'Desk 6' },
]

</script>

<style scoped>
.mainImage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header{
  padding-top: 30px;
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
</style>
