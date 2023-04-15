const totalNumberOfManga = document.querySelector(
  "body > nav > div.total-manga > span"
);

// recalculate the number of manga in the page
function updateNumberOfManga() {
  console.log("update Total Manga");
  totalNumberOfManga.innerHTML = mangaContainer.childElementCount;
}
window.addEventListener("load", updateNumberOfManga);
///////////////////////////////////////////////////////////////////////
const filterBtnsContaniner = document.querySelector("body > nav > div.ml-2");
const filterBtns = document.querySelectorAll("body > nav > div.ml-2 button");

// add inline colors to active class  (first button) (All)
filterBtnsContaniner.querySelector(
  "button.active-filter"
).style.backgroundColor = "#f1f5f9";
filterBtnsContaniner.querySelector("button.active-filter").style.color =
  "#334155";

// add event listener to all buttons
filterBtnsContaniner.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    filterBtnsContaniner.querySelector(".active-filter").style.backgroundColor =
      "";
    filterBtnsContaniner.querySelector(".active-filter").style.color = "";
    filterBtnsContaniner
      .querySelector(".active-filter")
      .classList.remove("active-filter");

    e.target.classList.add("active-filter");
    e.target.style.color = "#334155";
    e.target.style.backgroundColor = "#f1f5f9";
  }
});

////////////////////

// filter manga cards by check the hidden span inside every card and if the span has the same value as the button value then show the card

const mangaCards = mangaContainer.querySelectorAll(".manga-card");

// Filter (All) btn [DONE]
filterBtnsContaniner
  .querySelector("button:nth-child(1)")
  .addEventListener("click", () => {
    totalNumberOfManga.innerHTML = mangaContainer.childElementCount;
    // reset all manga cards to display block
    mangaCards.forEach((card) => {
      card.style.display = "block";
    });
    console.log(`  ==> See All Manga`);
  });

// Filter (Seinen) btn [DONE]
filterBtnsContaniner
  .querySelector("button:nth-child(2)")
  .addEventListener("click", () => {
    let total = 0;

    mangaCards.forEach((card) => {
      if (card.querySelector("span.hidden").textContent === "Seinen") {
        card.style.display = "block";
        total++;
      } else {
        card.style.display = "none";
      }
    });

    totalNumberOfManga.innerHTML = total;
    console.log(`  ==> Just Seinen Manga || ${total} manga`);
  });

// Filter (Shounen) btn [DONE]
filterBtnsContaniner
  .querySelector("button:nth-child(3)")
  .addEventListener("click", () => {
    let total = 0;
    mangaCards.forEach((card) => {
      if (card.querySelector("span.hidden").textContent === "Shounen") {
        card.style.display = "block";
        total++;
      } else {
        card.style.display = "none";
      }
    });

    totalNumberOfManga.innerHTML = total;
    console.log(`  ==> Just Shounen Manga || ${total} manga`);
  });

// Filter (Josei) btn [DONE]
filterBtnsContaniner
  .querySelector("button:nth-child(4)")
  .addEventListener("click", () => {
    let total = 0;
    mangaCards.forEach((card) => {
      if (card.querySelector("span.hidden").textContent === "Josei") {
        card.style.display = "block";
        total++;
      } else {
        card.style.display = "none";
      }
    });

    totalNumberOfManga.innerHTML = total;
    console.log(`  ==> Just Josei Manga || ${total} manga`);
  });

// Filter (Shoujo) btn [DONE]
filterBtnsContaniner
  .querySelector("button:nth-child(5)")
  .addEventListener("click", () => {
    let total = 0;
    mangaCards.forEach((card) => {
      if (card.querySelector("span.hidden").textContent === "Shoujo") {
        card.style.display = "block";
        total++;
      } else {
        card.style.display = "none";
      }
    });

    totalNumberOfManga.innerHTML = total;
    console.log(`  ==> Just Shoujo Manga || ${total} manga`);
  });

// ------------------------------------ //
//**  Account Featuers Filtering + Like btn + Loacl Storge **//
// ------------------------------------ //

// Account icon Like search bar Filtering but baesd on if the svg heartBtn fill = red
const accountIcon = document.querySelector("body > aside > div:nth-child(1)");

accountIcon.addEventListener("click", () => {
  let total = 0;
  mangaCards.forEach((card) => {
    if (
      localStorage.getItem(
        card.querySelector("span.pb-3.text-white").textContent
      ) === "liked"
    ) {
      card.style.display = "block";
      total++;
    } else {
      card.style.display = "none";
    }
  });

  totalNumberOfManga.innerHTML = total;
  console.log(
    `==> %c Your Liked Manga List || [${total}] Manga`,
    `color:green`
  );
});
