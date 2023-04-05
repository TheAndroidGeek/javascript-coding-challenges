function isSubsequence(array, sequence) {
  return solution1(array, sequence);
}

function solution1(array, sequence) {
  let current = 0;
  for (let i in array) {
    if (current === sequence.length) return true;
    if (sequence[current] === array[i]) current++;
  }
  return false;
}

exports.isSubsequence = isSubsequence;
