<template>
    <div class="setup-page">
      <h1>Current method used to host this site</h1>
      <img src="../assets/vue-portfolio-architecture-diagram-white.png" alt="Website Architecture">
    </div>
  </template>
  
  <script>
  export default {
    name: 'SetupPage'
  }
  </script>
  
  <style scoped>
.setup-page {
  color:darkslategray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 60vh;
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.image-container {
  margin-top: auto; /* Pushes the image to the bottom */
  display: flex;
  justify-content: center;
}

img {
  max-width: 100%;
  max-height: 100%;
}
  </style>
  