import { UniqueIdentifier } from "@dnd-kit/core";
import { Grid } from "../models/grids";
import { Products } from "../models/products";
import { Rows } from "../models/rows";
import { generateUniqueIdentifier } from "./uuids";

export function createGridFromProducts(products: Products): Grid {
  const grouppedIds: string[][] = [];
  let aux: string[] = [];

  products.map((product) => {
    aux.push(product.id);
    if (aux.length === 2) {
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
    })),
  };
}

export function getItemsFromRows(rows: Rows) {
  return rows.reduce(
    (acc, value) => ({
      ...acc,
      [value.id as UniqueIdentifier]: value.productIds as UniqueIdentifier[],
    }),
    {} as { [key: UniqueIdentifier]: UniqueIdentifier[] }
  );
}

export function gridIsReadyToSave(grid?: Grid) {
  if (!grid) return false;

  if (grid.rows.length < 1) return false;

  for (const row of grid.rows) {
    const productsIdsOfRow = row.productIds;
    if (productsIdsOfRow.length === 0) {
      return false;
    }
  }

  return true;
}
