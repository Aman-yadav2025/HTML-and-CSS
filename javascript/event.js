// when the  window is load

window.onload = function(){
    console.log("the document was loaded");
}

//add eventlistener on documents
//doc.addEventListener("event",action);

function sum(){
    console.log("something is happpening")
}

doc=document.getElementById('usernameHTML');

doc.addEventListener(`click`,sum);

//mouseover fires when you hover over specific area

doc.addEventListener('mouseover',sum);

//SIMILARLY THERE IS A mouseout event
// mouseup event to locate when the mouse click end ie when user leave the clicked button
//mousedown used to identify holding of a mouse button
