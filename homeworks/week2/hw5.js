function join(str, concatStr) {
  let ans = ''; // 宣告要儲存答案的變數
  for (let i = 0; i < str.length; i += 1) {
    ans += (str.length - i === 1) ? str[i].toString()
      : str[i].toString() + concatStr;
    // 使用迴圈來將傳入陣列內的元素（強制改變型態為字串）及傳入的字串一個一個加進 ans 變數中
    // 判斷若為最後一次迴圈，則不加字串，此作法可使用 if-else 來達成
    // 問號與冒號結合的寫法為：若問號前的判斷式為 true，則執行冒號前的動作，否則就執行冒號後的動作
    // 冒號後可以繼續接判斷式，等同於 if-else if-else，可參考：https://codepen.io/anon/pen/MRBpOw
  }
  return ans;
}

function repeat(str, times) {
  let ans = ''; // 宣告要儲存答案的變數
  for (let i = 0; i < times; i += 1) {
    ans += str;
    // 使用迴圈來將字串結合，結合幾次就看傳入的 times 是幾次
  }
  return ans;
}

console.log(join(['a', 1, 'b', 2, 'c', 3], ','));
console.log(repeat('yoya', 3));
