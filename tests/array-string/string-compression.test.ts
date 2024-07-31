import compress from "../../src/array-string/string-compression";

test("String with a single character", () => {
  expect(compress(["a"])).toEqual(1);
});

test("String with different characters sequentially", () => {
  expect(compress(["a", "a", "b", "b", "c", "c", "c"])).toEqual(6);
});

test("String with repeating characters at different positions", () => {
  expect(compress(["a", "a", "a", "b", "b", "a", "a"])).toEqual(6);
});

test("String with a character repeating more than ten times", () => {
  expect(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])).toEqual(4);
});
