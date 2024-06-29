import { setUserIcon } from "../components/user.js";

export function onRulesPageLoad() {
  const levelForm = document.getElementById("game-level-form");
  levelForm.addEventListener("submit", onClickStartGame);
  setUserIcon();
}

function onClickStartGame(event) {
  console.log(`Complexity Form Submitted....`);
  event.preventDefault();

  const data = new FormData(event.target);
  console.log([...data.entries()]);
  const jsonData = JSON.parse(JSON.stringify(Object.fromEntries(data)));
  console.log(jsonData);
  const complexity = jsonData.complexity;
  console.log(complexity);

  localStorage.setItem("Complexity", complexity);

  window.location.replace("game.html");
}
