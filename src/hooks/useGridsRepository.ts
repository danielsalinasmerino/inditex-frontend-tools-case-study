import { useContext } from "react";
import { DependencyContainerContext } from "../context/DependencyContainer/DependencyContainer";

export const useGridsRepository = () => {
  const dependencies = useContext(DependencyContainerContext);

  if (!dependencies) {
    throw new Error(
      "useGridsRepository must be used within an DependencyContainerContext"
    );
  }

  return { gridsRepository: dependencies.gridsRepository };
};
