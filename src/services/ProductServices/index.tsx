import type { IParams } from "../../interface/IParams";
import httpClient from "../httpClient";

const ENDPOINT_API_PRODUCTS = "/products";
const ENDPOINT_API_PRODUCTS_SEARCHING = "/products/search";
export default class ProductServices {
  static async getProducts(params?: IParams) {
    let url = ENDPOINT_API_PRODUCTS;

    if (params?.q) {
      url = ENDPOINT_API_PRODUCTS_SEARCHING;
    }
    try {
      const res = await httpClient.get(url, {
        params,
      });
      return res;
    } catch (err) {
      console.error(err);
      throw Error(err);
    }
  }
  static async getProduct(id: string) {
    const url = `${ENDPOINT_API_PRODUCTS}/${id}`;
    try {
      const res = await httpClient.get(url);
      return res;
    } catch (err) {
      console.error(err);
      throw Error(err);
    }
  }
}
