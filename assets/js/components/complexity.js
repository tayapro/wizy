/**
 * Handle the form submission event for selecting game complexity level
 *
 * @param {Event} event - the form submission event
 *
 * @throw {Error} - if complexity data is not submitted
 */
export function onComplexitySubmit(event) {
  event.preventDefault();

  // Retrieve selected complexity
  const data = new FormData(event.target);
  const { complexity } = JSON.parse(JSON.stringify(Object.fromEntries(data)));

  // Throw an error if complexity data is missing
  if (!complexity) throw new Error("Complexity not submitted");

  // Set complexity level to localStorage
  localStorage.setItem("Complexity", complexity);

  // Redirect to the `game.html` page
  window.location.replace("game.html");
}

/**
 * Get the selected game complexity level from localStorage
 *
 * @return {string} - the selected game complexity
 * @throw {Error} - if complexity data is not found
 */
export function getComplexity() {
  const complexity = localStorage.getItem("Complexity");
  if (!complexity) throw new Error("Complexity not found");

  return complexity;
}
