import { testCharacter, drawTheWord } from "./word.js";

const theAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function newAlphabet() {
  setAlphabetLetters();
  setAlphabetLettersListener();
}

function setAlphabetLetters() {
  const container = document.getElementById("alphabet-container");
  container.innerHTML = "";

  for (const letter of theAlphabet) {
    const newButton = document.createElement("button");
    newButton.setAttribute("class", "alphabet-letter");
    newButton.setAttribute("id", `btn-${letter}`);
    newButton.innerHTML = letter;
    container.appendChild(newButton);
  }
}

function onClickLetter(event) {
  console.log("you click letter button", event.target.innerHTML);
  testCharacter(event.target.innerHTML);
  drawTheWord();
}

function setAlphabetLettersListener() {
  const letters = document.querySelectorAll(".alphabet-letter");

  for (const letter of letters) {
    letter.addEventListener("click", onClickLetter);
  }
}
