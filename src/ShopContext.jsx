import { createContext } from "react";

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  remove: () => {},
});
