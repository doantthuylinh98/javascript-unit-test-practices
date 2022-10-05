// sum(n) = 1 + 2 + 3 + 4 + ... + n;

import { sumPlusArrV1, sumPlusArrV2 } from './11-number-00-sumPlusArr.js';

describe('sumPlusArrV1() return a number which is a sum of n number (increase by 1 unit); n > 0 and is a cardinal number', () => {
  test('should return 0 when n <= 0 || n is not a number || nothing pass in', () => {
    expect(sumPlusArrV1(-12)).toBe(0);
    expect(sumPlusArrV1([])).toBe(0);
    expect(sumPlusArrV1('Hey')).toBe(0);
    expect(sumPlusArrV1()).toBe(0);
  });
  test('should return 0 when pass in NaN', () => {
    expect(sumPlusArrV1(NaN)).toBe(0);
  });
  test('should return "Not a cardinal number. Number should be: 1, 2, 3,... 1000,...."', () => {
    expect(sumPlusArrV1(1.2)).toBe(
      'Not a cardinal number. n should be: 1, 2, 3,... 1000,....'
    );
    expect(sumPlusArrV1(4.7)).toBe(
      'Not a cardinal number. n should be: 1, 2, 3,... 1000,....'
    );
  });
  test('should return sum(n) when n >= 1 and this sum is total of increasing number from 1 to n', () => {
    expect(sumPlusArrV1(4)).toBe(10);
    expect(sumPlusArrV1(10)).toBe(55);
  });
});

describe('sumPlusArrV2() return a number which is a sum of n number (increase by 1 unit); n > 0 and is a cardinal number', () => {
  test('should return 0 when n <= 0 || n is not a number || nothing pass in', () => {
    expect(sumPlusArrV2(-12)).toBe(0);
    expect(sumPlusArrV2([])).toBe(0);
    expect(sumPlusArrV2('Hey')).toBe(0);
    expect(sumPlusArrV2()).toBe(0);
  });
  test('should return 0 when pass in NaN', () => {
    expect(sumPlusArrV2(NaN)).toBe(0);
  });
  test('should return "Not a cardinal number. Number should be: 1, 2, 3,... 1000,...."', () => {
    expect(sumPlusArrV2(1.2)).toBe(
      'Not a cardinal number. n should be: 1, 2, 3,... 1000,....'
    );
    expect(sumPlusArrV2(4.7)).toBe(
      'Not a cardinal number. n should be: 1, 2, 3,... 1000,....'
    );
  });
  test('should return sum(n) when n >= 1 and this sum is total of increasing number from 1 to n', () => {
    expect(sumPlusArrV2(4)).toBe(10);
    expect(sumPlusArrV2(10)).toBe(55);
  });
});
