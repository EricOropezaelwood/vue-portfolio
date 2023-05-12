<template>
  <div id="app">
    <AppNavbar/>
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
</style>