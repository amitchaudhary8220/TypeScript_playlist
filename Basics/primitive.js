// number ,string  , boolean
var num;
num = 1;
var str;
str = "amit";
var str1;
str1 = ["1", "2", "3"];
//union type
var num1;
num1 = 2;
num1 = "mait";
// type inference -- when we provide default value to
//any variable typescript automatically assign the type to that variable
var ram = "amit"; // if i'll try to reassign it any value other than string it will give error
// no neeed to write it like this ---> let ram :string ="amit";
//if we want more than a single type
var hello = "hello";
hello = 2;
var person;
person = {
    name: 'amit',
    age: 18,
};
console.log('person is ', person);


