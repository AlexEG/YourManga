const header = document.querySelector("body header");
const mangaCover = document.querySelector(
  "body header > div.absolute.z-10 > div > img"
);

const nextBtn = document.querySelector(" header #nextBannerbtn");
const previousBtn = document.querySelector(" header #previousBannerbtn");
const CoversContainer = document.querySelector(
  "header #mangaValumesCoversContainer"
);

// ---------------------------------------------------- //

let mangaBannerCount = 1;
function autoChangeBannerImg() {
  setTimeout(function () {
    header.style.backgroundImage = `url('${document
      .querySelector(
        `#mangaValumesCoversContainer > img:nth-child(${mangaBannerCount})`
      )
      .src.slice(0)}')`;

    mangaCover.src = `${document
      .querySelector(
        ` #mangaValumesCoversContainer > img:nth-child(${mangaBannerCount})`
      )
      .src.slice(0)}`;

    console.log(
      `%c ${bannerMangaTitle.textContent}  %c${mangaBannerCount}`,
      `color:#ff009975`,
      `color:red; background-color:#55555575; padding-inline:4px; border-radius:8px`
    );

    mangaBannerCount++;
    autoChangeBannerImg();
  }, 1000);
  // ------
  if (mangaBannerCount > CoversContainer.childElementCount) {
    mangaBannerCount = 1;
  }
}
autoChangeBannerImg();
// ---------------------------------------------------- //
// ---------------------------------------------------- //
