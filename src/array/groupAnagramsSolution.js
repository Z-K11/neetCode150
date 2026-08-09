function groupAnagrams(strs) {
  let result = [];
  let toSkip = [];
  for (let i = 0; i < strs.length; i++) {
    let currentCombination = [];
    let control = strs[i].split('').sort().join('');
    if (toSkip.includes(control)) continue;
    currentCombination.push(strs[i]);
    for (let j = i + 1; j < strs.length; j++) {
      let temp = strs[j].split('').sort().join('');
      if (control === temp) {
        currentCombination.push(strs[j]);
        toSkip.push(temp);
      }
    }
    result.push([...currentCombination]);
  }
  return result;
}

function betterAnagramGroups(strs) {
  let result = {};
  for (let s of strs) {
    let sortedStr = s.split('').sort().join('');
    if (!result[sortedStr]) {
      result[sortedStr] = [];
    }
    result[sortedStr].push(s);
  }
  return Object.values(result);
}
