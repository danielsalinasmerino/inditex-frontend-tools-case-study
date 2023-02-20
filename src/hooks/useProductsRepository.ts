import { useContext } from "react";
import { DependencyContainerContext } from "../context/DependencyContainer/DependencyContainer";

export const useProductsRepository = () => {
  const dependencies = useContext(DependencyContainerContext);

  if (!dependencies) {
    throw new Error(
      "useProductsRepository must be used within an DependencyContainerContext"
    );
  }

  return { productsRepository: dependencies.productsRepository };
};
