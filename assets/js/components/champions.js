// import { getGameOutcome } from "./outcome.js";

export function setDefaultChampions() {
  const champions = [
    { name: "Alice", score: 957 },
    { name: "Bob", score: 964 },
    { name: "Charlie", score: 989 },
    { name: "David", score: 975 },
    { name: "Eve", score: 992 },
    { name: "Frank", score: 961 },
    { name: "Grace", score: 980 },
    { name: "Hank", score: 953 },
    { name: "Ivy", score: 998 },
    { name: "Jack", score: 970 },
  ];
  //   console.log(champions);
  localStorage.setItem("Champions", JSON.stringify(champions));
}

export function getChampions() {
  const champions = localStorage.getItem("Champions");
  return JSON.parse(champions);
}

export function checkOutcome(username, outcome) {
  let champions = getChampions();
  console.log("Champions: ", champions);
  const applicant = getUserAndScore();
  console.log("applicant: ", applicant);
  //   champions.push(applicant);
}

// function getUserAndScore() {
//   const outcome = getGameOutcome();
//   const score = outcome.score;
//   const name = localStorage.getItem("Username");
//   //   console.log(`{"name": ${name}, "score": ${score}}`);
//   return { name: name, score: score };
// }
