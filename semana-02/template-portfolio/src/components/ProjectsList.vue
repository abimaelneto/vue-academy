<script>
import ProjectCard from "../components/ProjectCard.vue";

export default {
  components: {
    ProjectCard,
  },
  props: {
    projects: Array,
  },
};
</script>

<template>
  <section id="projects" class="center">
    <h3>Latest work</h3>
    <div class="projects-list">
      <ProjectCard
        v-for="project in projects"
        :title="project.title"
        :description="project.description"
        :key="project.title"
      />
    </div>
  </section>
</template>

<style scoped>
#projects {
  flex-direction: column;
}

.projects-list {
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
