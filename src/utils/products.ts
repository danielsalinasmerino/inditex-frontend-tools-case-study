import { ProductId, Products } from "../models/products";

export function findProduct(products: Products, productId?: ProductId) {
  if (!productId) return undefined;
  return products?.find((product) => product.id === productId);
}
