//Rest Operator(ES6) with array
function add(a, b, ...others) {
    console.log(others);//8,7
    console.log(others[0]);//8
    console.log(others[1]);//7
    console.log(arguments)//used in ES5


    return a + b
}
console.log(add(2, 3, 8, 7))

//Rest Operator(ES6) with objects
var students={
    name:'Chhavi',
    age:"25",
    hobbies:["Singing","Badminton"]
}

// const age=students.age
const {age,...rest}=students
console.log(age);
console.log(rest);






