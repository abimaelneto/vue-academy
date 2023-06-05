function handleClick() {
  document.body.querySelector("main").innerHTML = "Outro texto";
}

function toggleViewPassword() {
  const currentType = document.querySelector("#input-senha").type;
  let newType = "";
  if (currentType === "text") {
    newType = "password";
  } else {
    newType = "text";
  }
  document.querySelector("#input-senha").type = newType;
}

function resetInput() {
  document.querySelector("#input-senha").value = "Você resetou esse campo";
}

function validatePassword() {
  //validar a senha conforme algumas regras
  //1 - no mínimo 8 caracteres
  //2 - precisar conter * ou #
  /*
    - capturar o value da senha
    - verificar seu comprimento
    - verificar  se inclui os caracteres especiais
    - se for válido, nada acontece
    - se não for válido, mostra a mensagem de erro na tag p abaixo do input

  */

  const value = document.querySelector("#input-senha").value;

  let errorMessage = "";

  if (value.length < 8) {
    errorMessage += "A senha deve conter no mínimo 8 caracteres.";
  }

  if (!value.includes("*") && !value.includes("#")) {
    errorMessage += "A senha precisa incluir um * ou um #";
  }

  const tagP = document.querySelector("p#texto-validacao");

  if (errorMessage) {
    tagP.innerHTML = errorMessage;
    tagP.style.display = "block";
  } else {
    tagP.style.display = "none";
  }

  /*

  *     #       válido?
  false false   false
  true  false   true
  false true    true
  true  true    true

  */
}
