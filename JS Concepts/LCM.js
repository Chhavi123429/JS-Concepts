let n = 10;
let m = 15;
let count = 0;
for (let i = 1; i <= (n > m ? m : n); i++) {
  if (n % i === 0 && m % i === 0) {
    count++;
  }
}
console.log(count, "count");
