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
