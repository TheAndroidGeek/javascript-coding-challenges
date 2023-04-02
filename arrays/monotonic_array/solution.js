/**
 * Checks monotonic direction of an array of integers.
 * @param {array} array - The array of integers.
 * @returns true when monotonic, otherwise false.
 */
function isMonotonic(array) {
  return solution2(array);
}

// Use iterative
// Time: O(n)
// Space: O(1)
function solution1(array) {
  let isNotDecreasing = true;
  let isNotIncreasing = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) isNotDecreasing = false;
    if (array[i] > array[i - 1]) isNotIncreasing = false;
  }

  return isNotDecreasing || isNotIncreasing;
}

// Use iterative
// Time: O(n)
// Space: O(1)
function solution2(array) {
  if (array.length <= 2) return true;

  let direction = array[1] - array[0];
  for (let i = 2; i < array.length; i++) {
    if (direction == 0) {
      direction = array[i] - array[i - 1];
      continue;
    }
    if (breaksDirection(direction, array[i - 1], array[i])) return false;
  }

  return true;
}

function breaksDirection(direction, prev, curr) {
  return direction > 0 ? curr - prev < 0 : curr - prev > 0;
}

exports.isMonotonic = isMonotonic;
