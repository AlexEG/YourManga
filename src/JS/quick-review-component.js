const reader = document.querySelector(
  "body > main > div.fixed.top-0.z-40.hidden.h-full.w-full"
);
const readerMask = document.querySelector(
  "body > main > div.fixed.top-0.z-40.h-full.w-full > div.h-full.w-full.bg-black.opacity-80"
);
const readerImagesContainer = document.querySelector(
  "body > main > div.fixed.top-0.z-40.hidden.h-full.w-full > div.manga-reader.absolute.left-1\\/2.top-0.z-50.h-full.w-1\\/3.-translate-x-1\\/2.overflow-auto.pr-2"
);

readerMask.addEventListener("click", () => {
  reader.classList.add("hidden");
  document.querySelector("body").classList.remove("overflow-hidden");

  readerImagesContainer.innerHTML = "";
});
function addImage(img) {
  readerImagesContainer.innerHTML += `<img class="w-full" src="./assets/manga/${img}" alt="" />`;
}

// Tomo-chan is a Girl!
document
  .querySelector(
    "#mangaComponentMainContainer > div:nth-child(1) > div.quick-preview"
  )
  .addEventListener("click", () => {
    reader.classList.remove("hidden");
    document.querySelector("body").classList.add("overflow-hidden");
    addImage(`tomo-chan/1.webp`);
    addImage(`tomo-chan/2.webp`);
    addImage(`tomo-chan/3.webp`);
    addImage(`tomo-chan/4.png`);
    addImage(`tomo-chan/5.png`);
    addImage(`tomo-chan/6.png`);
    addImage(`tomo-chan/7.png`);
    addImage(`tomo-chan/8.png`);
  });

// Monthly Girls' Nozaki-kun
document
  .querySelector(
    "#mangaComponentMainContainer > div:nth-child(2) > div.quick-preview"
  )
  .addEventListener("click", () => {
    reader.classList.remove("hidden");
    document.querySelector("body").classList.add("overflow-hidden");

    addImage(`Monthly-Girls-Nozaki-kun/0.webp`);
    addImage(`Monthly-Girls-Nozaki-kun/1.png`);
    addImage(`Monthly-Girls-Nozaki-kun/2.png`);
    addImage(`Monthly-Girls-Nozaki-kun/3.png`);
    addImage(`Monthly-Girls-Nozaki-kun/4.webp`);
    addImage(`Monthly-Girls-Nozaki-kun/5.png`);
    addImage(`Monthly-Girls-Nozaki-kun/6.png`);
    addImage(`Monthly-Girls-Nozaki-kun/7.webp`);
    addImage(`Monthly-Girls-Nozaki-kun/8.png`);
    addImage(`Monthly-Girls-Nozaki-kun/9.png`);
    addImage(`Monthly-Girls-Nozaki-kun/10.png`);
    addImage(`Monthly-Girls-Nozaki-kun/11.webp`);
    addImage(`Monthly-Girls-Nozaki-kun/12.png`);
    addImage(`Monthly-Girls-Nozaki-kun/13.webp`);
    addImage(`Monthly-Girls-Nozaki-kun/14.png`);
    addImage(`Monthly-Girls-Nozaki-kun/15.png`);
    addImage(`Monthly-Girls-Nozaki-kun/16.webp`);
  });

// Boy's Abyss
document
  .querySelector(
    "#mangaComponentMainContainer > div:nth-child(3) > div.quick-preview"
  )
  .addEventListener("click", () => {
    reader.classList.remove("hidden");
    document.querySelector("body").classList.add("overflow-hidden");

    addImage(`Boys-Abyss/0.webp`);
    addImage(`Boys-Abyss/1.webp`);
    addImage(`Boys-Abyss/2.png`);
    addImage(`Boys-Abyss/3.png`);
    addImage(`Boys-Abyss/4.webp`);
    addImage(`Boys-Abyss/5.png`);
    addImage(`Boys-Abyss/6.webp`);
    addImage(`Boys-Abyss/7.webp`);
    addImage(`Boys-Abyss/8.webp`);
    addImage(`Boys-Abyss/9.png`);
    addImage(`Boys-Abyss/10.webp`);
    addImage(`Boys-Abyss/11.webp`);
    addImage(`Boys-Abyss/12.webp`);
    addImage(`Boys-Abyss/13.webp`);
    addImage(`Boys-Abyss/14.webp`);
    addImage(`Boys-Abyss/15.png`);
    addImage(`Boys-Abyss/16.png`);
    addImage(`Boys-Abyss/17.png`);
    addImage(`Boys-Abyss/18.webp`);
    addImage(`Boys-Abyss/19.png`);
    addImage(`Boys-Abyss/20.webp`);
    addImage(`Boys-Abyss/21.png`);
    addImage(`Boys-Abyss/22.webp`);
    addImage(`Boys-Abyss/23.webp`);
    addImage(`Boys-Abyss/24.png`);
    addImage(`Boys-Abyss/25.webp`);
    addImage(`Boys-Abyss/26.webp`);
    addImage(`Boys-Abyss/27.webp`);
    addImage(`Boys-Abyss/28.png`);
    addImage(`Boys-Abyss/29.png`);
    addImage(`Boys-Abyss/30.png`);
    addImage(`Boys-Abyss/31.webp`);
    addImage(`Boys-Abyss/32.png`);
    addImage(`Boys-Abyss/33.webp`);
    addImage(`Boys-Abyss/34.webp`);
    addImage(`Boys-Abyss/35.webp`);
    addImage(`Boys-Abyss/36.webp`);
    addImage(`Boys-Abyss/37.png`);
    addImage(`Boys-Abyss/38.webp`);
    addImage(`Boys-Abyss/39.png`);
    addImage(`Boys-Abyss/40.webp`);
    addImage(`Boys-Abyss/41.png`);
    addImage(`Boys-Abyss/42.webp`);
    addImage(`Boys-Abyss/43.webp`);
    addImage(`Boys-Abyss/44.webp`);
    addImage(`Boys-Abyss/45.webp`);
    addImage(`Boys-Abyss/46.webp`);
    addImage(`Boys-Abyss/47.jpg`);
    addImage(`Boys-Abyss/48.webp`);
  });
