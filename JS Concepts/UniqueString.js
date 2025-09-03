// function Unique(str1, str2) {
//   //silent,listen
//   let arr1 = str1.toLowerCase().split("").sort().join(); //to change into Array
//   let arr2 = str2.toLowerCase().split("").sort().join();
//   if (arr1 === arr2) {
//     console.log("anagram");
//   } else {
//     console.log("not anagram");
//   }
//   return "";
// }
// let unique = Unique("Silens", "Listen");
// console.log(unique);

function Unique(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  //abcgsjdkdkba
  const countChars = (str) => {
    const count = {};
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      count[char] = (count[char] || 0) + 1;
    }
    return count;
  };
  const count1 = countChars(str1);
  const count2 = countChars(str2);

  for (let char in count1) {
    if (count1[char] !== count2[char]) {
      return false;
    }
  }
  return true;
}
let unique = Unique("Silens", "Listen");
console.log(unique);
