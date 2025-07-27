// Object -It is used to store key value pair

//Create
const a = {};
const person = {
  name: "Chhavi",
  age: 25,
  address: {
    city: "Kanpur",
    state: "UP",
  },
};
console.log("name" in person); //check key is present in obj or not

//Read
console.log(person.name);
console.log(person["name"]); //when you know
// console.log(person[name]); //when don't know key or key is stored in a variable

//Update
person["name"] = "Muskan";
console.log(person["name"]);

//Delete
delete person["name"];
console.log(person["name"]); //undefined

//Copy
const person2 = person;
console.log(person2);

person.age = 20;
console.log(person2["age"], person["age"]); //cons-if we update one obj,it will change second obj

//shallow copy
const person3 = {
  ...person, //it creates new obj,it works only for top level properties,not work with nested,also update and create new obj in this
  name: "Chahat",
  year: 2000,
};

person3.age = 10;

console.log(person2["age"], person["age"], person3["age"]);

console.log(person, person3);

const person4 = structuredClone(person); //it works with nested too

person["address"]["city"] = "Noida";

console.log(person4, person3); //kanpur,Noida
