<script>
import VueIcon from '@/assets/logo.svg'

export default {
  data(){
    return {
      VueIcon
    }
  }
}
</script>

<template>
  
  <div>
    <h1>Eu odeio CSS</h1>

    <div class="blocos">
        <p>Odeio CSS Demais</p>
        <p>Odeio CSS Demais</p>
        <p>Odeio CSS Demais</p>
        <p>Odeio CSS Demais</p>
    </div>

    <h1>Eu odeio CSS 2</h1>

    <div class="complexo">
      <main>
        <div class="container-img center">
          <img :src="VueIcon" width="100" alt="">
        </div>
        <div class="content center">
          <h3>Minha Lista de Compras</h3>
          <ul>
            <li>Café</li>
            <li>Feijão</li>
            <li>Jiló</li>
            <li>Abobrinha</li>
          </ul>

        </div>
      </main>
      <footer></footer>
    </div>
  </div>

</template>

<style>

div.blocos {
  background: lightblue;
  display: flex;
  flex-direction: column;


  height: 500px;
  width: 800px;

  justify-content: space-around;
  align-items: space-around;
}

div.complexo {
  background: lightgreen;
  display: flex;
  flex-direction: column;

  height: 500px;
  width: 800px;

  justify-content: space-between;
  align-items: space-around;
}

div.complexo > * {
  width: 100%;
}



div.complexo main {
  background: lightblue;
  height: 80%;

  display: flex;
  justify-content: space-between;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-img {
  background: grey;
  width: 30%;
}

.content {
  flex-direction: column;
  background: brown;
  flex-grow:1;
}

/*
é possível definir a altura de um
elemento como sendo o resto do elemento pai 
*/

div.complexo footer {
  background: pink;
  flex-grow: 1;
}


p {
  background: red;
}

</style>
