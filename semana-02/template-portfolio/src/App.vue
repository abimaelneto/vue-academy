<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <a>Logo</a>
    <nav>
      <a>About</a>
      <a>Work</a>
      <a>Contact</a>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  position: fixed;
  top: 0;

  height: 10vh;
  background: transparent;
  background: lightblue;

  width: 100vw;

  z-index: 99;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
  padding-right: 40px;
}

nav {
  display: flex;
  width: 30%;
  justify-content: space-between;
}
</style>
