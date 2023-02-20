import { Template, Templates, TempleteAlignment } from "../models/templates";

export const createTemplateFixture = (
  overrides?: Partial<Template>
): Template => ({
  id: "6f01c1cf-43ae-4d14-8392-36ba9ff362de",
  name: "Template 1",
  alignment: TempleteAlignment.CENTER,
  ...overrides,
});

export const createTemplatesFixture = (): Templates => [
  {
    id: "5d45de4d-0c94-43f2-b15a-c0207253bf29",
    name: "Alineado a la izquierda",
    alignment: TempleteAlignment.LEFT,
  },
  {
    id: "eb9c6ec3-f38a-4bf1-8aab-408773382645",
    name: "Alineado al centro",
    alignment: TempleteAlignment.CENTER,
  },
  {
    id: "9a46762b-c47a-467d-bc1f-ff55982679bb",
    name: "Alineado a la derecha",
    alignment: TempleteAlignment.RIGHT,
  },
];
