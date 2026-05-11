document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginNav");
  const signupBtn = document.getElementById("signupNav");
  const logoutBtn = document.getElementById("logoutNav");
  const navUser = document.getElementById("navUser");

  function updateNavbar() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const user = JSON.parse(localStorage.getItem("user"));

    if (isLoggedIn === "true" && user) {
      navUser.textContent = "Hello, " + user.username;
      loginBtn.style.display = "none";
      signupBtn.style.display = "none";
      logoutBtn.style.display = "inline-block";
    } else {
      navUser.textContent = "";
      loginBtn.style.display = "inline-block";
      signupBtn.style.display = "inline-block";
      logoutBtn.style.display = "none";
    }
  }

  loginBtn.onclick = () => {
    window.location.href = "login.html";
  };

  signupBtn.onclick = () => {
    window.location.href = "signup.html";
  };

  logoutBtn.onclick = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    window.location.href = "index.html";
  };

  updateNavbar();
});