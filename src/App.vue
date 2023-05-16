<template>
  <div id="app">
    <AppNavbar/>
    <p class="intro">
      <span class="name">Eric Oropezaelwood</span> <br>
      <span class="job-title">Cloud + DevOps Engineer</span>     
    </p>
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
  margin: 0;
  background-image: url("~@/assets/city-wallpaper.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  font-family: 'Roboto', sans-serif;
}

.intro span {
  color:azure;
  font-size: 1.25em;
  font-weight: bold;
  line-height: 2;
  padding: 8px;
}

.intro .name {
  /* color:black; */
  font-size: 2em;
  font-family: 'Cinzel', serif;
}

.intro .job-title {
  box-shadow: 0 0 10px 10px rgba(255, 255, 255, 0.3);
}
</style>
