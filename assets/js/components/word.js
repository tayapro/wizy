/**
 * Three levels of difficulty with words of increasing complexity
 * Each level is represented as an array of words
 *
 * Level 1 (index 0): Simple words (3-4 letters)
 * Level 2 (index 1): Moderate words (5-6 letters)
 * Level 3 (index 2): Challenging words (7-8 letters)
 */
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
  [
    "ALPHABET",
    "EMPHASIS",
    "STRATEGY",
    "MISJUDGE",
    "VAGABOND",
    "CROWNEST",
    "JEOPARDY",
    "SQUADRON",
    "BRACELET",
    "VELOCITY",
    "ABSOLUTE",
    "BLUEPRINT",
    "CAMPAIGN",
    "DAUGHTER",
    "ELEPHANT",
    "FIDELITY",
    "GRENADES",
    "HOSPITAL",
    "IDENTITY",
    "JASMINE",
    "KILOGRAM",
    "LANGUAGE",
    "MAJORITY",
    "NECKLACE",
    "OCCASION",
    "PARADISE",
    "QUESTION",
    "RESOURCE",
    "SURPRISE",
    "TEXTBOOK",
    "UNIVERSE",
    "VACATION",
    "WORKSHOP",
    "XENOLITH",
    "YEARBOOK",
    "ZUCCHINI",
    "ARTIFACT",
    "BACKPACK",
    "CASANOVA",
    "DINOSAUR",
  ],
];

let theWord = ""; // variable to store the word to be guessed
let theMatchedLetters = new Set(); // matched letters guessed by the player

/**
 * Randomly pick a word from a given word list
 *
 * @param {array} wordList - words array to choose from
 * @returns {string} - a randomly selected word from the wordList
 */
function pickRandomWord(wordList) {
  return wordList[Math.floor(Math.random() * wordList.length)];
}

/**
 * Generate a new word for the game based on complexity level
 *
 * @param {number} complexity - the complexity level
 */
export function newWord(complexity) {
  theWord = pickRandomWord(dictionary[complexity]);
  console.log(theWord);
  theMatchedLetters = new Set();
  const container = document.getElementById("letter-container");
  container.innerHTML = "";

  // create a letter container for each letter in the chosen word
  for (const i in theWord) {
    const newDiv = document.createElement("div");
    newDiv.className = "letter";
    newDiv.setAttribute("id", `letter-${i}`);
    container.appendChild(newDiv);
  }
}

/**
 * Check if the letter matches any in the word
 *
 * @param {string} c - the letter to test
 * @returns {boolean} - true if the letter matches, false otherwise
 */
export function testLetter(c) {
  if (theWord.search(c) === -1) {
    return false;
  }

  theMatchedLetters.add(c);

  return true;
}

/**
 * Draw the matched letters in the word on the screen
 */
export function drawWord() {
  for (const i in theWord) {
    if (theMatchedLetters.has(theWord[i])) {
      const letter = document.getElementById(`letter-${i}`);
      letter.innerHTML = theWord[i];
    }
  }
}

/**
 * Check if all letters in the word have been matched
 *
 * @returns {boolean} - true if the word is solved, false otherwise
 */
export function isWordSolved() {
  for (const letter of theWord) {
    if (!theMatchedLetters.has(letter)) {
      return false;
    }
  }
  return true;
}
