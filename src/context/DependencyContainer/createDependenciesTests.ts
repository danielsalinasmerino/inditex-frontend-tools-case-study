import { DependencyContainer } from "./DependencyContainer";
import { TemplatesRepositoryFake } from "../../repositories/templates/TemplatesRepositoryFake";

export function createDependenciesTests(): DependencyContainer {
  // Repositories
  const templatesRepository = new TemplatesRepositoryFake();

  return { templatesRepository };
}
