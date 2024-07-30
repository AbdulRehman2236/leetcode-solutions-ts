import kidsWithCandies from "../../src/array-string/kids-with-the-greatest-number -of-candies";

test("Equal length array and extra candies", () => {
  expect(kidsWithCandies([2, 3, 5, 1, 3], 3)).toEqual([true, true, true, false, true]);
});

test("Extra candies less than some kids", () => {
  expect(kidsWithCandies([4, 2, 1, 1, 2], 1)).toEqual([true, false, false, false, false]);
});

test("Extra candies greater than some kids", () => {
  expect(kidsWithCandies([12, 1, 12], 10)).toEqual([true, false, true]);
});
