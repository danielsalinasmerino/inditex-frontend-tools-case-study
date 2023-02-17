export type TemplateId = string;

export enum TempleteAlignment {
  LEFT = "LEFT",
  CENTER = "CENTER",
  RIGHT = "RIGHT",
}

export type Template = {
  id: TemplateId;
  name: string;
  alignment: TempleteAlignment;
};
