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
var arryObject;
arryObject = [{ name: "amit", age: 22 }, { name: "ankit", age: 18 },];
var arr;
var value;
value = { name: 'chhotu', age: 12 };
var nums; //this and number |string | boolean[] without brackets are different
// nums = ['amit', 1, true];
///function
// function sum(a: number, b: number): number{
//     return a + b;
// }
// console.log('sum of a and b is', sum(2, 4));
var sum = function (a, b) {
    return a + b;
};
console.log('sum is', sum(2, 3));
