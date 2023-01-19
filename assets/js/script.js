function toggleDarkMode() {
  var body = document.getElementsByTagName("BODY")[0];
  var currentClass = body.className;
  if (currentClass === "dark-mode") {
    body.className = "light-mode";
  } else {
    body.className = "dark-mode";
  }
}
