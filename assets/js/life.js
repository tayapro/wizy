// setLifes(maxLifes)
export function setLifes(num) {
  for (let i = 0; i < num; i++) {
    // console.log("from chance.js initiateChances function");
    const newDiv = document.createElement("div");
    newDiv.className = "life";
    document.body.appendChild(newDiv);
    const container = document.getElementById("life-container");
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
  // console.log("from chance.js removeChance function");
  const lifeBar = document.getElementsByClassName("life");
  if (lifeBar && lifeBar.length > 0) {
    lifeBar[0].remove();
  }
}
