import { animate } from "../lib/animate.js";

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
    message.innerHTML = "Congratulations!";

    setTimeout(() => amimateStarsBar(outcome), 300);

    console.log("Place: ", place);
    if (place !== -1) {
      const championsMessage = document.getElementById("game-champion-message");
      championsMessage.classList.remove("hidden");
      championsMessage.innerHTML = `You are in <span style="color:#d03b3e;font-size: 120%;">${place}</span> place <br> on the champions' board`;
    }

    const score = document.getElementById("game-score");
    score.classList.remove("hidden");
    score.innerHTML = `Your score:  <span style="color:#d03b3e;font-size: 120%;">${outcome.score}</span>`;
  } else {
    message.innerHTML = "Ooops... try again";
  }
}

function amimateStarsBar(outcome) {
  const starsBar = document.getElementById("stars-bar");
  starsBar.classList.remove("hidden");

  const stars = [
    document.getElementById("star-1"),
    document.getElementById("star-2"),
    document.getElementById("star-3"),
  ];

  let count = outcome.tier;

  // Callback function for middle animation
  const flipStar = (element) => {
    if (count > 0) {
      element.classList.remove("star-off");
      element.classList.add("star-on");
    }
    count--;
  };

  // Kick off the animation
  // The next star starts animating when the previous animation ends
  animate(stars[0], "swirle", flipStar, () => {
    animate(stars[1], "swirle", flipStar, () => {
      animate(stars[2], "swirle", flipStar);
    });
  });
}
