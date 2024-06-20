let theWord = "";
let theMatchedLetters = new Set();

export function newWord() {
  theWord = "STIPAXA";
  theMatchedLetters = new Set();
  const container = document.getElementById("letter-container");
  container.innerHTML = "";

  for (const i in theWord) {
    const newDiv = document.createElement("div");
    newDiv.className = "letter";
    newDiv.setAttribute("id", `letter-${i}`);
    container.appendChild(newDiv);
  }
}

export function testLetter(c) {
  if (theWord.search(c) === -1) {
    return false;
  }

  theMatchedLetters.add(c);

  return true;
}

/**
 * Draw the word
 *
 */
export function drawTheWord() {
  for (const i in theWord) {
    if (theMatchedLetters.has(theWord[i])) {
      const letter = document.getElementById(`letter-${i}`);
      letter.innerHTML = theWord[i];
    }
  }
}
