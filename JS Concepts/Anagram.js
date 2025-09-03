let c = "silen t";
let d = "listen";
//let a = c.trim();//not for inside string space
let a = c.replace(" ", "");
console.log(a);

//let b = d.trim();
let b = d.replace(" ", "");
console.log(b);

//length
if (a.length !== b.length) {
  console.log("Not anagram");
} else {
  let temp = "";
  //sort
  function sort(letter) {
    let arr = letter.toLowerCase().split("");
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }

    return arr.join("");
  }
  let s1 = sort(a);
  let s2 = sort(b);
  if (s1 === s2) {
    console.log("Anagram");
  } else console.log("not Anagram");
}
