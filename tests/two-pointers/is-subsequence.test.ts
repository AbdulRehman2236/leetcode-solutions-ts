import isSubsequence from "../../src/two-pointers/is-subsequence";

test("Substring is subsequence of a given string", () => {
  expect(isSubsequence("abc", "ahbgdc")).toEqual(true);
});

test("Substring is not subsequence of a given string", () => {
  expect(isSubsequence("acb", "ahbgdc")).toEqual(false);
});

test("Substring is not subsequence of a given string", () => {
  expect(isSubsequence("axc", "ahbgdc")).toEqual(false);
});
