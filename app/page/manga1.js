btnpPage1.addEventListener("click", function () {
  // console.log("btn1");
  mangaContaner.classList.remove("manga2");
  mangaContaner.classList.remove("manga3");
  mangaContaner.classList.remove("manga4");
  mangaContaner.classList.add("manga1");

  header.classList.remove("header2");
  header.classList.remove("header3");
  header.classList.remove("header4");
  header.classList.add("header1");

  btnactive2.classList.remove("active");
  btnactive3.classList.remove("active");
  btnactive4.classList.remove("active");
  btnactive1.classList.add("active");

  // manga info
  mangaInfo.innerHTML = `<h1>Awkward Senpai</h1>
  <p>Artists: Kudo Makoto</p>
  <p>Authors: 
    Kudo Makoto</p>
  <p>
    Genres: Comedy, Romance, Slice of Life, Office Workers
  </p>
  <h2>Description</h2>
  <p>
    A fluffy story about a coworker who can't express her love for her subordinate.
  </p>`;

  // card id
  mangaContaner.innerHTML = `
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
