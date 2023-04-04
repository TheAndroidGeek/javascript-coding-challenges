function encrypt(string, key) {
  return solution2(string, key);
}

// Time: O(nlogn)
// Space: O(n)
function solution1(string, key) {
  return [...string].map((letter) => encryptLetter(letter, key)).join("");
}

const alphabetLength = 26;
const lastUpperCaseCharCode = "Z".charCodeAt();
const beforeFirstUpperCaseCharCode = "A".charCodeAt() - 1;
const lastLowerCaseCharCode = "z".charCodeAt();
const beforeFirstLowerCaseCharCode = "a".charCodeAt() - 1;

function encryptLetter(letter, key) {
  let charCode = letter.charCodeAt() + (key % alphabetLength);

  return String.fromCharCode(
    letter.charCodeAt() > lastUpperCaseCharCode
      ? // handle lower case
        charCode <= lastLowerCaseCharCode
        ? charCode
        : beforeFirstLowerCaseCharCode + (charCode % lastLowerCaseCharCode)
      : // handle upper case
      charCode <= lastUpperCaseCharCode
      ? charCode
      : beforeFirstUpperCaseCharCode + (charCode % lastUpperCaseCharCode)
  );
}

function solution2(string, key) {
  return [...string].map((letter) => encryptLetter2(letter, key)).join("");
}

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encryptLetter2(letter, key) {
  let char = letter.toLowerCase();
  let isLowercase = char === letter;

  let encrypted = alphabet.charAt(
    (alphabet.indexOf(char) + (key % alphabet.length)) % alphabet.length
  );

  return isLowercase ? encrypted : encrypted.toUpperCase();
}

exports.encrypt = encrypt;
