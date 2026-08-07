import { CombinationSum } from './combinationSum.js';
function normalize(arrOfArrays) {
  return arrOfArrays.map((sub) => [...sub].sort().join(',')).sort();
}
test('Gives the correct combinations that sum up to the number 5 for the given array', () => {
  expect(normalize(CombinationSum([1, 2, 3], 5))).toEqual(
    normalize([
      [1, 1, 1, 1, 1],
      [1, 1, 1, 2],
      [1, 1, 3],
      [1, 2, 2],
      [2, 3],
    ])
  );
});
