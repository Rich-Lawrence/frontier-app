<script setup>
  import { onMounted, ref, watch } from 'vue'
  import { useRouter } from 'vue-router'
  import api from '@/services/api.js';

  const router = useRouter()
  const user = ref(null)
  const error = ref('')
  const loading = ref('')
  const rooms = ref([])
  const selectedRoom = ref([])
  const bookedDates = ref([])

  const disabledDates = ref([])

  const range = ref({
    start: null,
    end: null
  })

  const loadUser = () => {
    const stored = localStorage.getItem('user')
    user.value = stored ? JSON.parse(stored) : null
  }

  loadUser()

  onMounted(async () => {
    const res = await api.get("/rooms");
    rooms.value = res.data.slice(1)
  });

  watch(selectedRoom, async (roomId) => {
    if(!roomId) {
      bookedDates.value = []
      disabledDates.value = []
      return
    }

    const res = await api.get(`/rooms/${roomId}/bookings`);
    bookedDates.value = res.data
    disabledDates.value = []

    res.data.forEach(booking => {
      let current = new Date(booking.start_date)
      const end = new Date(booking.end_date)

      while (current <= end) {
        disabledDates.value.push(new Date(current))
        current.setDate(current.getDate() + 1)
      }
    })
  })

  const submitBooking = async () => {
    error.value = ''
    loading.value = true

    try {
      const res = await api.post('/checkout', {
        room_id: selectedRoom.value,
        start_date: range.value.start,
        end_date: range.value.end
      })

      window.location.href = res.data.url

    } catch (err) {
      if(err.response.data.message == 'The room id field is required.'){
        error.value = 'Please Select A Room.'
      } else {
        error.value = err.response.data.message || 'Something Went Wrong...'
      }
    } finally {
      loading.value = false
    }
  }
</script>

<template>
  <div class="booking">
    <h2>Book a Session</h2>

    <label for="room">
      Select a studio
    </label>
    <br/>

    <select id="room" v-model="selectedRoom">
      <option v-for="room in rooms" :key="room.id" :value="room.id">
        {{ room.name }}
      </option>
    </select>
    <br/>

    <VDatePicker
      v-model="range"
      is-range
      :min-date="new Date()"
      :disabled-dates="disabledDates"
    />

    <div class="summary" v-if="range.start && range.end">
      <p><strong>Start:</strong> {{ range.start }}</p>
      <p><strong>End:</strong> {{ range.end }}</p>

      <button v-if="user" @click="submitBooking">
        Request Booking
      </button>
      <div v-else>
        <p>Please <router-link class="login" to="/login">Log In</router-link> To Book A Session</p>
      </div>
    </div>
    <p class="error"> {{ error }} </p>
  </div>
</template>

<style scoped>
.booking {
  max-width: 500px;
  margin: 40px auto;
  text-align: center;
}

.summary {
  margin-top: 20px;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  cursor: pointer;
}

.login {
  text-decoration: none;
  transition: transform 0.2s ease, color 0.2s ease;
  display: inline-block;
  background: transparent !important;
}

:deep(.vc-disabled) {
  color: red !important;
  background-color: #ffe0e0 !important;
  border-radius: 50%;
}

#room {
  margin-bottom: 10px;
}

.error {
  color: red;
}
</style>
