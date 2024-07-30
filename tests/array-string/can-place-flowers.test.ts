import canPlaceFlowers from "../../src/array-string/can-place-flowers";

test("canPlaceFlowers returns true when there is space for 1 flower", () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toEqual(true);
});

test("canPlaceFlowers returns false when there isn't enough space for 2 flowers", () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toEqual(false);
});
