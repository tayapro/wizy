import { onLandingPageLoad } from "./pages/landing-page.js";
import { onRulesPageLoad } from "./pages/rules-page.js";
import { onGamePageLoad } from "./pages/game-page.js";
import { onOutcomePageLoad } from "./pages/outcome-page.js";
import { onChampionsPageLoad } from "./pages/champions-page.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
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
    } else if (document.documentURI.includes("champions.html")) {
      onChampionsPageLoad();
    }
    // to catch an error, need to modify following line to `catch(e)` and add console.log(e) to block
  } catch {
    window.location.replace("500.html");
  }
});
