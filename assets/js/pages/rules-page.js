import { setUserIcon } from "../components/user.js";
import { onComplexitySubmit } from "../components/complexity.js";

/**
 * Handle rules.html page loading
 */
export function onRulesPageLoad() {
  document
    .getElementById("game-level-form")
    .addEventListener("submit", onComplexitySubmit);

  // Set icon on header DOM element with first username' letter
  setUserIcon();
}
