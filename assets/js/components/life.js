import { animate } from "../lib/animate.js";

let lifeIndexArray = new Set(); // use set in order to avoid duplications

const animations = ["swirle", "flip", "swipe"]; // array with animation CSS classes
let randomAnimation = animations[0]; // Set initial CSS class for animation

/**
 * Retrieve a random index of used life
 *
 * @returns {number} - random index of used life
 */
function getRandomLifeIndex() {
  let items = Array.from(lifeIndexArray);
  return items[Math.floor(Math.random() * items.length)];
}

/**
 * Create HTML elements for lives and randomly select an animation for them
 *
 * @param {number} num - number of lives
 */
export function setLives(num) {
  randomAnimation = animations[Math.floor(Math.random() * animations.length)];

  // Clean up `life-container` container context
  const container = document.getElementById("life-container");
  container.innerHTML = "";

  // Create div elements for each life and add them to the container
  lifeIndexArray = new Set();
  for (let i = 0; i < num; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("life", "transition-in-out");
    newDiv.setAttribute("id", `life-${i}`);
    newDiv.style.backgroundImage = `url(./assets/images/summer-elements/${i}.webp)`;
    newDiv.style.backgroundSize = "contain";
    newDiv.style.backgroundRepeat = "no-repeat";
    container.appendChild(newDiv);

    lifeIndexArray.add(i);
  }
}

/**
 * Remove a randomly selected life from the display
 *
 * On removal it plays animation, when the last live removed it calls `onGameOver`
 * callback when the last life animation ends.
 *
 * @param {function} onGameOver - callback function triggered when lives are exhausted
 */
export function removeLife(onGameOver) {
  const lifeIndex = getRandomLifeIndex();
  lifeIndexArray.delete(lifeIndex);

  const lifeBar = document.getElementsByClassName("life");
  if (lifeBar.length > 0) {
    animate(
      lifeBar[lifeIndex],
      randomAnimation,
      // Middle animation callback
      (element) => {
        element.innerHTML = "";
        element.style.backgroundImage = "none";
        element.style.backgroundColor = "#418c9f";
      },
      // End animation callback
      () => {
        if (onGameOver && lifeIndexArray.size === 0) onGameOver();
      }
    );
  }
}

/**
 * Retrieve the current number of remaining lives
 *
 * @returns {number} - number of remaining lives
 */
export function getLifeCount() {
  return lifeIndexArray.size;
}
