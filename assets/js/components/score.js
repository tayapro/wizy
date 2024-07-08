const oneStarCutoff = [400, 300, 200];
const twoStarCutoff = [800, 700, 600];

function clamp(value) {
  return Math.min(Math.max(value, 0), 1);
}

/**
 * Calculate score based on parameters
 *
 * It calculates the score in range from 0 to 1 inclusive.
 * The higher value means better player performance.
 *
 * @param {Number} totalMiskates
 * @param {Number} maxMistakes
 * @param {*} totalTime
 * @param {*} maxTime
 * @returns
 */
function getScore(totalMiskates, maxMistakes, totalTime, maxTime) {
  const mistakesContribution = (totalMiskates * 100) / maxMistakes;
  const timeContribution = (totalTime * 100) / maxTime;
  const score = mistakesContribution + timeContribution;

  const normalizedScore = Math.trunc(clamp(1 - score / 200) * 1000);

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
