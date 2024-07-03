export function SetNewGameLevel(elementId) {
  const levelForm = document.getElementById(elementId);
  levelForm.addEventListener("submit", onClickStartGame);
}

function onClickStartGame(event) {
  event.preventDefault();

  const data = new FormData(event.target);
  const { complexity } = JSON.parse(JSON.stringify(Object.fromEntries(data)));

  localStorage.setItem("Complexity", complexity);

  window.location.replace("game.html");
}
