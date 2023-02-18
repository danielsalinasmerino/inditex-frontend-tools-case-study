import React from "react";
import { ProductCard } from "./components/atoms/ProductCard";
import { Currency } from "./models/currencies";
import { Product } from "./models/products";

function App() {
  const productooo: Product = {
    id: "1",
    name: "JEANS COSTURA GIRADA",
    image:
      "https://static.zara.net/photos///2023/V/0/2/p/9863/400/407/2/w/1126/9863400407_6_1_1.jpg?ts=1673338741783",
    price: 3995,
    currency: Currency.EURO,
  };

  return (
    <div>
      <ProductCard product={productooo} />
    </div>
  );
}

export default App;
