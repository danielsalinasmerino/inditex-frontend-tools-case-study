import { useContext } from "react";
import { DependencyContainerContext } from "../context/DependencyContainer/DependencyContainer";

export const useTemplatesRepository = () => {
  const dependencies = useContext(DependencyContainerContext);

  if (!dependencies) {
    throw new Error(
      "useTemplatesRepository must be used within an DependencyContainerContext"
    );
  }

  return { templatesRepository: dependencies.templatesRepository };
};
