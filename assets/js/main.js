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

document.addEventListener("DOMContentLoaded", (event) => {
  if (document.documentURI.includes("game.html")) {
    console.log("New game...");
    newGame();
  } else if (document.documentURI.includes("index.html")) {
    const usernameForm = document.getElementById("username-form");
    usernameForm.addEventListener("submit", setUser);
  } else if (document.documentURI.includes("rules.html")) {
    setUserIcon();
  } else {
    return;
  }
});

// When let's play button clicked on the landing page
function onClickLetsPlay(event) {
  console.log(`Form Submitted....`);
  event.preventDefault();
  const data = new FormData(event.target);
  console.log([...data.entries()]);
  const jsonData = JSON.parse(JSON.stringify(Object.fromEntries(data)));
  console.log(jsonData);
  const userName = jsonData["user-name"];
  console.log(userName);

  window.location.replace("game.html");
}

function setUser(event) {
  console.log(`Username Form Submitted....`);
  event.preventDefault();

  const data = new FormData(event.target);
  console.log([...data.entries()]);
  const jsonData = JSON.parse(JSON.stringify(Object.fromEntries(data)));
  console.log(jsonData);
  const usermame = jsonData["username"];
  console.log(usermame);

  localStorage.setItem("UserData", JSON.stringify({ username: usermame }));

  window.location.replace("rules.html");
}

function getUser() {
  const username = JSON.parse(localStorage.getItem("UserData"));

  console.log("from getUser:", username);
  // clean the localstorage
  // localStorage.clear();

  return username;
}

function setUserIcon() {
  const name = getUser().username;
  console.log("From setUserIcon: ", name);
  const username = document.getElementById("user-icon");
  username.innerHTML = name;
}

// id - btn-lets-play
// const levelForm = document.getElementById("game-level-form");
// levelForm.addEventListener("submit", onClickLetsPlay);

/**
 * Initialization new game
 */
function newGame() {
  console.log("starting new game");
  complexity = 0;
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
  // rename outData to outcome
  let outData = { score: "", tier: "", isWin: "" };
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

  // export setGameResults(outcome) from outcomes.js
  // don't JSON.stringify here, pass raw outData
  //
  // Save outData object to "OutcomeData" local storage
  localStorage.setItem("OutcomeData", JSON.stringify(outData));

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
