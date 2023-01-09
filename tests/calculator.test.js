const calculator = require("../code/calculator");

test("returns calc function of 2 values ", () => {
  expect(calculator.add(2, 2)).toBe(4);
});
