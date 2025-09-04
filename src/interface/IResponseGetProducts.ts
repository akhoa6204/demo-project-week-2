import type { IProduct } from "./IProduct";

export interface IResponseGetProducts {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}
