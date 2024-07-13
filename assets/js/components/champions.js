/**
 * Set the default list of champions if no champion data exists in localStorage
 */
export function setDefaultChampions() {
  // Default list of champions with their names, scores and time
  const champions = [
    { name: "Alice", score: 505, timeStamp: 1720376662705 },
    { name: "David", score: 450, timeStamp: 1720376662712 },
    { name: "Frank", score: 478, timeStamp: 1720376662743 },
    { name: "Grace", score: 580, timeStamp: 1720376661735 },
    { name: "Jack", score: 637, timeStamp: 1720376661705 },
  ];

  // Check if there is any existing champion data in localStorage
  const current = localStorage.getItem("Champions");

  // If no data exists, save the default list to localStorage
  if (!current) {
    localStorage.setItem("Champions", JSON.stringify(champions));
  }
}

/**
 * Get the list of champions from localStorage
 *
 * @returns {array} - the parsed list of champions from localStorage
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
 * @param {array} champions - the list of champions
 */
export function setChampions(champions) {
  // convert the list of champions to a JSON string and store it in localStorage
  localStorage.setItem("Champions", JSON.stringify(champions));
}

/**
 * Convert a zero-based index into a place index on the champion's board,
 * see `recordUserScore` function below
 *
 * @param {number} index - user's index in champion's list
 * @returns user's index on the champion's board or -1
 */
function turnIndexIntoPlace(index) {
  if (index === -1) return -1;

  return index + 1;
}

/**
 *  Record a user's score in to the champions list, updating if it exists or adding if new
 *
 * @param {string} username - the name of the user
 * @param {number} score - the score achieved by the user
 * @param {Date} timeStamp - the timestamp when the score was achieved
 * @returns {number} - the place on the champion's board or -1
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
