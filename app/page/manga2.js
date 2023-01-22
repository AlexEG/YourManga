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

  // manga info
  mangaInfo.innerHTML = `<h1>Uzaki-chan Wants to Hang Out!</h1>
<p>Artists: Take</p>
<p>Authors: Take</p>
<p>Genres: Comedy, Ecchi, Romance, School Life, Slice of Life</p>
<h2>Description</h2>
<p>
Annoying! Cute! But Annoying! <br />
Shinichi Sakurai is a grumpy-faced, athletic and quiet college student who just wants to be left alone,<br />
but he is frequently teased by his cute, stacked underclassman Hana Uzaki, who he has known since high school.<br />
Sugoi Dekai means something along the lines of "impressively huge."

</p>`;

  // card id
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
