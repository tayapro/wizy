import { setUser } from "../components/user.js";
import { setChampions } from "../components/champions.js";

export function onLandingPageLoad() {
  setChampions();
  const usernameForm = document.getElementById("username-form");
  usernameForm.addEventListener("submit", onClickLetsPlay);
}

function onClickLetsPlay(event) {
  console.log(`Username Form Submitted....`);
  event.preventDefault();

  const data = new FormData(event.target);
  console.log([...data.entries()]);
  const jsonData = JSON.parse(JSON.stringify(Object.fromEntries(data)));
  console.log(jsonData);
  const usermame = jsonData["username"];
  console.log(usermame);

  setUser(usermame);

  window.location.replace("rules.html");
}
