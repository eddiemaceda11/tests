const analyzeArray = require("../code/analyzeArray");

test("return an object with avg, min, max, and length properties", () => {
  expect(analyzeArray([3, 5, 1, 4, 2])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});
