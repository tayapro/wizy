import { getChampions } from "../components/champions.js";

export function onChampionsPageLoad() {
  const champions = getChampions();
  newChampions(champions);
}

function newChampions(champions) {
  const container = document.getElementById("champions-list-container");
  for (let i = 0; i < champions.length; i++) {
    // Div for champion's place circle
    const championPlaceCircleDiv = document.createElement("div");
    championPlaceCircleDiv.setAttribute("class", "champion-place-circle");
    const championPlaceCircleText = document.createElement("p");
    championPlaceCircleText.setAttribute("class", "champion-place-text");
    championPlaceCircleText.innerHTML = i + 1;
    championPlaceCircleDiv.appendChild(championPlaceCircleText);

    // Div for champion's place
    const championPlaceDiv = createDiv(
      `champion-place-${champions[i + 1]}`,
      "",
      "champion-place"
    );
    championPlaceDiv.appendChild(championPlaceCircleDiv);

    // Div for champion's name
    const championNameDiv = createDiv(
      `champion-name-${champions[i + 1]}`,
      champions[i].name,
      "champion-name"
    );

    // Div for champion's score
    const championScoreDiv = createDiv(
      `champion-score-${champions[i + 1]}`,
      champions[i].score,
      "champion-score"
    );

    container.appendChild(championPlaceDiv);
    container.appendChild(championNameDiv);
    container.appendChild(championScoreDiv);
  }
}

function createDiv(id, text, ...classList) {
  const div = document.createElement("div");
  div.setAttribute("id", id);
  div.setAttribute("grid-area", id);

  // for miltiple classes
  for (const c of classList) {
    div.classList.add(c);
  }

  div.innerHTML = text;

  return div;
}
