import { DependencyContainer } from "./DependencyContainer";
import { TemplatesRepositoryFake } from "../../repositories/templates/TemplatesRepositoryFake";
import { ProductsRepositoryFake } from "../../repositories/products/ProductsRepositoryFake";
import { GridsRepositoryFake } from "../../repositories/grids/GridsRepositoryFake";

export function createDependenciesTests(): DependencyContainer {
  // Repositories
  const templatesRepository = new TemplatesRepositoryFake();
  const productsRepository = new ProductsRepositoryFake();
  const gridsRepository = new GridsRepositoryFake();

  return { templatesRepository, productsRepository, gridsRepository };
}
