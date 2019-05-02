function stars(n) {
  const output = [];
  let star = '';
  for (let i = 0; i < n; i += 1) {
    star += '*';
    output.push(star);
  }
  return output;
}

module.exports = stars;
