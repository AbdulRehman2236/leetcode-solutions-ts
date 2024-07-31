import maxOperations from "../../src/two-pointers/max-number-of-k-sum-pairs";

test("Array where elements sum to k with multiple pairs", () => {
  expect(maxOperations([1, 2, 3, 4], 5)).toEqual(2);
});

test("Array with some elements able to form pairs summing to k", () => {
  expect(maxOperations([3, 1, 3, 4, 3], 6)).toEqual(1);
});

test("Array with multiple occurrences of elements forming pairs summing to k", () => {
  expect(maxOperations([4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4], 2)).toEqual(2);
});
