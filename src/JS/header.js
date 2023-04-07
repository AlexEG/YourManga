const header = document.querySelector("body > header");
const mangaCover = document.querySelector(
  "body > header > div.absolute.z-10.grid.h-full.w-full.grid-cols-4 > div > img"
);

function headerBanner(mangaPath, valumeCoverNumber) {
  let n = 1;
  let time = 0;
  let i = 0;

  const valumeCover = () => {
    setTimeout(function () {
      header.style.backgroundImage = `url('./assets/manga-covers/${mangaPath}${n}.webp')`;
      mangaCover.src = `./assets/manga-covers/${mangaPath}${n}.webp`;
      console.log(`img ${n}`);
      n++;
    }, time);
    time = time + 4000;
  };

  for (; i < valumeCoverNumber; i++) {
    valumeCover();
  }

  setTimeout(function () {
    headerBanner(mangaPath, valumeCoverNumber);
    console.log("restart");
  }, time + 4000);
}

//  headerBanner(`manga-page2-webp/Boys-Abyss/Boys-Abyss-`, 11);

//////////////////////////////////

const nextBtn = document.querySelector("header #nextBannerbtn");
const previousBtn = document.querySelector("header #previousBannerbtn");

const mangaArr = [
  [`manga-page2-webp/Boys-Abyss/Boys-Abyss-`, 11],
  [`manga-page1-webp/uzaki-chan-wants-to-hang-out/uzaki-chan-`, 9],
  [`manga-page1-webp/pumpkin-night/pumpkin-night-`, 7],
];

headerBanner(mangaArr[0][0], mangaArr[0][1]);

// TODO auto change banner manga's valume Cover
// TODO dark/light btn
// TODO get all manga first chapter
// TODO design phone app version(responsive design)
