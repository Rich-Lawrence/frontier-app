<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import BookingCalendar from '@/components/BookingCalendar.vue'

const route = useRoute()
const router = useRouter()
const paymentFailed = ref(false)

onMounted(async () => {

  if (route.query.session_id) {
    paymentFailed.value = true
    // removes the failure message after 7 seconds
    setTimeout(() => {
      paymentFailed.value = false
    }, 7000)
    // removes the query from the url
    router.replace({
      query: {}
    })
  }
});

</script>

<template>
  <BookingCalendar />
  <div class="paymentFailed" v-if="paymentFailed">
    <p>❌ Payment Failed</p>
    <p>your booking has not been added</p>
  </div>
</template>

<style scoped>
.paymentFailed {
  color: red;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 10px;
}
</style>
