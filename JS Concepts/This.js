//this keyword

//it refers to the context in which it is executed.

//we cannot change the value of this.

console.log(this); // it return an empty object

function sum() {
  console.log(this, "thus"); //it return global object
}
sum();

let students = {
  name: "Chhavi",
  velo() {
    console.log(this, "obj");
  },
};
//console.log(students.velo()); //undefined
students.velo(); //students object

const hold = {
  left: () => {
    console.log(this, "objs");
  },
};
hold.left(); //{}
