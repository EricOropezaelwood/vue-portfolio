<template>
    <div id="app">
      <AppNavbar />
      <router-view />
    </div>
  </template>
  
  <script>
  import AppNavbar from './components/AppNavbar.vue';
  
  export default {
    name: 'App',
    components: {
      AppNavbar,
    }
  }
  </script>
  
  <style>
  /* Global styles or CSS specific to the App.vue component */
  </style>
  