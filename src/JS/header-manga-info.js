const mangaInfo = [
  // [1]
  {
    title: `Tomo-chan is a Girl!`,
    authors: `Yanagida Fumita`,
    demographic: `Shounen`,
    published: `2015`,
    status: `Completed`,
    ranked: `#427`,
    genres: `4-Koma, Comedy, Romance, School Life, Slice of Life,
    Sports`,
    description: `Tomo Aizawa was able to successfully confess to her crush
    Junichirou Kubota. 
    There is only one problem: He just sees her as his buddy. He
    thought that she was a boy until they went to middle school
    together, because her grade school was in a different school
    district.`,
  },
  // [2]
  {
    title: `Monthly Girls' Nozaki-kun`,
    authors: `Tsubaki Izumi`,
    demographic: `Shounen`,
    published: `2011`,
    status: `Ongoing`,
    ranked: `#1,716`,
    genres: `4-Koma, Comedy, Romance, School Life, Slice of Life, Web Comic, Office Workers`,
    description: `The boy of her dreams… is a girl's manga artist? To the eyes of high school student Chiyo Sakura, classmate Umetarou Nozaki–brawny of build and brusque of tongue - is a dreamboat! When Chiyo finally works up the courage to tell Nozaki how she feels about him, she knows rejection is on the table… but getting recruited as a manga-ka's assistant?! Never in a million years!
    But for someone who makes a living drawing sweet girly romances, Nozaki-kun is a little slow on the uptake when it comes to matters of the heart in reality. And so Chiyo's daily life of manga making and heartache begins!`,
  },
  // [3]
  {
    title: `Boy's Abyss`,
    authors: `Minenami Ryo`,
    demographic: `Seinen`,
    published: `2020`,
    status: `Ongoing`,
    ranked: `#150`,
    genres: `Drama, Ecchi, Psychological, Romance, School Life, Slice of Life, Tragedy, Sexual Violence, Delinquents, Survival`,
    description: `In a town with nothing, in the middle of a daily life with seemingly no signs of change, high schooler Reiji Kurose was "just" living. Family, dreams for the future, childhood friends. All of them were binding him down to that city. He thought he would "just" keep on living like that. Until he met her. Is there hope in living? Is there light waiting ahead? It's the start of a boy meets girl series which reflects the "now."`,
  },
  // [4]
  {
    title: `Ajin`,
    authors: `Miura Tsuina, Sakurai Gamon`,
    demographic: `Seinen`,
    published: `2012`,
    status: `Completed`,
    ranked: `#409`,
    genres: `Action, Adventure, Drama, Horror, Mystery, Psychological, Sci-Fi, Supernatural, Tragedy, Military, Monsters, Police`,
    description: `The story follows a high school student named Kei Nagai, who is caught in a traffic accident, dies, but immediately revives and learns he is not human, but an Ajin, a mysterious creature that cannot die. Scared, he runs away from humans but is helped by his friend Kai, who joins him in his flee from civilization. He then becomes involved in a conflict between human and Ajin and must choose a side.`,
  },
  // [5]
  {
    title: `Wotakoi: Love Is Hard for Otaku`,
    authors: `Fujita`,
    demographic: `Josei`,
    published: `2014`,
    status: `Completed`,
    ranked: `#431`,
    genres: `Comedy, Romance, Slice of Life, Office Workers`,
    description: `Narumi Momose has had it rough: every boyfriend she’s had dumped her once they found out she was an otaku,  so she’s gone to great lengths to hide it. When a chance meeting at her new job with childhood friend, fellow otaku, and now coworker Hirotaka Nifuji almost gets her secret outed at work, she comes up with a plan to make sure he never speaks up. But he comes up with a counter-proposal: why doesn’t she just date him instead? In love, there are no save points.`,
  },
  // [6]
  {
    title: `Mieruko-chan`,
    authors: `Yanagida Fumita`,
    demographic: `Seinen`,
    published: `2018`,
    status: `Ongoing`,
    ranked: `#319`,
    genres: `Award Winning, Comedy, Drama, Horror, Mystery, Psychological, School Life, 
    Slice of Life, Supernatural, Tragedy, Web Comic, Gore, Ghosts, Magic, Monsters`,
    description: `All of a sudden, Miko is able to see grotesque monsters all around her; but no one else can. 
    Rather than trying to run away or face them, she instead musters all of her courage and… ignores them.
     Join in on her day-to-day life as she keeps up her best poker face despite the supernatural goings-on.`,
  },
  // [7]
  {
    title: `My Dress up Darling`,
    authors: `Fukuda Shinichi`,
    demographic: `Seinen`,
    published: `2018`,
    status: `Ongoing`,
    ranked: `#29`,
    genres: `Comedy, Ecchi, Gyaru, Romance, School Life, Slice of Life, Crossdressing`,
    description: `Wakana Gojou is a fifteen year old high-school boy who was socially traumatized in the past due to his passions. 
    That incident left a mark on him that made him into a social recluse.
    Until one day he had an encounter with Kitagawa who is a sociable gyaru, who is the complete opposite of him. 
    They soon share their passions with one another which leads to their odd relationship.`,
  },
  // [8]
  {
    title: `We Dont Know a Thing About Love`,
    authors: `Akiba Ruiki`,
    demographic: `Seinen`,
    published: `2017`,
    status: `Completed`,
    ranked: `#3,408`,
    genres: `4-Koma, Comedy, Romance, School Life`,
    description: `It's the fall of the first year of high school. After changing seats, Yuki Amano and Hayato Kuga became seat partners. Kuga attempts to get the silent Amano to open up, but she does not even show a smile. Meanwhile, Amano also starts to show interest in the airhead Kuga. They've fallen in love, but they have yet to realize their feelings. The heart pounding love comedy begins!`,
  },
  // [9]
  {
    title: `Uzaki-chan Wants to Hang Out!`,
    authors: `Take`,
    demographic: `Shounen`,
    published: `2017`,
    status: `Ongoing`,
    ranked: `#320`,
    genres: `Comedy, Ecchi, Romance, School Life, Slice of Life`,
    description: `Annoying! Cute! But Annoying!
    Shinichi Sakurai is a grumpy-faced, athletic and quiet college student who just wants to be left alone,
    but he is frequently teased by his cute, stacked underclassman Hana Uzaki, who he has known since high school.
    Sugoi Dekai means something along the lines of "impressively huge."`,
  },
  // [10]
  {
    title: `Pumpkin Night`,
    authors: `Hokazono Masaya`,
    demographic: `Seinen`,
    published: `2016`,
    status: `Ongoing`,
    ranked: `#457`,
    genres: `Award Winning, Comedy, Drama, Horror, Mystery, Psychological, School Life,
    Slice of Life, Supernatural, Tragedy, Web Comic, Gore, Ghosts, Magic, Monsters`,
    description: `A deformed female human goes out with a pumpkin on her head to kill all those who bullied her in the past after escaping from a mental hospital.`,
  },
  // [11]
  {
    title: `Attack on Titan`,
    authors: `Isayama Hajime`,
    demographic: `Shounen`,
    published: `2009`,
    status: `Completed`,
    ranked: `#105`,
    genres: `Action, Adventure, Award Winning, Drama, Fantasy, Horror, Mystery, Psychological,  Slice of Life, Tragedy, Gore, Thriller, Military, Monsters, Post-Apocalyptic, Survival`,
    description: `Several hundred years ago, humans were nearly exterminated by Titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest of Titans. Flash forward to the present and the southern district of Shinganshina has not seen a Titan in over 100 years.`,
  },
  // [12]
  {
    title: `Call of the Night`,
    authors: `Kotoyama`,
    demographic: `Shounen`,
    published: `2019`,
    status: `Ongoing`,
    ranked: `#67`,
    genres: `Action, Comedy, Drama, Psychological, Romance, Slice of Life, Supernatural, Vampires`,
    description: `Unable to sleep or find true satisfaction in his daily life, Yamori Kou begins wandering the night streets. He encounters a strange girl who offers to help soothe his insomnia by sleeping beside him, but it is not merely a one-way exchange…`,
  },
];

// mangaName.textContent = mangaNameArr[Math.floor(Math.random() * 12)];

const bannerMangaTitle = document.querySelector(
  "body > header > div.absolute.z-10 > article > h1"
);
const bannerMangaAuthors = document.querySelector(
  "body > header > div.absolute.z-10 > article > p:nth-of-type(1) > span"
);
const bannerMangaDemographic = document.querySelector(
  "body > header > div.absolute.z-10 > article > p:nth-of-type(2) > span"
);
const bannerMangaPublished = document.querySelector(
  "body > header > div.absolute.z-10 > article > p:nth-of-type(3) > span"
);
const bannerMangaStatus = document.querySelector(
  "body > header > div.absolute.z-10 > article > p:nth-of-type(4) > span"
);
const bannerMangaRanked = document.querySelector(
  "body > header > div.absolute.z-10 > article > p:nth-of-type(5) > span"
);
const bannerMangaGenres = document.querySelector(
  "body > header > div.absolute.z-10 > article > p:nth-of-type(6) > span"
);
const bannerMangaDescription = document.querySelector(
  "body > header > div.absolute.z-10 > article > p:nth-of-type(7) > span"
);

let bannerMangaInfoNum = 0;
// ------------------------------ //
nextBtn.addEventListener("click", () => {
  bannerMangaInfoNum === 11 ? (bannerMangaInfoNum = 0) : bannerMangaInfoNum++;
  bannerMangaTitle.textContent = mangaInfo[bannerMangaInfoNum].title;
  bannerMangaAuthors.textContent = mangaInfo[bannerMangaInfoNum].authors;
  bannerMangaDemographic.textContent =
    mangaInfo[bannerMangaInfoNum].demographic;
  bannerMangaPublished.textContent = mangaInfo[bannerMangaInfoNum].published;
  bannerMangaStatus.textContent = mangaInfo[bannerMangaInfoNum].status;
  bannerMangaRanked.textContent = mangaInfo[bannerMangaInfoNum].ranked;
  bannerMangaGenres.textContent = mangaInfo[bannerMangaInfoNum].genres;
  bannerMangaDescription.textContent =
    mangaInfo[bannerMangaInfoNum].description;
});

previousBtn.addEventListener("click", () => {
  bannerMangaInfoNum < 1 ? (bannerMangaInfoNum = 11) : bannerMangaInfoNum--;
  bannerMangaTitle.textContent = mangaInfo[bannerMangaInfoNum].title;
  bannerMangaAuthors.textContent = mangaInfo[bannerMangaInfoNum].authors;
  bannerMangaDemographic.textContent =
    mangaInfo[bannerMangaInfoNum].demographic;
  bannerMangaPublished.textContent = mangaInfo[bannerMangaInfoNum].published;
  bannerMangaStatus.textContent = mangaInfo[bannerMangaInfoNum].status;
  bannerMangaRanked.textContent = mangaInfo[bannerMangaInfoNum].ranked;
  bannerMangaGenres.textContent = mangaInfo[bannerMangaInfoNum].genres;
  bannerMangaDescription.textContent =
    mangaInfo[bannerMangaInfoNum].description;
});
// ------------------------------ //
