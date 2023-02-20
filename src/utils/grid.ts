import { UniqueIdentifier } from "@dnd-kit/core";
import { Grid } from "../models/grids";
import { Products } from "../models/products";
import { Rows } from "../models/rows";
import { generateUniqueIdentifier } from "./uuids";

export const createGridFromProducts = (products: Products): Grid => {
  const grouppedIds: string[][] = [];
  let aux: string[] = [];

  products.map((product, index) => {
    aux.push(product.id);
    if (aux.length === 3) {
      grouppedIds.push(aux);
      aux = [];
    }
    return [];
  });

  return {
    id: generateUniqueIdentifier(),
    rows: grouppedIds.map((ids) => ({
      id: generateUniqueIdentifier(),
      productIds: ids,
      templateId: "",
    })),
  };
};

export const getItemsFromRows = (rows: Rows) => {
  return rows.reduce(
    (acc, value) => ({
      ...acc,
      [value.id as UniqueIdentifier]: value.productIds as UniqueIdentifier[],
    }),
    {} as { [key: UniqueIdentifier]: UniqueIdentifier[] }
  );
};
