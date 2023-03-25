/**
 * Checks text is palindrome.
 * @param {string} text - The text to check.
 * @returns true when text is palindrome, otherwise false.
 */
function isPalindrome(text) {
  return solution7(text);
}

// Use reversing an array of characters with the split function
// Time: O(n)
// Space: O(n)
function solution1(text) {
  return text === text.split("").reverse().join("");
}

// Use reversing an array of characters with the spread operator
// Time: O(n)
// Space: O(n)
function solution2(text) {
  return text === [...text].reverse().join("");
}

// Use reducing with the spread operator
// Time: O(n)
// Space: O(n)
function solution3(text) {
  return text === [...text].reduce((x, y) => y.concat(x));
}

// [OPTIMAL SOLUTION] Use two pointers - iterative solution
// Time: O(n)
// Space: O(1)
function solution4(text) {
  var leftIndex = 0;
  var rightIndex = text.length - 1;

  while (leftIndex < rightIndex) {
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
// Time: O(n)
// Space: O(n)
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

// Use string concatenation
// Time: O(n^2)
// Space: O(n)
function solution6(text) {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text.charAt(i);
  }
  return text === reversed;
}

// Use recursive solution
// Time: O(n)
// Space: O(n)
function solution7(text = "", leftIndex = 0) {
  let rightIndex = text.length - 1 - leftIndex;

  if (leftIndex >= rightIndex) {
    return true;
  } else {
    return (
      text.charAt(leftIndex) === text.charAt(rightIndex) &&
      solution7(text, leftIndex + 1)
    );
  }
}

exports.isPalindrome = isPalindrome;
