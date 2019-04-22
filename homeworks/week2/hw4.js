function printFactor(n) {
  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      console.log(i);
    }

    // 暴力破解法，假設傳入值 n = 1000, 迴圈代表用 1000 除以 1~1000（除 1000 次），如果該次的運算結果沒有餘數，那麼除數就是其中一個因數
  }
}

printFactor(10);
