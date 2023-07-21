<template>
  <v-container>
    <!-- <v-row
      v-for="person in list"
      :key="person.name"
      align="start"
      class="row"
      justify="center"
    >
      <v-col class="col" cols="12" md="4" lg="3">
        <div>
          <h3>{{ person.name }}</h3>
          <p>Teste</p>
        </div>
      </v-col>
      <v-col class="col" cols="12" md="4" lg="3">{{ person.age }}</v-col>
    </v-row> -->

    <div
      class="custom d-flex flex-column flex-md-row pa-4 justify-space-between"
    >
      <div v-for="n in 5" :key="n" class="h-50 pl-1 pr-10 card elevation-4">
        <h3>Nome</h3>
        <p>Descrição</p>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { name: "José", age: 12 },
        { name: "Maria", age: 15 },
        { name: "Zeca", age: 24 },
      ],
    };
  },
};
</script>

<style scoped>
.card {
  background: rgb(248, 248, 248);
}
.custom {
  width: 80%;
  height: 800px;
  background: lightblue;
}
.row {
  height: 200px;
  background: lightblue;
}

.col {
}
</style>
