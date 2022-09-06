import { assert } from '../assert';

function isPalindrome(x: number): boolean {
  const stringNumber = x.toString();
  return stringNumber.split('').reverse().join('') === stringNumber;
}

function isPalindromeTest1() {
  return assert(isPalindrome, [121], true);
}

export function palindromeNumberResults(): string {
  return `<p><b>Palindrome Number</b></p> ${isPalindromeTest1()}`;
}
