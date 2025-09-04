import type { CartItem } from "../../interface/ICartItem";
import type { IProduct } from "../../interface/IProduct";
import { SliceName } from "./SliceName";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [] as CartItem[],
};
const cartSlice = createSlice({
  name: SliceName.Cart,
  initialState,
  reducers: {
    addCart: (
      state,
      action: PayloadAction<{ id: number; product: IProduct; qty: number }>
    ) => {
      const { id } = action.payload;
      const existing = state.cart.find((item) => item.id === id);
      if (!existing) {
        state.cart = [...state.cart, action.payload];
      }
    },
    removeItemsCart: (state, action: PayloadAction<number[]>) => {
      const ids = action.payload;
      state.cart = state.cart.filter((item) => !ids.includes(item.id));
    },
    updateQty: (state, action: PayloadAction<{ id: number; qty: number }>) => {
      const { id, qty } = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item) {
        item.qty = qty > 0 ? qty : 1;
      }
    },
  },
});

export const { addCart, removeItemsCart, updateQty } = cartSlice.actions;
export default cartSlice;
