import pivotIndex from "../../src/prefix-sum/find-pivot-index";

test("Return index as 3 as leftmost pivot index match right indices", () => {
  expect(pivotIndex([1, 7, 3, 6, 5, 6])).toEqual(3);
});

test("Return -1 as no leftmost pivot index match right indices", () => {
  expect(pivotIndex([1, 2, 3])).toEqual(-1);
});

test("Return index as 0 as leftmost pivot index match right indices", () => {
  expect(pivotIndex([2, 1, -1])).toEqual(0);
});
