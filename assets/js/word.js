let theWord = "";
let theMatchedCharacters = new Set();

export function newWord() {
  theWord = "stipaxa";
  theMatchedCharacters = new Set();
  const container = document.getElementById("letter-container");

  for (let i = 0; i < theWord.length; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "letter";
    document.body.appendChild(newDiv);
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

export function drawTheWord() {
  for (let i = 0; i < theWord.length; i++) {
    if (!theMatchedCharacters.has(theWord[i])) {
      console.log(i, "*");
    } else {
      console.log(i, theWord[i]);
    }
  }
}
