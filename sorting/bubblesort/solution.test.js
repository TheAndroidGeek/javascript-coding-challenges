const solution = require("./solution");

test("sort empty array", () => {
  let array = [];
  let sorted = [];
  expect(solution.sort(array)).toStrictEqual(sorted);
});

test("sort array of one integer", () => {
  let array = [1];
  let sorted = [1];
  expect(solution.sort(array)).toStrictEqual(sorted);
});

test("sort array of two integers in order", () => {
  let array = [1, 2];
  let sorted = [1, 2];
  expect(solution.sort(array)).toStrictEqual(sorted);
});

test("sort array of two integers", () => {
  let array = [2, 1];
  let sorted = [1, 2];
  expect(solution.sort(array)).toStrictEqual(sorted);
});

test("sort in ascending order", () => {
  let array = [3, 6, 5, 6, 2, 9];
  let sorted = [2, 3, 5, 6, 6, 9];
  expect(solution.sort(array)).toStrictEqual(sorted);
});
