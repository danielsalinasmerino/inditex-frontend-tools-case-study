import { DependencyContainer } from "./DependencyContainer";
// Here we should use the API repositories, but that's not part of the case study
import { TemplatesRepositoryFake as TemplatesRepositoryApi } from "../../repositories/templates/TemplatesRepositoryFake";

export function createDependenciesApp(): DependencyContainer {
  // Repositories
  const templatesRepository = new TemplatesRepositoryApi();

  return { templatesRepository };
}
