export function getGameOutcome() {
  const { score, tier, isWin } = JSON.parse(localStorage.getItem("Outcome"));

  return { score, tier, isWin };
}

export function setGameOutcome(outcome) {
  localStorage.setItem("Outcome", JSON.stringify(outcome));
}

export function newGameOutcome(place) {
  const outcome = getGameOutcome();

  const message = document.getElementById("game-outcome");
  if (outcome.isWin === true) {
    message.innerHTML = "Conrgats!";

    console.log("Place: ", place);
    if (place !== -1) {
      const championsMessage = document.getElementById("game-champion-message");
      championsMessage.classList.remove("hidden");
      championsMessage.innerHTML = `You are in ${place} place among the champions`;
    }

    const tier = document.getElementById("game-tier");
    tier.classList.remove("hidden");
    tier.innerHTML = "Stars: " + outcome.tier;

    const score = document.getElementById("game-score");
    score.classList.remove("hidden");
    score.innerHTML = "Score: " + outcome.score;
  } else {
    message.innerHTML = "Ooops... try again";
  }
}
