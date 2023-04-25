const solution = require("./solution");

test("check target number is in the array", () => {
  expect(solution.search([1, 2, 3, 5, 7, 8, 9], 3)).toBe(2);
});

test("check target number is not in the array", () => {
  expect(solution.search([1, 2, 3, 5, 7, 8, 9], 6)).toBe(-1);
  expect(solution.search([1, 2, 3, 5, 7, 8, 9], -3)).toBe(-1);
});
