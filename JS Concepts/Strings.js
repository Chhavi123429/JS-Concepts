Infinity - keyword - 4 / 0;
undefined;
NAN;

//we can concatenate string with numbers in js, when we use + operator with a string and a number, JS will convert the no to a String and then concatenate them.

//In JavaScripts, strings are immutable

//How to replace characters from the string:- slice(),substring(),substr()

const word = "Ocygen";
const newword = word.replace("c", "x"); //replace only one character

const sentence = word.replace(/c/g, "x"); //replace all occurrence of a subString with gloabal flag

//How to slice characters from the string

const newSlice = word.slice(2, 5); // yge (5 excluded here)

//you can go until end of string
const newString = word.slice(3); // gen(nothing extract here)

//you can use negative indices

let originalString = "Hello, World!";
let slicedString = originalString.slice(-6, -1); //World (this extracts from the 6th char from the end to the 1st char from the end)

//if start index>end index-it returns empty string

//Difference between slice and substring-

/*substring(startIndex,endIndex)-It extract char from startIndex up to (but not including) endIndex. If endIndex is omitted,it extracts to the end of the String. If startIndex is greater then endIndex, it swaps the arguments means subString(1,4) and substring(4,1) is equal. It does not accept negative indexes. Negative indexes treated as 0.

substr(startIndex,length)- It extracts length characters from startIndex. If length is omitted, it extracts to the end of the string. It acccepts negative startIndex which counts from the end of the string.It does not handle negative indexes. Negative indexes treated as 0.

slice(startIndex,endIndex)- extracts characters from startIndex up to (but not including) endIndex. If endIndex is omitted, it extracts to the end of the string. It allows negative indexes, which count from the end of the string. If startIndex is greater than endIndex, it returns an empty string.
*/
