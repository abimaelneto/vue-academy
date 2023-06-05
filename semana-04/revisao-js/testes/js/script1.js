// variáveis são recipientes de dado

/*
tipos de variáveis

- var: é possível resetar, atualizar;
    Problema: pode ter comportamento indesejado
- const: uma variável constante. 
    Listas e objetos podem ser atualizados, mas não resetados
- let: uma variável mutável que é restrita ao bloco
    (dentro do if ou função)


FUNÇÕES
- função é um bloco de código executável e dinâmico
- argumento é o que a função recebe
- parâmetro é o que é passado para ela


LOOPS
- for in me dá acesso ao índice da iteração
- for of me dá acesso ao elemento da iteração
- continue me leva para a próxima iteração
- break encerra o loop


IF/ELSE
- if/else geralmente é usada para 2 a 3 possibilidades
- para várias possibilidades, usar if com return

*/

function minhaFuncao(num) {
  if (num > 10 && num < 20) {
    console.log("Categoria A");
    return;
  }

  if (num > 20 && num < 30) {
    console.log("Categoria B");
    return;
  }

  if (num > 30 && num < 40) {
    console.log("Categoria C");
    return;
  }
}

minhaFuncao(12);
