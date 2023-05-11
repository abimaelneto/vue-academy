<script>
/*
COMO EU CRIO UM INPUT REATIVO

1. cria uma variável reativa  - DATA
2. passa o valor da variável para o input  :value="nomeDaVariavel"
3. criar um método que trate o evento
4. vincular o método ao evento lá no input @meu-evento="meuMetodo"
5. no metodo, atualizar a variável reativa

*/

export default {
  data() {
    return {
      formData: {},
      title: "Titulo do Form",
    };
  },
  methods: {
    trataSubmit(event) {
      event.preventDefault();

      const dadosDoFormulario = {
        ...this.formData,
      };

      // let minhaString = "";

      // for (const chave of Object.keys(dadosDoFormulario)) {
      //   //versão 3
      //   minhaString += `${chave}: ${dadosDoFormulario[chave]}, `;

      //   // username: Abimael,
      //   // email: email@email.com
      //   // message; mensagem empolgante
      //   //versão 2
      //   //minhaString += chave + ":" + dadosDoFormulario[chave] + ",";

      //   // versão base
      //   // minhaString =
      //   //   minhaString + chave + ":" + dadosDoFormulario[chave] + ",";
      // }

      funcaoQueEnviaOsDadosParaOSeuBackendPreferido(dadosDoFormulario);

      alert("Obrigado por entrar em contato! Até mais");
    },
    minhaFuncaoUnica(event) {
      const nomeDoInput = event.target.name;
      const valorDoInput = event.target.value;

      this.formData[nomeDoInput] = valorDoInput;
    },
  },
};
</script>

<template>
  <h4>{{ title }}</h4>
  <form @submit="trataSubmit">
    <input
      class="input"
      name="username"
      placeholder="Name"
      :value="formData.username"
      @keyup="minhaFuncaoUnica"
    />
    <input
      class="input"
      name="email"
      placeholder="Email"
      :value="formData.email"
      @keyup="minhaFuncaoUnica"
    />
    <input
      class="input"
      name="sobrenome"
      placeholder="Sobrenome, se tiver"
      :value="formData.sobrenome"
      @keyup="minhaFuncaoUnica"
    />
    <textarea
      class="input"
      name="message"
      placeholder="Type your message here"
      rows="5"
      :value="formData.message"
      @keyup="minhaFuncaoUnica"
    ></textarea>
    <button type="submit">Submit</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 30rem;
}

.input,
button {
  font-family: "Epilogue";
}

.input {
  background-color: #a3a3a3;
  border: none;
  padding: 1rem;
}

button {
  max-width: 200px;
  width: 50%;
  padding: 1rem 0;
  background-color: #2d2d2d;
  color: white;
}

@media (max-width: 400px) {
  button {
    width: 100%;
    max-width: unset;
  }
}
</style>
