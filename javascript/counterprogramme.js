const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");
const display = document.getElementById("display");

let count =0; 
increment.onclick = function(){
    count++;
    display.textContent = count;
};
decrement.onclick = function(){
    count--;
    display.textContent = count;
};
reset.onclick = function(){
    count=0;
    display.textContent = count;
};