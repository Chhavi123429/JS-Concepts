//Spread Operator in array
var names=["ajay","anuj","vivek"]

function getNames(name1,name2,name3){
    console.log(name1,name2,name3);
    

}
getNames(names[0],names[1],names[2])// it gives ["ajay","anuj","vivek"] undefined undefined bcoz there only one argument and function expects 3 arguments
getNames(names)
getNames(...names)//we can also get these names via spread operator


//Spread Operator in object

// var students={
//     name:'Chhavi',
//     age:"25",
//     hobbies:["Singing","Badminton"]
// }

// var newStudents={
//     ...students,
//     age:"26"
// }
// console.log(newStudents);
