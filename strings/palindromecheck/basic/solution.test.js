const solution = require("./solution");

test("'aba' is a palindrome", () => {
  expect(solution.isPalindrome("aba")).toBe(true);
});

test("'aba ' is not a palindrome", () => {
  expect(solution.isPalindrome("aba ")).toBe(false);
});

test("' aba' is not a palindrome", () => {
  expect(solution.isPalindrome(" aba")).toBe(false);
});

test("'aba.' is not a palindrome", () => {
  expect(solution.isPalindrome("aba ")).toBe(false);
});

test("'.aba' is not a palindrome", () => {
  expect(solution.isPalindrome(" aba")).toBe(false);
});

test("'challenge' is not a palindrome", () => {
  expect(solution.isPalindrome("challenge")).toBe(false);
});

test("'1234321' is not a palindrome", () => {
  expect(solution.isPalindrome("1234321")).toBe(true);
});

test("'Basic cisab' is not a palindrome", () => {
  expect(solution.isPalindrome("challenge")).toBe(false);
});

test("'kayak' is not a palindrome", () => {
  expect(solution.isPalindrome("kayak")).toBe(true);
});
