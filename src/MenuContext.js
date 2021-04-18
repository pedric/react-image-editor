import { createContext } from "react";

const MenuContext = createContext([
  "image",
  "logo",
  "text",
  "colors",
  "layout",
  "download",
]);

export default MenuContext;
