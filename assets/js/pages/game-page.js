import { setLifes, removeLife, getLifeCount } from "../components/life.js";
import {
  newWord,
  testLetter,
  drawWord,
  isWordSolved,
} from "../components/word.js";
import {
  newAlphabet,
  disableAlphabetButton,
  disableAllAlphabetButtons,
} from "../components/alphabet.js";
import { getScore, getScoreTier } from "../components/score.js";
import { setGameOutcome } from "../components/outcome.js";
import { setUserIcon } from "../components/user.js";

const maxLifes = 10;
const maxTime = 120;
let startGameTime;
let complexity;

export function onGamePageLoad() {
  console.log("New game...");
  setUserIcon();
  newGame();
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
