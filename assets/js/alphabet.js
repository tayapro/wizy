const theAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function newAlphabet(onClickLetter) {
  setAlphabetLetters();
  setAlphabetLettersListener(onClickLetter);
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

function setAlphabetLettersListener(onClickLetter) {
  const letters = document.querySelectorAll(".alphabet-letter");

  for (const letter of letters) {
    letter.addEventListener("click", onClickLetter);
  }
}
