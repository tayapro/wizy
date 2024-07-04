export function onComplexitySubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);
  const { complexity } = JSON.parse(JSON.stringify(Object.fromEntries(data)));
  if (!complexity) throw new Error("Complexity not submitted");

  localStorage.setItem("Complexity", complexity);

  window.location.replace("game.html");
}

export function getComplexity() {
  const complexity = localStorage.getItem("Complexity");
  if (!complexity) throw new Error("Complexity not found");

  return complexity;
}
