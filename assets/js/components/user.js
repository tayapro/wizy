export function setUserIcon() {
  const name = getUser();
  console.log("Name: ", name);
  const firstUsernameLetter = name.charAt(0).toUpperCase();
  const username = document.getElementById("user-icon");
  username.innerHTML = firstUsernameLetter;
}

export function setUser(username) {
  localStorage.setItem("Username", username);
}

export function getUser() {
  const username = localStorage.getItem("Username");
  return username;
}
