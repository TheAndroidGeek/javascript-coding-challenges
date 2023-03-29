/**
 * Sorts squares of an array of integers.
 * @param {array} text - The sorted array of integers.
 * @returns sorted array of squares of the input array.
 */
function sort(array) {
  return solution2(array);
}

// Use standard built-in objects
// Time: O(nlogn)
// Space: O(n)
function solution1(array) {
  return array.map((x) => x * x).sort((a, b) => a - b);
}

// Use iterative
// Time: O(n)
// Space: O(n)
function solution2(array) {
  let sortedSquares = []; // new array required
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--) {
    let leftValue = Math.abs(array[leftIndex]); // smaller
    let rightValue = Math.abs(array[rightIndex]); // larger

    if (leftValue > rightValue) {
      sortedSquares[i] = leftValue * leftValue;
      leftIndex++;
    } else {
      sortedSquares[i] = rightValue * rightValue;
      rightIndex--;
    }
  }

  return sortedSquares;
}

exports.sort = sort;
