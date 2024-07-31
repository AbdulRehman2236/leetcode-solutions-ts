import maxOperations from "../../src/two-pointers/max-number-of-k-sum-pairs";

test("Array contains zeros at the starting", () => {
  expect(maxOperations([1, 2, 3, 4], 5)).toEqual(2);
});

test("Array contains in between different elements", () => {
  expect(maxOperations([3, 1, 3, 4, 3], 6)).toEqual(1);
});

test("Single element array with zero", () => {
  expect(maxOperations([4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4], 2)).toEqual(2);
});
