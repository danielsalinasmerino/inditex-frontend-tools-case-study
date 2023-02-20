import { Row } from "../models/rows";
import { generateUniqueIdentifier } from "../utils/uuids";
import { createProductsFixture } from "./products";
import { createTemplatesFixture } from "./templates";

export const PRODUCTS = createProductsFixture();
export const PRODUCTS_IDS = PRODUCTS.map((product) => product.id);
export const TEMPLATES = createTemplatesFixture();
export const TEMPLATES_IDS = TEMPLATES.map((template) => template.id);

export const createRowFixture = (overrides?: Partial<Row>): Row => ({
  id: generateUniqueIdentifier(),
  productIds: PRODUCTS_IDS,
  templateId: TEMPLATES_IDS[0],
  ...overrides,
});
