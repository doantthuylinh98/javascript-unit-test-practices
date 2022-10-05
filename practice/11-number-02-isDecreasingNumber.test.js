import {
  isDecreasingNumberV1,
  isDecreasingNumberV2,
} from './11-number-02-isDecreasingNumber';

describe('isDecreasingNumberV1()', () => {
  it('should return false when n is NaN', () => {
    [, 'string', [1, 2], { a: 1 }, undefined].forEach((item) =>
      expect(isDecreasingNumberV1(item)).toBe(false)
    );
  });
  it('should return false when n < 10', () => {
    Array.from({ length: 10 }, (x, idx) => idx).forEach((idx) =>
      expect(isDecreasingNumberV1(idx)).toBe(false)
    );
  });

  it('should return false when n is not a decreasing number', () => {
    [11, 648, 9999, 90873, 652098].forEach((n) =>
      expect(isDecreasingNumberV1(n)).toBe(false)
    );
  });

  it('should return true when n is a decreasing number', () => {
    [962, 84, 76543, 543210, 54].forEach((n) =>
      expect(isDecreasingNumberV1(n)).toBe(true)
    );
  });
});

describe('isDecreasingNumberV2()', () => {
  it('should return false when n is NaN', () => {
    [, 'string', [1, 2], { a: 1 }, undefined].forEach((item) =>
      expect(isDecreasingNumberV2(item)).toBe(false)
    );
  });
  it('should return false when n < 10', () => {
    Array.from({ length: 10 }, (x, idx) => idx).forEach((idx) =>
      expect(isDecreasingNumberV2(idx)).toBe(false)
    );
  });

  it('should return false when n is not a decreasing number', () => {
    [11, 648, 9999, 90873, 652098].forEach((n) =>
      expect(isDecreasingNumberV2(n)).toBe(false)
    );
  });

  it('should return true when n is a decreasing number', () => {
    [962, 84, 76543, 543210, 54].forEach((n) =>
      expect(isDecreasingNumberV1(n)).toBe(true)
    );
  });
});
