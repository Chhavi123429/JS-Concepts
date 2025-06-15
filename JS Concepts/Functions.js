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
