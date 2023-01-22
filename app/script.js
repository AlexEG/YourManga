document.getElementById("cards").onmousemove = (e) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// manga sub pages
// manga single page app  [Page Controller]
const mangaContaner = document.querySelector("#mangaContaner");
const header = document.querySelector("#header");


const btnpPage1 = document.querySelector("#btnpage1");
const btnpPage2 = document.querySelector("#btnpage2");
const btnpPage3 = document.querySelector("#btnpage3");
const btnpPage4 = document.querySelector("#btnpage4");

// toggle the active class to magic-controller box
const btnactive1 = document.querySelector("#btnactive1");
const btnactive2 = document.querySelector("#btnactive2");
const btnactive3 = document.querySelector("#btnactive3");
const btnactive4 = document.querySelector("#btnactive4");
// ./app/page/manga1.js = btnpPage1
// ./app/page/manga2.js = btnpPage2
// ./app/page/manga3.js = btnpPage3
// ./app/page/manga4.js = btnpPage4

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
const reader = document.querySelector("#reader");
const readerBg = document.querySelector("#readerBg");
const readerBtn1 = document.querySelector("#readerBtn1");
const readerBtn2 = document.querySelector("#readerBtn2");
const readerBtn3 = document.querySelector("#readerBtn3");
const quickview = document.querySelector("#quickview");

readerBg.addEventListener("click", function () {
  reader.classList.add("hide");
});

//
readerBtn1.addEventListener("click", function () {
  quickview.innerHTML = `
  <img
  src="https://coffeemanga.io/wp-content/uploads/WP-manga/data/manga_638b07a738bed/d1e9c1720ecafde116bc392a0c0482b7/2.webp"
  alt=""
/>
<img
  src="https://coffeemanga.io/wp-content/uploads/WP-manga/data/manga_638b07a738bed/9b7d51b0536cd74c992c7d6ce44bab62/2.webp"
  alt=""
/>
<img
  src="https://coffeemanga.io/wp-content/uploads/WP-manga/data/manga_638b07a738bed/9b7d51b0536cd74c992c7d6ce44bab62/1.webp"
  alt=""
/>`;

  if (reader.classList.contains("hide")) {
    reader.classList.remove("hide");
  } else {
    reader.classList.add("hide");
  }
});

readerBtn2.addEventListener("click", function () {
  quickview.innerHTML = `
  <img
  src="https://coffeemanga.io/wp-content/uploads/WP-manga/data/manga_61e261acd222c/fd0aec59f5cba517c2df7119a540b60c/1.jpg"
  alt=""
/>
  <img
  src="https://coffeemanga.io/wp-content/uploads/WP-manga/data/manga_61e261acd222c/fd0aec59f5cba517c2df7119a540b60c/2.jpg"
  alt=""
/>
  <img
  src="https://coffeemanga.io/wp-content/uploads/WP-manga/data/manga_61e261acd222c/fd0aec59f5cba517c2df7119a540b60c/3.jpg"
  alt=""
/>
  <img
  src="https://coffeemanga.io/wp-content/uploads/WP-manga/data/manga_61e261acd222c/fd0aec59f5cba517c2df7119a540b60c/4.jpg"
  alt=""
/>
  <img
  src="https://coffeemanga.io/wp-content/uploads/WP-manga/data/manga_61e261acd222c/fd0aec59f5cba517c2df7119a540b60c/5.jpg"
  alt=""
/>
  <img
  src="https://coffeemanga.io/wp-content/uploads/WP-manga/data/manga_61e261acd222c/fd0aec59f5cba517c2df7119a540b60c/6.jpg"
  alt=""
/>
  <img
  src="https://coffeemanga.io/wp-content/uploads/WP-manga/data/manga_61e261acd222c/fd0aec59f5cba517c2df7119a540b60c/7.jpg"
  alt=""
/>
  <img
  src="https://coffeemanga.io/wp-content/uploads/WP-manga/data/manga_61e261acd222c/fd0aec59f5cba517c2df7119a540b60c/8.jpg"
  alt=""
/>
`;
  if (reader.classList.contains("hide")) {
    reader.classList.remove("hide");
  } else {
    reader.classList.add("hide");
  }
});
readerBtn3.addEventListener("click", function () {
  if (reader.classList.contains("hide")) {
    reader.classList.remove("hide");
  } else {
    reader.classList.add("hide");
  }
});


//light Dark Mode

const lightDarkMode =document.querySelector('#lightDarkMode');
const mangaBody =document.querySelector('#mangaBody');

lightDarkMode.addEventListener("click", function () {
  // mangaBody.toggleClass("light-theme")

  if (mangaBody.classList.contains("light-theme")) {
    mangaBody.classList.remove("light-theme");
  } else {
    mangaBody.classList.add("light-theme");
  }


});




















