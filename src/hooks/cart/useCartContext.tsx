import { useContext } from "react";
import { CartContext } from "./CartContext";

export const useCartContext = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCartContext must be used within <CartProvider>");
  }
  return ctx;
};
