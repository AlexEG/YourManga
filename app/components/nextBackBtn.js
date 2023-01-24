const nextBackBanner = document.querySelector("#nextBackBanner");

const next1 = document.querySelector("#next1");
const back1 = document.querySelector("#back1");


next1.addEventListener("click", function () {
  if (header.classList.contains("header1")) {
    header.classList.remove("header1");
    header.classList.remove("header3");
    header.classList.remove("header4");
    header.classList.add("header2");
    bannerInfo2()

  } else if (header.classList.contains("header2")){
    header.classList.remove("header1");
    header.classList.remove("header2");
    header.classList.remove("header4");
    header.classList.add("header3");
    bannerInfo3()
  } else if (header.classList.contains("header3")){
    header.classList.remove("header1");
    header.classList.remove("header2");
    header.classList.remove("header3");
    header.classList.add("header4");
    bannerInfo4()
  } else if (header.classList.contains("header4")){
    header.classList.remove("header2");
    header.classList.remove("header3");
    header.classList.remove("header4");
    header.classList.add("header1");
    bannerInfo1()
  }
  else {
    mangaBody.classList.add("light-theme");
  }
});

back1.addEventListener("click", function () {
  if (header.classList.contains("header1")) {
    header.classList.remove("header1");
    header.classList.remove("header2");
    header.classList.remove("header3");
    header.classList.add("header4");
    bannerInfo4()

  } else if (header.classList.contains("header2")){
    header.classList.remove("header2");
    header.classList.remove("header3");
    header.classList.remove("header4");
    header.classList.add("header1");
    bannerInfo1()
  } else if (header.classList.contains("header3")){
    header.classList.remove("header1");
    header.classList.remove("header3");
    header.classList.remove("header4");
    header.classList.add("header2");
    bannerInfo2()
  } else if (header.classList.contains("header4")){
    header.classList.remove("header1");
    header.classList.remove("header2");
    header.classList.remove("header4");
    header.classList.add("header3");
    bannerInfo3()
  }
  else {
    mangaBody.classList.add("light-theme");
  }
});


