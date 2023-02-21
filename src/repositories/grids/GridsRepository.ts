import { Grid } from "../../models/grids";

export type CreateGridParams = {
  gridToCreate: Grid;
};

export interface GridsRepository {
  createGrid(params: CreateGridParams): Promise<void>;
}
