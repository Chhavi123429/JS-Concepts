//Can local variables become global somehow?
//Yes, a local variable can become global if you assign a value to it inside a function without declaring it using var, let, or const. This is because JavaScript, in non-strict mode, will automatically declare it in the global scope.

function myFunction() {
  localVar = "I'm unintentionally global!"; // No var, let, or const
  console.log(localVar);
}

myFunction();
console.log(localVar); // Accessible globally!

//What happens if same-named local/global variables?

//When you have local and global variables with the same name, the local variable takes precedence within the scope of the function. This is known as variable shadowing. Here's an example to illustrate:

var myVar = "Global"; // Global variable

function myFunction() {
  var myVar = "Local"; // Local variable with the same name
  console.log(myVar); // Output: Local (accessing the local variable)
}

myFunction();
console.log(myVar); // Output: Global (accessing the global variable)
