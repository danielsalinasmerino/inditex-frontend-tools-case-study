import { createTemplateFixture } from "./templates";
import { createProductsFixture } from "./products";
import { Row } from "../models/rows";

export const createRowFixture = (overrides?: Partial<Row>): Row => ({
  id: "e538f5bd-1e67-4i13-8e22-749a30a90494",
  productIds: createProductsFixture().map((product) => product.id),
  templateId: createTemplateFixture().id,
  ...overrides,
});
