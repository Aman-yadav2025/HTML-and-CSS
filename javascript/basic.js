//arthamatic is same as cpp and java
//type covertion

//There are number,string and boolean as data type
//user input is always a string
// can define variable by using var or let
var x ="12";
let y ="string";
let z = "string";

x = Number(x);
y = String(y);
z = Boolean(z);

//to write the dictationary see the below syntax
let dictationary = {
    key : "value",
    key2 : "value2"
};

console.log(dictationary)
// number return number and if you cant it to number it will be NAN, Enpty string is 0
// anything other than empty string is true and else is false
// no input mean number is NAN string is undefined and boolean is false
// for constant use const instead of let
console.log(x,typeof x);
console.log(y,typeof y);
console.log(z, typeof z);

//maths is also same as cpp but syntax is Math.func();
//such as Math.round
//Math.pow(x,y),Math.ceil(),Math.trunc() etc;

//for randomnumber use Math.random() it will give you a random between 0 and 1;
//use Math.random()*x to get a number between 0 and x it will be a folat value
//use floor(Math.random()*x)+1 to get a integer between 1 and x

let randomnum = Math.random();
console.log(randomnum)
randomnum = Math.random()*6;
console.log(randomnum);
randomnum = Math.floor(Math.random()*6) +1;
console.log(randomnum);

//console.warn() to print warnings and console.error to print error

//if else if also same as cpp

// null amd undefined are different and by default the value of a variable is undefined not null
console.log(null);
console.log(undefined);
let und;
console.log(und);
