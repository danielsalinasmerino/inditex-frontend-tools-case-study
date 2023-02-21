import { createContext } from "react";
import { TemplatesRepository } from "../../repositories/templates/TemplatesRepository";
import { ProductsRepository } from "../../repositories/products/ProductsRepository";
import { GridsRepository } from "../../repositories/grids/GridsRepository";

export interface DependencyContainer {
  templatesRepository: TemplatesRepository;
  productsRepository: ProductsRepository;
  gridsRepository: GridsRepository;
}

export const DependencyContainerContext =
  createContext<DependencyContainer | null>(null);
