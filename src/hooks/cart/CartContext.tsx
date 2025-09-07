import { createContext } from "react";
import type { CartItem } from "../../interface/ICartItem";

export type CartContextType = {
  cart: CartItem[];

  handleChangeQuantity: (id: number, newQty: number) => void;
  handleRemoveItems: (ids: number[]) => void;
  handleToggleSelectedItems: (id: number) => void;
  handleToggleAllSelectedItems: () => void;
  handleBackToHome: () => void;

  selectedItems: number[];
  originalTotal: number;
  discountTotal: number;
  finalTotal: number;

  isLoading: boolean;
};
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
