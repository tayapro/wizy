import { setLives, removeLife, getLifeCount } from "../components/life.js";
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

const maxLives = 10; // Set the maximum number of lives
const maxTime = 60; // Set the maximum time in seconds
let startGameTime; // New game start time variable
let complexity; // Game complexity level variable

/**
 * Handle game.html page loading
 */
export function onGamePageLoad() {
  // Remove the stored previous game outcome
  localStorage.removeItem("Outcome");

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
  setLives(maxLives);
  // Get random word from the array
  newWord(complexity);

  newAlphabet((event) => {
    const letter = event.target.innerHTML;
    disableAlphabetButton(letter);

    // Check letter for correctness
    if (!testLetter(letter)) {
      removeLife(() => {
        // Defeat scenario
        disableAllAlphabetButtons();
        gameOver(false);
      });
    }

    // Victory scenario
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
  const outcome = { score: 0, tier: 0, isWin: false, timeStamp: Date.now() };

  if (isVictory) {
    // Get total game time
    const totalTime = (Date.now() - startGameTime) / 1000;

    // Get score & tier, using imported `getScoreTier` function
    const { score, tier } = getScoreTier(
      maxLives - getLifeCount(),
      maxLives,
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

  // Redirect to the game `outcome.html` results page
  window.location.replace("outcome.html");
}
