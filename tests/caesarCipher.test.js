const caesarCipher = require("../code/caesarCipher");

test("loop through each letter of string and return shifted letter", () => {
  expect(caesarCipher("hello")).toBe("ifmmp");
});
