import { getChampions } from "../components/champions.js";

/**
 * Handle champions.html page loading
 */
export function onChampionsPageLoad() {
  const champions = getChampions();
  newChampions(champions);
}

/**
 * Create DOM structure for champions
 *
 * @param {array} champions - list of champions
 */
function newChampions(champions) {
  // parent DIV element
  const container = document.getElementById("champions-list-container");

  for (let i = 0; i < champions.length; i++) {
    // DIV for champion's place circle
    const championPlaceCircleDiv = document.createElement("div");
    championPlaceCircleDiv.setAttribute("class", "champion-place-circle");
    const championPlaceCircleText = document.createElement("p");
    championPlaceCircleText.setAttribute("class", "champion-place-text");
    championPlaceCircleText.innerHTML = i + 1;
    championPlaceCircleDiv.appendChild(championPlaceCircleText);

    // DIV for champion's place
    const championPlaceDiv = createDiv(
      `champion-place-${champions[i + 1]}`,
      "",
      "champion-place"
    );
    championPlaceDiv.appendChild(championPlaceCircleDiv);

    // DIV for champion's name
    const championNameDiv = createDiv(
      `champion-name-${champions[i + 1]}`,
      champions[i].name,
      "champion-name"
    );

    // DIV for champion's score
    const championScoreDiv = createDiv(
      `champion-score-${champions[i + 1]}`,
      champions[i].score,
      "champion-score"
    );

    // Add created elements to parent DIV
    container.appendChild(championPlaceDiv);
    container.appendChild(championNameDiv);
    container.appendChild(championScoreDiv);
  }
}

/**
 * Create DIV element and bind it to grid area
 *
 * @param {string} id - id property
 * @param {string} text - text for innerHTML property
 * @param  {...string} classList - class / list classes
 *
 * @return DOM div element
 */
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
