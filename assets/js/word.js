let theWord = "";
// TODO: theMatchedLetters
let theMatchedCharacters = new Set();

export function newWord() {
  theWord = "STIPAXA";
  theMatchedCharacters = new Set();
  const container = document.getElementById("letter-container");
  container.innerHTML = "";

  for (const i in theWord) {
    const newDiv = document.createElement("div");
    newDiv.className = "letter";
    newDiv.setAttribute("id", `letter-${i}`);
    container.appendChild(newDiv);
  }
}

export function testCharacter(c) {
  if (theWord.search(c) === -1) {
    return false;
  }

  theMatchedCharacters.add(c);

  return true;
}

/**
 * Draw the word
 *
 */
export function drawTheWord() {
  for (const i in theWord) {
    if (theMatchedCharacters.has(theWord[i])) {
      const letter = document.getElementById(`letter-${i}`);
      letter.innerHTML = theWord[i];
    }
  }
}
