<script>
export default {
  props: {
    title: String,
    description: String,
  },
};
</script>

<template>
  <div class="project center flex-column">
    <div class="w-100">
      <img src="@/assets/rectangle.png" alt="" />
      <h4>{{ title }}</h4>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
h4 {
}
.project {
  width: 33%;
}

@media (max-width: 400px) {
  .project {
    width: 100%;
  }
}
</style>
