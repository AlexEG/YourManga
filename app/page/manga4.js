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



  // manga info
  mangaInfo.innerHTML = `<h1>Sono Bisque Doll wa Koi wo Suru</h1>
<p>Artists: Fukuda Shinichi</p>
<p>Authors: Fukuda Shinichi</p>
<p>Genres: Comedy, Ecchi, Gyaru, Romance, School Life, Slice of Life, Crossdressing</p>
<h2>Description</h2>
<p>
Wakana Gojou is a fifteen year old high-school boy who was socially traumatized in the past due to his passions. <br /> That incident left a mark on him that made him into a social recluse. <br /> Until one day he had an encounter with Kitagawa who is a sociable gyaru, who is the complete opposite of him. <br /> They soon share their passions with one another which leads to their odd relationship.
</p>`;

  // card id
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
