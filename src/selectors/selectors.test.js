import expect from "expect";
import { authorsFormattedForDropdown } from "./selectors";

describe("Author Selectors", () => {
  describe("authorsFormattedForDropdown", () => {
    it("should return author data formatted for use in a dropdown", () => {
      const authors = [
        { id: "john-yosh", firstName: "John", lastName: "Yosh" },
        { id: "brian-ken", firstName: "Brian", lastName: "Ken" }
      ];
      const expected = [
        { value: "john-yosh", text: "John Yosh" },
        { value: "brian-ken", text: "Brian Ken" }
      ];
      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
