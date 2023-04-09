const header = document.querySelector("body > header");
const mangaCover = document.querySelector(
  "body > header > div.absolute.z-10.grid.h-full.w-full.grid-cols-4 > div > img"
);

const nextBtn = document.querySelector("header #nextBannerbtn");
const previousBtn = document.querySelector("header #previousBannerbtn");
const CoversContainer = document.querySelector(
  "header #mangaValumesCoversContainer"
);

// ---------------------------------------------------- //

let mangaBannerCount = 1;
function autoChangeBannerImg() {
  setTimeout(function () {
    header.style.backgroundImage = `url('.${document
      .querySelector(
        `#mangaValumesCoversContainer > img:nth-child(${mangaBannerCount})`
      )
      .src.slice(21)}')`;

    mangaCover.src = `.${document
      .querySelector(
        `#mangaValumesCoversContainer > img:nth-child(${mangaBannerCount})`
      )
      .src.slice(21)}`;

    console.log("(Change Banner Img)  " + mangaBannerCount);

    mangaBannerCount++;
    autoChangeBannerImg();
  }, 1000);
  // ------
  if (mangaBannerCount > CoversContainer.childElementCount) {
    mangaBannerCount = 1;
  }
}
autoChangeBannerImg();

const mangaCoverArr = [
  [
    "manga-page1-webp/tomo-chan-wa-onna-no-ko/tomo-chan-1",
    "manga-page1-webp/tomo-chan-wa-onna-no-ko/tomo-chan-2",
    "manga-page1-webp/tomo-chan-wa-onna-no-ko/tomo-chan-3",
    "manga-page1-webp/tomo-chan-wa-onna-no-ko/tomo-chan-4",
    "manga-page1-webp/tomo-chan-wa-onna-no-ko/tomo-chan-5",
    "manga-page1-webp/tomo-chan-wa-onna-no-ko/tomo-chan-6",
    "manga-page1-webp/tomo-chan-wa-onna-no-ko/tomo-chan-7",
    "manga-page1-webp/tomo-chan-wa-onna-no-ko/tomo-chan-8",
  ],
  [
    "manga-page3-webp/Gekkan-Shoujo-Nozaki-kun/Nozaki-kun-1",
    "manga-page3-webp/Gekkan-Shoujo-Nozaki-kun/Nozaki-kun-2",
    "manga-page3-webp/Gekkan-Shoujo-Nozaki-kun/Nozaki-kun-3",
    "manga-page3-webp/Gekkan-Shoujo-Nozaki-kun/Nozaki-kun-4",
    "manga-page3-webp/Gekkan-Shoujo-Nozaki-kun/Nozaki-kun-5",
    "manga-page3-webp/Gekkan-Shoujo-Nozaki-kun/Nozaki-kun-6",
    "manga-page3-webp/Gekkan-Shoujo-Nozaki-kun/Nozaki-kun-7",
    "manga-page3-webp/Gekkan-Shoujo-Nozaki-kun/Nozaki-kun-8",
    "manga-page3-webp/Gekkan-Shoujo-Nozaki-kun/Nozaki-kun-9",
    "manga-page3-webp/Gekkan-Shoujo-Nozaki-kun/Nozaki-kun-10",
    "manga-page3-webp/Gekkan-Shoujo-Nozaki-kun/Nozaki-kun-11",
    "manga-page3-webp/Gekkan-Shoujo-Nozaki-kun/Nozaki-kun-12",
    "manga-page3-webp/Gekkan-Shoujo-Nozaki-kun/Nozaki-kun-13",
    "manga-page3-webp/Gekkan-Shoujo-Nozaki-kun/Nozaki-kun-14",
  ],
  [
    "manga-page2-webp/Boys-Abyss/Boys-Abyss-1",
    "manga-page2-webp/Boys-Abyss/Boys-Abyss-2",
    "manga-page2-webp/Boys-Abyss/Boys-Abyss-3",
    "manga-page2-webp/Boys-Abyss/Boys-Abyss-4",
    "manga-page2-webp/Boys-Abyss/Boys-Abyss-5",
    "manga-page2-webp/Boys-Abyss/Boys-Abyss-6",
    "manga-page2-webp/Boys-Abyss/Boys-Abyss-7",
    "manga-page2-webp/Boys-Abyss/Boys-Abyss-8",
    "manga-page2-webp/Boys-Abyss/Boys-Abyss-9",
    "manga-page2-webp/Boys-Abyss/Boys-Abyss-10",
    "manga-page2-webp/Boys-Abyss/Boys-Abyss-11",
  ],
  [
    "manga-page2-webp/Ajin/Ajin-1",
    "manga-page2-webp/Ajin/Ajin-2",
    "manga-page2-webp/Ajin/Ajin-3",
    "manga-page2-webp/Ajin/Ajin-4",
    "manga-page2-webp/Ajin/Ajin-5",
    "manga-page2-webp/Ajin/Ajin-6",
    "manga-page2-webp/Ajin/Ajin-7",
    "manga-page2-webp/Ajin/Ajin-8",
    "manga-page2-webp/Ajin/Ajin-9",
    "manga-page2-webp/Ajin/Ajin-10",
    "manga-page2-webp/Ajin/Ajin-11",
    "manga-page2-webp/Ajin/Ajin-12",
    "manga-page2-webp/Ajin/Ajin-13",
    "manga-page2-webp/Ajin/Ajin-14",
    "manga-page2-webp/Ajin/Ajin-15",
    "manga-page2-webp/Ajin/Ajin-16",
    "manga-page2-webp/Ajin/Ajin-17",
  ],
];

function addImg(el) {
  return `<img class="hidden" src="./assets/manga-covers/${el}.webp" alt="" />`;
}
