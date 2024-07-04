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

const maxLifes = 10; // Set the maximum number of lives.
const maxTime = 60; // Set the maximum time in seconds
let startGameTime; // Get new game start time
let complexity; // Get game complexity level

/**
 * Handle game.html page loading
 */
export function onGamePageLoad() {
  // Set icon on header DOM element with first username' letter
  setUserIcon();

  // Initiate new game and create main game logic
  newGame();
}

/**
 * Initiate new game and create main game logic
 */
function newGame() {
  // Get choosen complexity
  complexity = getComplexity();
  // Set start time for the game
  startGameTime = Date.now();
  // Set number of lifes
  setLifes(maxLifes);
  // Get random word from the array
  newWord(complexity);

  newAlphabet((event) => {
    const letter = event.target.innerHTML;
    disableAlphabetButton(letter);

    // Check letter for correctness
    if (!testLetter(letter)) {
      removeLife(() => {
        // Loss scenario
        disableAllAlphabetButtons();
        gameOver(false);
      });
    }

    // Win scenario
    if (isWordSolved()) {
      disableAllAlphabetButtons();
      gameOver(true);
    }

    drawWord();
  });
}

/**
 * Set and save game results to localStorage
 *
 * @param {boolean} isVictory - win or loss scenario
 */
function gameOver(isVictory) {
  // Set default outcome values
  let outcome = { score: 0, tier: 0, isWin: false, timeStamp: Date.now() };

  if (isVictory) {
    // Get total game time
    const totalTime = (Date.now() - startGameTime) / 1000;

    // Get score & tier, using imported `getScoreTier` function
    const { score, tier } = getScoreTier(
      maxLifes - getLifeCount(),
      maxLifes,
      totalTime,
      maxTime,
      complexity
    );

    // Set outcome values
    outcome.score = score;
    outcome.tier = tier;
    outcome.isWin = true;
  }

  // Write outcome values to `Outcome` key in localStorage
  setGameOutcome(outcome);

  // Redirect to the game results page
  window.location.replace("outcome.html");
}
