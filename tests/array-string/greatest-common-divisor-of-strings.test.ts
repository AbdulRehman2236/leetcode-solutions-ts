import gcdOfStrings from "../../src/array-string/greatest-common-divisor-of-strings";

test("GCD of Strings with common divisor and equal length repeating pattern", () => {
  expect(gcdOfStrings("ABCABC", "ABC")).toEqual("ABC");
});

test("GCD of Strings with first string having longer repeating pattern", () => {
  expect(gcdOfStrings("ABABAB", "ABAB")).toEqual("AB");
});

test("GCD of Strings with no common divisor", () => {
  expect(gcdOfStrings("LEET", "CODE")).toEqual("");
});

test("GCD of Strings with large common divisor", () => {
  expect(gcdOfStrings("TAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX")).toEqual("TAUXX");
});
