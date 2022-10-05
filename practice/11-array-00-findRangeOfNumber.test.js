import { findRangeOfNumberV2 } from './11-array-00-findRangeOfNumber';

describe('findRangeOfNumberV2() return number depends on input number', () => {
  it('should return "Please type in a number" when there is no n', () => {
    expect(findRangeOfNumberV2()).toBe('Please type in a number');
  });
  it('should return "Not in range when number is out of range.', () => {
    [-5, -6, 1501, 1600].forEach((n) =>
      expect(findRangeOfNumberV2(n)).toBe('Not in range!')
    );
  });

  it('should return number according to the input n > 0 && n < 1500', () => {
    [1, 200, 299].forEach((n) => expect(findRangeOfNumberV2(n)).toBe(1));
    [301, 400, 588].forEach((n) => expect(findRangeOfNumberV2(n)).toBe(2));
    [601, 740, 858].forEach((n) => expect(findRangeOfNumberV2(n)).toBe(3));
    [901, 984, 1000].forEach((n) => expect(findRangeOfNumberV2(n)).toBe(4));
    [1260, 1400].forEach((n) => expect(findRangeOfNumberV2(n)).toBe(5));
  });
});
