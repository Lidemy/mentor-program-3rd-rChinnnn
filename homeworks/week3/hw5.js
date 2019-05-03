function add(a, b) {
  // 先將 a, b 數值拆解成陣列，再指定正確的陣列位置作加法
  const tempA = a.split('');
  const tempB = b.split('');

  function compare() {
    if (tempA.length > tempB.length) {
      return true;
    }
    return false;
  }
  let output = '';
  output = compare() ? tempA : tempB; // 先指定 output 的值為較大的數（分解後）

  /* 少了以下這一整組判斷時，在 Lidemy OJ 可通過，但是在自己的測資會失敗 */
  if (compare()) { // 如果長度不對等就補 0 在最前面，補到前一位
    for (let i = 0; i < tempA.length - tempB.length; i += 1) {
      tempB.unshift('0');
    }
  } else {
    for (let i = 0; i < tempB.length - tempA.length; i += 1) {
      tempA.unshift('0');
    }
  }
  const addLength = (parseInt(a, 10) + parseInt(b, 10)).toString().length;
  if (tempA.length === tempB.length && addLength > output.length) {
    tempA.unshift('0');
    tempB.unshift('0');
  } // 兩數若長度相等且相加後，總長度若比原本較大的數長，直接增加一個元素至陣列最前方，以符合 for 迴圈的演算
  /* 少了以上這一整組判斷時，在 Lidemy OJ 可通過，但是在自己的測資會失敗 */

  let loopTimes = ''; // 總共要做幾次加法
  loopTimes = compare() ? tempB.length : tempA.length; // 做幾次加法依較小的陣列長度為主

  for (let i = 0; i < loopTimes; i += 1) {
    const L = output.length - 1; // 指定要修改的 output 陣列位置
    const parseA = parseInt(tempA[tempA.length - 1 - i], 10); // 縮減一下不然下一行會超過 100 字
    const tempAdd = (parseA + parseInt(tempB[tempB.length - 1 - i], 10)); // 暫存相加後的值
    if (tempAdd >= 10) { // 如果兩數相加大於 10，必須進位
      const tempDecimal = tempAdd.toString().split(''); // 暫存大於 10 的數值
      output[L - i] = tempDecimal[1].toString();
      output[L - i - 1] = (parseInt(output[L - i - 1], 10) + 1).toString();
    } else {
      output[L - i] = tempAdd.toString();
    }
  }
  return output.join('');
}

module.exports = add;
