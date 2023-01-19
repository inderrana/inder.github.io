const modeText = document.querySelector(".mode-text");

function toggleDarkMode() {
  const darkModeSwitch = document.getElementById("dark-mode-switch");
  const body = document.querySelector("body");
  if (darkModeSwitch.checked) {
    body.classList.add("dark-mode");
    modeText.innerText = "Dark Mode";
  } else {
    body.classList.remove("dark-mode");
    modeText.innerText = "Light Mode";
  }
}
