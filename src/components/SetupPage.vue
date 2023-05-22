<template>
    <div>
      <h1>Website Setup</h1>
      <p>
        Welcome to our website! This page provides information about how the website is set up and organized.
      </p>
      <h2>Repository Structure</h2>
      <p>
        The repository follows the following structure:
      </p>
      <pre>
        .
        ├── README.md
        ├── babel.config.js
        ├── jsconfig.json
        ├── package-lock.json
        ├── package.json
        ├── public
        │   ├── coffee-shop-minimal-anime.png
        │   ├── drill-wide.jpeg
        │   ├── favicon.ico
        │   └── index.html
        ├── src
        │   ├── assets
        │   │   ├── city-wallpaper.jpg
        │   │   ├── fuji-minimal.png
        │   │   ├── logo.png
        │   │   └── vue-portfolio-architecture-diagram.png
        │   ├── components
        │   │   ├── AppNavbar.vue
        │   │   ├── HomePage.vue
        │   │   └── ImagePage.vue
        │   ├── main.js
        │   └── router
        │       └── index.js
        └── vue.config.js
      </pre>
      <h2>Tech Stack</h2>
      <ul>
        <li>Vue.js: A progressive JavaScript framework for building user interfaces.</li>
        <li>Vue Router: The official router for Vue.js, enabling navigation between different pages or components.</li>
        <li>Babel: A JavaScript compiler that converts modern JavaScript code into backward-compatible versions.</li>
        <li>Webpack: A module bundler used to bundle JavaScript files and other assets.</li>
        <li>npm: The package manager for JavaScript that handles dependencies and project management.</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SetupPage'
  }
  </script>
  
  <style scoped>
  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  h2 {
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  
  p {
    margin-bottom: 15px;
  }
  
  pre {
    font-family: monospace;
    background-color: #f7f7f7;
    padding: 10px;
    overflow-x: auto;
  }
  
  ul {
    margin-top: 10px;
    margin-bottom: 15px;
    list-style-type: disc;
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 5px;
  }
  </style>
  