obj = {name : "aman",work : "study"};

jso = JSON.stringify(obj);

console.log(obj);
console.log(jso);

//json is used to store data as string to transfer it

//converting json into distationary

dic = JSON.parse(jso);
console.log(dic);