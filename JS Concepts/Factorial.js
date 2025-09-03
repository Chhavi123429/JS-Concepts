function Factorial(num) {
  let fact = 1;
  for (let i = num; i >= 1; i--) {
    fact = fact * i; //5,5*4=20,20*3=60,60*2=120,120*1=120
  }
  return fact;
}
let factorial = Factorial(6);
console.log(factorial);
