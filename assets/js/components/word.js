const dictionary = [
  [
    "CAR",
    "COW",
    "CUP",
    "EGG",
    "PEN",
    "PIG",
    "CAT",
    "DOG",
    "HAT",
    "SUN",
    "BALL",
    "BIRD",
    "DOOR",
    "DUCK",
    "FROG",
    "HAND",
    "KITE",
    "LAMP",
    "LION",
    "MILK",
    "NOSE",
    "RING",
    "SHOE",
    "SHIP",
    "SNOW",
    "SOCK",
    "TENT",
    "WIND",
    "WOLF",
    "BOOK",
    "FISH",
    "MOON",
    "STAR",
    "TREE",
    "SPOON",
    "TABLE",
    "TRAIN",
    "TRUCK",
    "WATCH",
    "APPLE",
  ],
  [
    "ROBOT",
    "OCEAN",
    "ORANGE",
    "CIRCUS",
    "PLANET",
    "ISLAND",
    "CASTLE",
    "GARDEN",
    "MUSEUM",
    "CAMERA",
    "ROCKET",
    "FOREST",
    "PIRATE",
    "GUITAR",
    "KNIGHT",
    "DRAGON",
    "TUNNEL",
    "BRIDGE",
    "BALLET",
    "PARROT",
    "SPHINX",
    "VIOLIN",
    "PALACE",
    "DESERT",
    "JUNGLE",
    "GALAXY",
    "EMPIRE",
    "LAGOON",
    "HISTORY",
    "BICYCLE",
    "MONSTER",
    "VOLCANO",
    "DIAMOND",
    "SAMURAI",
    "PYRAMID",
    "MERMAID",
    "LEOPARD",
    "UNICORN",
    "GLACIER",
    "PHOENIX",
    "WRIGGLE",
    "BENEFIT",
    "FESTIVAL",
  ],
  ["ZEPPELIN", "HYPNOSIS", "QUAGMIRE", "EUPHORIA"],
];
let theWord = "";
let theMatchedLetters = new Set();

function pickRandomWord(wordList) {
  return wordList[Math.floor(Math.random() * wordList.length)];
}

export function newWord(complexity) {
  theWord = pickRandomWord(dictionary[complexity]);
  console.log(theWord);
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
export function drawWord() {
  for (const i in theWord) {
    if (theMatchedLetters.has(theWord[i])) {
      const letter = document.getElementById(`letter-${i}`);
      letter.innerHTML = theWord[i];
    }
  }
}

export function isWordSolved() {
  for (const letter of theWord) {
    if (!theMatchedLetters.has(letter)) {
      return false;
    }
  }
  return true;
}
