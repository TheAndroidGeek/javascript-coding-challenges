const solution = require("./solution");

test("check non decreasing array", () => {
  expect(solution.isMonotonic([1, 2, 3, 5])).toBe(true);
});

test("check non increaseing array", () => {
  expect(solution.isMonotonic([-4, -7, -10, -10, -34])).toBe(true);
});

test("check not monotonic array", () => {
  expect(solution.isMonotonic([-4, 2, 0, 0, 3, -5, -3])).toBe(false);
});

test("check zero direction with monotonic end", () => {
  expect(solution.isMonotonic([-4, -4, -4, -4, 2, 2])).toBe(true);
});

test("check array of length equal to 1", () => {
  expect(solution.isMonotonic([-4])).toBe(true);
});

test("check array of length equal to 2 increasing", () => {
  expect(solution.isMonotonic([-4, 2])).toBe(true);
});

test("check array of length equal to 2 decreasing", () => {
  expect(solution.isMonotonic([-4, 2])).toBe(true);
});
