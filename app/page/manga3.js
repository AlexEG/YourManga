btnpPage3.addEventListener("click", function () {
  // console.log("btn3");
  mangaContaner.classList.remove("manga1");
  mangaContaner.classList.remove("manga2");
  mangaContaner.classList.remove("manga4");
  mangaContaner.classList.add("manga3");

  header.classList.remove("header1");
  header.classList.remove("header2");
  header.classList.remove("header4");
  header.classList.add("header3");



  btnactive1.classList.remove("active");
  btnactive2.classList.remove("active");
  btnactive4.classList.remove("active");
  btnactive3.classList.add("active");

  mangaContaner.innerHTML = `
  <div class="manga__card card1">
    <div id="readerBtn25" class="btn">quick view</div>
  </div>
  <div class="manga__card card2">
    <div id="readerBtn26" class="btn">quick view</div>
  </div>
  <div class="manga__card card3">
    <div id="readerBtn27" class="btn">quick view</div>
  </div>
  <div class="manga__card card4">
    <div id="readerBtn28" class="btn">quick view</div>
  </div>
  <div class="manga__card card5">
    <div id="readerBtn29" class="btn">quick view</div>
  </div>
  <div class="manga__card card6">
    <div id="readerBtn30" class="btn">quick view</div>
  </div>
  <div class="manga__card card7">
    <div id="readerBtn31" class="btn">quick view</div>
  </div>
  <div class="manga__card card8">
    <div id="readerBtn32" class="btn">quick view</div>
  </div>
  <div class="manga__card card9">
    <div id="readerBtn33" class="btn">quick view</div>
  </div>
  <div class="manga__card card10">
    <div id="readerBtn34" class="btn">quick view</div>
  </div>
  <div class="manga__card card11">
    <div id="readerBtn35" class="btn">quick view</div>
  </div>
  <div class="manga__card card12">
    <div id="readerBtn36" class="btn">quick view</div>
  </div>`;
  });
  

