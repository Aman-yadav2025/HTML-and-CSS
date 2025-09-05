let date = new Date();
console.log(date);

console.log(date.getSeconds());
console.log(date.getMinutes());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMonth());
console.log(date.getTime())
console.log(date.toString())

date.toLocaleTimeString() //to get local time as string
date.toLocaleDateString() //to get local date as string

setIntervel(()=>{
    console.log("do  something");
}, 1000)