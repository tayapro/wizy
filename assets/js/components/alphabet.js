/**
 * A constant string containing all the uppercase letters of the English alphabet
 * This string will be used to generate buttons representing each letter
 */
const theAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * Sets up the alphabet buttons
 */
function setAlphabetButtons() {
  // Select the HTML element with the ID "alphabet-container"
  // Clear any existing content within this container
  const container = document.getElementById("alphabet-container");
  container.innerHTML = "";

  // Iterate over each letter in theAlphabet array
  // Create a new button element for each letter and
  // append the newly created button to the container with ID "alphabet-container"
  for (const letter of theAlphabet) {
    const newButton = document.createElement("button");
    newButton.setAttribute("class", "alphabet-button");
    newButton.setAttribute("id", `btn-${letter}`);
    newButton.innerHTML = letter;
    container.appendChild(newButton);
  }
}

/**
 * Adds click event listeners to all alphabet buttons
 *
 * @param {function} onClickLetter - The event handler function
 */
function setAlphabetButtonsListener(onClickLetter) {
  const buttons = document.querySelectorAll(".alphabet-button");

  // Set click event handler for each button with class "alphabet-button"
  for (const button of buttons) {
    button.addEventListener("click", onClickLetter);
  }
}

/**
 * Initializes the alphabet buttons and sets their click event listener
 *
 * @param {function} onClickLetter - the event handler function
 */
export function newAlphabet(onClickLetter) {
  setAlphabetButtons();
  setAlphabetButtonsListener(onClickLetter);
}

/**
 * Disables a specific alphabet button by changing its appearance and setting it to disabled
 *
 * @param {string} letter - The letter of the alphabet button
 */
export function disableAlphabetButton(letter) {
  // Get button by ID based on the provided letter
  const button = document.getElementById(`btn-${letter}`);

  // Change button's CSS styles
  button.style.color = "#50a3c0";
  button.style.transform = "none";
  button.disabled = true;
}

/**
 * Disables a all alphabet buttons by setting them to disabled
 */
export function disableAllAlphabetButtons() {
  const buttons = document.querySelectorAll(".alphabet-button");
  for (const button of buttons) {
    button.disabled = true;
  }
}
