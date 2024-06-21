import { setLifes, removeLife } from "./life.js";
import { newWord, testLetter, drawWord, isWordSolved } from "./word.js";
import {
  newAlphabet,
  disableAlphabetButton,
  disableAllAlphabetButtons,
} from "./alphabet.js";
import { getScoreTier } from "./scrore.js";

const maxLifes = 6;
const maxTime = 60;
let complexity;
let lifeCounter;
let startGameTime;

document.addEventListener("DOMContentLoaded", function () {
  console.log("New game");
  newGame();
});

/**
 * Initialization new game
 */
function newGame() {
  complexity = 2;
  lifeCounter = maxLifes;
  startGameTime = Date.now();

  setLifes(lifeCounter);
  newWord(complexity);
  newAlphabet(onClickLetter);
  // console.log(pickRandomWord(["HELLO", "GOODBUY"]));

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
  const totalTime = (Date.now() - startGameTime) / 1000;
  const tier = getScoreTier(
    maxLifes - lifeCounter,
    maxLifes,
    totalTime,
    maxTime,
    1
  );
  console.log("Tier = ", tier);
  const score = document.getElementById("game-score");
  score.innerHTML = "Stars: " + tier;

  // Set onclick for new game button
  // This will attach click event the button only once,
  // regardless the fact it is called multiple times
  const newGameButton = document.getElementById("btn-new-game");
  newGameButton.addEventListener("click", newGame);

  // Hide life bar in case of loss
  if (!isVictory) {
    const lifeContainer = document.getElementById("life-container");
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
