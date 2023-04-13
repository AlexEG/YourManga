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

let bannerMangaInfoNum = 0;
// ------------------------------ //
nextBtn.addEventListener("click", () => {
  bannerMangaInfoNum === 11 ? (bannerMangaInfoNum = 0) : bannerMangaInfoNum++;
  bannerMangaTitle.textContent = mangaInfo[bannerMangaInfoNum].title;
  bannerMangaAuthors.textContent = mangaInfo[bannerMangaInfoNum].authors;
  bannerMangaDemographic.textContent =
    mangaInfo[bannerMangaInfoNum].demographic;
  bannerMangaPublished.textContent = mangaInfo[bannerMangaInfoNum].published;
  bannerMangaStatus.textContent = mangaInfo[bannerMangaInfoNum].status;
  bannerMangaRanked.textContent = mangaInfo[bannerMangaInfoNum].ranked;
  bannerMangaGenres.textContent = mangaInfo[bannerMangaInfoNum].genres;
  bannerMangaDescription.textContent =
    mangaInfo[bannerMangaInfoNum].description;

  mangaBannerCount = 1;

  let covers = ``;
  for (let i = 0; i < mangaInfo[bannerMangaInfoNum].valumes; i++) {
    covers += `
    <img class="hidden" src="./assets/manga-covers/${mangaInfo[
      bannerMangaInfoNum
    ].title
      .split(" ")
      .join("-")}/valume-${i + 1}.webp" alt="" loading="lazy" />
    `;
  }
  CoversContainer.innerHTML = covers;

  console.log(`Change Manga in preview | Next`);
});

previousBtn.addEventListener("click", () => {
  bannerMangaInfoNum < 1 ? (bannerMangaInfoNum = 11) : bannerMangaInfoNum--;
  bannerMangaTitle.textContent = mangaInfo[bannerMangaInfoNum].title;
  bannerMangaAuthors.textContent = mangaInfo[bannerMangaInfoNum].authors;
  bannerMangaDemographic.textContent =
    mangaInfo[bannerMangaInfoNum].demographic;
  bannerMangaPublished.textContent = mangaInfo[bannerMangaInfoNum].published;
  bannerMangaStatus.textContent = mangaInfo[bannerMangaInfoNum].status;
  bannerMangaRanked.textContent = mangaInfo[bannerMangaInfoNum].ranked;
  bannerMangaGenres.textContent = mangaInfo[bannerMangaInfoNum].genres;
  bannerMangaDescription.textContent =
    mangaInfo[bannerMangaInfoNum].description;
  mangaBannerCount = 1;

  let covers = ``;
  for (let i = 0; i < mangaInfo[bannerMangaInfoNum].valumes; i++) {
    covers += `
    <img class="hidden" src="./assets/manga-covers/${mangaInfo[
      bannerMangaInfoNum
    ].title
      .split(" ")
      .join("-")}/valume-${i + 1}.webp" alt="" loading="lazy" />
    `;
  }
  CoversContainer.innerHTML = covers;
  console.log(`Change Manga in preview | Back`);
});
// ------------------------------ //
