function sum(){
    console.log("This is a test");
}
//below code shows that both intervels are measured simultanously
a = setTimeout(sum,9000);
b = setTimeout(sum,10000);
//both setInterval and setTimeout returns an id that can be used to stop the event

// setInterval(sum,2000);
//use clearInterval("id") to stop the scedualed event
//similar clearTimeout("id") is also used for timeouts

//uselocalstorage.setitem("key","value") to store data as string on local host
localStorage.setItem("name","magru");