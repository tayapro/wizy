export function onComplexitySubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);
  const { complexity } = JSON.parse(JSON.stringify(Object.fromEntries(data)));

  localStorage.setItem("Complexity", complexity);

  window.location.replace("game.html");
}

export function getComplexity() {
  const complexity = localStorage.getItem("Complexity");
  console.log("From getComplexity: ", complexity);

  return complexity;
}
