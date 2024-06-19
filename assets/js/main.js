import { setLifes, removeLife } from "./life.js";
import { newWord } from "./word.js";
import { newAlphabet } from "./alphabet.js";

// Number of lifes
let lifeCounter = 6;

document.addEventListener("DOMContentLoaded", function () {
  console.log("Hello");
  newGame();
});

function newGame() {
  setLifes(lifeCounter);
  newWord();
  newAlphabet();
}

let check = document.getElementById("lifes-button");
check.addEventListener("click", myFunction);

function myFunction() {
  lifeCounter -= 1;
  document.getElementById("lifes-counter").innerHTML = lifeCounter;
  removeLife();
  if (lifeCounter === 0) {
    console.log("game over");
    check.disabled = true;
  }
}
