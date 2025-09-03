function Square(num) {
  let i = 1;
  while (i * i <= num) {
    i++;
  }
  i--;
  if (i * i === num) {
    return i;
  } else return "Not a square";
}
let sqrt = Square(225);
console.log(sqrt);
