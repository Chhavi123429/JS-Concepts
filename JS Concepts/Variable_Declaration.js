/*var,let & const
var(old approach,less preferred)-function scope,declare variable globally or locally to an entire function
let-block scoped
const-constant, block scoped, not reassigned in the code

variables name should be meaningful & in camelCase

       Scope  Redeclare	  Reassign	  Hoisted	  Binds this
var	    No	     Yes	    Yes	        Yes	         Yes
let	    Yes	     No	        Yes	        No	         No
const	Yes	     No	        No	        No	         No

Hoisting- initialization of variable before declaration
x=5
var x;
before declaration  accessing the variables gives "Reference Error" or "Temporal Dead Zone(TDZ)"

*/

//Binds this
var x = 5;
function test() {
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(this.a); // undefined
  console.log(this.b); // undefined
  console.log(this.c); // undefined
}
test();
console.log(this.x); //5

// varibale names can only contain numbers,alphabets & _-(0-9,a-z,_)
// not start with number
// can start with underscore
// cannot have spaces in between
// variables names are case sensitive(age & AGE are different)

// if you put decimal values in a variable, the type of variable becomes float.
const pi = 3.14;
