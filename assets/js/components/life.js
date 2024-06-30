import { animate } from "../lib/animate.js";

let lifeIndexArray = new Set();

const animations = ["swirle", "flip", "swipe"];
let randomAnimation = animations[0];

function getRandomLifeIndex() {
  let items = Array.from(lifeIndexArray);
  return items[Math.floor(Math.random() * items.length)];
}

// setLifes(maxLifes)
export function setLifes(num) {
  console.log("setLifes:", num);
  randomAnimation = animations[Math.floor(Math.random() * animations.length)];

  const container = document.getElementById("life-container");
  container.innerHTML = "";

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

export function getLifeCount() {
  return lifeIndexArray.size;
}
