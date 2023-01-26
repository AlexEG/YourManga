const nextBackBanner = document.querySelector("#nextBackBanner");

const next = document.querySelector("#next1");
const back = document.querySelector("#back1");

next.addEventListener("click", function () {
  if (header.classList.contains("header1b1")) {
    header.classList.remove("header1b1");
    header.classList.add("header1b2");

    bannerInfo1B2();
  } else if (header.classList.contains("header1b2")) {
    header.classList.remove("header1b2");
    header.classList.add("header1b3");

    bannerInfo1B3();
  } else if (header.classList.contains("header1b3")) {
    header.classList.remove("header1b3");
    header.classList.add("header1b4");

    bannerInfo1B4();
  } else if (header.classList.contains("header1b4")) {
    header.classList.remove("header1b4");
    header.classList.add("header1b5");

    bannerInfo1B1();
  } else if (header.classList.contains("header1b5")) {
    header.classList.remove("header1b5");
    header.classList.add("header1b6");

    bannerInfo1B1();
  } else if (header.classList.contains("header1b6")) {
    header.classList.remove("header1b6");
    header.classList.add("header1b7");

    bannerInfo1B1();
  } else if (header.classList.contains("header1b7")) {
    header.classList.remove("header1b7");
    header.classList.add("header1b8");

    bannerInfo1B1();
  } else if (header.classList.contains("header1b8")) {
    header.classList.remove("header1b8");
    header.classList.add("header1b9");

    bannerInfo1B1();
  } else if (header.classList.contains("header1b9")) {
    header.classList.remove("header1b9");
    header.classList.add("header1b10");

    bannerInfo1B1();
  } else if (header.classList.contains("header1b10")) {
    header.classList.remove("header1b10");
    header.classList.add("header1b11");
    bannerInfo1B1();
  } else if (header.classList.contains("header1b11")) {
    header.classList.remove("header1b11");
    header.classList.add("header1b12");

    bannerInfo1B1();
  } else if (header.classList.contains("header1b12")) {
    header.classList.remove("header1b12");
    header.classList.add("header1b1");
    bannerInfo1B1();
  } else {
    mangaBody.classList.add("light-theme");
  }
});

back.addEventListener("click", function () {
  if (header.classList.contains("header1b1")) {
    header.classList.remove("header1b1");
    header.classList.add("header1b12");

    bannerInfo1B2();
  } else if (header.classList.contains("header1b2")) {
    header.classList.remove("header1b2");
    header.classList.add("header1b1");

    bannerInfo1B3();
  } else if (header.classList.contains("header1b3")) {
    header.classList.remove("header1b3");
    header.classList.add("header1b2");

    bannerInfo1B4();
  } else if (header.classList.contains("header1b4")) {
    header.classList.remove("header1b4");
    header.classList.add("header1b3");

    bannerInfo1B1();
  } else if (header.classList.contains("header1b5")) {
    header.classList.remove("header1b5");
    header.classList.add("header1b4");

    bannerInfo1B1();
  } else if (header.classList.contains("header1b6")) {
    header.classList.remove("header1b6");
    header.classList.add("header1b5");

    bannerInfo1B1();
  } else if (header.classList.contains("header1b7")) {
    header.classList.remove("header1b7");
    header.classList.add("header1b6");

    bannerInfo1B1();
  } else if (header.classList.contains("header1b8")) {
    header.classList.remove("header1b8");
    header.classList.add("header1b7");

    bannerInfo1B1();
  } else if (header.classList.contains("header1b9")) {
    header.classList.remove("header1b9");
    header.classList.add("header1b8");

    bannerInfo1B1();
  } else if (header.classList.contains("header1b10")) {
    header.classList.remove("header1b10");
    header.classList.add("header1b9");
    bannerInfo1B1();
  } else if (header.classList.contains("header1b11")) {
    header.classList.remove("header1b11");
    header.classList.add("header1b10");

    bannerInfo1B1();
  } else if (header.classList.contains("header1b12")) {
    header.classList.remove("header1b12");
    header.classList.add("header1b11");
    bannerInfo1B1();
  } else {
    mangaBody.classList.add("light-theme");
  }
});
