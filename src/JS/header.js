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

headerBanner(`manga-page2-webp/Boys-Abyss/Boys-Abyss-`, 11);

//////////////////////////////////
//TODO Previous Next btn
// get a random manga with info and then render it as header/banner
// maybe be stor all manga info in array then use Math.random to get both info + manga name
// relate manga name with PATH & how many valume Cover that this manga have
// or in manga info set valumes number
