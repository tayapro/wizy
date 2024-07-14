import { onLandingPageLoad } from "./pages/landing-page.js";
import { onRulesPageLoad } from "./pages/rules-page.js";
import { onGamePageLoad } from "./pages/game-page.js";
import { onOutcomePageLoad } from "./pages/outcome-page.js";
import { onChampionsPageLoad } from "./pages/champions-page.js";

/**
 * Add an event listener to run the function when the DOM is fully loaded
 */
document.addEventListener("DOMContentLoaded", () => {
  try {
    // Check the current page URL and call the corresponding function to load the appropriate content
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
    // If an error occurs, redirect the user to a custom error page
  } catch {
    window.location.replace("500.html");
  }
});
