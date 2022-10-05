'use strict';

// export function statisticWords(str) {
//   if (str === '') return {};
//   const statisticWords = {};
//   const wordsArr = str
//     .split(' ')
//     .filter((x) => x !== '')
//     .map((word) => {
//       if (statisticWords[word]) {
//         statisticWords[word] += 1;
//       } else {
//         statisticWords[word] = 1;
//       }
//     });
//   console.log(wordsArr);
//   return statisticWords;
// }

export function statisticWords(str) {
  if (str === '') return {};

  const statisticWords = str
    .split(' ')
    .filter((x) => x !== '')
    .reduce((statistic, word) => {
      // if (statistic[word]) {
      //   statistic[word] += 1;
      //   ß;
      // } else {
      //   statistic[word] = 1;
      // }

      statistic[word] = statistic[word] !== undefined ? statistic[word] + 1 : 1;
      return statistic;
    }, {});

  console.log(statisticWords);
  return statisticWords;
}
statisticWords('this is a string, is it?');
statisticWords('this     is  a   string');
