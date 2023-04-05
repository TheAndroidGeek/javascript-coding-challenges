const solution = require("./solution");

test("validate if subsequence", () => {
  let array = [8, -2, 25, 28, 3, -4, 11, 13, 90, 23];
  let sequence = [-2, 3, -4, 13];
  expect(solution.isSubsequence(array, sequence)).toBe(true);
});

test("validate if not subsequence", () => {
  let array = [8, -2, 25, 28, 3, -4, 11, 13];
  let sequence = [-2, 3, -5, 13];
  expect(solution.isSubsequence(array, sequence)).toBe(false);
});
