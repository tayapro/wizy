import { onLandingPageLoad } from "./pages/landing-page.js";
import { onRulesPageLoad } from "./pages/rules-page.js";
import { onGamePageLoad } from "./pages/game-page.js";
import { onOutcomePageLoad } from "./pages/outcome-page.js";

document.addEventListener("DOMContentLoaded", (event) => {
  // console.log(document.documentURI);
  if (
    document.documentURI.includes("index.html") ||
    document.documentURI.endsWith("/")
  ) {
    onLandingPageLoad();
  } else if (document.documentURI.includes("rules.html")) {
    onRulesPageLoad();
  } else if (document.documentURI.includes("game.html")) {
    onGamePageLoad();
  } else if (document.documentURI.includes("outcome.html")) {
    onOutcomePageLoad();
  } else {
    return;
  }
});
