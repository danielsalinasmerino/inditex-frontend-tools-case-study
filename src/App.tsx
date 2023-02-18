import React from "react";
import { Currency } from "./models/currencies";
import { formatPriceToPriceWithCurrency } from "./utils/currencies";

function App() {
  return (
    <div
      style={{
        width: 160,
        border: "solid",
        borderWidth: 1,
        borderColor: "#f2f2f2",
      }}
    >
      <img
        src={
          "https://static.zara.net/photos///2023/V/0/2/p/9863/400/407/2/w/1126/9863400407_6_1_1.jpg?ts=1673338741783"
        }
        alt="productImage"
        style={{ height: 256, width: 176 }}
      />
      <div style={{ padding: 4 }}>
        <span>{`${"JEANS COSTURA GIRADA"} ${formatPriceToPriceWithCurrency(
          3995,
          Currency.EURO
        )}`}</span>
      </div>
    </div>
  );
}

export default App;
