function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    document.getElementById("msg").innerText = "Login Successful";
  } else {
    document.getElementById("msg").innerText = "Invalid Login";
  }
}
