import longestSubarray from "../../src/sliding-window/longest-subarray-of-ones-after-deleting-one-element";

test("Returns the maximum length of consecutive 1s when flipping at most 1 zero", () => {
  expect(longestSubarray([1, 1, 0, 1])).toEqual(3);
});

test("Returns the maximum length of consecutive 1s when flipping at most 1 zero in a mixed array", () => {
  expect(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])).toEqual(5);
});

test("Returns the maximum length of consecutive 1s when no zeros are present", () => {
  expect(longestSubarray([1, 1, 1])).toEqual(2);
});
