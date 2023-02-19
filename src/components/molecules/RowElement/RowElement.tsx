import { FC } from "react";
import { createProductsFixture } from "../../../fixtures/products";
import { createTemplateFixture } from "../../../fixtures/templates";
import { Row } from "../../../models/rows";
import { ProductCard } from "../../atoms/ProductCard";
import "./RowElement.css";

export type RowElementProps = {
  row: Row;
};

export const RowElement: FC<RowElementProps> = ({ row }) => {
  const { productIds, templateId } = row;

  const products = createProductsFixture();

  const { name: templateName, alignment: templateAlignment } =
    createTemplateFixture();

  const contentStyle: React.CSSProperties = {
    justifyContent: templateAlignment,
  };

  return (
    <div className="rowElement">
      <div className="header">
        <div className="title">{templateName}</div>
        <div className="buttonsContainer">
          <span>Cambiar alineado</span>
          <span>Mover</span>
          <span>Borrar</span>
        </div>
      </div>
      <div className="content" style={contentStyle}>
        {products.map((product) => {
          return (
            <ProductCard key={`product-card-${product.id}`} product={product} />
          );
        })}
      </div>
    </div>
  );
};
