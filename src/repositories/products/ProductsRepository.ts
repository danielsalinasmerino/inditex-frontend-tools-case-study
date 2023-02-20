import { Products } from "../../models/products";

export interface ProductsRepository {
  fetchProducts(): Promise<Products>;
}
