import type { IProduct } from "./IProduct";

export interface CartItem {
  id: number;
  product: IProduct;
  qty: number;
}