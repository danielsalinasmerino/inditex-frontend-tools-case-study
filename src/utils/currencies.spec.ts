import { Currency } from "../models/currencies";
import { formatPriceToPriceWithCurrency } from "./currencies";

describe("currencies", () => {
  describe("formatPriceToPriceWithCurrency", () => {
    it("converts correctly a price", () => {
      const price = 2990;
      const currency = Currency.EURO;

      const expectedResult = "29,90 EUR";

      expect(expectedResult).toEqual(
        formatPriceToPriceWithCurrency(price, currency)
      );
    });
  });
});
