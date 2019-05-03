function alphaSwap(str) {
  let output = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) {
    // if (str[i].toUpperCase() == str[i]) { //另一種判斷方法
      output += str[i].toLowerCase();
    } else {
      output += str[i].toUpperCase();
    }
  }
  return output;
}

module.exports = alphaSwap;
