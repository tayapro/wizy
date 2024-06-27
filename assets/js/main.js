import { setLifes, removeLife, getLifeCount } from "./life.js";
import { newWord, testLetter, drawWord, isWordSolved } from "./word.js";
import {
  newAlphabet,
  disableAlphabetButton,
  disableAllAlphabetButtons,
} from "./alphabet.js";
import { getScore, getScoreTier } from "./score.js";

const maxLifes = 10;
const maxTime = 120;
let complexity;
let startGameTime;

document.addEventListener("DOMContentLoaded", function () {
  if (!document.documentURI.includes("game.html")) return;
  console.log("New game...");
  newGame();
});

function logSubmit(event) {
  console.log(`Form Submitted! Timestamp: ${event.timeStamp}`);
  event.preventDefault();
}

const form = document.getElementById("game-details-form");
form.addEventListener("submit", logSubmit);

/**
 * Initialization new game
 */
function newGame() {
  complexity = 0;
  startGameTime = Date.now();

  setLifes(maxLifes);
  newWord(complexity);
  newAlphabet(onClickLetter);
}

function gameOver(isVictory) {
  let outData = { score: "", tier: "", isWin: "" };
  // localStorage.setItem("OutcomeData", JSON.stringify(outData));
  // console.log("localStore before game:", localStorage);
  if (isVictory) {
    const totalTime = (Date.now() - startGameTime) / 1000;
    const tier = getScoreTier(
      maxLifes - getLifeCount(),
      maxLifes,
      totalTime,
      maxTime,
      complexity
    );
    const score = getScore(
      maxLifes - getLifeCount(),
      maxLifes,
      totalTime,
      maxTime,
      complexity
    );
    console.log("Tier = ", tier);
    console.log("Score = ", score);

    outData.score = score;
    outData.tier = tier;
    outData.isWin = true;
    console.log(outData);
  } else {
    outData.isWin = false;
  }

  // Save outData object to "OutcomeData" local storage
  localStorage.setItem("OutcomeData", JSON.stringify(outData));

  // Redirect to the game results page
  window.location.replace("outcome.html");
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
