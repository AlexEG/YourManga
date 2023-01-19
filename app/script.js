document.getElementById("cards").onmousemove = (e) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// manga sub pages
// manga single page app  [Page Controller]
const mangaContaner = document.querySelector("#mangaContaner");
const bannerImg = document.querySelector("#bannerImg");
const bannerMangaImg = document.querySelector("#bannerMangaImg");

const btnpPage1 = document.querySelector("#btnpage1");
const btnpPage2 = document.querySelector("#btnpage2");
const btnpPage3 = document.querySelector("#btnpage3");
const btnpPage4 = document.querySelector("#btnpage4");

const btnactive1 = document.querySelector("#btnactive1");
const btnactive2 = document.querySelector("#btnactive2");
const btnactive3 = document.querySelector("#btnactive3");
const btnactive4 = document.querySelector("#btnactive4");

btnpPage1.addEventListener("click", function () {
  // console.log("btn1");
  mangaContaner.classList.remove("manga2");
  mangaContaner.classList.remove("manga3");
  mangaContaner.classList.remove("manga4");
  mangaContaner.classList.add("manga1");

  bannerImg.classList.remove("banner-img2");
  bannerImg.classList.remove("banner-img3");
  bannerImg.classList.remove("banner-img4");
  bannerImg.classList.add("banner-img1");



  btnactive2.classList.remove("active");
  btnactive3.classList.remove("active");
  btnactive4.classList.remove("active");
  btnactive1.classList.add("active");

  bannerMangaImg.innerHTML=`<img
  src="/assets/manga/page1/Awkward_Senpai.webp"
  alt="page banner"
/>`;

  mangaContaner.innerHTML=`
<div class="manga__card card1">
  <div id="readerBtn1" class="btn">quick view</div>
</div>
<div class="manga__card card2">
  <div id="readerBtn2" class="btn">quick view</div>
</div>
<div class="manga__card card3">
  <div id="readerBtn3" class="btn">quick view</div>
</div>
<div class="manga__card card4">
  <div id="readerBtn4" class="btn">quick view</div>
</div>
<div class="manga__card card5">
  <div id="readerBtn5" class="btn">quick view</div>
</div>
<div class="manga__card card6">
  <div id="readerBtn6" class="btn">quick view</div>
</div>
<div class="manga__card card7">
  <div id="readerBtn7" class="btn">quick view</div>
</div>
<div class="manga__card card8">
  <div id="readerBtn8" class="btn">quick view</div>
</div>
<div class="manga__card card9">
  <div id="readerBtn9" class="btn">quick view</div>
</div>
<div class="manga__card card10">
  <div id="readerBtn10" class="btn">quick view</div>
</div>
<div class="manga__card card11">
  <div id="readerBtn11" class="btn">quick view</div>
</div>
<div class="manga__card card12">
  <div id="readerBtn12" class="btn">quick view</div>
</div>`;

});

btnpPage2.addEventListener("click", function () {
  // console.log("btn2");
  mangaContaner.classList.remove("manga1");
  mangaContaner.classList.remove("manga3");
  mangaContaner.classList.remove("manga4");
  mangaContaner.classList.add("manga2");

  bannerImg.classList.remove("banner-img1");
  bannerImg.classList.remove("banner-img3");
  bannerImg.classList.remove("banner-img4");
  bannerImg.classList.add("banner-img2");


  btnactive1.classList.remove("active");
  btnactive3.classList.remove("active");
  btnactive4.classList.remove("active");
  btnactive2.classList.add("active");

  bannerMangaImg.innerHTML=`<img
  src="/assets/manga/page2/Beautiful Girl and Dangerous Bodyguard.webp"
  alt="page banner"
/>`;

  mangaContaner.innerHTML=`
<div class="manga__card card1">
  <div id="readerBtn13" class="btn">quick view</div>
</div>
<div class="manga__card card2">
  <div id="readerBtn14" class="btn">quick view</div>
</div>
<div class="manga__card card3">
  <div id="readerBtn15" class="btn">quick view</div>
</div>
<div class="manga__card card4">
  <div id="readerBtn16" class="btn">quick view</div>
</div>
<div class="manga__card card5">
  <div id="readerBtn17" class="btn">quick view</div>
</div>
<div class="manga__card card6">
  <div id="readerBtn18" class="btn">quick view</div>
</div>
<div class="manga__card card7">
  <div id="readerBtn19" class="btn">quick view</div>
</div>
<div class="manga__card card8">
  <div id="readerBtn20" class="btn">quick view</div>
</div>
<div class="manga__card card9">
  <div id="readerBtn21" class="btn">quick view</div>
</div>
<div class="manga__card card10">
  <div id="readerBtn22" class="btn">quick view</div>
</div>
<div class="manga__card card11">
  <div id="readerBtn23" class="btn">quick view</div>
</div>
<div class="manga__card card12">
  <div id="readerBtn24" class="btn">quick view</div>
</div>`;

});

btnpPage3.addEventListener("click", function () {
  // console.log("btn3");
  mangaContaner.classList.remove("manga1");
  mangaContaner.classList.remove("manga2");
  mangaContaner.classList.remove("manga4");
  mangaContaner.classList.add("manga3");

  bannerImg.classList.remove("banner-img1");
  bannerImg.classList.remove("banner-img2");
  bannerImg.classList.remove("banner-img4");
  bannerImg.classList.add("banner-img3");

  bannerMangaImg.innerHTML=`<img
  src="/assets/manga/page3/The Beginning-After-the-End.webp"
  alt="page banner"
/>`;

  btnactive1.classList.remove("active");
  btnactive2.classList.remove("active");
  btnactive4.classList.remove("active");
  btnactive3.classList.add("active");
});

btnpPage4.addEventListener("click", function () {
  // console.log("btn4");
  mangaContaner.classList.remove("manga1");
  mangaContaner.classList.remove("manga2");
  mangaContaner.classList.remove("manga3");
  mangaContaner.classList.add("manga4");

  bannerImg.classList.remove("banner-img1");
  bannerImg.classList.remove("banner-img2");
  bannerImg.classList.remove("banner-img3");
  bannerImg.classList.add("banner-img4");

  bannerMangaImg.innerHTML=`<img
  src="/assets/manga/page4/Sono Bisque Doll wa Koi wo Suru-10.webp"
  alt="page banner"
/>`;

  btnactive1.classList.remove("active");
  btnactive2.classList.remove("active");
  btnactive3.classList.remove("active");
  btnactive4.classList.add("active");
});
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
const reader = document.querySelector("#reader");
const readerBg = document.querySelector("#readerBg");
const readerBtn1 = document.querySelector("#readerBtn1");
const readerBtn2 = document.querySelector("#readerBtn2");
const readerBtn3 = document.querySelector("#readerBtn3");
const quickview = document.querySelector("#quickview");

readerBg.addEventListener("click", function () {
  reader.classList.add("hide");
});

//
readerBtn1.addEventListener("click", function () {
  quickview.innerHTML = `
  <img
  src="https://coffeemanga.io/wp-content/uploads/WP-manga/data/manga_638b07a738bed/d1e9c1720ecafde116bc392a0c0482b7/2.webp"
  alt=""
/>
<img
  src="https://coffeemanga.io/wp-content/uploads/WP-manga/data/manga_638b07a738bed/9b7d51b0536cd74c992c7d6ce44bab62/2.webp"
  alt=""
/>
<img
  src="https://coffeemanga.io/wp-content/uploads/WP-manga/data/manga_638b07a738bed/9b7d51b0536cd74c992c7d6ce44bab62/1.webp"
  alt=""
/>`;

  if (reader.classList.contains("hide")) {
    reader.classList.remove("hide");
  } else {
    reader.classList.add("hide");
  }
});

readerBtn2.addEventListener("click", function () {
  quickview.innerHTML = `
  <img
  src="https://coffeemanga.io/wp-content/uploads/WP-manga/data/manga_61e261acd222c/fd0aec59f5cba517c2df7119a540b60c/1.jpg"
  alt=""
/>
  <img
  src="https://coffeemanga.io/wp-content/uploads/WP-manga/data/manga_61e261acd222c/fd0aec59f5cba517c2df7119a540b60c/2.jpg"
  alt=""
/>
  <img
  src="https://coffeemanga.io/wp-content/uploads/WP-manga/data/manga_61e261acd222c/fd0aec59f5cba517c2df7119a540b60c/3.jpg"
  alt=""
/>
  <img
  src="https://coffeemanga.io/wp-content/uploads/WP-manga/data/manga_61e261acd222c/fd0aec59f5cba517c2df7119a540b60c/4.jpg"
  alt=""
/>
  <img
  src="https://coffeemanga.io/wp-content/uploads/WP-manga/data/manga_61e261acd222c/fd0aec59f5cba517c2df7119a540b60c/5.jpg"
  alt=""
/>
  <img
  src="https://coffeemanga.io/wp-content/uploads/WP-manga/data/manga_61e261acd222c/fd0aec59f5cba517c2df7119a540b60c/6.jpg"
  alt=""
/>
  <img
  src="https://coffeemanga.io/wp-content/uploads/WP-manga/data/manga_61e261acd222c/fd0aec59f5cba517c2df7119a540b60c/7.jpg"
  alt=""
/>
  <img
  src="https://coffeemanga.io/wp-content/uploads/WP-manga/data/manga_61e261acd222c/fd0aec59f5cba517c2df7119a540b60c/8.jpg"
  alt=""
/>
`;
  if (reader.classList.contains("hide")) {
    reader.classList.remove("hide");
  } else {
    reader.classList.add("hide");
  }
});
readerBtn3.addEventListener("click", function () {
  if (reader.classList.contains("hide")) {
    reader.classList.remove("hide");
  } else {
    reader.classList.add("hide");
  }
});


//light Dark Mode

const lightDarkMode =document.querySelector('#lightDarkMode');
const mangaBody =document.querySelector('#mangaBody');

lightDarkMode.addEventListener("click", function () {
  // mangaBody.toggleClass("light-theme")

  if (mangaBody.classList.contains("light-theme")) {
    mangaBody.classList.remove("light-theme");
  } else {
    mangaBody.classList.add("light-theme");
  }


});




















