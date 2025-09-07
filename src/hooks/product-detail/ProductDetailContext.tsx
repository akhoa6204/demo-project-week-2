import { createContext } from "react";
import type { IProduct } from "../../interface/IProduct";
import type { IStatus } from "../../interface/IStatus";

export type ProductDetailContextType = {
  id: string | undefined;
  status: IStatus;
  product?: IProduct;
  images: string[];
  quantity: number;
  activeImage: number;

  handleAddToCart: () => void;
  handleChangeQuantity: (id: number, newQty: number) => void;
  handleChooseImage: (index: number) => void;
};

export const ProductDetailContext = createContext<
  ProductDetailContextType | undefined
>(undefined);
