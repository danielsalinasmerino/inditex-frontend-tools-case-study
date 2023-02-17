import { Row } from "./rows";

export type GridId = string;

export type Grid = {
  id: GridId;
  rows: Row[];
};
