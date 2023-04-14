// mangaName.textContent = mangaNameArr[Math.floor(Math.random() * 12)];

const bannerMangaTitle = document.querySelector(
  "body header > div.absolute.z-10 > article > h1"
);
const bannerMangaAuthors = document.querySelector(
  "body header > div.absolute.z-10 > article > p:nth-of-type(1) > span"
);
const bannerMangaDemographic = document.querySelector(
  "body header > div.absolute.z-10 > article > p:nth-of-type(2) > span"
);
const bannerMangaPublished = document.querySelector(
  "body header > div.absolute.z-10 > article > p:nth-of-type(3) > span"
);
const bannerMangaStatus = document.querySelector(
  "body header > div.absolute.z-10 > article > p:nth-of-type(4) > span"
);
const bannerMangaRanked = document.querySelector(
  "body header > div.absolute.z-10 > article > p:nth-of-type(5) > span"
);
const bannerMangaGenres = document.querySelector(
  "body header > div.absolute.z-10 > article > p:nth-of-type(6) > span"
);
const bannerMangaDescription = document.querySelector(
  "body header > div.absolute.z-10 > article > p:nth-of-type(7) > span"
);
// ------------------------------ //
function randomMangaOnReload() {
  const randomNum = Math.floor(Math.random() * mangaInfo.length);
  bannerMangaTitle.textContent = mangaInfo[randomNum].title;
  bannerMangaAuthors.textContent = mangaInfo[randomNum].authors;
  bannerMangaDemographic.textContent = mangaInfo[randomNum].demographic;
  bannerMangaPublished.textContent = mangaInfo[randomNum].published;
  bannerMangaStatus.textContent = mangaInfo[randomNum].status;
  bannerMangaRanked.textContent = mangaInfo[randomNum].ranked;
  bannerMangaGenres.textContent = mangaInfo[randomNum].genres;
  bannerMangaDescription.textContent = mangaInfo[randomNum].description;
  let covers = ``;
  for (let i = 0; i < mangaInfo[randomNum].valumes; i++) {
    covers += `
    <img class="hidden" src="./assets/manga-covers/${mangaInfo[randomNum].title
      .split(" ")
      .join("-")}/valume- (${i + 1}).webp" alt="" loading="lazy" />
      `;
  }
  CoversContainer.innerHTML = covers;
}
randomMangaOnReload();
// ------------------------------ //
let mangaNum = 0;
// console.log(bannerMangaTitle.textContent);
// console.log(mangaInfo.filter((x) => x.title === bannerMangaTitle.textContent));
// console.log(
//   mangaInfo.map((x, i) =>
//     x.title === bannerMangaTitle.textContent ? (mangaNum = i) : "not"
//   )
// );

function WhatMangaNumInBanner() {
  mangaInfo.map((x, i) => {
    if (x.title === bannerMangaTitle.textContent) {
      mangaNum = i;
    }
  });
}
WhatMangaNumInBanner();
// ------------------------------ //
nextBtn.addEventListener("click", () => {
  mangaBannerCount = 1;
  mangaNum === mangaInfo.length - 1 ? (mangaNum = 0) : mangaNum++;

  bannerMangaTitle.textContent = mangaInfo[mangaNum].title;
  bannerMangaAuthors.textContent = mangaInfo[mangaNum].authors;
  bannerMangaDemographic.textContent = mangaInfo[mangaNum].demographic;
  bannerMangaPublished.textContent = mangaInfo[mangaNum].published;
  bannerMangaStatus.textContent = mangaInfo[mangaNum].status;
  bannerMangaRanked.textContent = mangaInfo[mangaNum].ranked;
  bannerMangaGenres.textContent = mangaInfo[mangaNum].genres;
  bannerMangaDescription.textContent = mangaInfo[mangaNum].description;

  let covers = ``;
  for (let i = 0; i < mangaInfo[mangaNum].valumes; i++) {
    covers += `
    <img class="hidden" src="./assets/manga-covers/${mangaInfo[mangaNum].title
      .split(" ")
      .join("-")}/valume- (${i + 1}).webp" alt="" loading="lazy" />
    `;
  }
  CoversContainer.innerHTML = covers;

  console.log(`Next Manga  |${mangaNum}|`);
});

// ------------------------------ //
previousBtn.addEventListener("click", () => {
  mangaBannerCount = 1;
  mangaNum < 1 ? (mangaNum = mangaInfo.length - 1) : mangaNum--;

  bannerMangaTitle.textContent = mangaInfo[mangaNum].title;
  bannerMangaAuthors.textContent = mangaInfo[mangaNum].authors;
  bannerMangaDemographic.textContent = mangaInfo[mangaNum].demographic;
  bannerMangaPublished.textContent = mangaInfo[mangaNum].published;
  bannerMangaStatus.textContent = mangaInfo[mangaNum].status;
  bannerMangaRanked.textContent = mangaInfo[mangaNum].ranked;
  bannerMangaGenres.textContent = mangaInfo[mangaNum].genres;
  bannerMangaDescription.textContent = mangaInfo[mangaNum].description;

  let covers = ``;
  for (let i = 0; i < mangaInfo[mangaNum].valumes; i++) {
    covers += `
    <img class="hidden" src="./assets/manga-covers/${mangaInfo[mangaNum].title
      .split(" ")
      .join("-")}/valume- (${i + 1}).webp" alt="" loading="lazy" />
    `;
  }
  CoversContainer.innerHTML = covers;

  console.log(`Previous Manga  |${mangaNum}|`);
});
// ------------------------------ //
