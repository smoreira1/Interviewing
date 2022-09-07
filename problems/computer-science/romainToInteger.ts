import { assert } from '../assert';
//https://leetcode.com/problems/roman-to-integer/
function romanToInt(s: string): number {
  const romanArray = s.split('');
  const intArray = [];
  for (let i = 0; i < romanToInt.length; i++) {
    if (romanArray[i] === 'I') {
      // intArray.unshift(i);
    }
  }

  let int = 0;
  // for (let i = 0; i < intArray.length; i++) {
  //   int = int + intArray[i];
  // }
  return int;
}

function example1() {
  return assert(romanToInt, ['III'], 3);
}

function example2() {
  return assert(romanToInt, ['LVIII'], 58);
}

function example3() {
  return assert(romanToInt, ['MCMXCIV'], 1994);
}

export function romainToIntResults() {
  return `<p><b>Roman to Int:</b></p> ${example1()} ${example2()} ${example3()}`;
}
