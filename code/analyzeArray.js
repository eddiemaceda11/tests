// create function that takes an array of numbers
// need to get avg, min, max values, and length of array

const analyzeArray = (array) => {
  let currentMin;
  let currentMax;
  let currentAverage = 0;

  for (let i = 0; i < array.length; i++) {
    currentMin = currentMin < array[i] ? currentMin : array[i];

    currentMax = currentMax > array[i] ? currentMax : array[i];

    currentAverage += array[i];

    let average = Math.round(currentAverage) / array.length;

    object = {
      average: average,
      min: currentMin,
      max: currentMax,
      length: array.length,
    };
  }

  return object;
};

// analyzeArray([3, 5, 1, 4, 2]);
// console.log(analyzeArray([3, 5, 1, 4, 2]));
module.exports = analyzeArray;
