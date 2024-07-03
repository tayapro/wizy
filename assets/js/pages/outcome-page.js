import { getGameOutcome, newGameOutcome } from "../components/outcome.js";
import { recordUserScore } from "../components/champions.js";
import { getUser } from "../components/user.js";
import { onComplexitySubmit } from "../components/complexity.js";

export function onOutcomePageLoad() {
  const { score, timeStamp } = getGameOutcome();
  const username = getUser();
  const place = recordUserScore(username, score, timeStamp);

  const complexityForm = document.getElementById("outcome-game-level-form");
  complexityForm.addEventListener("submit", onComplexitySubmit);

  newGameOutcome(place);
}
