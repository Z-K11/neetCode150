import { groupAnagrams } from './groupAnagrams.js';
function normalize(groups) {
  return groups
    .map((group) => [...group].sort()) // sort words within each group
    .sort((a, b) => a.join(',').localeCompare(b.join(','))); // sort groups themselves
}

test('groups anagrams correctly, order independent', () => {
  const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
  const result = groupAnagrams(input);

  const expected = [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']];

  expect(normalize(result)).toEqual(normalize(expected));
});

test('a single element is grouped into a single anagram', () => {
  expect(groupAnagrams(['x'])).toEqual([['x']]);
});

test('resturns an empty group for an empty string', () => {
  expect(groupAnagrams([''])).toEqual([['']]);
});
