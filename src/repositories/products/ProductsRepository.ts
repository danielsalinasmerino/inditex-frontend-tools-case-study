import { ProductIds, Products } from "../../models/products";

export type FetchProductsParams = {
  productIds: ProductIds;
};

export interface ProductsRepository {
  fetchProducts(params?: FetchProductsParams): Promise<Products>;
}
