// services/ProductServices.ts
import type { AxiosRequestConfig } from "axios";
import type { IParams } from "../../interface/IParams";
import type { IProduct } from "../../interface/IProduct";
import httpClient from "../httpClient";

const PRODUCTS = "/products";
const PRODUCTS_SEARCH = "/products/search";

type ListRes = { products: IProduct[]; total: number };

export default class ProductServices {
  static getProducts(params?: IParams, config?: AxiosRequestConfig) {
    const url = params?.q ? PRODUCTS_SEARCH : PRODUCTS;
    return httpClient.get<ListRes, ListRes>(url, { params, ...config });
  }

  static getProduct(id: string | number, config?: AxiosRequestConfig) {
    const url = `${PRODUCTS}/${id}`;
    return httpClient.get<IProduct, IProduct>(url, config);
  }
}
