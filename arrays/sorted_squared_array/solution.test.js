const solution = require("./solution");

test("sort squares of positive integers", () => {
  expect(solution.sort([1, 2, 3, 5])).toStrictEqual([1, 4, 9, 25]);
});

test("sort squares of integers (negative, zero, positive)", () => {
  expect(solution.sort([-4, 2, 0, 3, 5])).toStrictEqual([0, 4, 9, 16, 25]);
});
