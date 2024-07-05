/**
 * Sets the user icon based on the first letter of the username
 * Get the username from localStorage and update the DOM element
 */
export function setUserIcon() {
  const name = getUser();
  const firstUsernameLetter = name.charAt(0).toUpperCase();
  const username = document.getElementById("user-icon");
  username.innerHTML = firstUsernameLetter;
}

/**
 * Sets the username in localStorage
 *
 * @param {String} username - the username to be stored
 */
export function setUser(username) {
  localStorage.setItem("Username", username);
}

/**
 * Get the username from local storage
 *
 * @returns {String} - the stored username
 * @throws {Error} - if username data is not found
 */
export function getUser() {
  const username = localStorage.getItem("Username");
  if (!username) throw new Error("Username not found");
  return username;
}
