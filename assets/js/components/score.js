// Define the score thresholds for one-star and two-star ratings
// Any score above the highest value in the twoStarCutoff array will earn three stars
// This can be handled in the function that evaluates the score, see getScoreTier bellow

// The oneStarCutoff array contains the score thresholds for earning one star
// based on different difficulty levels. Each index represents a different
// level of difficulty, with higher scores required for easier levels
const oneStarCutoff = [400, 300, 200];

// The twoStarCutoff array contains the score thresholds for earning two stars
// based on different difficulty levels. Each index represents a different
// level of difficulty, with higher scores required for easier levels
const twoStarCutoff = [800, 700, 600];

/**
 * Clamp number from 0 to 1
 *
 * @param {number} value - the input value to be clamped
 * @returns {number} - the clamped value between 0 and 1
 */
function clamp(value) {
  return Math.min(Math.max(value, 0), 1);
}

/**
 * Evaluate the player's performance by considering the total mistakes made
 * and the total time taken, relative to their maximum allowable values
 *
 * @param {number} totalMistakes - the total number of mistakes made by the player
 * @param {number} maxMistakes - the maximum allowable mistakes
 * @param {number} totalTime - the total time taken by the player
 * @param {number} maxTime - the maximum allowable time
 *
 * @returns {number} - the calculated game score
 */
function getScore(totalMiskates, maxMistakes, totalTime, maxTime) {
  // Normalize the total mistakes to a range [0, 1]
  const mistakesContribution = clamp(totalMiskates / maxMistakes);

  // Normalize the total time to a range [0, 1]
  const timeContribution = clamp(totalTime / maxTime);

  // Average the contributions to get a combined contribution
  // less number means better player's performance
  const totalContribution = (mistakesContribution + timeContribution) / 2;

  // Invert the combined contribution, scale it to a range of 0 to 1000, and floor the value
  // to display on the game outcome page
  const score = Math.floor((1 - totalContribution) * 1000);

  return score;
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
 * @returns {object} - an object containing the score and tier
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
