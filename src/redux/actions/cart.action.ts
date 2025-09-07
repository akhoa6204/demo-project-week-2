import type { CartItem } from "../../interface/ICartItem";
import type { IProduct } from "../../interface/IProduct";

// action types
export const CART_ADD = "CART/ADD";
export const CART_REMOVE_ITEMS = "CART/REMOVE_ITEMS";
export const CART_UPDATE_QTY = "CART/UPDATE_QTY";
export interface AddCartPayload {
  id: number;
  product: IProduct;
  qty: number;
}
export interface AddCartPayload {
  id: number;
  product: IProduct;
  qty: number;
}
export type CartAction =
  | {
      type: typeof CART_ADD;
      payload: AddCartPayload;
    }
  | { type: typeof CART_REMOVE_ITEMS; payload: number[] }
  | { type: typeof CART_UPDATE_QTY; payload: { id: number; qty: number } };

export type CartState = { cart: CartItem[] };

export const addCart = (payload: {
  id: number;
  product: IProduct;
  qty: number;
}) => ({ type: CART_ADD, payload });
export const removeItemsCart = (ids: number[]) => ({
  type: CART_REMOVE_ITEMS,
  payload: ids,
});
export const updateQty = ({ id, qty }: { id: number; qty: number }) => ({
  type: CART_UPDATE_QTY,
  payload: { id, qty },
});
