import { isAnagram } from './anagram.js';
test('Returns true for a correct anagram', () => {
  expect(isAnagram('carrace', 'racecar')).toBe(true);
});
test('Returns falls for an incorrect anagram', () => {
  expect(isAnagram('racecar', 'racercar')).toBe(false);
});
