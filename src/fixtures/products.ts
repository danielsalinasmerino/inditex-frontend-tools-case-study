import { Product, Products } from "../models/products";
import { Currency } from "../models/currencies";

export const createProductFixture = (
  overrides?: Partial<Product>
): Product => ({
  // TODO: Improve id
  id: "product1",
  name: "JEANS COSTURA GIRADA",
  image:
    "https://static.zara.net/photos///2023/V/0/2/p/9863/400/407/2/w/1126/9863400407_6_1_1.jpg?ts=1673338741783",
  price: 3995,
  currency: Currency.EURO,
  ...overrides,
});

export const createProductsFixture = (): Products => [
  {
    // TODO: Improve id
    id: "product1",
    name: "JEANS COSTURA GIRADA",
    image:
      "https://static.zara.net/photos///2023/V/0/2/p/9863/400/407/2/w/1126/9863400407_6_1_1.jpg?ts=1673338741783",
    price: 3995,
    currency: Currency.EURO,
  },
  {
    // TODO: Improve id
    id: "product2",
    name: "JEANS STRAIGHT FIT",
    image:
      "https://static.zara.net/photos///2023/V/0/2/p/3991/466/405/2/w/1126/3991466405_6_1_1.jpg?ts=1673338739942",
    price: 3995,
    currency: Currency.EURO,
  },
  {
    // TODO: Improve id
    id: "product3",
    name: "JEANS REGULAR VINTAGE LIMITED EDITION",
    image:
      "https://static.zara.net/photos///2023/V/0/2/p/1538/423/400/2/w/1126/1538423400_6_1_1.jpg?ts=1673453338190",
    price: 3595,
    currency: Currency.EURO,
  },
];
