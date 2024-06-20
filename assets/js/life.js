// setLifes(maxLifes)
export function setLifes(num) {
  console.log("setLifes:", num);
  const container = document.getElementById("life-container");
  container.innerHTML = "";

  for (let i = 0; i < num; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "life";
    container.appendChild(newDiv);
  }
}

// removeLife()
// unit?
// setLifes(2)
// removeLife()
// removeLife()
// removeLife()
export function removeLife() {
  const lifeBar = document.getElementsByClassName("life");
  if (lifeBar.length > 0) {
    lifeBar[0].remove();
  }
}
