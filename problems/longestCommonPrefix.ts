import { assert } from '../assert';

function longestCommonPrefix(strs: string[]): string {
  let longestPrefix = [];
  let currentPrefix = [];
  for (let i = 0; i < strs.length; i++) {
    const s1 = strs[0].split('');
    currentPrefix = [];
    for (let j = i + 1; j < strs.length; j++) {
      const s2 = strs[j].split('');
      for (let k = 0; k < s1.length; k++) {
        if(s1[k] === s2[k]){
          currentPrefix.push(s1[k]);
        }
        if(s1[k] !== s2[k]){
          longestPrefix = currentPrefix.length > longestPrefix.length ? currentPrefix : longestCommonPrefix;
          continue;
        }
      }
    }
  }
  return longestPrefix.join('');
}

function example1() {
  return assert(longestCommonPrefix, [['flower', 'flow', 'flight']], 'fl');
}

function example2() {
  return assert(longestCommonPrefix, [['dog', 'racecar', 'car']], '');
}

export function longestCommonPrefixResults(): string {
  return `<p><b>Longest Running Prefix</b></p> <p>${example1()}</P> <p>${example2()}</p>`;
}
