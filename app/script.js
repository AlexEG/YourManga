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

// manga contaner
const mangaContaner = document.querySelector("#mangaContaner");
// banner


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
