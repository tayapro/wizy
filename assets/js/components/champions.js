export function setDefaultChampions() {
  const champions = [
    { name: "Alice", score: 905 },
    { name: "David", score: 850 },
    { name: "Frank", score: 778 },
    { name: "Grace", score: 680 },
    { name: "Jack", score: 797 },
  ];
  console.log("setting default champions", champions);
  const current = localStorage.getItem("Champions");
  if (!current) {
    localStorage.setItem("Champions", JSON.stringify(champions));
  }
}

export function getChampions() {
  const champions = localStorage.getItem("Champions");

  return JSON.parse(champions);
}

export function setChampions(champions) {
  localStorage.removeItem("Champions");
  localStorage.setItem("Champions", JSON.stringify(champions));
}
