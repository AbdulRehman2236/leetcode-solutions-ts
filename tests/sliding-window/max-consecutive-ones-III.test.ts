import longestOnes from "../../src/sliding-window/max-consecutive-ones-III";

test("Returns the maximum length of consecutive 1s when flipping at most 2 zeros", () => {
  expect(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)).toEqual(6);
});

test("Returns the maximum length of consecutive 1s when flipping at most 3 zeros", () => {
  expect(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)).toEqual(10);
});
