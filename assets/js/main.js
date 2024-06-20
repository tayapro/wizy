import { setLifes, removeLife } from "./life.js";
import { newWord, testLetter, drawWord, isWordSolved } from "./word.js";
import {
  newAlphabet,
  disableAlphabetButton,
  disableAllAlphabetButtons,
} from "./alphabet.js";

// Number of lifes
let lifeCounter;

document.addEventListener("DOMContentLoaded", function () {
  console.log("New game");
  newGame();
});

/**
 * Initialization new game
 */
function newGame() {
  lifeCounter = 6;
  setLifes(lifeCounter);
  newWord();
  newAlphabet(onClickLetter);

  const gameOutcomeContainer = document.getElementById(
    "game-outcome-container"
  );
  gameOutcomeContainer.style.display = "none";
  const lifeContainer = document.getElementById("life-container");
  lifeContainer.style.display = "flex";
}

function gameOver(isVictory) {
  // Show game outcome dialog
  const gameOutcomeContainer = document.getElementById(
    "game-outcome-container"
  );
  gameOutcomeContainer.style.display = "unset";

  // Set outcome message
  //TODO: game-outcome
  const message = document.getElementById("game-outcome");
  if (isVictory) {
    message.innerHTML = "Congrats!";
  } else {
    message.innerHTML = "Ooops, try again...";
  }

  // Set score
  const score = document.getElementById("game-score");
  score.innerHTML = "Score: " + lifeCounter;

  // Set onclick for new game button
  // This will attach click event the button only once,
  // regardless the fact it is called multiple times
  const newGameButton = document.getElementById("btn-new-game");
  newGameButton.addEventListener("click", newGame);

  // Hide life bar in case of loss
  if (!isVictory) {
    lifeContainer.style.display = "none";
  }
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

  drawWord();

  console.log(`lifeCounter = ${lifeCounter}`);
  if (lifeCounter === 0) {
    disableAllAlphabetButtons();
    gameOver(false);
    console.log("game over");
  } else if (isWordSolved()) {
    disableAllAlphabetButtons();
    gameOver(true);
    console.log("victory");
  }
}
