<script setup>
  import api from '@/services/api.js';
  import { ref, onMounted, watch } from 'vue'
  import { useRoute, useRouter } from 'vue-router';

  const myBookings = ref([]);
  const error = ref('')
  const loading = ref(false)
  const route = useRoute()
  const router = useRouter()
  const paymentSuccessful = ref(false)

  onMounted(async () => {

    if(route.query.session_id) {
      paymentSuccessful.value = true
      // removes the success message after 5 seconds
      setTimeout(() => {
        paymentSuccessful.value = false
      }, 5000)
      // removes the query from the url
      router.replace({
        query: {}
      })
    }

    try {
      const res = await api.get("/myBookings");
      myBookings.value = res.data
    } catch (err) {
      error.value = 'Unable to load your bookings'
    } finally {
      loading.value = false
    }
  });

  const calculatePrice = (booking) => {
    const start = new Date(booking.start_date)
    const end = new Date(booking.end_date)

    const difference = end - start

    const days = difference / (1000 * 60 * 60 * 24)

    return days * booking.room.price
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const cancelBooking = async (booking) => {
    // confirmation pop-up
    if (!confirm(`Cancel booking for ${booking.room.name}?`)) {
      return
    }

    try {
      await api.delete(`/bookings/${booking.id}/cancel`);
      myBookings.value = myBookings.value.filter(
        item => item.id !== booking.id
      )

    } catch (err){
      console.log(err);
      error.value = 'Unable to cancel booking'
    }
  }

</script>

<template>
  <div class="bookings-page">

    <h2>My Bookings</h2>

    <div class="paymentSuccess" v-if="paymentSuccessful">
      <p>✅ Payment Successful</p>
      <p>your booking has been added</p>
    </div>


    <div class="bookings-grid">

      <div
        v-for="booking in myBookings"
        :key="booking.id"
        class="booking-card"
      >

        <div class="image">
          <img
            :src="booking.room.image"
            :alt="booking.room.name"
          />
        </div>


        <div class="content">

          <h3>
            {{ booking.room.name }}
          </h3>


          <div class="dates">

            <div class="date-box">
              <span>From</span>
              <p>{{ formatDate(booking.start_date) }}</p>
            </div>


            <div class="date-box">
              <span>Until</span>
              <p>{{ formatDate(booking.end_date) }}</p>
            </div>

          </div>


          <p class="price">
            Total: £{{ calculatePrice(booking) }}
          </p>


          <button class="cancel" @click="cancelBooking(booking)">
            Cancel Booking
          </button>

        </div>

      </div>

    </div>

  </div>
</template>

<style scoped>
.bookings-page {
  max-width: 1100px;
  margin: 50px auto;
  padding: 20px;
}

.bookings-page h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2rem;
}


/* Grid layout */
.bookings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

/* Booking card */
.booking-card {
  background: #1a1a1a;
  color: hsla(160, 100%, 37%, 1);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0,0,0,0.12);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

/* Wobbles image a bit */
.booking-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.18);
}

/* Image */
.image {
  height: 230px;
  overflow: hidden;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Content */
.content {
  padding: 25px;
}

.content h3 {
  margin: 0 0 20px;
  font-size: 1.4rem;
}

/* Dates */
.dates {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
}

.date-box {
  flex: 1;
  background: #f5f5f5;
  padding: 12px;
  border-radius: 8px;
}

.date-box span {
  display: block;
  font-size: 0.8rem;
  color: #777;
  margin-bottom: 5px;
}


.date-box p {
  margin: 0;
  font-weight: 600;
}


/* Price */
.price {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 20px;
}


/* Cancel button placeholder */
.cancel {
  margin-top: 20px;
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: #c0392b;
  color: white;
  cursor: pointer;
  font-size: 1rem;
}


.cancel:hover {
  background: #a93226;
}

.paymentSuccess {
  color: green;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 10px;
}

/* Mobile */
@media(max-width: 600px) {

  .bookings-page {
    padding: 10px;
  }

  .dates {
    flex-direction: column;
  }

}
</style>
