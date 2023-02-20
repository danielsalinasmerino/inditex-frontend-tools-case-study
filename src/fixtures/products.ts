import { Product, Products } from "../models/products";
import { Currency } from "../models/currencies";

export const createProductFixture = (
  overrides?: Partial<Product>
): Product => ({
  id: "e538f6bd-1e87-4c13-8b22-749a30a9049c",
  name: "JEANS COSTURA GIRADA",
  image:
    "https://static.zara.net/photos///2023/V/0/2/p/9863/400/407/2/w/1126/9863400407_6_1_1.jpg?ts=1673338741783",
  price: 3995,
  currency: Currency.EURO,
  ...overrides,
});

export const createProductsFixture = (): Products => [
  {
    id: "a7ab39ef-0647-455d-8b75-847f2cb80ad6",
    name: "JEANS COSTURA GIRADA",
    image:
      "https://static.zara.net/photos///2023/V/0/2/p/9863/400/407/2/w/1126/9863400407_6_1_1.jpg?ts=1673338741783",
    price: 3995,
    currency: Currency.EURO,
  },
  {
    id: "1164ff54-84dc-477a-ac62-6fe8606acee9",
    name: "JEANS STRAIGHT FIT",
    image:
      "https://static.zara.net/photos///2023/V/0/2/p/3991/466/405/2/w/1126/3991466405_6_1_1.jpg?ts=1673338739942",
    price: 3995,
    currency: Currency.EURO,
  },
  {
    id: "18fa6053-bcbb-483a-a8e7-490c4c89756d",
    name: "JEANS REGULAR VINTAGE",
    image:
      "https://static.zara.net/photos///2023/V/0/2/p/1538/423/400/2/w/1126/1538423400_6_1_1.jpg?ts=1673453338190",
    price: 3595,
    currency: Currency.EURO,
  },
  {
    id: "17df6053-bacb-483a-a8e7-490c4d89756d",
    name: "JEANS BAGGY FIT",
    image:
      "https://static.zara.net/photos///2023/V/0/2/p/1538/485/400/2/w/1126/1538485400_6_1_1.jpg?ts=1676017766008",
    price: 2995,
    currency: Currency.EURO,
  },
  {
    id: "08fa6053-dabb-482a-a8e7-490c4c89656d",
    name: "JEANS WIDE FIT",
    image:
      "https://static.zara.net/photos///2023/V/0/2/p/6688/400/407/2/w/1126/6688400407_6_1_1.jpg?ts=1673338741213",
    price: 3995,
    currency: Currency.EURO,
  },
  {
    id: "08fa6153-dabb-482a-a8e7-490c4d29656e",
    name: "JEANS SKINNY ROTOS",
    image:
      "https://static.zara.net/photos///2023/V/0/2/p/5585/306/401/2/w/1126/5585306401_6_1_1.jpg?ts=1673341193432",
    price: 3995,
    currency: Currency.EURO,
  },
];
