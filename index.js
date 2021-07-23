document.title = "Dunlap Properties LLC";

document.querySelector("#Kit4040").src = "images/4040Kitchen.jpeg";

const unorderedList = document.createElement("ul");

// adds new ul element to the nav-bar
document.querySelector(".nav-bar").appendChild(unorderedList);

// creates new list item (li) elements
const navItem = document.createElement("li");
navItem.textContent = "Home";
const navItem2 = document.createElement("li");
navItem2.textContent = "Properties";
const navItem3 = document.createElement("li");
navItem3.textContent = "Pay Rent";
const navItem4 = document.createElement("li");
navItem4.textContent = "Maintenance Request";

// adds the li elements to the ul in nav-bar
document.querySelector(".nav-bar > ul").appendChild(navItem);
document.querySelector(".nav-bar > ul").appendChild(navItem2);
document.querySelector(".nav-bar > ul").appendChild(navItem3);
document.querySelector(".nav-bar > ul").appendChild(navItem4);
