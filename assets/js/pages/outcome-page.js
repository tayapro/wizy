import { getGameOutcome, newGameOutcome } from "../components/outcome.js";
import { recordUserScore } from "../components/champions.js";
import { getUser } from "../components/user.js";
import { onComplexitySubmit, getComplexity } from "../components/complexity.js";

/**
 * Handle outcome.html page loading
 */
export function onOutcomePageLoad() {
  // Get values from localStorage
  const { score, timeStamp } = getGameOutcome();
  const username = getUser();

  // Get place on champions board (if not place's value is `-1` )
  const place = recordUserScore(username, score, timeStamp);

  // Set selected value in selected complexity list from previous game
  setSelectedComplexity();

  // Add event listener for submit event
  document
    .getElementById("outcome-game-level-form")
    .addEventListener("submit", onComplexitySubmit);

  // Draw outcome DOM
  newGameOutcome(place);
}

/**
 * Set selected value in select complexity list
 */
function setSelectedComplexity() {
  // Get complexity from localStorage
  const complexity = getComplexity();

  // Set selected value
  document.getElementById("outcome-complexity-list").value = `${complexity}`;
}
