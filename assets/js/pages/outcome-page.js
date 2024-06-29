import { getGameOutcome, newGameOutcome } from "../components/outcome.js";
import { recordUserScore } from "../components/champions.js";
import { getUser } from "../components/user.js";

export function onOutcomePageLoad() {
  const { score, timeStamp } = getGameOutcome();
  const username = getUser();

  const place = recordUserScore(username, score, timeStamp);

  newGameOutcome(place);
}
