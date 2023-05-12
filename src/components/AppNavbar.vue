<template>
  <nav>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#work">Work</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div class="name">Eric Oropezaelwood</div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar'
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #778899;
  color: white;
  padding: 15px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 55px;
}

.nav-links a {
  color: white;
  text-decoration: none;
}

.name {
  color: white;
  font-size: 1.2em;
  font-weight: bold;
}
</style>

