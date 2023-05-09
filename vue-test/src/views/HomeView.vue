<script>
import TheWelcome from '../components/TheWelcome.vue'

export default {
  data(){
    return { 
      hasError: 0,
      users: [
        {nome: "João da Silva", hired: false, id: 6785789},
        {nome: "Carlos Oliveira", hired: true, id: 567865},
        {nome: "Maria Seixas", hired: true, id: 12341}
      ]
    }
  },
  computed:{
    isActive(){
      return "true"
    },
  },
  methods: {
    throwError(){
      this.hasError = true
    },
  }
}

</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <button @click="hasError = !hasError">Error</button>
    <p class="static" :class="{
      active: isActive, error: hasError === 'banana', 
    }">
      Test
    </p>

    <div>
      <h3>Hired Users</h3>
      <div v-for="user in users">
        <p v-if="user.hired">{{ user.nome }}</p>
        <!-- <p>{{user.hired}}</p> -->
      </div>
    </div>

  </main>
</template>

<style scoped>
  .static {
    font-weight: 800;
    font-size: 50px;
  }
 
  .active {
    color: green;
  }
   .error {
    color: red;
  }



</style>
