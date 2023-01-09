const firstLetterCap = require("../code/capitalize");

test("returns str with first letter capitalized", () => {
  expect(firstLetterCap("hello")).toBe("Hello");
});
