// document.getElementById("id") for ids
//document.getElementByClassName("classname") for class
//document.location give you information about the webpage
//document.getElementById("id").click() clicks the selected element
//use .style.(stylename) = "something" to change css of some element

let doc = document.getElementById("para");

console.log(doc);

let doc2= document.getElementsByClassName("hello");

console.log(doc2);
//it will give you a collection of html element which can be accessed as an array and be malipulated similar to other element

//you can make class in css and not them in html and use javascript to add that class to certain element when a action is performed

//doc.classList.add("someclass");
// it will add that class to that element
//you can also remove it by using
//doc.classList.remover("someclass");

//user doc.inerHTML to get HTML code of some element
//and doc.innertext gives us inner text of that element
//innerHTML to edit html of the text innertext to change text of the element

//doc.getElementByTadName("tag") gives you all the taged element such as divs button p etc


//you can also create element by using

doc3 = document.createElement("p");
//then add this new element to a existing class or id as required
doc3.innerText = "asgd qragbhqraby  bg aegqearh qtarh ";
doc.appendChild(doc3);

//doc.replaceChild("child to replace to", "child to replace with");
//doc.removeChild("childname");
//doc.querySelector() doc.querySelectorAll() 