import { FC } from "react";
import { traductions } from "../../../i18n/traductions";
import { Product } from "../../../models/products";
import { formatPriceToPriceWithCurrency } from "../../../utils/currencies";
import { Draggable } from "../Draggable";

import "./ProductCard.css";

export type ProductCardProps = {
  product: Product;
};

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { id, name, image, price, currency } = product;

  return (
    <Draggable draggableId={id}>
      <div className="productCard">
        <img src={image} alt={traductions.alt_product_card_image_text} />
        <div className="productCardInfo">
          <span>{name}</span>
          <br />
          <span>{formatPriceToPriceWithCurrency(price, currency)}</span>
        </div>
      </div>
    </Draggable>
  );
};
