// TODO: use the same cut off points for each complexity
// and multiply the score itself based on complexity ie
// complexity 2 - x 1
// compexity 1 - x 0.8
// compelxity 0 - x 0.6
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
  let tier = 3;

  if (score < oneStarCutoff[complexity]) {
    tier = 1;
  } else if (score < twoStarCutoff[complexity]) {
    tier = 2;
  }
  return { score, tier };
}
