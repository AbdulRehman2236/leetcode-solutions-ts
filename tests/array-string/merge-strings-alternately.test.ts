import mergeAlternately from "../../src/array-string/merge-strings-alternately";

test("Merge Alternately with equal length strings", () => {
  expect(mergeAlternately("abc", "pqr")).toEqual("apbqcr");
});

test("Merge Alternately with first string shorter", () => {
  expect(mergeAlternately("ab", "pqrs")).toEqual("apbqrs");
});

test("Merge Alternately with second string shorter", () => {
  expect(mergeAlternately("abcd", "pq")).toEqual("apbqcd");
});
