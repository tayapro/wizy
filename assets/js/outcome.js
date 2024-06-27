// Does not need, should be called in showGameResults
const results = getGameResults();

showGameResults(results);

function getGameResults() {
  const { score, tier, isWin } = JSON.parse(
    localStorage.getItem("OutcomeData")
  );

  // clean the localstorage
  localStorage.clear();

  // const score = JSON.parse(outcomeData).score;
  // const tier = JSON.parse(outcomeData).tier;
  // const isWin = JSON.parse(outcomeData).isWin;

  // const result = { score, tier, isWin };

  return { score, tier, isWin };
}

export function setGameResults(outcome) {}

function showGameResults(outcome) {
  const message = document.getElementById("game-outcome");
  if (results.isWin === true) {
    message.innerHTML = "Conrgats!";

    const tier = document.getElementById("game-tier");
    tier.classList.remove("hidden");
    tier.innerHTML = "Tier: " + results.tier;

    const score = document.getElementById("game-score");
    score.classList.remove("hidden");
    score.innerHTML = "Stars: " + results.score;
  } else {
    message.innerHTML = "Ooops... try again";
  }

  // Set onclick for new game button
  // This will attach click event the button only once,
  // regardless the fact it is called multiple times
  // const newGameButton = document.getElementById("btn-new-game");
  // newGameButton.addEventListener("click", newGame);
}
