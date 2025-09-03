let a = 240;
let b = 360;
let temp;
for (let i = a < b ? a : b; i >= 1; i--) {
  if (a % i === 0 && b % i === 0) {
    temp = i;
    break;
  }
}
console.log(temp, "temp");
