export function setUserIcon() {
  const name = getUser();
  console.log("From setUserIcon: ", name);
  const firstUsernameLetter = name.charAt(0).toUpperCase();
  const username = document.getElementById("user-icon");
  username.innerHTML = firstUsernameLetter;
}

export function setUser(username) {
  localStorage.setItem("Username", username);
}

function getUser() {
  const username = localStorage.getItem("Username");

  return username;
}
