<script>
export default {
  data() {
    return {
      person: {},
    };
  },
  methods: {
    getPerson(url) {
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
        });
    },
    // async/await
    async getPerson2(url) {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      const { name, birth_year, height, eye_color } = data;

      this.person = {
        Name: name,
        "Birth Year": birth_year,
        Height: height,
        "Eye Color": eye_color,
      };
    },
  },
  mounted() {
    const id = this.$route.params.id;
    this.getPerson(`https://swapi.dev./api/people/${id}`);
  },
};
</script>

<template>
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
