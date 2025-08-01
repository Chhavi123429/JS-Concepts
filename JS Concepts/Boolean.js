// False values-false
0 - //(zero)
  0; //(negative zero)
0n; //(BigInt zero)
(""); //(empty string)
null;
undefined;
NaN;

//True
1;

true - 1 - "true";
false - 0 - "false";

console.log(Boolean(0)); // Output: false
console.log(Boolean("")); // Output: false
console.log(Boolean(null)); // Output: false
console.log(Boolean(undefined)); // Output: false

console.log(Boolean(1)); // Output: true
console.log(Boolean("hello")); // Output: true
console.log(Boolean({})); // Output: true (empty object is truthy)
console.log(Boolean([])); // Output: true (empty array is truthy)
