export function setDefaultChampions() {
  const champions = [
    { name: "Alice", score: 905 },
    { name: "David", score: 850 },
    { name: "Frank", score: 778 },
    { name: "Grace", score: 680 },
    { name: "Jack", score: 797 },
  ];
  const current = localStorage.getItem("Champions");
  if (!current) {
    localStorage.setItem("Champions", JSON.stringify(champions));
  }
}

export function getChampions() {
  const champions = localStorage.getItem("Champions");

  return JSON.parse(champions);
}

function setChampions(champions) {
  localStorage.setItem("Champions", JSON.stringify(champions));
}

function turnIndexIntoPlace(index) {
  if (index === -1) return -1;

  return index + 1;
}

export function recordUserScore(username, score, timeStamp) {
  let champions = getChampions();

  const existIndex = champions.findIndex(
    (c) => c.name === username && c.score === score && c.timeStamp === timeStamp
  );
  if (existIndex !== -1) return turnIndexIntoPlace(existIndex);

  const applicant = { name: username, score };
  champions.push(applicant);
  champions.sort((a, b) => b.score - a.score);

  const newChampions = champions.slice(0, 5);
  setChampions(newChampions);

  const i = newChampions.findIndex(
    (c) => c.name === username && c.score === score && c.timeStamp === timeStamp
  );
  return turnIndexIntoPlace(i);
}
