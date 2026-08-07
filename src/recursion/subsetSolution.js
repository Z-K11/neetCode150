function subset(num = [1, 2]) {
  let res = [];
  let subset = [];
  function dfs(i) {
    if (i === num.length) {
      res.push([...subset]);
      return;
    }
    subset.push(num[i]);
    dfs(i + 1);
    subset.pop();
    dfs(i + 1);
  }
  dfs(0);
  return res;
}
