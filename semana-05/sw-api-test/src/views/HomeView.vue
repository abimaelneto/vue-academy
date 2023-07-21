<script>
export default {
  data() {
    return {
      people: [],
      loading: false,
      next: null,
      previous: null,
    };
  },
  methods: {
    getPeople(url) {
      this.loading = true;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.people = data.results;
          // guardar as referências para as páginas anterior e seguinte
          this.next = data.next;
          this.previous = data.previous;
          this.loading = false;
        });
    },
    handlePrevious() {
      this.getPeople(this.previous);
    },
    handleNext() {
      this.getPeople(this.next);
    },
  },
  mounted() {
    // o que eu quiser, na hora que o componente aparecer na tela
    this.getPeople("https://swapi.dev/api/peple/");
  },
};
</script>

<template>
  <main>
    <h3 v-show="loading">Loading...</h3>

    <table v-show="!loading">
      <tr>
        <th>Name</th>
        <th>Gender</th>
        <th>Height</th>
      </tr>
      <tr v-for="person in people" :key="person.name">
        <td>
          <RouterLink :to="`/people/${person.url.split('/')[5]}`">{{
            person.name
          }}</RouterLink>
        </td>
        <td>{{ person.gender }}</td>
        <td>{{ person.height }}</td>
      </tr>
    </table>
    <div id="buttons-container">
      <button @click="handlePrevious">Previous</button>
      <button @click="handleNext">Next</button>
    </div>
  </main>
</template>
