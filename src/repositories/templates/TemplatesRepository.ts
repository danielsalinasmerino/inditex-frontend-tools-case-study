import { Templates } from "../../models/templates";

export interface TemplatesRepository {
  fetchTemplates(): Promise<Templates>;
}
