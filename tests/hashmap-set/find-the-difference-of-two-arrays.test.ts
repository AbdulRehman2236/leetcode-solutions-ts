import findDifference from "../../src/hashmap-set/find-the-difference-of-two-arrays";

test("Differences between arrays with unique and non-overlapping elements", () => {
  expect(findDifference([1, 2, 3], [2, 4, 6])).toEqual([
    [1, 3],
    [4, 6],
  ]);
});

test("Differences between arrays with duplicates and partial overlaps", () => {
  expect(findDifference([1, 2, 3, 3], [1, 1, 2, 2])).toEqual([[3], []]);
});
