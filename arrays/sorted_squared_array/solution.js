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
// Space: O(1)
function solution2(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  for (let i = array.length - 1; i > 0; i--) {
    let leftValue = Math.abs(array[leftIndex]); // smaller
    let rightValue = Math.abs(array[rightIndex]); // larger

    if (leftValue > rightValue) {
      swap(leftIndex, rightIndex, array);
      array[i] = leftValue * leftValue;
      rightIndex--;
    } else {
      array[i] = rightValue * rightValue;
      rightIndex--;
    }
  }

  return array;
}

function swap(leftIndex, rightIndex, array) {
  let temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;
}

exports.sort = sort;
