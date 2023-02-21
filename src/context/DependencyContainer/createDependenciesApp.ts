import { DependencyContainer } from "./DependencyContainer";
// Here we should use the API repositories, but that's not part of the case study
import { TemplatesRepositoryFake as TemplatesRepositoryApi } from "../../repositories/templates/TemplatesRepositoryFake";
import { ProductsRepositoryFake as ProductsRepositoryApi } from "../../repositories/products/ProductsRepositoryFake";
import { GridsRepositoryFake as GridsRepositoryApi } from "../../repositories/grids/GridsRepositoryFake";

export function createDependenciesApp(): DependencyContainer {
  // Repositories
  const templatesRepository = new TemplatesRepositoryApi();
  const productsRepository = new ProductsRepositoryApi();
  const gridsRepository = new GridsRepositoryApi();

  return { templatesRepository, productsRepository, gridsRepository };
}
