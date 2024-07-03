import { setUserIcon } from "../components/user.js";
import { SetNewGameLevel } from "../components/dom.js";

export function onRulesPageLoad() {
  // const levelForm = document.getElementById("game-level-form");
  // levelForm.addEventListener("submit", onClickStartGame);

  // Change the view for screen widths larger than 576 pixels
  if (document.body.clientWidth > 576) {
    // Show elements with "rules-img" selector
    const rulesImgs = document.querySelectorAll(".rules-img");
    rulesImgs.forEach((rulesImg) => rulesImg.classList.remove("hidden"));

    // Hide vertical text elements with "vertical-text" selector
    const verticalTexts = document.querySelectorAll(".vertical-text");
    verticalTexts.forEach((verticalText) =>
      verticalText.classList.add("hidden")
    );

    // Hide fontawesome icon elements with "rules-icons-sm" class selector
    const rulesIconsSmall = document.querySelectorAll(".rules-icons-sm");
    console.log(rulesIconsSmall);
    rulesIconsSmall.forEach((verticalText) =>
      verticalText.classList.add("hidden")
    );
  }

  SetNewGameLevel("game-level-form");
  setUserIcon();
}

// function onClickStartGame(event) {
//   event.preventDefault();

//   const data = new FormData(event.target);
//   const { complexity } = JSON.parse(JSON.stringify(Object.fromEntries(data)));

//   localStorage.setItem("Complexity", complexity);

//   window.location.replace("game.html");
// }
