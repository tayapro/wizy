import { setLifes, removeLife } from "./life.js";
import { newWord, testLetter, drawTheWord } from "./word.js";
import {
  newAlphabet,
  disableAlphabetButton,
  disableAllAlphabetButtons,
} from "./alphabet.js";

// Number of lifes
let lifeCounter = 6;

document.addEventListener("DOMContentLoaded", function () {
  console.log("New game");
  newGame();
});

/**
 * Initialization new game
 */
function newGame() {
  setLifes(lifeCounter);
  newWord();
  newAlphabet(onClickLetter);
}

/**
 * Main game logic
 * @param event
 */
function onClickLetter(event) {
  const letter = event.target.innerHTML;
  disableAlphabetButton(letter);

  if (!testLetter(letter)) {
    lifeCounter -= 1;
    removeLife();
  }

  drawTheWord();

  console.log(`lifeCounter = ${lifeCounter}`);
  if (lifeCounter === 0) {
    disableAllAlphabetButtons();
    console.log("game over");
    // check.disabled = true;
  }
}
