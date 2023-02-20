import { TemplateId, Templates } from "../models/templates";

export function findTemplate(templates: Templates, templateId?: TemplateId) {
  if (!templateId) return undefined;
  return templates?.find((template) => template.id === templateId);
}
