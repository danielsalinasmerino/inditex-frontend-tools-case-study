import { FC } from "react";
import { Product } from "../../../models/products";
import { formatPriceToPriceWithCurrency } from "../../../utils/currencies";
import { Draggable } from "../Draggable";
import "./ProductCard.css";

export type ProductCardProps = {
  product: Product;
};

const ALT_PRODUCT_CARD_IMAGE_TEXT = "Product Image";

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { id, name, image, price, currency } = product;

  return (
    <Draggable draggableId={id}>
      <div className="productCard">
        <img src={image} alt={ALT_PRODUCT_CARD_IMAGE_TEXT} />
        <div className="productCardInfo">
          <span>{name}</span>
          <br />
          <span>{formatPriceToPriceWithCurrency(price, currency)}</span>
        </div>
      </div>
    </Draggable>
  );
};
