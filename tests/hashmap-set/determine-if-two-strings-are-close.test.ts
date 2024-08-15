import closeStrings from "../../src/hashmap-set/determine-if-two-strings-are-close";

test("Returns true when both strings have same frequencies", () => {
  expect(closeStrings("abc", "bca")).toEqual(true);
});

test("Returns false when one string has unique frequencies and the other doesn't", () => {
  expect(closeStrings("a", "aa")).toEqual(false);
});

test("Returns true when both strings have the same frequencies and can be transformed into each other", () => {
  expect(closeStrings("cabbba", "abbccc")).toEqual(true);
});

test("Returns false when both strings have different frequencies and cannot be transformed into each other", () => {
  expect(closeStrings("abzczba", "czbzazb")).toEqual(false);
});

test("Returns false when the frequencies of characters in the two strings differ in an incompatible way", () => {
  expect(closeStrings("aaabbbbccddeeeeefffff", "aaaaabbcccdddeeeeffff")).toEqual(false);
});
