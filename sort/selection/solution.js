/**
 * Sorts array of integers using Selection sorting.
 * @param {Array} array - The array of integers.
 * @returns sorted version of the array
 */
function sort(array) {
  return solution1(array);
}

// Use unoptimized implementation
// Time: O(n^2)
// Space: O(1)
function solution1(array) {
  let leftIndex = 0;

  while (leftIndex < array.length - 1) {
    let smallestNumIndex = leftIndex;

    for (let i = leftIndex + 1; i < array.length; i++) {
      if (array[smallestNumIndex] > array[i]) smallestNumIndex = i;
    }

    swap(leftIndex, smallestNumIndex, array);
    leftIndex++;
  }

  return array;
}

function swap(leftIndex, rightIndex, array) {
  let temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;
}

exports.sort = sort;
