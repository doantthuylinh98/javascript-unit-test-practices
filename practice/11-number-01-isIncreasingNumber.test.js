// * isIncreasingNumber(n) to check if n is an increasing number:
// 1. 0 < n < 1000000;
// 2. n has 2 digits or more;
// 3. digits on the right always larger than digits on the left;

// * -> turn n into an array; use a temp to hold first number; run a loop through, if next number is smaller than temp -> return false; else, return true;

import {
  isIncreasingNumberV1,
  isIncreasingNumberV2,
} from './11-number-01-isIncreasingNumber.js';

describe('isIncreasingNumberV1()', () => {
  it('should return false when n < 10', () => {
    Array.from({ length: 10 }, (x, idx) => idx).forEach((idx) =>
      expect(isIncreasingNumberV1(idx)).toBe(false)
    );
  });
  it('should return false when n is not an increasing number', () => {
    [11, 55, 123421, 7864, 321, 666666].forEach((n) =>
      expect(isIncreasingNumberV1(n)).toBe(false)
    );
  });
  it('should return true when n is an increasing number', () => {
    [1234, 56789, 345, 12, 13569].forEach((n) =>
      expect(isIncreasingNumberV1(n)).toBe(true)
    );
  });
});

describe('isIncreasingNumberV2()', () => {
  it('should return false when n < 10', () => {
    Array.from({ length: 10 }, (x, idx) => idx).forEach((idx) =>
      expect(isIncreasingNumberV2(idx)).toBe(false)
    );
  });
  it('should return false when n is not an increasing number', () => {
    [11, 55, 123421, 7864, 321, 666666].forEach((n) =>
      expect(isIncreasingNumberV2(n)).toBe(false)
    );
  });
  it('should return true when n is an increasing number', () => {
    [1234, 56789, 345, 12, 13569].forEach((n) =>
      expect(isIncreasingNumberV2(n)).toBe(true)
    );
  });
});
