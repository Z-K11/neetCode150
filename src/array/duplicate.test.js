import { duplicate } from './duplicate.js';
test('Successfuly spots duplicates from an array of 10 element', () => {
  expect(duplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 9])).toBe(true);
});

test('Sucessfuly checks if there are no duplicates', () => {
  expect(duplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe(false);
});

test('Succesffuly checks if there are non adjacent duplicates', () => {
  expect(duplicate([1, 2, 3, 4, 5, 6, 7, 8, 1, 0])).toBe(true);
});
