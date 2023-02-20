import { createContext } from "react";
import { TemplatesRepository } from "../../repositories/templates/TemplatesRepository";
import { ProductsRepository } from "../../repositories/products/ProductsRepository";

export interface DependencyContainer {
  templatesRepository: TemplatesRepository;
  productsRepository: ProductsRepository;
}

export const DependencyContainerContext =
  createContext<DependencyContainer | null>(null);
