import { Currency } from "./currencies";

export type ProductId = string;

export type ProductIds = ProductId[];

export type Product = {
  id: ProductId;
  name: string;
  image: string;
  price: number;
  currency: Currency;
};

export type Products = Product[];
