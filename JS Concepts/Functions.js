// arrow function
const add = () => {
  console.log("asdf");
};

//normal function
function myFunction() {}

//function expression(anonymous function expression)
sum = function () {};

//function expression(named function expression)
subtraction = (function sub() {})(
  //immediately invoked function expression
  function () {}
)();

//generator function
function* div() {
  yield 1; //return 1 in first time
  yield 2; //return 2 in second time
  yield "Chhavi"; //return Chhavi in third time
}

/*
Functions-A function in JavaScript is a block of code designed to perform a specific task. It's like a mini-program within your program. You can define a function once and then call it multiple times, which helps in organizing your code and making it reusable. The problem requires you to use a function to calculate the square and cube of a number and print the results. The provided solution demonstrates how to define such a function and call it with different numbers.

No, function names in JavaScript cannot contain special characters except for $ (dollar sign) and _ (underscore). They must start with a letter, an underscore (_), or a dollar sign ($), and can contain letters, numbers, underscores, and dollar signs. It's best to stick to using letters for the first character for readability.
*/

//normal way
function add(a, b) {
  console.log(a + b);
}

//How to return a value
function add(a, b) {
  return a + b;
}

let sum = add(5, 3); // sum will be 8
console.log(sum);

//The return statement ends the execution of the function and sends the specified value back to the calling code.

//How to return multiple return statement

function checkValue(x) {
  if (x > 10) {
    return "Greater than 10";
  } else {
    return "Less than or equal to 10";
  }
}

console.log(checkValue(15)); // Output: Greater than 10
console.log(checkValue(5)); // Output: Less than or equal to 10

//Return an Array: Return an array containing multiple values.

function getCoordinates() {
  const x = 10;
  const y = 20;
  return [x, y];
}

const coords = getCoordinates();
console.log(coords[0]); // Output: 10
console.log(coords[1]); // Output: 20

//Return an Object: Return an object with multiple properties, each representing a different value. This is often the most readable approach when the values have distinct meanings.

function getUserData() {
  const name = "Alice";
  const age = 30;
  return { name: name, age: age }; // Or simply { name, age } in modern JavaScript
}

const user = getUserData();
console.log(user.name); // Output: Alice
console.log(user.age); // Output: 30

//Return a Tuple (using Array): Similar to returning an array, but communicates the intent that the array has a fixed size and the elements at each index have a specific meaning.
function divide(a, b) {
  if (b === 0) {
    return [null, "Error: Cannot divide by zero"]; // [result, error]
  }
  return [a / b, null]; // [result, error]
}

const result1 = divide(10, 2);
console.log("Result:", result1[0], "Error:", result1[1]); // Result: 5 Error: null

const result2 = divide(5, 0);
console.log("Result:", result2[0], "Error:", result2[1]); // Result: null Error: Error: Cannot divide by zero

//a, b are Parameters inside the function
//A, B are Arguments passed to the function
function addNumbers(a, b) {
  return a + b;
}
// Calling the function with arguments
var A = 5;
var B = 3;
var result = addNumbers(A, B);
console.log("Sum:", result);

//Note: We can also use the same variable names for both the parameter and the argument.

//Can parameters have default values?

//Yes, parameters in JavaScript functions can have default values. This allows you to specify a fallback value for a parameter if no argument (or an undefined argument) is provided when the function is called.

//Here's an example:

function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!
greet();

//What happens if fewer arguments passed?

//If fewer arguments are passed to a function than the number of parameters defined, the missing parameters will be assigned the value undefined. If you have defined default values for these parameters, then the default values will be used instead of undefined.

//Example without default parameters:

function example(a, b, c) {
  console.log("a:", a, "b:", b, "c:", c);
}

example(1, 2); // Output: a: 1 b: 2 c: undefined

//Example with default parameters:

function example(a, b = 2, c = 3) {
  console.log("a:", a, "b:", b, "c:", c);
}

example(1); // Output: a: 1 b: 2 c: 3
