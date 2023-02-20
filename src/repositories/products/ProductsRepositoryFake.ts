import { ProductsRepository } from "./ProductsRepository";
import { createProductsFixture } from "../../fixtures/products";

export class ProductsRepositoryFake implements ProductsRepository {
  async fetchProducts() {
    return createProductsFixture();
  }
}
