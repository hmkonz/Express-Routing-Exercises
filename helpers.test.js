const { findMean, findMedian, findMode } = require("./helpers");

describe("median", function () {
  test("finds the median of an even set", function () {
    expect(findMedian([1, -1, 4, 2])).toEqual(1.5);
  });
  test("finds the median of an odd set", function () {
    expect(findMedian([1, -1, 4])).toEqual(1);
  });
});

describe("mean", function () {
  test("finds the mean of a set", function () {
    expect(findMean([1, 2, 3, 4])).toEqual(2.5);
  });
  test("finds the mean of an empty array", function () {
    expect(findMean([])).toEqual(0);
  });
});

describe("mode", function () {
  test("finds the mode of an array", function () {
    expect(findMode([1, 3, 6, 3, 8, 9, 3])).toEqual(3);
  });
});
