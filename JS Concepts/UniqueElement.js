function Unique(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (!temp.includes(arr[i])) {
      temp.push(arr[i]);
    }
  }
  return temp;
  //[2,3,2,7,5,3,7,5]=2,3,7,5
}
let array = Unique([2, 3, 2, 7, 5, 3, 7, 5]);
console.log(array);
