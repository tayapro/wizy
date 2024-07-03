import { getGameOutcome, newGameOutcome } from "../components/outcome.js";
import { recordUserScore } from "../components/champions.js";
import { getUser } from "../components/user.js";
import { SetNewGameLevel } from "../components/dom.js";

export function onOutcomePageLoad() {
  const { score, timeStamp } = getGameOutcome();
  const username = getUser();
  const place = recordUserScore(username, score, timeStamp);

  newGameOutcome(place);

  SetNewGameLevel("outcome-game-level-form");
}
