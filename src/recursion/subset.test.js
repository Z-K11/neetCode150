import { subset } from './subset.js';
function normalize(arrOfArrays) {
  return arrOfArrays.map((sub) => [...sub].sort().join(',')).sort();
}
test('Gives correct subsets for the an array of 3 digits', () => {
  expect(normalize(subset([1, 2, 3]))).toEqual(
    normalize([[1, 2, 3], [1, 2], [1, 3], [1], [2, 3], [2], [3], []])
  );
});
