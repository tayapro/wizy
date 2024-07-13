/**
 * Retrieve the username from localStorage,
 * take the first letter, capitalize it,
 * and update the corresponding DOM element.
 */
export function setUserIcon() {
  const name = getUser();
  const firstUsernameLetter = name.charAt(0).toUpperCase();
  const username = document.getElementById("user-icon");
  username.innerHTML = firstUsernameLetter;
}

/**
 * Set the username in localStorage
 *
 * @param {string} username - the username to be stored
 */
export function setUser(username) {
  localStorage.setItem("Username", username);
}

/**
 * Get the username from localStorage
 *
 * @returns {string} - the stored username
 * @throws {Error} - if username data is not found
 */
export function getUser() {
  const username = localStorage.getItem("Username");
  if (!username) throw new Error("Username not found");
  return username;
}
