import { posts } from "./posts.js";

function handleSubmit(event) {
  const form = document.querySelector("form");
  const titleElement = form.children[0];
  const contentElement = form.children[1];

  const title = titleElement.value;
  const content = contentElement.value;

  const newPost = {
    title,
    content,
  };
  posts.push(newPost);

  window.location.href = "index.html";
}

document.querySelector("button").addEventListener("click", handleSubmit);

// window.handleSubmit = handleSubmit;
