import { createContext } from "react";
import { TemplatesRepository } from "../../repositories/templates/TemplatesRepository";

export interface DependencyContainer {
  templatesRepository: TemplatesRepository;
}

export const DependencyContainerContext =
  createContext<DependencyContainer | null>(null);
