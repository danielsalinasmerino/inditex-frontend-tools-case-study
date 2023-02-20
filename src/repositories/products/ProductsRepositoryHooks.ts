import { useQuery, QueryOptions } from "react-query";
import { Products } from "../../models/products";
import { useProductsRepository } from "../../hooks/useProductsRepository";

export const useFetchProducts = (options?: QueryOptions<Products>) => {
  const { productsRepository } = useProductsRepository();

  const { data, ...rest } = useQuery(
    ["products"],
    async () => {
      return await productsRepository.fetchProducts();
    },
    options
  );

  return { ...rest, products: data || [] };
};
