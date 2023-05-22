<template>
  <nav>
    <ul class="nav-links">
      <li><a href="https://github.com/EricOropezaelwood" target="_blank" rel="noopener noreferrer">Projects</a></li>
      <li><a href="https://www.linkedin.com/in/eric-oropeza-elwood/" target="_blank" rel="noopener noreferrer">Career</a></li>
      <li><router-link to="/setup">Setup</router-link></li>
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
  color: darkslategray;
  padding: 15px;
  text-decoration: underline;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 55px;
}

.nav-links a {
  color: darkslategray;
  text-decoration: none;
  font-family: "Cardo";
}
</style>
