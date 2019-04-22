function reverse(str) {
  const tempStr = str.split('');
  const strReverse = [];
  let j = tempStr.length - 1;
  for (let i = 0; i < tempStr.length; i += 1) {
    strReverse[j] = tempStr[i];
    j -= 1;
  }
  console.log(strReverse.join(''));
}

reverse('hello');
