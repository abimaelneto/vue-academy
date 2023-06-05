import routes from "./router/index.js";
import { posts } from "./posts.js";
let currentRoute;

function mountContent() {
  const currentHash = window.location.hash;

  for (const route of routes) {
    if (route.name === currentHash) {
      currentRoute = route;
      break;
    }
  }

  const divApp = document.querySelector("#app");

  divApp.innerHTML = currentRoute.component;

  posts.push({ title: "Teste", content: "hello" });
  console.log(posts);
}

window.addEventListener("hashchange", () => {
  mountContent();
});

mountContent();
