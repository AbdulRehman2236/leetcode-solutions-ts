import reverseVowels from "../../src/array-string/reverse-vowels-of-a-string";

test("Reverse vowels in the word hello", () => {
  expect(reverseVowels("hello")).toEqual("holle");
});

test("Reverse vowels in the word leetcode", () => {
  expect(reverseVowels("leetcode")).toEqual("leotcede");
});
