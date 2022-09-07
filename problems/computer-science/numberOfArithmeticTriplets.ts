import { assert } from '../../assert';

function arithmeticTriplets(nums: number[], diff: number): number {
  const stack = [];
  const numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    for (let j = i; j < numsLength; j++) {
      for (let k = j; k < numsLength; k++) {
        if (nums[j] - nums[i] === diff && nums[k] - nums[j] === diff) {
          stack.push(j);
        }
      }
    }
  }
  return stack.length;
}

function example1() {
  return assert(arithmeticTriplets, [[0, 1, 4, 6, 7, 10], 3], 2);
}

function example2() {
  return assert(arithmeticTriplets, [[4, 5, 6, 7, 8, 9], 2], 2);
}

export function arithmeticTripletsResults() {
  return `<p><b>Arithmetic Triplets</b></p> <p>${example1()}</P> <p>${example2()}</p>`;
}
