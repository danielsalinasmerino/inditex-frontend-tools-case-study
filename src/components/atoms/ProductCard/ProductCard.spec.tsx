import { createProductFixture } from "../../../fixtures/products";
import { render, screen } from "../../../tests/appTestUtils";
import { formatPriceToPriceWithCurrency } from "../../../utils/currencies";
import { ProductCard } from "./ProductCard";

const PRODUCT = createProductFixture();

describe("ProductCard", () => {
  it("renders product information correctly", () => {
    render(<ProductCard product={PRODUCT} />);

    const { name, price, currency } = PRODUCT;

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(
      screen.getByText(formatPriceToPriceWithCurrency(price, currency))
    ).toBeInTheDocument();
  });
});
