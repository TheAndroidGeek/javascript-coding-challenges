/**
 * Checks text is palindrome.
 * @param {string} text - The text to check.
 * @returns true when text is palindrome, otherwise false.
 */
function isPalindrome(text) {
  return solution5(text);
}

// Use reversing an array of characters with the split function
function solution1(text) {
  return text === text.split("").reverse().join("");
}

// Use reversing an array of characters with the spread operator
function solution2(text) {
  return text === [...text].reverse().join("");
}

// Use reducing with the spread operator
function solution3(text) {
  return text === [...text].reduce((x, y) => y.concat(x));
}

// Use two pointers - iterative solution
function solution4(text) {
  var leftIndex = 0;
  var rightIndex = text.length - 1;

  while (leftIndex <= rightIndex) {
    let leftValue = text[leftIndex];
    let rightValue = text[rightIndex];

    if (leftValue != rightValue) {
      return false;
    }

    leftIndex++;
    rightIndex--;
  }

  return true;
}

// Use recursive solution
function solution5(text) {
  if (text == "" || text.length == 1) {
    return true;
  }

  let leftIndex = 0;
  let rightIndex = text.length - 1;
  if (text.charAt(leftIndex) === text.charAt(rightIndex)) {
    leftIndex++;
    let rightIndexNotIncluded = rightIndex;
    return solution5(text.substring(leftIndex++, rightIndexNotIncluded));
  } else {
    return false;
  }
}

exports.isPalindrome = isPalindrome;
