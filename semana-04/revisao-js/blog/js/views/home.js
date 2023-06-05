// import { posts } from "./posts.js";

export const content = `
  <a href="index.html#create">
    <button>New Post</button>
  </a>
  <div id="lista-posts"></div> 
`;

for (const post of posts) {
  const divDaLista = document.querySelector("#lista-posts");
  divDaLista.innerHTML += `
    <h3>${post.title}</h3>
    <p>${post.content}</p>
  `;
}
