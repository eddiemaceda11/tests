const reverseStr = (str) => {
  const newStr = str.split("").reverse().join("");
  return newStr;
};

module.exports = reverseStr;
