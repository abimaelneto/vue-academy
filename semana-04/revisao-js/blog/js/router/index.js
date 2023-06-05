import { content as homeContent } from "../views/home.js";
import { content as createContent } from "../views/create.js";

const routes = [
  { name: "", component: homeContent },
  { name: "#create", component: createContent },
];

export default routes;
