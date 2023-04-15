const mangaContainer = document.querySelector(
  "div#mangaComponentMainContainer"
);
function mangaComponenet(mangaName, mangaCover, filterDemographic, like) {
  return (mangaContainer.innerHTML += `
  <!----[ ${mangaName} ]---->
        <div class="manga-card group relative max-h-[455px] overflow-hidden">
          <img
            src="./assets/manga-covers/${mangaCover}"
            alt="" loading="lazy" 
          />
          <!-- manga cover hover black transparent mask -->
          <div
            class="absolute bottom-0 z-10 h-full w-full opacity-30 transition duration-300 group-hover:bg-black"
          ></div>
          <!-- manga  name -->
          <div
            class="absolute bottom-0 z-20 flex h-24 w-full items-end justify-center bg-gradient-to-t from-manganame to-transparent text-center text-sm opacity-100 transition duration-300 group-hover:opacity-100 md:text-base md:opacity-0"
          >
            <span class="pb-3 text-white">${mangaName}</span>
          </div>
          <!-- quick preview icon  -->
          <div
            class="quick-preview absolute left-1/2 top-1/2 z-20 hidden h-20 w-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full border-2 border-solid border-manganame bg-white p-5 opacity-70 transition-opacity duration-300 hover:opacity-100 group-hover:block"
          >
            <img src="./assets/manga-quick-review.gif" alt="" loading="lazy" />
          </div>
          <!-- heart btn  -->
          <div class="absolute right-3 top-3 z-30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill=${like ? "red" : "none"}
              color="red"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="heart-btn h-7 w-7 cursor-pointer drop-shadow-[0_0_10px_rgba(255,0,0,0.7)]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
          <span class="hidden">${filterDemographic}</span>
        </div>
        <!----------------->
  `);
}

mangaInfo.map((mangaInfoItem) => {
  mangaComponenet(
    mangaInfoItem.title,
    `${mangaInfoItem.title.split(" ").join("-")}/valume- (${
      mangaInfoItem.valumes
    }).webp`,
    mangaInfoItem.demographic,
    false
  );
});

// ------------------------------------
// heart btn
// selecet every heart svg in the page
const heartBtns = document.querySelectorAll(
  "#mangaComponentMainContainer svg.heart-btn"
);

// add eventlistener to every heart svg on click make svg fill = red / none
heartBtns.forEach((heartBtn) => {
  heartBtn.addEventListener("click", () => {
    heartBtn.style.fill = heartBtn.style.fill === "red" ? "none" : "red";
  });
});

// on click on each heartBtn svg make fill = red / none and save the manga name to local storage with the same name

// heartBtns.forEach((heartBtn) => {
//   heartBtn.addEventListener("click", () => {
//     const manganame = heartBtn.parentElement.querySelector(
//       ".manga-card span.hidden"
//     ).textContent;
//     const mangaInfo = mangaInfo.find(
//       (mangaInfoItem) => mangaInfoItem.title === manganame
//     );
//     if (heartBtn.style.fill === "red") {
//       localStorage.setItem(manganame, JSON.stringify(mangaInfo));
//     } else {
//       localStorage.removeItem(manganame);
//     }
//   });
// });

heartBtns.forEach((heartBtn) => {
  heartBtn.addEventListener("click", () => {
    // get the name of manga
    const manganame = heartBtn.parentElement.parentElement.querySelector(
      "span.pb-3.text-white"
    ).textContent;

    // then stor whtere the heartBtn is fill red in local storge using manganame as key

    if (heartBtn.style.fill === "red") {
      localStorage.setItem(manganame, "liked");

      console.log(`==> Add ${JSON.stringify(manganame)} To Liked Manga List`);
    } else {
      localStorage.removeItem(manganame);
      console.log(
        `==> Remove ${JSON.stringify(manganame)} To Liked Manga List`
      );
    }
  });
});

// on load check if the manga is liked and change the heartBtn fill to red

heartBtns.forEach((heartBtn) => {
  const manganame = heartBtn.parentElement.parentElement.querySelector(
    "span.pb-3.text-white"
  ).textContent;
  if (localStorage.getItem(manganame) === "liked") {
    heartBtn.style.fill = "red";
  }
});
