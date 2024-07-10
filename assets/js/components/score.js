// Define the score thresholds for one-star and two-star ratings
// Any score above the highest value in the twoStarCutoff array will earn three stars
// This can be handled in the function that evaluates the score, see getScoreTier bellow

// The oneStarCutoff array contains the score thresholds for earning one star
// based on different difficulty levels. Each index represents a different
// level of difficulty, with higher scores required for easier levels.
const oneStarCutoff = [400, 300, 200];

// The twoStarCutoff array contains the score thresholds for earning two stars
// based on different difficulty levels. Each index represents a different
// level of difficulty, with higher scores required for easier levels.
const twoStarCutoff = [800, 700, 600];

/**
 * This function ensures that the value stays within the range [0, 1].
 * If the value is less than 0, it returns 0.
 * If the value is greater than 1, it returns 1.
 * Otherwise, it returns the value itself.
 *
 * @param {Number} value - the input value to be clamped
 * @returns {Number} - the clamped value between 0 and 1
 */
function clamp(value) {
  return Math.min(Math.max(value, 0), 1);
}

/**
 * Evaluate the player's performance by considering the total mistakes made
 * and the total time taken, relative to their maximum allowable values
 *
 * The score calculation involves the following steps:
 * 1. Mistakes contribution: Normalizes the total mistakes to a range [0, 1]
 * 2. Time contribution: Normalizes the total time to a range [0, 1]
 * 3. Score: Sums the normalized mistakes and time contributions
 * 4. Normalized score: Converts the score to a value between 0 and 1000
 *
 * @param {Number} totalMistakes - the total number of mistakes made by the player
 * @param {Number} maxMistakes - the maximum allowable mistakes
 * @param {Number} totalTime - the total time taken by the player
 * @param {Number} maxTime - the maximum allowable time
 *
 * @returns {Number} - the calculated normalized score
 */
function getScore(totalMiskates, maxMistakes, totalTime, maxTime) {
  // Normalize the total mistakes to a range [0, 1]
  const mistakesContribution = clamp(totalMiskates / maxMistakes);

  // Normalize the total time to a range [0, 1]
  const timeContribution = clamp(totalTime / maxTime);

  //Sum the normalized mistakes and time contributions, a range [0, 2]
  const score = mistakesContribution + timeContribution;

  // Convert the score to a value between 0 and 1000
  // to display on the game outcome page
  const normalizedScore = (score / 2) * 1000;

  return normalizedScore;
}

/**
 * Calculate the score and tier based on the player's performance
 *
 * @param {number} totalMistakes - the total number of mistakes made by the player
 * @param {number} maxMistakes - the maximum allowed mistakes
 * @param {number} totalTime - the total time taken by the player
 * @param {number} maxTime - the maximum allowed time
 * @param {number} complexity - the complexity level of the game
 *
 * @returns {Object} - an object containing the score and tier
 */
export function getScoreTier(
  totalMiskates,
  maxMistakes,
  totalTime,
  maxTime,
  complexity
) {
  console.log("totalMiskates: ", totalMiskates);
  console.log("maxMistakes: ", maxMistakes);
  console.log("totalTime: ", totalTime);
  console.log("maxTime: ", maxTime);
  console.log("complexity: ", complexity);

  const score = getScore(totalMiskates, maxMistakes, totalTime, maxTime);

  // Determine the tier by comparing the score with predefined cutoffs for the specified complexity level
  let tier = 3;

  if (score < oneStarCutoff[complexity]) {
    tier = 1;
  } else if (score < twoStarCutoff[complexity]) {
    tier = 2;
  }
  return { score, tier };
}
