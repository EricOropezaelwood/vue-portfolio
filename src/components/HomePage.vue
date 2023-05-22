<template>
    <div id="app">
      <AppNavbar/>
      <div class="main-content">
        <p class="intro">
          <span class="name">Eric Oropezaelwood</span> <br>
          <span class="job-title">Cloud + DevOps Engineer</span>     
        </p>
      </div>
    </div>
  </template>
  
  <script>
  import AppNavbar from './AppNavbar.vue'
  
  export default {
    name: 'HomePage',
    components: {
      AppNavbar
    }
  }
  </script>
  
  <style>
  body {
    margin: 0;
    background-image: url("~@/assets/fuji-minimal.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    font-family: 'Roboto', sans-serif;
  }
  
  .intro span {
    color:darkslategray;
    font-size: 1.25em;
    font-weight: bold;
    line-height: 2;
    padding: 8px;
  }
  
  .intro .name {
    /* color:black; */
    font-size: 2em;
    font-family: 'Cardo', serif;
  }
  
  .intro .job-title {
    box-shadow: 0 0 10px 10px rgba(255, 255, 255, 0.3);
  }
  </style>
  