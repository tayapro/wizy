import { setUserIcon } from "../components/user.js";
import { SetNewGameLevel } from "../components/dom.js";

export function onRulesPageLoad() {
  // const levelForm = document.getElementById("game-level-form");
  // levelForm.addEventListener("submit", onClickStartGame);

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
