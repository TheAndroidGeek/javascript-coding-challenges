const solution = require("./solution");

test("encrypt using caesar cipher", () => {
  expect(solution.encrypt("xyz", 2)).toStrictEqual("zab");
});

test("encrypt using caesar cipher", () => {
  expect(solution.encrypt("XYZ", 2)).toStrictEqual("ZAB");
});
