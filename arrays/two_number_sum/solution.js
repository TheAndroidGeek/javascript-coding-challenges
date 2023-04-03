function findTwoNumberSum(array, targetSum) {
  return solution3(array, targetSum);
}

// Time: O(n^2)
// Space: O(1)
function solution1(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    let leftNum = array[i];

    for (let j = i + 1; j < array.length; j++) {
      let rightNum = array[j];
      if (leftNum + rightNum == targetSum) {
        return [leftNum, rightNum];
      }
    }
  }
  return [];
}

// Time: O(n)
// Space: O(n)
function solution2(array, targetSum) {
  let lookup = new Map();
  for (let i in array) {
    let x = array[i];
    let match = targetSum - x;
    if (lookup.get(match) === true) {
      return [x, match];
    } else {
      lookup.set(x, true);
    }
  }
  return [];
}

// Time: O(nlog(n))
// Space: O(1)
function solution3(array, targetSum) {
  array.sort((a, b) => a - b);
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < rightIndex) {
    let sum = array[leftIndex] + array[rightIndex];

    if (sum == targetSum) {
      return [array[leftIndex], array[rightIndex]];
    }

    if (sum < targetSum) {
      ++leftIndex;
    } else {
      --rightIndex;
    }
  }

  return [];
}

exports.findTwoNumberSum = findTwoNumberSum;
