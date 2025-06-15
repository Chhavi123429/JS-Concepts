const successPromise = new Promise((resolver, rejected) => {
  setTimeout(() => {
    rejected("rejected");
  }, 5000);
});
console.log(successPromise, "successPromise");

// successPromise
//   .then((s) => {
//     console.log(s, "s");
//   })
//   .catch((e) => {
//     console.log(e, "e");
//   });

async function asyncFunc() {
  try {
    const s = await successPromise;
    console.log(s, "s");
  } catch (e) {
    console.log(e, "e");
  }
}
const asynchronus = asyncFunc(); //async function always return a promise
console.log(asynchronus, "asynchronus");

async function kuchbhi() {
  return "chhavi";
}
const name = kuchbhi();
console.log(name, "name");
kuchbhi().then((success) => {
  //we can also use name in the place of kuchbhi()
  console.log(success, "success");
});

//if we want to return string instead of Promise then we use (async await + try catch block)/(then catch)
