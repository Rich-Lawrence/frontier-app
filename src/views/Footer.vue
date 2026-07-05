<script setup>

</script>

<template>
  <footer class="footer text-center">
    <div class="container px-4 px-lg-5">
      <ul class="list-inline mb-5">

        <li class="list-inline-item">
          <a href="https://www.instagram.com/there_is_no_spork/" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
        </li>

        <li class="list-inline-item">
          <a href="https://www.linkedin.com/in/rich-lawrence-1a6348b6/" target="_blank">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>

        <li class="list-inline-item">
          <a href="https://github.com/Rich-Lawrence" target="_blank">
            <i class="fab fa-github"></i>
          </a>
        </li>

      </ul>

      <p class="text-muted small mb-0">
        Copyright &copy; richlawrence.co.uk 2026
      </p>
    </div>
  </footer>
</template>

<style scoped>
  .footer ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .footer a {
    font-size: 36px;
    transition: transform 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  .footer a:hover {
    transform: scale(1.25);
    background: transparent;
  }

  .text-muted {
    color: #333;
  }
</style>
