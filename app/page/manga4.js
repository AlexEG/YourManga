btnpPage4.addEventListener("click", function () {
  // console.log("btn4");
  mangaContaner.classList.remove("manga1");
  mangaContaner.classList.remove("manga2");
  mangaContaner.classList.remove("manga3");
  mangaContaner.classList.add("manga4");

  header.classList.remove("header1");
  header.classList.remove("header2");
  header.classList.remove("header3");
  header.classList.add("header4");



  btnactive1.classList.remove("active");
  btnactive2.classList.remove("active");
  btnactive3.classList.remove("active");
  btnactive4.classList.add("active");

  mangaContaner.innerHTML = `
  <div class="manga__card card1">
    <div id="readerBtn37" class="btn">quick view</div>
  </div>
  <div class="manga__card card2">
    <div id="readerBtn38" class="btn">quick view</div>
  </div>
  <div class="manga__card card3">
    <div id="readerBtn39" class="btn">quick view</div>
  </div>
  <div class="manga__card card4">
    <div id="readerBtn40" class="btn">quick view</div>
  </div>
  <div class="manga__card card5">
    <div id="readerBtn41" class="btn">quick view</div>
  </div>
  <div class="manga__card card6">
    <div id="readerBtn42" class="btn">quick view</div>
  </div>
  <div class="manga__card card7">
    <div id="readerBtn43" class="btn">quick view</div>
  </div>
  <div class="manga__card card8">
    <div id="readerBtn44" class="btn">quick view</div>
  </div>
  <div class="manga__card card9">
    <div id="readerBtn45" class="btn">quick view</div>
  </div>
  <div class="manga__card card10">
    <div id="readerBtn46" class="btn">quick view</div>
  </div>
  <div class="manga__card card11">
    <div id="readerBtn47" class="btn">quick view</div>
  </div>
  <div class="manga__card card12">
    <div id="readerBtn48" class="btn">quick view</div>
  </div>`;

  
});
