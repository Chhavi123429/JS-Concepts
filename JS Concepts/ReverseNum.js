function ReverseNum(num) {
  //153
  let rev = 0;
  let rem = 0;
  while (num != 0) {
    rem = num % 10; //3,5,1
    rev = rev * 10 + rem; //0+3,30+5=35,350+1=351
    num = Math.floor(num / 10); //15,1
  }
  console.log(rev, num, "rev");
  return rev;
}
let firstRev = ReverseNum(153);
let secondRev = ReverseNum(251);
console.log(firstRev, secondRev);
