import { getChampions } from "../components/champions.js";

export function onChampionsPageLoad() {
  const champions = getChampions();
  newChampions(champions);
}

function newChampions(champions) {
  const container = document.getElementById("champions-list-container");
  for (let i = 0; i < champions.length; i++) {
    // Div for champion's place
    const championPlaceDiv = document.createElement("div");
    championPlaceDiv.setAttribute("class", "champion-place");
    championPlaceDiv.setAttribute("id", `champion-place-${i + 1}`);
    championPlaceDiv.setAttribute("grid-area", `champion-place-${i + 1}`);
    championPlaceDiv.innerHTML = `${i + 1}.`;

    // Div for champion's name
    const championNameDiv = document.createElement("div");
    championNameDiv.setAttribute("class", "champion-name");
    championNameDiv.setAttribute("id", `champion-name-${champions[i + 1]}`);
    championNameDiv.setAttribute(
      "grid-area",
      `champion-name-${champions[i + 1]}`
    );
    championNameDiv.innerHTML = champions[i].name;

    // Div for champion's score
    const championScoreDiv = document.createElement("div");
    championScoreDiv.setAttribute("class", "champion-score");
    championScoreDiv.setAttribute("id", `champion-score-${champions[i + 1]}`);
    championScoreDiv.setAttribute(
      "grid-area",
      `champion-score-${champions[i + 1]}`
    );
    championScoreDiv.innerHTML = champions[i].score;

    container.appendChild(championPlaceDiv);
    container.appendChild(championNameDiv);
    container.appendChild(championScoreDiv);
  }
}
