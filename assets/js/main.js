import { setLifes, removeLife, getLifeCount } from "./life.js";
import { newWord, testLetter, drawWord, isWordSolved } from "./word.js";
import {
  newAlphabet,
  disableAlphabetButton,
  disableAllAlphabetButtons,
} from "./alphabet.js";
import { getScoreTier } from "./scrore.js";

const maxLifes = 10;
const maxTime = 120;
let complexity;
let startGameTime;

document.addEventListener("DOMContentLoaded", function () {
  console.log("New game");
  newGame();
});

/**
 * Initialization new game
 */
function newGame() {
  complexity = 0;
  startGameTime = Date.now();

  setLifes(maxLifes);
  newWord(complexity);
  newAlphabet(onClickLetter);

  const gameOutcomeContainer = document.getElementById(
    "game-outcome-container"
  );
  gameOutcomeContainer.style.display = "none";
  const lifeContainer = document.getElementById("life-container");
  lifeContainer.style.display = "grid";
}

function gameOver(isVictory) {
  // Show game outcome dialog
  const gameOutcomeContainer = document.getElementById(
    "game-outcome-container"
  );
  gameOutcomeContainer.style.display = "unset";

  // Set outcome message
  const message = document.getElementById("game-outcome");
  if (isVictory) {
    message.innerHTML = "Congrats!";
    // Set score
    const totalTime = (Date.now() - startGameTime) / 1000;
    const tier = getScoreTier(
      maxLifes - getLifeCount(),
      maxLifes,
      totalTime,
      maxTime,
      1
    );
    console.log("Tier = ", tier);
    const score = document.getElementById("game-score");
    score.innerHTML = "Stars: " + tier;
  } else {
    message.innerHTML = "Ooops, try again...";
    const score = document.getElementById("game-score");
    score.innerHTML = "";
  }

  // Set onclick for new game button
  // This will attach click event the button only once,
  // regardless the fact it is called multiple times
  const newGameButton = document.getElementById("btn-new-game");
  newGameButton.addEventListener("click", newGame);
}

/**
 * Main game logic
 * @param event
 */
function onClickLetter(event) {
  const letter = event.target.innerHTML;
  disableAlphabetButton(letter);

  if (!testLetter(letter)) {
    removeLife(() => {
      disableAllAlphabetButtons();
      gameOver(false);
      console.log("game over");
    });
  }

  if (isWordSolved()) {
    disableAllAlphabetButtons();
    gameOver(true);
    console.log("victory");
  }

  drawWord();
}
