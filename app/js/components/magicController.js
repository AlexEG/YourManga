btnpPage1.addEventListener("click", function () {
  btnactive2.classList.remove("active");
  btnactive3.classList.remove("active");
  btnactive4.classList.remove("active");
  btnactive1.classList.add("active");
});

btnpPage2.addEventListener("click", function () {
  btnactive1.classList.remove("active");
  btnactive3.classList.remove("active");
  btnactive4.classList.remove("active");
  btnactive2.classList.add("active");
});

btnpPage3.addEventListener("click", function () {
  btnactive1.classList.remove("active");
  btnactive2.classList.remove("active");
  btnactive4.classList.remove("active");
  btnactive3.classList.add("active");
});

btnpPage4.addEventListener("click", function () {
  btnactive1.classList.remove("active");
  btnactive2.classList.remove("active");
  btnactive3.classList.remove("active");
  btnactive4.classList.add("active");
});
