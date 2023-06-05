<script>
import api from "@/api/index.js";

export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    async submit() {
      await api("posts/new/", {
        method: "POST",
        body: JSON.stringify({ title: this.title, content: this.content }),
      });
    },
  },
};
</script>

<template>
  <form>
    <input v-model="title" placeholder="Título" />
    <textarea v-model="content" placeholder="Escreva o post aqui..." />
    <button type="button" @click="submit">Salvar</button>
  </form>
</template>
