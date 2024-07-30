import productExceptSelf from "../../src/array-string/product-of-array-except-self";

test("Product of array except self without zero", () => {
  expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
});

test("Product of array except self with zero", () => {
  expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
});
