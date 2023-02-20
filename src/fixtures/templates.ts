import { Template, Templates, TempleteAlignment } from "../models/templates";
import { generateUniqueIdentifier } from "../utils/uuids";

export const createTemplateFixture = (
  overrides?: Partial<Template>
): Template => ({
  id: generateUniqueIdentifier(),
  name: "Template 1",
  alignment: TempleteAlignment.CENTER,
  ...overrides,
});

export const createTemplatesFixture = (): Templates => [
  {
    id: generateUniqueIdentifier(),
    name: "Alineado a la izquierda",
    alignment: TempleteAlignment.LEFT,
  },
  {
    id: generateUniqueIdentifier(),
    name: "Alieado al centro",
    alignment: TempleteAlignment.CENTER,
  },
  {
    id: generateUniqueIdentifier(),
    name: "Alineado a la derecha",
    alignment: TempleteAlignment.RIGHT,
  },
];
