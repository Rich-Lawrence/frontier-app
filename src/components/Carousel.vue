<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation, Pagination, Autoplay } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'

  const modules = [Navigation, Pagination, Autoplay]

  defineProps({
    images: {
      type: Array,
      required: true
    }
  })
</script>

<template>
  <Swiper
    :modules="modules"
    :space-between="20"
    :slides-per-view="1"
    navigation
    pagination
    loop
    :speed="2000"
    :autoplay="{
    delay: 4000,
    disableOnInteraction: false
  }"
  >
    <SwiperSlide v-for="(img, index) in images" :key="index">
      <img :src="img.src" :alt="img.alt" class="slide-image" />
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>
  .slide-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
  }
</style>
