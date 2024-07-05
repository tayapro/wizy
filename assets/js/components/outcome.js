import { animate } from "../lib/animate.js";

export function getGameOutcome() {
  const { score, tier, isWin } = JSON.parse(localStorage.getItem("Outcome"));
  if (
    (isWin === true && (!score || !tier)) ||
    (isWin === false && (score || tier))
  )
    throw new Error("Outcome not completed");

  return { score, tier, isWin };
}

export function setGameOutcome(outcome) {
  localStorage.setItem("Outcome", JSON.stringify(outcome));
}

export function newGameOutcome(place) {
  const outcome = getGameOutcome();

  const message = document.getElementById("game-outcome");
  const outcomeMessage = document.getElementById("game-outcome-message");
  outcomeMessage.classList.remove("hidden");

  if (outcome.isWin === true) {
    message.innerHTML = "Congratulations!";

    setTimeout(() => amimateStarsBar(outcome), 300);

    console.log("Place: ", place);
    if (place !== -1) {
      const championsMessage = document.getElementById("game-champion-message");
      championsMessage.classList.remove("hidden");
      championsMessage.innerHTML = `You hold a <span>${place}</span> place <br> on the <a href="champions.html">champions' board</a>`;
    }

    const parkImg = document.getElementById("outcome-park-image");
    const ruralImg = document.getElementById("outcome-rural-image");
    const beachImg = document.getElementById("outcome-beach-image");
    const outcomeMessage = document.getElementById("game-outcome-message");

    if (outcome.tier === 1) {
      parkImg.classList.remove("hidden");
      outcomeMessage.innerHTML = "Grab your bike and <br>go to a park.";
    } else if (outcome.tier == 2) {
      ruralImg.classList.remove("hidden");
      outcomeMessage.innerHTML =
        "Pack your backpack and <br>visit your granny.";
    } else if (outcome.tier === 3) {
      beachImg.classList.remove("hidden");
      outcomeMessage.innerHTML = "Sounds like <br>someone is going to Hawai.";
    }

    const score = document.getElementById("game-score");
    score.classList.remove("hidden");
    score.innerHTML = `Your score:  <span>${outcome.score}</span>`;
  } else {
    const girlImg = document.getElementById("outcome-girl-image");
    message.innerHTML = "Ooops... try again";
    girlImg.classList.remove("hidden");
    outcomeMessage.innerHTML = "You're getting close, try again!";
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
