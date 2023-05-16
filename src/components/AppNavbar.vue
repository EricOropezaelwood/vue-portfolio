<template>
  <nav>
    <ul class="nav-links">
      <li><a href="https://github.com/EricOropezaelwood" target="_blank" rel="noopener noreferrer">Projects</a></li>
      <li><a href="https://www.linkedin.com/in/eric-oropeza-elwood/" target="_blank" rel="noopener noreferrer">Career</a></li>
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
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: transparent;
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

</style>

