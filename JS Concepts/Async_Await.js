// A Promise is an Object that links Producing code and Consuming code

// "I Promise a Result!"

// "Producing code" is code that can take some time

// "Consuming code" is code that must wait for the result

// "async and await make promises easier to write"

// async makes a function return a Promise

// await makes a function wait for a Promise

// When the producing code obtains the result, it should call one of the two callbacks:

// When	             Call
// Success	resolver(result value)//name can be changed
// Error	rejected(error object)//name can be changed

// A JavaScript Promise object can be:

// Pending
// Fulfilled
// Rejected

// The Promise object supports two properties: state and result.

// While a Promise object is "pending" (working), the result is undefined.

// When a Promise object is "fulfilled", the result is a value.

// When a Promise object is "rejected", the result is an error object.
const successPromise = new Promise((resolver, rejected) => {
  resolver("chhavi");
});
console.log(successPromise, "successPromise");
successPromise
  .then((success) => {
    console.log(success, "successPromise-success");
  })
  .catch((error) => {
    console.log(error, "successPromise-error");
  });

const errorPromise = new Promise((resolver, rejected) => {
  setTimeout(() => {
    rejected("asdfgh");
  }, 5000);
});
console.log(errorPromise, "errorPromise");
errorPromise
  .then((success) => {
    console.log(success, "errorPromise:success");
  })
  .catch((error) => {
    console.log(error, "errorPromise:error");
  });

const e = new Promise((resolver, rejected) => {
  //   resolver("Promise is resolved");//immediately resolve
  setTimeout(() => {
    resolver("Promise is resolved"); //takes some time to resolve
  }, 20000);
  //   setTimeout(() => {
  //      rejected("Promise is rejected");
  //   }, 5000); //producing code
});
console.log(e, "e"); //pending
e.then((param) => {
  console.log(param, "param"); //for success,consuming code
}).catch((error) => {
  console.log(error, "error"); //for failure,consuming code
});

async function sum() {
  const newPromise = new Promise((resolver, rejected) => {
    setTimeout(() => {
      resolver("zxcvbn");
    }, 5000);
  });
  console.log(newPromise, "newPromise");

  const prom = await newPromise;
  console.log(prom, "prom");
}
sum();
