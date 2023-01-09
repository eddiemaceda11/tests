const firstLetterCap = (str) => {
  // Remove first letter and return the rest of str
  let str2 = str.slice(1);
  // Capitalize first letter
  const firstLet = str[0].toUpperCase();
  // put back together first letter(capped) and rest of str
  finalStr = firstLet + str2;
  // return final capitalized str
  return finalStr;
};

module.exports = firstLetterCap;
