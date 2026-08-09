import { twoSum } from './twoSum.js';
test('Correctly outputs the sum of two digits that equals to target', () => {
  expect(twoSum([1, 2, 3], 4)).toEqual([0, 2]);
});

test('Correctly returns the combination for a bigger array', () => {
  expect(twoSum([3, 4, 5, 6], 7)).toEqual([0, 1]);
});

test('Returns undefined if target not found', () => {
  expect(twoSum([], 10)).toBe(undefined);
});
