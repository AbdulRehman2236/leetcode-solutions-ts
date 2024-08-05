import maxVowels from "../../src/sliding-window/maximum-vowels-in-substring-of-length-k";

test("Max number of vowels in a subarray of given length", () => {
  expect(maxVowels("abciiidef", 3)).toEqual(3);
});

test("Max number of vowels in a subarray of length k where the subarray contains all vowels", () => {
  expect(maxVowels("aeiou", 2)).toEqual(2);
});

test("Max number of vowels in a subarray of length less than k", () => {
  expect(maxVowels("leetcode", 3)).toEqual(2);
});
