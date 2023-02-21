import { createProductsFixture } from "./../fixtures/products";
import { findProduct } from "./products";

const PRODUCTS = createProductsFixture();

describe("products", () => {
  describe("findProduct", () => {
    it("works fine", () => {
      const expectedResult1 = PRODUCTS[0];

      expect(expectedResult1).toEqual(findProduct(PRODUCTS, PRODUCTS[0].id));

      const expectedResult2 = undefined;

      expect(expectedResult2).toEqual(findProduct(PRODUCTS));

      const expectedResult3 = undefined;

      expect(expectedResult3).toEqual(findProduct(PRODUCTS, "madeup-id"));
    });
  });
});
