import reverseWords from "../../src/array-string/reverse-words-in-a-string";

test("Reverse words in the sentence 'the sky is blue'", () => {
  expect(reverseWords("the sky is blue")).toEqual("blue is sky the");
});

test("Reverse words and trim the sentence ' hello world '", () => {
  expect(reverseWords("  hello world  ")).toEqual("world hello");
});

test("Reverse words in the sentence with extra spaces 'a good   example'", () => {
  expect(reverseWords("a good   example")).toEqual("example good a");
});
