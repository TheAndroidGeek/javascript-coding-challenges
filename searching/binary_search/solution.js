function search(array, target) {
  return solution2(array, target, 0, array.length - 1);
}

// Use recursive
// Time: O(log(n))
// Space: O(log(n))
function solution1(array, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) return -1;

  let middleIndex = (leftIndex + rightIndex) / 2;
  let middleValue = array[middleIndex];

  if (target == middleValue) return middleIndex;

  if (target < middleValue) {
    return solution1(array, target, leftIndex, middleIndex - 1);
  } else {
    return solution1(array, target, middleIndex + 1, rightIndex);
  }
}

// Use iterative
// Time: O(log(n))
// Space: O(1)
function solution2(array, target, leftIndex, rightIndex) {
  let left = leftIndex;
  let right = rightIndex;

  while (left <= right) {
    let middleIndex = (left + right) / 2;
    let middleValue = array[middleIndex];

    if (target == middleValue) return middleIndex;

    if (target < middleValue) {
      right = middleIndex - 1;
    } else {
      left = middleIndex + 1;
    }
  }

  return -1;
}

exports.search = search;
