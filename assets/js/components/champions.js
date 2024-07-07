/**
 * Sets the default list of champions if no champion data exists in local storage.
 */
export function setDefaultChampions() {
  // Default list of champions with their names and scores
  const champions = [
    { name: "Alice", score: 505, timeStamp: Date.now() },
    { name: "David", score: 450, timeStamp: Date.now() },
    { name: "Frank", score: 478, timeStamp: Date.now() },
    { name: "Grace", score: 580, timeStamp: Date.now() },
    { name: "Jack", score: 637, timeStamp: Date.now() },
  ];

  // Check if there is any existing champion data in local storage
  const current = localStorage.getItem("Champions");

  // If no data exists, save the default list to local storage
  if (!current) {
    localStorage.setItem("Champions", JSON.stringify(champions));
  }
}

/**
 * Get the list of champions from local storage
 * Throws an error if no champion data is found
 *
 * @returns {Array} - the parsed list of champions from localStorage
 * @throws {Error} - throws an error if champion data is not found
 */
export function getChampions() {
  const champions = localStorage.getItem("Champions");

  if (!champions) {
    throw new Error("Champions not found");
  }

  return JSON.parse(champions);
}

/**
 * Set the list of champions to localStorage
 *
 * @param {Array} champions - the list of champions
 */
export function setChampions(champions) {
  // convert the list of champions to a JSON string and store it in local storage
  localStorage.setItem("Champions", JSON.stringify(champions));
}

/**
 * Converts a zero-based index into a place index on the champion's board,
 * see `recordUserScore` function below
 *
 * @param {Number} index - user's index in champion's list
 * @returns user's index on the champion's board or -1
 */
function turnIndexIntoPlace(index) {
  if (index === -1) return -1;

  return index + 1;
}

/**
 *  Record a user's score in the champions list, updating if it exists or adding if new
 *
 * @param {String} username - the name of the user
 * @param {Number} score - the score achieved by the user
 * @param {Date} timeStamp - the timestamp when the score was achieved
 * @returns {Number} - the place on the champion's board or -1
 */
export function recordUserScore(username, score, timeStamp) {
  let champions = getChampions();

  // Check if the user's score already exists in the champions list
  const existIndex = champions.findIndex(
    (c) => c.name === username && c.score === score && c.timeStamp === timeStamp
  );
  if (existIndex !== -1) return turnIndexIntoPlace(existIndex);

  // Add the new applicant to the champions list
  const applicant = { name: username, score, timeStamp };
  champions.push(applicant);

  // Sort champions by score in descending order
  champions.sort((a, b) => b.score - a.score);

  // Select the top 5 champions
  const newChampions = champions.slice(0, 5);
  setChampions(newChampions);

  // Find the user's rank among the top champions
  const i = newChampions.findIndex(
    (c) => c.name === username && c.score === score && c.timeStamp === timeStamp
  );

  return turnIndexIntoPlace(i);
}
