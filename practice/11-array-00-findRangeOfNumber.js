export function findRangeOfNumberV2(n) {
  if (!n) return 'Please type in a number';
  if (n < 0 || n > 1500) return 'Not in range!';

  const range = [
    { range: [0, 300], result: 1 },
    { range: [301, 600], result: 2 },
    { range: [601, 900], result: 3 },
    { range: [901, 1200], result: 4 },
    { range: [1201, 1500], result: 5 },
  ];

  // n = 300 -> result: 1
  return range.find((item) => {
    return n >= item.range[0] && n <= item.range[1];
  }).result;
}

console.log(findRangeOfNumberV2(-1));
console.log(findRangeOfNumberV2(300));
console.log(findRangeOfNumberV2(407));
console.log(findRangeOfNumberV2(589));
console.log(findRangeOfNumberV2(1201));
