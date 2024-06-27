import { setLifes, removeLife, getLifeCount } from "./life.js";
import { newWord, testLetter, drawWord, isWordSolved } from "./word.js";
import {
  newAlphabet,
  disableAlphabetButton,
  disableAllAlphabetButtons,
} from "./alphabet.js";
import { getScore, getScoreTier } from "./score.js";

// const outData = { score: "5555", tier: "3", message: "You are win" };
let outData = { score: "", tier: "", message: "" };
localStorage.setItem("OutcomeData", JSON.stringify(outData));
console.log("localStore before game:", localStorage);

const maxLifes = 10;
const maxTime = 120;
let complexity;
let startGameTime;

document.addEventListener("DOMContentLoaded", function () {
  if (!document.documentURI.includes("game.html")) return;
  console.log("New game...");
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

  // const gameOutcomeContainer = document.getElementById(
  //   "game-outcome-container"
  // );

  // gameOutcomeContainer.classList.add("hidden");
}

function gameOver(isVictory) {
  // // Show game outcome dialog
  // const gameOutcomeContainer = document.getElementById(
  //   "game-outcome-container"
  // );
  // // gameOutcomeContainer.classList.remove("hidden");

  // // Set outcome message
  // // const message = document.getElementById("game-outcome");
  if (isVictory) {
    // message.innerHTML = "Congrats!";
    // Set score
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
    // const score = document.getElementById("game-score");
    // score.innerHTML = "Stars: " + tier;

    outData.score = score;
    outData.tier = tier;
    outData.message = "Congrats!";
    console.log(outData);
    localStorage.setItem("OutcomeData", JSON.stringify(outData));
    console.log("localStore after game:", localStorage);
  } else {
    outData.message = "Ooops, try again...";
    // message.innerHTML = "Ooops, try again...";
    // const score = document.getElementById("game-score");
    // score.innerHTML = "";
  }

  // Set onclick for new game button
  // This will attach click event the button only once,
  // regardless the fact it is called multiple times
  // const newGameButton = document.getElementById("btn-new-game");
  // newGameButton.addEventListener("click", newGame);

  // Redirect to game results page
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
