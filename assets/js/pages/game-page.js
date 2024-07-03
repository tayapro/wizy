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
import { getScoreTier } from "../components/score.js";
import { setGameOutcome } from "../components/outcome.js";
import { setUserIcon } from "../components/user.js";
import { getComplexity } from "../components/complexity.js";

const maxLifes = 10;
const maxTime = 60;
let startGameTime;
let complexity;

export function onGamePageLoad() {
  console.log("New game...");
  setUserIcon();
  newGame();
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
  let outcome = { score: 0, tier: 0, isWin: false, timeStamp: Date.now() };
  if (isVictory) {
    const totalTime = (Date.now() - startGameTime) / 1000;
    const { score, tier } = getScoreTier(
      maxLifes - getLifeCount(),
      maxLifes,
      totalTime,
      maxTime,
      complexity
    );

    outcome.score = score;
    outcome.tier = tier;
    outcome.isWin = true;
    console.log(outcome);
  }

  setGameOutcome(outcome);

  // Redirect to the game results page
  window.location.replace("outcome.html");
}
