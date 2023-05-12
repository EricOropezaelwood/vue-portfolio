<template>
  <nav>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#work">Work</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar'
}
</script>

<style scoped>
nav {
  background-color: #333;
  color: white;
  padding: 15px;
}

.nav-links {
  list-style: none;
  display: flex;
  justify-content: space-around;
}

.nav-links a {
  color: white;
  text-decoration: none;
}
</style>
