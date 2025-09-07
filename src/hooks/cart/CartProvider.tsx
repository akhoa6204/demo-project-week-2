import { useMemo } from "react";
import { CartContext } from "./CartContext";
import useCartPage from "./useCartPage";

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const state = useCartPage();
  const value = useMemo(() => state, [state]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
