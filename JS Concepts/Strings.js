Infinity - keyword - 4 / 0;
undefined;
NAN;

//A string in JavaScript is a sequence of characters enclosed within single (' '), double (" "), or backticks (`) quotes.
var name = "Chhavi";
console.log(`Hello, ${name}!`);

//String & Number:

var str = "Hello";
var num = 42;
var result = str + num;
console.log(result); // Output: Hello42

//The number 42 is implicitly converted to a string and then concatenated with the string.

// String and Boolean:

var str = "Hello";
var bool = true;
var result = str + bool;
console.log(result); // Output: Hellotrue

//The boolean value true is implicitly converted to the string "true" and then concatenated with the original string.

/* It's important to note that when using the + operator with non-string types, 
JavaScript will perform implicit type conversions. If you want to ensure a 
specific type or handle type conversions explicitly, you might consider using 
methods like String(), Number(), or toString(). */

//How to concatenate integers without string conversion?-

var x = 10;
var y = 12;
console.log("" + x + y);

//length property used in String to find the length of  a String

let name = "Chhavi";

console.log(name.length); //string.length & array.length(used in array & string)

//When we try to access a character whose index is equal to or larger than the string length, the square brackets [] return undefined.

var str = "string";
console.log(str[999]); // undefined
console.log(str[-1]); //undefined

//using charAt() method This method will return the character at a specified index in a string. The method takes in a parameter, an integer that represents the index of the character to be returned. The syntax for usage is string.charAt(index).
//same for negative no's

var str = "string";
console.log(str.charAt(0)); // s
//If no character is found, the method returns an empty string.negative no's

var str = "string";
console.log(str.charAt(999)); // ''

//we can concatenate string with numbers in js, when we use + operator with a string and a number, JS will convert the no to a String and then concatenate them.

//In JavaScripts, strings are immutable

// However, you can create a new string with the desired changes.
// Here's an example of how you can replace the character

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

/*
Empty string: If name is an empty string (i.e., ""), name.length will return 0.
Null or undefined: If name is null or undefined, trying to access .length will throw an error. You can prevent this by checking if name is null or undefined before accessing the length.

*/

// How to handle empty or null strings?

let name = null; // or let name; or let name = "";

if (name) {
  console.log(name.length);
} else {
  console.log(0); // or handle the null/undefined case as needed
}

let name = "";

if (name === null || name === undefined) {
  console.log(0); // Handle null or undefined
} else {
  console.log(name.length); // Get the length
}

let name = null;
console.log((name || "").length);
