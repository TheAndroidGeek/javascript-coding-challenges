/**
 * Sorts array of integers using Bubble sorting.
 * @param {Array} array - The array of integers.
 * @returns sorted version of the array
 */
function sort(array) {
  return solution2(array);
}

// Use unoptimized implementation
// Time: O(n^2)
// Space: O(1)
function solution1(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(j, j + 1, array);
      }
    }
  }
  return array;
}

// [OPTIMAL SOLUTION] Use optimized implementation
// Time: O(n)
// Space: O(1)
function solution2(array) {
  if (array.length == 0) return array;

  let isSorted = false;
  let numberOfSorted = 0;

  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < array.length - 1 - numberOfSorted; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        isSorted = false;
      }
    }
    numberOfSorted++;
  }

  return array;
}

function swap(leftIndex, rightIndex, array) {
  let temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;
}

exports.sort = sort;
