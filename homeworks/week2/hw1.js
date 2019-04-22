function printStars(n) {
  if (n >= 1 && n <= 30) { // 先判斷 n 是否於給定範圍內
    for (let i = 1; i <= n; i += 1) {
      console.log('*');
    }
  } else {
    console.log('n 不符合給定範圍');
  }
}
printStars(5);
