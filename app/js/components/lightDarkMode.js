//light Dark Mode
const lightDarkMode = document.querySelector("#lightDarkMode");
const mangaBody = document.querySelector("#mangaBody");

lightDarkMode.addEventListener("click", function () {
  // mangaBody.toggleClass("light-theme")

  if (mangaBody.classList.contains("light-theme")) {
    mangaBody.classList.remove("light-theme");
  } else {
    mangaBody.classList.add("light-theme");
  }
});