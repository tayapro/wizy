const theAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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

function setAlphabetLettersListener(onClickLetter) {
  const letters = document.querySelectorAll(".alphabet-letter");

  for (const letter of letters) {
    letter.addEventListener("click", onClickLetter);
  }
}

export function newAlphabet(onClickLetter) {
  setAlphabetLetters();
  setAlphabetLettersListener(onClickLetter);
}

export function disableAlphabetButton(letter) {
  const id = `btn-${letter}`;
  const button = document.getElementById(id);
  button.disabled = true;
}

export function disableAllAlphabetButtons() {
  // TODO: .alphabet-button
  const letters = document.querySelectorAll(".alphabet-letter");
  for (const letter of letters) {
    letter.disabled = true;
  }
}
