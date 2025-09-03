function ReverseString() {
  let str = "Hello"; //olleH
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str.charAt(i); //""o,o+l=olle
  }
  return rev;
}
let revStr = ReverseString();
console.log(revStr);
