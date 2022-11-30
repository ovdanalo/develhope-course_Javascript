function sumUntil(maxValue) {
  let sum = maxValue;
  for (i = 0; i < maxValue; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumUntil(5));