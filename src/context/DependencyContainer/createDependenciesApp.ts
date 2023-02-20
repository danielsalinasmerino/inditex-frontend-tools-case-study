import { DependencyContainer } from "./DependencyContainer";
// Here we should use the API repositories, but that's not part of the case study
import { TemplatesRepositoryFake as TemplatesRepositoryApi } from "../../repositories/templates/TemplatesRepositoryFake";
import { ProductsRepositoryFake as ProductsRepositoryApi } from "../../repositories/products/ProductsRepositoryFake";

export function createDependenciesApp(): DependencyContainer {
  // Repositories
  const templatesRepository = new TemplatesRepositoryApi();
  const productsRepository = new ProductsRepositoryApi();

  return { templatesRepository, productsRepository };
}
