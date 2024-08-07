import uniqueOccurrences from "../../src/hashmap-set/unique-number-of-occurrences";

test("Returns false when numbers have the same frequency", () => {
  expect(uniqueOccurrences([1, 2])).toEqual(false);
});

test("Returns true when all numbers have unique frequencies", () => {
  expect(uniqueOccurrences([1, 2, 2, 1, 1, 3])).toEqual(true);
});

test("Returns true when both positive and negative numbers have unique frequencies", () => {
  expect(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])).toEqual(true);
});
