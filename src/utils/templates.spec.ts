import { createTemplatesFixture } from "./../fixtures/templates";
import { findTemplate } from "./templates";

const TEMPLATES = createTemplatesFixture();

describe("templates", () => {
  describe("findTemplate", () => {
    it("works fine", () => {
      const expectedResult1 = TEMPLATES[0];

      expect(expectedResult1).toEqual(findTemplate(TEMPLATES, TEMPLATES[0].id));

      const expectedResult2 = undefined;

      expect(expectedResult2).toEqual(findTemplate(TEMPLATES));

      const expectedResult3 = undefined;

      expect(expectedResult3).toEqual(findTemplate(TEMPLATES, "madeup-id"));
    });
  });
});
