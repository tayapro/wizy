import { animate } from "../lib/animate.js";

/**
 * Validate the outcome object to ensure it contains valid data
 *
 * @param {Object} outcome - the outcome object to validate
 *
 * @throws an error if any parameter is invalid
 */
function validateOutcome(outcome) {
  const { score, tier, isWin, timeStamp } = outcome;

  // the score achieved
  if (typeof score !== "number" || score < 0) {
    throw new Error("Outcome is not valid: bad score");
  }

  // the tier level
  if (typeof tier !== "number" || tier < 0) {
    throw new Error("Outcome is not valid: bad tier");
  }

  // whether the outcome is a win or not
  if (typeof isWin !== "boolean") {
    throw new Error("Outcome is not valid: isWin not found");
  }

  // the timestamp of the outcome
  if (typeof timeStamp !== "number" || timeStamp < 0) {
    throw new Error("Outcome is not valid: bad timeStamp");
  }
}

/**
 * Get the game outcome from local storage and validates it
 *
 * @returns {Object} - the validated game outcome
 * @throws an error if the outcome is not found or invalid
 */
export function getGameOutcome() {
  const outcomeStr = localStorage.getItem("Outcome");
  if (!outcomeStr) throw new Error("Outcome not found");

  const outcome = JSON.parse(outcomeStr);
  validateOutcome(outcome);

  return outcome;
}

/**
 * Store the given game outcome in local storage
 * (the outcome is stringified before being saved)
 *
 * @param {Object} outcome - The game outcome to be stored.
 */
export function setGameOutcome(outcome) {
  localStorage.setItem("Outcome", JSON.stringify(outcome));
}

/**
 * Handle the display and animation of the game outcome message based on the player's performance
 *
 * @param {number} place - the player's ranking place on the champions' board
 */
export function newGameOutcome(place) {
  // Get the game outcome from local storage
  const outcome = getGameOutcome();

  const message = document.getElementById("game-outcome");
  const outcomeMessage = document.getElementById("game-outcome-message");
  outcomeMessage.classList.remove("hidden");

  if (outcome.isWin === true) {
    message.innerHTML = "Congratulations!";

    // Animate stars bar with a delay
    setTimeout(() => amimateStarsBar(outcome), 300);

    // Updates the champions' board if applicable
    if (place !== -1) {
      const championsMessage = document.getElementById("game-champion-message");
      championsMessage.classList.remove("hidden");
      championsMessage.innerHTML = `You hold a <span>${place}</span> place <br> on the <a href="champions.html">champions' board</a>`;
    }

    if (outcome.tier === 1) {
      const parkImg = document.getElementById("outcome-park-image");
      parkImg.classList.remove("hidden");
      outcomeMessage.innerHTML = "Grab your bike and <br>go to a park.";
    } else if (outcome.tier == 2) {
      const ruralImg = document.getElementById("outcome-rural-image");
      ruralImg.classList.remove("hidden");
      outcomeMessage.innerHTML =
        "Pack your backpack and <br>visit your granny.";
    } else if (outcome.tier === 3) {
      const beachImg = document.getElementById("outcome-beach-image");
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

/**
 * Animate the stars bar based on the game outcome
 * Reveal the stars bar and animate the stars sequentially based on the player's tier
 *
 * @param {Object} outcome - the game outcome object containing the player's tier
 */
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
