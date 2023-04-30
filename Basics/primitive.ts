// number ,string  , boolean


let num: number;
num = 1;

let str: string;
str = "amit";

let str1: string[];

str1 = ["1", "2", "3"];

//union type

let num1: number | boolean | string;
num1 = 2;
num1 = "mait";

// type inference -- when we provide default value to
//any variable typescript automatically assign the type to that variable
 
let ram = "amit"; // if i'll try to reassign it any value other than string it will give error

// no neeed to write it like this ---> let ram :string ="amit";

//if we want more than a single type

let hello: string | number = "hello";
hello = 2;


let person: {
    name: string;
    age: number;
}

person = {
    name: 'amit',
    age:18,
}

console.log('person is ', person);
let arryObject: { name: string, age: number }[];

arryObject = [{ name: "amit", age: 22 }, { name: "ankit", age: 18 },]
//type aliases
//type aliases
//type aliases
//type aliases
//type aliases
//type aliases
//type aliases
//type aliases
//type aliases

//when we want to write dry code

type person = { name: string, age: number }

let arr: person[];
let value: person;
value = { name: 'chhotu', age:12}
 
let nums: (number | string | boolean)[];  //this and number |string | boolean[] without brackets are different


// nums = ['amit', 1, true];


///function

// function sum(a: number, b: number): number{
//     return a + b;
// }
// console.log('sum of a and b is', sum(2, 4));

const sum = (a: number, b: number):number => {
   
    return a + b;
}

console.log('sum is', sum(2, 3));


//generics






