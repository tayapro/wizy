import { setUser } from "../components/user.js";
import { setDefaultChampions } from "../components/champions.js";

/**
 * Handle index.html page loading
 */
export function onLandingPageLoad() {
  clearLocalStorage();

  // Read champions list from array and write it to localStorage
  setDefaultChampions();

  // Add event listener for submit event
  document
    .getElementById("username-form")
    .addEventListener("submit", onClickPlay);
}

/**
 * Event Listener handler function
 *
 * @param {Event} event - the form submission event
 */
function onClickPlay(event) {
  event.preventDefault();

  // Get username from the form
  const data = new FormData(event.target);
  const jsonData = JSON.parse(JSON.stringify(Object.fromEntries(data)));
  const usermame = jsonData["username"];

  // Set username to localStorage
  setUser(usermame);

  // Redirect to the `rules.html` page
  window.location.replace("rules.html");
}

/**
 * Remove the stored username, game complexity level,
 * and game outcome items from localStorage to reset the game's state
 */
function clearLocalStorage() {
  localStorage.removeItem("Username");
  localStorage.removeItem("Complexity");
  localStorage.removeItem("Outcome");
}
