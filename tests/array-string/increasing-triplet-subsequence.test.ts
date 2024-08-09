import increasingTriplet from "../../src/array-string/increasing-triplet-subsequence";

test("Increasing sequence of an array return true", () => {
  expect(increasingTriplet([1, 2, 3, 4, 5])).toEqual(true);
});

test("Decreasing sequence of an array return true", () => {
  expect(increasingTriplet([5, 4, 3, 2, 1])).toEqual(false);
});

test("Mixed sequence with valid triplet return true", () => {
  expect(increasingTriplet([2, 1, 5, 0, 4, 6])).toEqual(true);
});

test("Mixed sequence with valid triplet return true", () => {
  expect(increasingTriplet([20, 100, 10, 12, 5, 13])).toEqual(true);
});
