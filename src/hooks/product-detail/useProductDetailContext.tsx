import { useContext } from "react";
import { ProductDetailContext } from "./ProductDetailContext";

export const useProductDetailContext = () => {
  const ctx = useContext(ProductDetailContext);
  if (!ctx) {
    throw new Error(
      "useProductDetailContext must be used within <ProductDetailProvider>"
    );
  }
  return ctx;
};
