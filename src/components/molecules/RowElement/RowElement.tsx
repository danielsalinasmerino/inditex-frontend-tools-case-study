import { UniqueIdentifier } from "@dnd-kit/core";
import {
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import { FC, useState } from "react";
import { Product, Products } from "../../../models/products";
import { Row } from "../../../models/rows";
import { Template } from "../../../models/templates";
import { useFetchTemplates } from "../../../repositories/templates/TemplatesRepositoryHooks";
import { findProduct } from "../../../utils/products";
import { findTemplate } from "../../../utils/templates";
import { Button } from "../../atoms/Button";
import { Draggable } from "../../atoms/Draggable";
import { Droppable } from "../../atoms/Droppable";
import { ProductCard } from "../../atoms/ProductCard";
import "./RowElement.css";

// TODO: Take this to a "traductions" file
const NO_TEMPLATE = "Sin plantilla";

export type RowElementProps = {
  row: Row;
  products: Products;
  itemsIds: UniqueIdentifier[];
  onRemoveRow: (containerId: UniqueIdentifier) => void;
  onTemplateChange: (containerId: string, templateId: string) => void;
};

export const RowElement: FC<RowElementProps> = ({
  row,
  products,
  itemsIds,
  onRemoveRow,
  onTemplateChange,
}) => {
  const { id: rowId, templateId } = row;

  const { templates } = useFetchTemplates();

  const [template, setTemplate] = useState<Template | undefined>(
    findTemplate(templates, templateId)
  );

  function handleTemplateChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const templateSelected = findTemplate(templates, e.target.value);

    setTemplate(templateSelected);
    onTemplateChange(rowId, templateSelected?.id || "");
  }

  function handleOnRemoveRow() {
    onRemoveRow(rowId);
  }

  const templateAlignment = template ? template.alignment : "space-around";

  const contentStyle: React.CSSProperties = {
    justifyContent: templateAlignment,
  };

  const buttonStyle: React.CSSProperties = {
    padding: "8px 16px",
    fontWeight: "bold",
  };

  return (
    <div className="rowElement" key={rowId}>
      <Draggable draggableId={rowId}>
        <>
          <div className="header">
            <select
              className="title"
              aria-label="Select template"
              onChange={handleTemplateChange}
            >
              <option value="">{NO_TEMPLATE}</option>
              {templates?.map((template) => (
                <option key={template.id} value={template.id}>
                  {template.name}
                </option>
              ))}
            </select>
            <Button
              onClick={handleOnRemoveRow}
              label="Borrar fila"
              style={buttonStyle}
            />
          </div>
          <Droppable droppableId={rowId}>
            <SortableContext
              items={itemsIds}
              strategy={horizontalListSortingStrategy}
              id={rowId}
            >
              <ul className="content" style={contentStyle}>
                {itemsIds.map((productId) => (
                  <ProductCard
                    key={productId}
                    product={
                      findProduct(products, productId as string) ||
                      ({} as Product)
                    }
                  />
                ))}
              </ul>
            </SortableContext>
          </Droppable>
        </>
      </Draggable>
    </div>
  );
};
