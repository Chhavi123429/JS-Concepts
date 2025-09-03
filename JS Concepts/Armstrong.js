let originalNum = 153;
let num = originalNum;
let sum = 0;
//1. digit
let noDigits = num.toString().length;
console.log(typeof noDigits, noDigits);
//2. power
//3. add
for (let i = 0; i < noDigits; i++) {
  let temp = num % 10; //  temp 3,5,1
  console.log(temp);
  sum = sum + Math.pow(temp, noDigits); //0+27=27  , 27=27+125, 152=152+1
  num = Math.floor(num / 10); //15,1
}
console.log(sum, num, "sum");
//4. verify
if (originalNum === sum) {
  console.log("Number is armstrong");
} else {
  console.log("Number is not armstrong");
}
