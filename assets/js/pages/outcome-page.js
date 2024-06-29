import { getGameOutcome, newGameOutcome } from "../components/outcome.js";
import { getChampions, setChampions } from "../components/champions.js";

export function onOutcomePageLoad() {
  const { score } = getGameOutcome();
  const username = localStorage.getItem("Username");

  checkOutcome(username, score);

  newGameOutcome();
}

function checkOutcome(username, outcome) {
  let champions = getChampions();

  const applicant = { name: username, score: outcome };
  champions.push(applicant);
  champions.sort((a, b) => b.score - a.score);

  const newChampions = champions.slice(0, 5);
  setChampions(newChampions);
}
