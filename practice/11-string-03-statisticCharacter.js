// Take in a string
// return an object which contain character count
// "aa bb ccccc" ---> {a: 2, b: 2, c: 5, space: 2}

function statisticCharacter(str) {
  if (str === undefined) return 'Please type in some words';

  if (str === '') return {};

  let statisticCharacter;

  str.split('').forEach((character) => {
    statisticCharacter.space = 0;

    if (statisticCharacter[character] === ' ') {
      statisticCharacter[space] += 1;
    } else if (
      statisticCharacter[character] &&
      statisticCharacter[character] !== ' '
    ) {
      statisticCharacter[character] += 1;
    } else {
      statisticCharacter[character] = 1;
    }
  });

  return statisticCharacter;
}

console.log(statisticCharacter(''));
console.log(statisticCharacter('aa bb'));
