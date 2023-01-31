const reader = document.querySelector("#reader");
const readerBg = document.querySelector("#readerBg");
const readerBtn1 = document.querySelector("#readerBtn1");
const readerBtn2 = document.querySelector("#readerBtn2");
const readerBtn3 = document.querySelector("#readerBtn3");

const quickview = document.querySelector("#quickview");
const closeReader = document.querySelector("#closeReader");

///////////////////////////////////////////////////////////

readerBg.addEventListener("click", function () {
  mangaBody.classList.remove("noscroll");
  reader.classList.add("hide");
  quickview.innerHTML = ` <!--manga here -->`;
});

closeReader.addEventListener("click", function () {
  mangaBody.classList.remove("noscroll");
  reader.classList.add("hide");
  quickview.innerHTML = ` <!--manga here -->`;
});

///////////////////////////////////////////////////////////

readerBtn3.addEventListener("click", function () {
  if (reader.classList.contains("hide")) {
    reader.classList.remove("hide");
  } else {
    reader.classList.add("hide");
  }
});
