const mangaContainer = document.querySelector(
  "div#mangaComponentMainContainer"
);
function mangaComponenet(mangaName, mangaCover, like) {
  return (mangaContainer.innerHTML += `
  <!-- ------------- -->
        <div class="group relative max-h-[455px] overflow-hidden">
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
              class="h-7 w-7 cursor-pointer drop-shadow-[0_0_10px_rgba(255,0,0,0.7)]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
        </div>
        <!-- ------------- -->
  `);
}
// mangaComponenet(`mangaName`,`mangaCover`,`like)
// like === ture=red false=none [true,false,1,0] default = false
// mangaCover === src="./assets/manga-covers/[[manga-page1-webp/tomo-chan-wa-onna-no-ko/tomo-chan-8.webp]]"

// mangaComponenet(
//   `Tomo-chan is a Girl!`,
//   `manga-page1-webp/tomo-chan-wa-onna-no-ko/tomo-chan-8.webp`,
// true
// );

mangaComponenet(
  `Monthly Girls' Nozaki-kun`,
  `manga-page3-webp/Gekkan-Shoujo-Nozaki-kun/Nozaki-kun-14.webp`,
  true
);

mangaComponenet(
  `Boy's Abyss`,
  `manga-page2-webp/Boys-Abyss/Boys-Abyss-1.webp`,
  true
);
mangaComponenet(`Ajin`, `manga-page2-webp/Ajin/Ajin-17.webp`, false);
mangaComponenet(
  `Wotakoi: Love Is Hard for Otaku`,
  `manga-page1-webp/wotakoi-love-is-hard/wotakoi-love-is-hard-3.webp`,
  true
);
mangaComponenet(
  `Mieruko-chan`,
  `manga-page1-webp/mieruko-chan/mieruko-chan-6.webp`,
  true
);
mangaComponenet(
  `My Dress up Darling`,
  `manga-page1-webp/sono-bisque-doll-wa-koi-wo-suru/my-dress-up-darling10.webp`,
  true
);
mangaComponenet(
  `We Dont Know a Thing About Love`,
  `manga-page4-webp/We-Dont-Know-a-Thing-About-Love/3.webp`,
  false
);
mangaComponenet(
  `Uzaki-chan Wants to Hang Out!`,
  `manga-page1-webp/uzaki-chan-wants-to-hang-out/uzaki-chan-9.webp`,
  false
);
mangaComponenet(
  `Pumpkin Night`,
  `manga-page1-webp/pumpkin-night/pumpkin-night-6.webp`,
  true
);
mangaComponenet(
  `Attack on Titan`,
  `manga-page2-webp/Attack-on-Titan/Attack-on-Titan-34.webp`,
  false
);
mangaComponenet(
  `Call of the Night`,
  `manga-page2-webp/Call-of-the-Night/Call-of-the-Night-7.webp`,
  false
);
