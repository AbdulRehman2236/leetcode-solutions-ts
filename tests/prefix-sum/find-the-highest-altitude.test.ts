import largestAltitude from "../../src/prefix-sum/find-the-highest-altitude";

test("Negative and positive gains when highest altitude is one", () => {
  expect(largestAltitude([-5, 1, 5, 0, -7])).toEqual(1);
});

test("Negative and positive gains when highest altitude is zero", () => {
  expect(largestAltitude([-4, -3, -2, -1, 4, 3, 2])).toEqual(0);
});
