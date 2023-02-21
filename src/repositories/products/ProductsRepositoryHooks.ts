import { useQuery, QueryOptions } from "react-query";
import { Products } from "../../models/products";
import { useProductsRepository } from "../../hooks/useProductsRepository";
import { FetchProductsParams } from "./ProductsRepository";

export const useFetchProducts = (
  params?: FetchProductsParams,
  options?: QueryOptions<Products>
) => {
  const { productsRepository } = useProductsRepository();

  const { data, ...rest } = useQuery(
    ["products"],
    async () => {
      return await productsRepository.fetchProducts(params);
    },
    options
  );

  return { ...rest, products: data || [] };
};
