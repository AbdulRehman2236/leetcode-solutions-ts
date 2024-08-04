import findMaxAverage from "../../src/sliding-window/maximum-average-subarray-I";

test("Max average of subarray with a single element", () => {
  expect(findMaxAverage([5], 1)).toEqual(5);
});

test("Max average of subarray with positive and negative numbers", () => {
  expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toEqual(12.75);
});

test("Max average of subarray with repeated numbers", () => {
  expect(findMaxAverage([0, 1, 1, 3, 3], 4)).toEqual(2);
});
