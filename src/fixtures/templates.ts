import { Template, TempleteAlignment } from "../models/templates";

export const createTemplateFixture = (
  overrides?: Partial<Template>
): Template => ({
  // TODO: Improve id
  id: "template1",
  name: "Template 1",
  alignment: TempleteAlignment.CENTER,
  ...overrides,
});
