let minhaString = "alguma coisa";

// substituição de caracteres em uma string
function minhaFuncao(string) {
  let novaString = "";

  for (const caractere of string) {
    // verificando se o caractere é igual a letra a
    if (caractere == "a") {
      novaString += "x";
      continue;
    }
    // verificando se o caractere é igual a um espaço
    if (caractere == " ") {
      novaString += "-";
      continue;
    }
    novaString += caractere;
  }

  return novaString;
}

// precisa ter 8 caracteres
// não pode ter um *

function validatePassword(password) {
  let isValid = true;

  if (password.length < 8) {
    isValid = false;
    return isValid;
  }

  for (const caractere of password) {
    if (caractere == "*") {
      isValid = false;
    }
  }

  return isValid;
}
