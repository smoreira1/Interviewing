import { assert } from '../assert';

function romanToInt(s: string): number {
  const romanArray = s.split('');
  const intArray = [];
  for (let i = 0; i < romanToInt.length; i++) {
    if (romanArray[i] === 'I') {
      intArray.unshift(i);
    }
  }

  let int = 0;
  for (let i = 0; i < intArray.length; i++) {
    int = int + intArray[i];
  }
  return int;
}

function example1() {
  return assert(romanToInt, ['III'], 3);
}

export function romainToIntResults() {
  return `<p><b>Roman to Int:</b></p> ${example1()}`;
}
