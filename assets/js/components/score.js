const oneStarCutoff = [0.4, 0.3, 0.2];
const twoStarCutoff = [0.8, 0.7, 0.6];

function clamp(value) {
  return Math.min(Math.max(value, 0), 1);
}

/**
 * Calculate score based on parameters
 *
 * It calculates the score in range from 0 to 1 inclusive.
 * The higher value means better player performance.
 *
 * @param {*} totalMiskates
 * @param {*} maxMistakes
 * @param {*} totalTime
 * @param {*} maxTime
 * @returns
 */
export function getScore(totalMiskates, maxMistakes, totalTime, maxTime) {
  const mistakesContribution = (totalMiskates * 100) / maxMistakes;
  const timeContribution = (totalTime * 100) / maxTime;
  const score = mistakesContribution + timeContribution;

  const normalizedScore = Math.trunc(clamp(1 - score / 200) * 1000);

  return normalizedScore;
}

export function getScoreTier(
  totalMiskates,
  maxMistakes,
  totalTime,
  maxTime,
  complexity
) {
  const score = getScore(totalMiskates, maxMistakes, totalTime, maxTime);

  if (score < oneStarCutoff[complexity]) {
    return 1;
  } else if (score < twoStarCutoff[complexity]) {
    return 2;
  }
  return 3;
}
