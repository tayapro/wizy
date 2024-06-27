const results = getGameResults();

showGameResults(results);

function getGameResults() {
  const outcomeData = localStorage.getItem("OutcomeData");

  // clean the localstorage
  localStorage.clear();

  const score = JSON.parse(outcomeData).score;
  const tier = JSON.parse(outcomeData).tier;
  const message = JSON.parse(outcomeData).message;

  const result = { score, tier, message };

  return result;
}

function showGameResults(results) {
  const message = document.getElementById("game-outcome");
  message.innerHTML = results.message;

  const tier = document.getElementById("game-tier");
  tier.innerHTML = "Stars: " + results.tier;

  const score = document.getElementById("game-score");
  score.innerHTML = "Stars: " + results.score;

  //   const newGameButton = document.getElementById("btn-new-game");
  //   newGameButton.addEventListener("click", newGame);
}
