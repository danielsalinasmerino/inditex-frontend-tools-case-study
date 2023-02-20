import { TemplateId } from "./templates";
import { ProductIds } from "./products";

export type RowId = string;

export type Row = {
  id: RowId;
  productIds: ProductIds;
  templateId?: TemplateId;
};

export type Rows = Row[];
