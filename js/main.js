function toggleTheme() {
  if (document.body.className === "dark") {
    document.body.className = "";
    localStorage.setItem("theme", "light");
  } else {
    document.body.className = "dark";
    localStorage.setItem("theme", "dark");
  }
}
function checkLoginStatus() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const username = localStorage.getItem("username");

  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const welcomeText = document.getElementById("welcomeText");

  if (!loginBtn || !logoutBtn || !welcomeText) return;

  if (isLoggedIn === "true") {
    welcomeText.textContent = `Welcome, ${username}`;
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";
  } else {
    welcomeText.textContent = "";
    loginBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";
  }

  loginBtn.onclick = function () {
    const name = prompt("Enter your name");
    if (name) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", name);
      checkLoginStatus();
    }
  };

  logoutBtn.onclick = function () {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    checkLoginStatus();
  };
}


window.onload = function () {
  if (localStorage.getItem("theme") === "dark") {
    document.body.className = "dark";
  }
};