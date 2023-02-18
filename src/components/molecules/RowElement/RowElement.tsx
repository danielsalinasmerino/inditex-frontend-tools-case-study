import { FC } from "react";
import { createProductsFixture } from "../../../fixtures/products";
import { Row } from "../../../models/rows";
import { ProductCard } from "../../atoms/ProductCard";
import "./RowElement.css";

export type RowElementProps = {
  row: Row;
};

export const RowElement: FC<RowElementProps> = ({ row }) => {
  const { id, productIds, templateId, position } = row;

  return (
    <div className="rowElement">
      <div className="header">
        <div className="title">Hola</div>
        <div className="buttonsContainer">
          <span>Cambiar alineado</span>
          <span>Mover</span>
          <span>Borrar</span>
        </div>
      </div>
      <div className="content" style={{ justifyContent: "right" }}>
        {createProductsFixture().map((product) => {
          return (
            <ProductCard key={`product-card-${product.id}`} product={product} />
          );
        })}
      </div>
    </div>
  );
};
