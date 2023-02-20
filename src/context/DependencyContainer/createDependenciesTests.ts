import { DependencyContainer } from "./DependencyContainer";
import { TemplatesRepositoryFake } from "../../repositories/templates/TemplatesRepositoryFake";
import { ProductsRepositoryFake } from "../../repositories/products/ProductsRepositoryFake";

export function createDependenciesTests(): DependencyContainer {
  // Repositories
  const templatesRepository = new TemplatesRepositoryFake();
  const productsRepository = new ProductsRepositoryFake();

  return { templatesRepository, productsRepository };
}
