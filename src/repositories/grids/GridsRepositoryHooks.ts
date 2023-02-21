import { useMutation } from "react-query";
import { useGridsRepository } from "../../hooks/useGridsRepository";

export const useCreateGrid = () => {
  const { gridsRepository } = useGridsRepository();

  const { mutateAsync, ...rest } = useMutation(
    ["createGrid"],
    gridsRepository.createGrid.bind(gridsRepository)
  );

  return { ...rest, createGrid: mutateAsync };
};
