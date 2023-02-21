import { render, screen } from "../../../tests/appTestUtils";
import { RowElement } from "./RowElement";
import { createRowFixture } from "../../../fixtures/rows";
import { createProductsFixture } from "../../../fixtures/products";

const ROW = createRowFixture();
const PRODUCTS = createProductsFixture();
const ITEMS_IDS = PRODUCTS.map((product) => product.id);
const ON_REMOVE_ROW = jest.fn();
const HANDLE_TEMPLATE_CHANGE = jest.fn();

describe("RowElement", () => {
  it("renders properly", () => {
    render(
      <RowElement
        row={ROW}
        products={PRODUCTS}
        itemsIds={ITEMS_IDS}
        onRemoveRow={ON_REMOVE_ROW}
        onTemplateChange={HANDLE_TEMPLATE_CHANGE}
      />
    );

    expect(screen.getByText(PRODUCTS[0].name)).toBeInTheDocument();
  });
});
