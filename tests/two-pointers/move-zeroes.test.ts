import moveZeroes from "../../src/two-pointers/move-zeroes";

test("Array contains zeros at the starting", () => {
  expect(moveZeroes([0, 0, 1])).toEqual([1, 0, 0]);
});

test("Array contains in between different elements", () => {
  expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
});

test("Single element array with zero", () => {
  expect(moveZeroes([0])).toEqual([0]);
});
