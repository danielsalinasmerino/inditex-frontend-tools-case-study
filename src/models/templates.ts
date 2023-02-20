export type TemplateId = string;

export enum TempleteAlignment {
  LEFT = "left",
  CENTER = "center",
  RIGHT = "right",
}

export type Template = {
  id: TemplateId;
  name: string;
  alignment: TempleteAlignment;
};

export type Templates = Template[];
