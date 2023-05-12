<template>
  <div id="app">
    <AppNavbar/>
    <img src="/coffee-shop-minimal-anime.png" alt="coffee shop" class="side-image">
    <!-- Rest of your app goes here -->
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'

export default {
  name: 'App',
  components: {
    AppNavbar
  }
}
</script>

<style>
body {
  background-color: #778899; /* This is a gray-blue color */
  font-family: 'Lora', serif;
}

.side-image {
  position: absolute;
  right: 20px; /* Adjust as needed */
  top: 50%;
  transform: translateY(-50%);
  max-width: 300px; /* Adjust as needed */
  max-height: 80vh; /* Adjust as needed */
  object-fit: cover; /* This will make sure your image maintains its aspect ratio */
  z-index: 0; /* This will ensure the image stays below other elements like the navbar */
}
</style>