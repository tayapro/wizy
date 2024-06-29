// import { getGameOutcome } from "./outcome.js";

export function setDefaultChampions() {
  const champions = [
    { name: "Alice", score: 905 },
    { name: "Bob", score: 875 },
    { name: "Charlie", score: 942 },
    { name: "David", score: 850 },
    { name: "Eve", score: 912 },
    { name: "Frank", score: 778 },
    { name: "Grace", score: 680 },
    { name: "Hank", score: 919 },
    { name: "Ivy", score: 938 },
    { name: "Jack", score: 797 },
  ];
  localStorage.setItem("Champions", JSON.stringify(champions));
}

export function getChampions() {
  const champions = localStorage.getItem("Champions");

  return JSON.parse(champions);
}

export function checkOutcome(username, outcome) {
  let champions = getChampions();
  console.log("Champions: ", champions);

  const applicant = { name: username, score: outcome };
  champions.push(applicant);
  champions.sort((a, b) => b.score - a.score);

  const newChampions = champions.slice(0, 10);
  console.log("newChampions: ", newChampions);

  return newChampions;
}
