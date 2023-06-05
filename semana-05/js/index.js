// let planeta;

// function successCallback(result) {
//   console.log("recebeu resposta", result);
//   return result.json();
// }

// function successCallback2(dados) {
//   //aqui eu tenho acesso aos dados
//   planeta = dados;
//   console.log(planeta);
//   return dados;
// }

// const promise = fetch("http://swapi.dev/api/planets/1/");

// const promise2 = promise.then(successCallback);

// const resultado = promise2.then(successCallback2);

// console.log(resultado);
// console.log(planeta); //não é nada

const myImage = document.querySelector("img");

fetch("../assets/dinossaur.jpeg")
  .then((resposta) => resposta.blob())
  .then((blob) => {
    const url = URL.createObjectURL(blob);
    myImage.src = url;
  });

const postsList = document.querySelector("#lista");

fetch("../posts.json")
  .then((res) => res.json())
  .then((posts) => {
    for (const post of posts) {
      const newPost = document.createElement("div");
      newPost.innerHTML += post.content;

      postsList.append(newPost);
    }
  });
