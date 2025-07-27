async function add() {
  const add = new Promise((resolve, reject) => {
    // resolve(console.log(Promises, "Promises"));
    setTimeout(() => {
      console.log(add, "add");
    }, 5000);
  });
}
const demo = add;
console.log(demo, "demo");
