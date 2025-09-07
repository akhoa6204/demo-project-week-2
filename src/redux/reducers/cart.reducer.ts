import { type Reducer, type UnknownAction } from "redux";
import {
  CART_ADD,
  CART_REMOVE_ITEMS,
  CART_UPDATE_QTY,
} from "../actions/cart.action";
import type { CartState, AddCartPayload } from "../actions/cart.action";
import type { CartItem } from "../../interface/ICartItem";

const initial: CartState = { cart: [] as CartItem[] };

export const cartReducer: Reducer<CartState, UnknownAction> = (
  state = initial,
  action
) => {
  switch (action.type) {
    case CART_ADD: {
      const { id } = action.payload as AddCartPayload;
      if (state.cart.some((it) => it.id === id)) return state;
      return { ...state, cart: [...state.cart, action.payload] };
    }
    case CART_REMOVE_ITEMS: {
      const ids = action.payload as number[];
      return {
        ...state,
        cart: state.cart.filter((it) => !ids.includes(it.id)),
      };
    }
    case CART_UPDATE_QTY: {
      const { id, qty } = action.payload as { id: number; qty: number };
      return {
        ...state,
        cart: state.cart.map((it) =>
          it.id === id ? { ...it, qty: Math.max(1, qty) } : it
        ),
      };
    }
    default:
      return state;
  }
};
