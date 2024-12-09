var loginEmailInput = document.getElementById("loginEmail");
var loginPassInput = document.getElementById("loginPass");
var loginBtn = document.getElementById("loginBtn");
var loginMessage = document.getElementById("incorrect");

var userInfo = [];
if (localStorage.getItem("userInformation") !== null) {
  userInfo = JSON.parse(localStorage.getItem("userInformation"));
}

function login() {
  if (loginEmailInput.value == "" || loginPassInput.value == "") {
    document.getElementById("incorrect").innerHTML =
      '<span class="text-danger m-3">All inputs is required</span>';
    return false;
  }

  var email = loginEmailInput.value.toLowerCase();
  var password = loginPassInput.value;

  for (var i = 0; i < userInfo.length; i++) {
    if (
      userInfo[i].signupEmail.toLowerCase() === email &&
      userInfo[i].signupPass === password
    ) {
      localStorage.setItem("loggedInUser", JSON.stringify(userInfo[i]));
      window.location.href = "../pages/welcome.html";
      return;
    }
  }

  loginMessage.innerHTML =
    '<span style="color: red;">Email or password is incorrect</span>';
}

loginBtn.addEventListener("click", login);
