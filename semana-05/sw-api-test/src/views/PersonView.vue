<script>
export default {
  data() {
    return {
      person: {},
      loading: false,
    };
  },
  methods: {
    getPerson(url) {
      this.loading = true;
      const promise = fetch(url);

      promise
        .then((res) => res.json())
        .then((data) => {
          const { name, birth_year, height, eye_color } = data;

          this.person = {
            Name: name,
            "Birth Year": birth_year,
            Height: height,
            "Eye Color": eye_color,
          };
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    // async/await
    async getPerson2(url) {
      this.loading = true;

      try {
        const res = await fetch(url);
        const data = await res.json();

        const { name, birth_year, height, eye_color } = data;

        this.person = {
          Name: name,
          "Birth Year": birth_year,
          Height: height,
          "Eye Color": eye_color,
        };
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    const id = this.$route.params.id;
    this.getPerson2(`https://swapi.dev./api/people/${id}`);
  },
};
</script>

<template>
  {{ loading }}
  <table>
    <tr v-for="(value, label) in person" :key="label">
      <th>{{ label }}</th>
      <td>{{ value }}</td>
    </tr>
  </table>
</template>

<style scoped>
th {
  font-weight: 600;
  text-align: left;
}
</style>
