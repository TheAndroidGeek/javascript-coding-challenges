/**
 * Calculates minimum waiting time for all queries.
 * @param {Array} array - The array of positive integers.
 * @returns the minimum amount of total waiting time for all queries.
 */
function minimumWaitingTime(queries) {
  return solution1(queries);
}

// Use sorted queries
// Time: O(nlogn)
// Space: O(1)
function solution1(queries) {
  queries.sort();
  let totalWaitingTime = 0;

  for (let i = 0; i < queries.length; i++) {
    let duration = queries[i];
    let queriesLeft = queries.length - i - 1;
    totalWaitingTime += duration * queriesLeft;
  }

  return totalWaitingTime;
}

exports.minimumWaitingTime = minimumWaitingTime;
