function isPrime(n) {
  if (n === 1) {
    return false;
  }
  let count = 0;
  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      count += 1;
    }
    if (count > 2) {
      return false;
    }
  }
  return true;
}

module.exports = isPrime;
