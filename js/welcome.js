var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (loggedInUser) {
  document.getElementById(
    "username"
  ).textContent = `Welcome, ${loggedInUser.signupName}!`;
} else {
  window.location.href = "login.html";
}

var logoutBtn = document.querySelector("#logout");
function logOut() {
  window.location.href = "login.html";
}
logoutBtn.addEventListener("click", logOut);


