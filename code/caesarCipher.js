const caesarCipher = (string) => {
  // create empty string
  let newStr = "";

  // for loop to loop through each letter of string
  for (let i = 0; i <= string.length - 1; i++) {
    // get current letter
    let str = string[i];

    // convert current letter to char code
    let code = str.charCodeAt();

    // if code/letter === z or Z, return a or A,
    // otherwise, return shift of letter
    let nextCode = code === 122 ? 97 : code === 90 ? 65 : code + 1;

    // convert code back to shifted letter
    let nextCharacter = String.fromCharCode(nextCode);

    // build new word with shifted letters
    newStr += nextCharacter;
  }
  return newStr;
};

module.exports = caesarCipher;
