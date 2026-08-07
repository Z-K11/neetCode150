function duplicate(num) {
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] === num[j]) return true;
    }
  }
  return false;
}
