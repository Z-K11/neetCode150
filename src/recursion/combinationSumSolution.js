function CombinationSum(num, target) {
  let result = [];
  let combination = [];
  function adder(i) {
    if (combination.reduce((current, next) => current + next, 0) === target) {
      result.push([...combination]);
      return;
    }
    if (combination.reduce((current, next) => current + next, 0) > target) {
      return;
    }
    if (i >= num.length) {
      return;
    }
    combination.push(num[i]);
    adder(i);
    combination.pop();
    adder(i + 1);
  }
  adder(0);
  return result;
}
