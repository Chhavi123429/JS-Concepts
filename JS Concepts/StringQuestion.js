// replace 'a good' with 'an excellent'
let str = "I am a good programmer";
//let newStr = str.replace("a good", "an excellent");
//let newStr = str.slice(5, 8);
let newStr = str.split("a good");
console.log(newStr);
// let strg = newStr.toString();
// console.log(typeof strg, strg);
console.log(newStr[0] + "an excellent" + newStr[1]);

// length,replace,substring,slice,toLowerCase,toUpperCase,split
//split return array
//return return something so we can use it anywhere
