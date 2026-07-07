<script setup>
  defineProps({
    room: {
      type: Object,
      required: true,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  });
</script>

<template>
  <section class="text-image" :class="{ reverse }">
    <div class="text">
      <h2 class="roomTitle">{{ room.name }}</h2>
      <p>{{ room.description }}</p>
      <br/>
      <p v-if="room.price != null" class="price">from £{{ room.price }} per day</p>
    </div>

    <div class="image">
      <img :src="room.image" :alt="room.name" />
    </div>
  </section>
</template>

<style scoped>
.text-image {
   display: flex;
   align-items: stretch;
   gap: 3rem;
   max-width: 1100px;
   margin: 0 auto;
 }

.text-image {
  flex-direction: row;
}

.text-image.reverse {
  flex-direction: row-reverse;
}

/* TEXT COLUMN */
.text {
  flex: 1;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text h2 {
  margin-bottom: 1rem;
}

/* IMAGE COLUMN */
.image {
  flex: 1;
  display: flex;
}

.image img {
  width: 100%;
  max-width: 500px;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  display: block;
}

/*This keeps the spacing*/
p {
  white-space: pre-line;
}

.roomTitle{
  color: white;
}

.price{
  color: #333;
}

@media (max-width: 768px) {
  .text-image {
    flex-direction: column;
  }

  .text-image.reverse {
    flex-direction: column;
  }

  .image img {
    height: 300px;
  }

  .text {
    flex: 1;
    padding: 0px;
    margin: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
