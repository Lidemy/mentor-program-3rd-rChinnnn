function capitalize(str) {
  return str.split('')[0].toUpperCase() + str.slice(1);
}

console.log(capitalize('hello'));
