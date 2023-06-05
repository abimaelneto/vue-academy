<script>
const headers = new Headers({
  "Content-Type": "application/json",
});

export default {
  data() {
    return {
      users: [],
      posts: [],
    };
  },
  methods: {
    async getUsers() {
      const res = await fetch("http://127.0.0.1:8080/users/", {
        headers,
      });
      const data = await res.json();
      this.users = data;
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>

<template>
  <div v-for="user in users" :key="user.id">
    <a :href="`/user/${user.id}`">
      <h4>{{ user.name }}</h4>
      <p>{{ user.email }}</p>
    </a>
  </div>

  <h3>posts</h3>
  <div v-for="post in posts" :key="post.id">
    <a :href="`/post/${post.id}`">
      <h4>{{ post.title }}</h4>
      <p>{{ post.content }}</p>
    </a>
  </div>
</template>
