import { useMemo } from "react";
import useProductDetail from "./useProductDetail";
import { ProductDetailContext } from "./ProductDetailContext";

export default function ProductDetailProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const state = useProductDetail();
  const value = useMemo(() => state, [state]);
  return (
    <ProductDetailContext.Provider value={value}>
      {children}
    </ProductDetailContext.Provider>
  );
}
