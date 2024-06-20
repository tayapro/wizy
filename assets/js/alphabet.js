const theAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function setAlphabetButtons() {
  const container = document.getElementById("alphabet-container");
  container.innerHTML = "";

  for (const letter of theAlphabet) {
    const newButton = document.createElement("button");
    newButton.setAttribute("class", "alphabet-button");
    newButton.setAttribute("id", `btn-${letter}`);
    newButton.innerHTML = letter;
    container.appendChild(newButton);
  }
}

function setAlphabetButtonsListener(onClickLetter) {
  const buttons = document.querySelectorAll(".alphabet-button");

  for (const button of buttons) {
    button.addEventListener("click", onClickLetter);
  }
}

export function newAlphabet(onClickLetter) {
  setAlphabetButtons();
  setAlphabetButtonsListener(onClickLetter);
}

export function disableAlphabetButton(letter) {
  const id = `btn-${letter}`;
  const button = document.getElementById(id);
  button.disabled = true;
}

export function disableAllAlphabetButtons() {
  const buttons = document.querySelectorAll(".alphabet-button");
  for (const button of buttons) {
    button.disabled = true;
  }
}
