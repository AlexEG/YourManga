btnpPage2.addEventListener("click", function () {
  // console.log("btn2");
  mangaContaner.classList.remove("manga1");
  mangaContaner.classList.remove("manga3");
  mangaContaner.classList.remove("manga4");
  mangaContaner.classList.add("manga2");

  header.classList.remove("header1");
  header.classList.remove("header3");
  header.classList.remove("header4");
  header.classList.add("header2");

  btnactive1.classList.remove("active");
  btnactive3.classList.remove("active");
  btnactive4.classList.remove("active");
  btnactive2.classList.add("active");



  mangaContaner.innerHTML = `
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
