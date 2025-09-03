function Prime(num) {
  if (num < 0) {
    console.log("number should be greater than 0");
    return false;
  }
  let count = 0;

  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }
  if (count === 1) {
    return true;
  } else {
    return false;
  }
}
let prime = Prime(-5);
console.log(prime, "");
