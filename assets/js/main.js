import { setLifes, removeLife, getLifeCount } from "./life.js";
import { newWord, testLetter, drawWord, isWordSolved } from "./word.js";
import {
  newAlphabet,
  disableAlphabetButton,
  disableAllAlphabetButtons,
} from "./alphabet.js";
import { getScore, getScoreTier } from "./score.js";
import { setGameOutcome, newGameOutcome } from "./outcome.js";

const maxLifes = 10;
const maxTime = 120;
let complexity;
let startGameTime;

document.addEventListener("DOMContentLoaded", (event) => {
  console.log(document.documentURI);
  if (
    document.documentURI.includes("index.html") ||
    document.documentURI.endsWith("/")
  ) {
    onLandingPageLoad();
  } else if (document.documentURI.includes("rules.html")) {
    onRulesPageLoad();
  } else if (document.documentURI.includes("game.html")) {
    onGamePageLoad();
  } else if (document.documentURI.includes("outcome.html")) {
    onOutcomePageLoad();
  } else {
    return;
  }
});

function onLandingPageLoad() {
  const usernameForm = document.getElementById("username-form");
  usernameForm.addEventListener("submit", onClickLetsPlay);
}

function onRulesPageLoad() {
  const levelForm = document.getElementById("game-level-form");
  levelForm.addEventListener("submit", onClickStartGame);
  setUserIcon();
}

function onGamePageLoad() {
  console.log("New game...");
  setUserIcon();
  newGame();
}

function onOutcomePageLoad() {
  newGameOutcome();
}

function onClickLetsPlay(event) {
  console.log(`Username Form Submitted....`);
  event.preventDefault();

  const data = new FormData(event.target);
  console.log([...data.entries()]);
  const jsonData = JSON.parse(JSON.stringify(Object.fromEntries(data)));
  console.log(jsonData);
  const usermame = jsonData["username"];
  console.log(usermame);

  localStorage.setItem("Username", usermame);

  window.location.replace("rules.html");
}

function getUser() {
  const username = localStorage.getItem("Username");

  return username;
}

function setUserIcon() {
  const name = getUser();
  console.log("From setUserIcon: ", name);
  const firstUsernameLetter = name.charAt(0).toUpperCase();
  const username = document.getElementById("user-icon");
  username.innerHTML = firstUsernameLetter;
}

function onClickStartGame(event) {
  console.log(`Complexity Form Submitted....`);
  event.preventDefault();

  const data = new FormData(event.target);
  console.log([...data.entries()]);
  const jsonData = JSON.parse(JSON.stringify(Object.fromEntries(data)));
  console.log(jsonData);
  const complexity = jsonData.complexity;
  console.log(complexity);

  localStorage.setItem("Complexity", complexity);

  window.location.replace("game.html");
}

function getComplexity() {
  const complexity = localStorage.getItem("Complexity");
  console.log("From getComplexity: ", complexity);

  return complexity;
}

/**
 * Initialization new game
 */
function newGame() {
  console.log("starting new game");
  complexity = getComplexity();
  startGameTime = Date.now();

  setLifes(maxLifes);
  newWord(complexity);
  //newAlphabet(onClickLetter);
  newAlphabet((event) => {
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
  });
}

function gameOver(isVictory) {
  let outcome = { score: "", tier: "", isWin: "" };
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

    outcome.score = score;
    outcome.tier = tier;
    outcome.isWin = true;
    console.log(outcome);
  } else {
    outcome.isWin = false;
  }

  setGameOutcome(outcome);

  // Redirect to the game results page
  window.location.replace("outcome.html");
}

/**
 * Main game logic
 *
 * When a letter button clicked in game board
 * @param event
 */
// function onClickLetter(event) {
//   const letter = event.target.innerHTML;
//   disableAlphabetButton(letter);

//   if (!testLetter(letter)) {
//     removeLife(() => {
//       disableAllAlphabetButtons();
//       gameOver(false);
//       console.log("game over");
//     });
//   }

//   if (isWordSolved()) {
//     disableAllAlphabetButtons();
//     gameOver(true);
//     console.log("victory");
//   }

//   drawWord();
// }
