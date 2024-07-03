import { getGameOutcome, newGameOutcome } from "../components/outcome.js";
import { recordUserScore } from "../components/champions.js";
import { getUser } from "../components/user.js";
import { onComplexitySubmit, getComplexity } from "../components/complexity.js";

export function onOutcomePageLoad() {
  const { score, timeStamp } = getGameOutcome();
  const username = getUser();
  const place = recordUserScore(username, score, timeStamp);

  setSelectedComplexity();

  const complexityForm = document.getElementById("outcome-game-level-form");
  complexityForm.addEventListener("submit", onComplexitySubmit);

  newGameOutcome(place);
}

function setSelectedComplexity() {
  const complexity = getComplexity();
  console.log("complexity from localStorage: ", complexity);
  console.log(document.getElementById("outcome-complexity-list"));
  document.getElementById("outcome-complexity-list").value = `${complexity}`;
}
