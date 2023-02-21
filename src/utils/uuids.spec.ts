import { generateUniqueIdentifier } from "./uuids";

describe("uuids", () => {
  describe("generateUniqueIdentifier", () => {
    it("two calls generate different identifiers", () => {
      const identifier1 = generateUniqueIdentifier();
      const identifier2 = generateUniqueIdentifier();

      expect(identifier1 === identifier2).toBeFalsy();
    });
  });
});
