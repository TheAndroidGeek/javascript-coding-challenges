const solution = require("./solution");

test("minimum waiting time for `[3, 6, 5, 6, 2, 9]`", () => {
  expect(solution.minimumWaitingTime([3, 6, 5, 6, 2, 9])).toBe(55);
});

test("minimum waiting time for `5, 4, 3]`", () => {
  expect(solution.minimumWaitingTime([5, 4, 3])).toBe(10);
});
