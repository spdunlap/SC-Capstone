document.title = "Dunlap Properties LLC";

// document.querySelector("#Kit4040").src = "../../assets/img/4040Kitchen.jpeg";

// const unorderedList = document.createElement("ul");

// // adds new ul element to the nav-bar
// document.querySelector(".nav-bar").appendChild(unorderedList);

// // creates new list item (li) elements
// // const navItem = document.createElement("li");
// // navItem.textContent = "Dunlap Properties LLC";
// const navItem1 = document.createElement("li");
// navItem1.textContent = "Home";
// // navItem1.classList.add("hidden--mobile");
// const navItem2 = document.createElement("li");
// navItem2.textContent = "Properties";
// // navItem2.classList.add("hidden--mobile");
// const navItem3 = document.createElement("li");
// navItem3.textContent = "Pay";
// // navItem3.classList.add("hidden--mobile");
// const navItem4 = document.createElement("li");
// navItem4.textContent = "Maintenance";
// // navItem4.classList.add("hidden--mobile");

// adds the li elements to the ul in nav-bar
// document.querySelector(".nav-bar > ul").appendChild(navItem);
// document.querySelector(".nav-bar > ul").appendChild(navItem1);
// document.querySelector(".nav-bar > ul").appendChild(navItem2);
// document.querySelector(".nav-bar > ul").appendChild(navItem3);
// document.querySelector(".nav-bar > ul").appendChild(navItem4);

// document.querySelector(".fa-bars").addEventListener("click", () => {
//   document.querySelector(".nav-bar > ul").classList.toggle("hidden--mobile");
// });

// importing all as a Module object
// import * as components from "./components";
// importing all by name

import { Header, Nav, Main, Footer } from "/components";
import * as state from "/store";
import Navigo from "navigo";
import { capitalize } from "lodash";

const router = new Navigo(window.location.origin);

router
  .on({
    ":page": params => render(state[capitalize(params.page)]),
    "/": () => render(state.Home)
  })
  .resolve();

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
  `;
  router.updatePageLinks();
}
render(state.home);
