//functions works the same as cpp nut instead of return datatype here we write function

function sum(a,b){
    return a+b;
};

let a;
let b;

a= Number(window.prompt("ENter the value of a"));
b = Number(window.prompt("enter the value of b"));

console.log(sum(a,b));

//loops are also same as cpp

let arr = [1,2.3,"aman",`kumar`,'yadav'];

for(let i =0;i<arr.length;i++){
    console.log(`${i} : ${arr[i]}`);
}

//for each loop are new to js

arr.forEach(function(element){
    console.log(element);
});

//while loop is also same as cpp

// do while loop is also same