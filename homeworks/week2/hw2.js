function capitalize(str) {
  return str.split('')[0].toUpperCase() + str.slice(1);
  // 把字串一個字一個字拆開為陣列，並將陣列的第一個字轉為大寫，再加入刪掉第一個值的原先字串
  // toUpperCase() function 針對不是英文的字串不會報錯，但有些 function 會報錯，使用時要謹慎
}

console.log(capitalize('hello'));
