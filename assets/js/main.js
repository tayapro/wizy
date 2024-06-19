import { setLifes, removeLife } from "./life.js";
import { newWord, testCharacter, drawTheWord } from "./word.js";

// Number of lifes
let lifeCounter = 6;
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.addEventListener("DOMContentLoaded", function () {
  console.log("Hello");
  newGame();
  testCharacter("a");
  drawTheWord();
});

function newGame() {
  setLifes(lifeCounter);
  newWord();
  setAlphabetLetters();
  setAlphabetLettersListener();
}

function setAlphabetLetters() {
  const container = document.getElementById("alphabet-container");

  for (let i = 0; i < alphabet.length; i++) {
    const newButton = document.createElement("button");
    newButton.setAttribute("class", "alphabet-letter");
    newButton.setAttribute("id", `btn-${alphabet[i]}`);
    newButton.innerHTML = alphabet[i];
    document.body.appendChild(newButton);
    container.appendChild(newButton);
  }
}

function setAlphabetLettersListener() {
  const letters = document.querySelectorAll(".alphabet-letter");

  letters.forEach(function (letter) {
    letter.addEventListener("click", function () {
      console.log("you click letter button");
    });
  });
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
