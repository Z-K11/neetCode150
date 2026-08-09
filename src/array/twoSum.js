export function twoSum(array, target) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) return [i, j];
    }
    return undefined;
  }
}

console.log(twoSum([1, 2, 3], 4));
