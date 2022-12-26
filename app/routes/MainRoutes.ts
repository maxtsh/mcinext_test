import Home from "containers/Home/Lazy";
import Quote from "containers/Quote/Lazy";
import type { Route } from "./types";

const Routes: Route[] = [
  {
    id: "Home",
    path: "/",
    Component: Home,
  },
  {
    id: "Quotes",
    path: "/quotes/:id",
    Component: Quote,
  },
];

export default Routes;
