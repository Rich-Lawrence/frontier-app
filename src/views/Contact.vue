<template>

  <div class="map-container">

  </div>

  <section class="text-image">
    <div class="text">
      <h2 class="roomTitle">Frontier Recordings</h2>
      <p>Lancaster Court</p>
      <p>Clyst Honiton</p>
      <p>Exeter</p>
      <p>EX5 2DP</p>
      <br/>
      <p>rich.lawrence@richlawrence.com</p>
      <br/>
      <p>+44 7999999999</p>
      <br/>
    </div>

    <div class="image">
      <iframe
        src="https://www.google.com/maps?q=Lancaster+Court+Clyst+Honiton+EX5+2DP&output=embed"
        width="100%"
        height="450"
        style="border:0;"
        loading="lazy">
      </iframe>
    </div>
  </section>

  <div class="emailContainer">
    <Email class="emailForm"/>
  </div>

</template>

<script setup>
import api from '@/services/api.js';
import Email from '@/components/Email.vue'

api.get('/me')
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.error(123, err);
  });
</script>

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
  text-align: center;
}

.text h2 {
  margin-bottom: 1rem;
}

/* IMAGE COLUMN */
.image {
  flex: 1;
  min-height: 450px;
  display: flex;
  padding-bottom: 30px;
  padding-top: 30px;
}

.image iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

.image img {
  width: 100%;
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

  .image img {
    height: 300px;
  }
}

.image img {
  width: 100%;
  max-width: 500px;
  object-fit: cover;
  border-radius: 10px;
}

.emailContainer {
  display: flex;
  justify-content: center;
  margin: 60px auto;
  width: 100%;
}

.emailForm {
  width: 100%;
  max-width: 500px;
  padding: 40px;
  border: 2px double #00bd7e;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.2);
}
</style>
