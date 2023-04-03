const solution = require("./solution");

test("two number sum up to the target sum of 11", () => {
  expect(solution.findTwoNumberSum([3, 8, 11, 1, 6], 11).sort()).toStrictEqual([
    3, 8,
  ]);
});

test("two number sum up to the target sum of 3", () => {
  expect(solution.findTwoNumberSum([3, -3, 11, 1, 6], 3).sort()).toStrictEqual([
    -3, 6,
  ]);
});

test("no two number sum up to the target sum - empty list", () => {
  expect(solution.findTwoNumberSum([3, 8, 11, 1, 6], 0).sort()).toStrictEqual(
    []
  );
});
