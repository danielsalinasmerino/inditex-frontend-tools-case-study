import React from "react";
import { RowElement } from "./components/molecules/RowElement";
import { Row } from "./models/rows";

function App() {
  const row: Row = {
    id: "",
    productIds: [],
    templateId: "",
    position: 1,
  };

  return (
    <div style={{ padding: 32 }}>
      <RowElement row={row} />
    </div>
  );
}

export default App;
