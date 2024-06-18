import { removeChance } from "./chance.js";

console.log("Hello");

// Initial number of chances
const initial_counter = 6;
// Current number of chances
export let counter = initial_counter;
let check = document.getElementById("chance");

check.addEventListener("click", myFunction);

function myFunction() {
  removeChance();
  counter -= 1;
  document.getElementById("chances").innerHTML = counter;
  if (counter === 0) {
    alert("You've used all your attempts.");
    document.getElementById("chances").innerHTML = initial_counter;
    counter = initial_counter;
  }
}
