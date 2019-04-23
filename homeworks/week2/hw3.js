function reverse(str) {
  const tempStr = str.split(''); // 宣告一個將原先字串拆為陣列的變數 tempStr = [ 'h', 'e', 'l', 'l', 'o' ]
  const strReverse = []; // 宣告一個預計儲存答案的陣列變數
  let j = tempStr.length - 1;
  for (let i = 0; i < tempStr.length; i += 1) {
    strReverse[j] = tempStr[i];
    j -= 1; // 以傳入字串'hello'為例，迴圈代表：strReverse[4] = tempStr[0], strReverse[3] = tempStr[1] ... 以此類推
  }
  console.log(strReverse.join('')); // 將陣列內容組回字串，就是答案了
}

reverse('hello');
