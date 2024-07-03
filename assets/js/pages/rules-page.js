import { setUserIcon } from "../components/user.js";
import { onComplexitySubmit } from "../components/complexity.js";

export function onRulesPageLoad() {
  const complexityForm = document.getElementById("game-level-form");
  complexityForm.addEventListener("submit", onComplexitySubmit);
  setUserIcon();
}
