const { sum } = require("./sum.js");

describe("a função sum() soma", () => {
  test('sums two values 2 + 3', () => {
    expect(sum(2, 3)).toEqual(5);
  });

  test('sums two values 4 + 5', () => {
    expect(sum(4, 5)).toEqual(9);
  });

  test('sums two values 0 + 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });

  test('returns an error', () => {
    expect(() => { sum(4, '5') }).toThrowError(Error);
  });
});
