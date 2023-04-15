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
    valumes: 8,
    // firstChapterPageNum: 8,
  },
  // [2]
  {
    title: `Gekkan Shoujo Nozaki-kun`,
    authors: `Tsubaki Izumi`,
    demographic: `Shounen`,
    published: `2011`,
    status: `Ongoing`,
    ranked: `#1,716`,
    genres: `4-Koma, Comedy, Romance, School Life, Slice of Life, Web Comic, Office Workers`,
    description: `The boy of her dreams… is a girl's manga artist? To the eyes of high school student Chiyo Sakura, classmate Umetarou Nozaki–brawny of build and brusque of tongue - is a dreamboat! When Chiyo finally works up the courage to tell Nozaki how she feels about him, she knows rejection is on the table… but getting recruited as a manga-ka's assistant?! Never in a million years!
    But for someone who makes a living drawing sweet girly romances, Nozaki-kun is a little slow on the uptake when it comes to matters of the heart in reality. And so Chiyo's daily life of manga making and heartache begins!`,
    valumes: 14,
  },
  // [3]
  {
    title: `Boys Abyss`,
    authors: `Minenami Ryo`,
    demographic: `Seinen`,
    published: `2020`,
    status: `Ongoing`,
    ranked: `#150`,
    genres: `Drama, Ecchi, Psychological, Romance, School Life, Slice of Life, Tragedy, Sexual Violence, Delinquents, Survival`,
    description: `In a town with nothing, in the middle of a daily life with seemingly no signs of change, high schooler Reiji Kurose was "just" living. Family, dreams for the future, childhood friends. All of them were binding him down to that city. He thought he would "just" keep on living like that. Until he met her. Is there hope in living? Is there light waiting ahead? It's the start of a boy meets girl series which reflects the "now."`,
    valumes: 11,
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
    valumes: 17,
  },
  // [5]
  {
    title: `Wotakoi Love Is Hard for Otaku`,
    authors: `Fujita`,
    demographic: `Josei`,
    published: `2014`,
    status: `Completed`,
    ranked: `#431`,
    genres: `Comedy, Romance, Slice of Life, Office Workers`,
    description: `Narumi Momose has had it rough: every boyfriend she’s had dumped her once they found out she was an otaku,  so she’s gone to great lengths to hide it. When a chance meeting at her new job with childhood friend, fellow otaku, and now coworker Hirotaka Nifuji almost gets her secret outed at work, she comes up with a plan to make sure he never speaks up. But he comes up with a counter-proposal: why doesn’t she just date him instead? In love, there are no save points.`,
    valumes: 12,
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
    valumes: 8,
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
    valumes: 10,
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
    valumes: 3,
  },
  // [9]
  {
    title: `Uzaki-chan Wants to Hang Out`,
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
    valumes: 9,
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
    valumes: 7,
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
    valumes: 34,
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
    valumes: 14,
  },
  // [13]
  {
    title: `Chainsaw Man`,
    authors: `Fujimoto Tatsuki`,
    demographic: `Shounen`,
    published: `2018`,
    status: `Ongoing`,
    ranked: `#3`,
    genres: `Action, Award Winning, Comedy, Ecchi, Horror, Supernatural, Gore,Demons, Monster Girls, Monsters, Police, Survival`,
    description: `Broke young man + chainsaw dog demon = Chainsaw Man! <br>
    The name says it all! Denji's life of poverty is changed forever when he merges with his <br> pet chainsaw dog, Pochita! Now he's living in the big city and an official Devil Hunter.<br> But he's got a lot to learn about his new job and chainsaw powers!
    `,
    valumes: 13,
  },
  // [14]
  {
    title: `5Toubun no Hanayome`,
    authors: `Haruba Negi`,
    demographic: `Shounen`,
    published: `2017`,
    status: `Completed`,
    ranked: `#356`,
    genres: `Award Winning, Comedy, Drama, Harem, Romance, School Life`,
    description: `Uesugi Fuutarou is a poor, antisocial ace student who one day meets the rich transfer student Nakano Itsuki. They argue but when Uesugi realizes he is to be her tutor, he tries to get on better terms. While trying to do so he meets four other girls.
    5Toubun no Hanayome is the official romanization.`,
    valumes: 14,
  },
  // [15]
  {
    title: `Aho Girl`,
    authors: `Hiroyuki`,
    demographic: `Shounen`,
    published: `2012`,
    status: `Completed`,
    ranked: `#3,864`,
    genres: `Action, Comedy, Cooking, Ecchi, Gyaru, Harem, Romance, School Life, Slice of Life, Animals`,
    description: `She's as noisy as she is dumb. <br>
    As the name implies, "Aho" Girl, or Dumb Girl, is as stupid as you can get.<br>
     Which is why her crush and childhood friend, Akuru Akutsu (or "Akkun" as everyone calls him), isn't the only one unwilling to put up with her fallacies. <br>
     Along the way, they are joined by many other fellow idiots as they probe deeper into the true meaning of idiocy, and the true relationship between Yoshiko and Akkun.
    `,
    valumes: 12,
  },
  // [16]
  {
    title: `Akai Kiri no Naka kara`,
    authors: `Nohara Mosae`,
    demographic: `Shounen`,
    published: `2020`,
    status: `Completed`,
    ranked: `#929`,
    genres: ` Action, Adventure, Drama, Historical, Horror, Mystery, Psychological, Tragedy, Gore, Sexual Violence, Crime, Thriller`,
    description: `This work is a story about a boy, Rwanda, whose mother is a vicious murderer, set in England at the end of the 19th century. Rwanda, who has long been confined in the basement, grew up and left the house after a certain incident. Eventually, he arrived at the town and was picked up by a staff member of the nursing home and decided to live in the facility. But peaceful everyday life is only boring for Rwanda…
    `,
    valumes: 5,
  },
  // [17]
  {
    title: `Bakemonogatari`,
    authors: `Nisioisin`,
    demographic: `Shounen`,
    published: `2018`,
    status: `Ongoing`,
    ranked: `#1,729`,
    genres: ` Action, Comedy, Drama, Ecchi, Harem, Mystery, Romance, School Life, Supernatural, Adaptation, Gore, Monster Girls, Loli, Magic, Monsters, Vampires`,
    description: `Koyomi Araragi, a third-year high school student, manages to survive a vampire attack with the help of Meme Oshino, a strange man residing in an abandoned building. Though being saved from vampirism and now a human again, several side effects such as superhuman healing abilities and enhanced vision still remain. Regardless, Araragi tries to live the life of a normal student, with the help of his friend and the class president, Tsubasa Hanekawa. When fellow classmate Hitagi Senjougahara falls down the stairs and is caught by Araragi, the boy realizes that the girl is unnaturally weightless. Despite Senjougahara's protests, Araragi insists he help her, deciding to enlist the aid of Oshino, the very man who had once helped him with his own predicament. Through several tales involving demons and gods, Bakemonogatari follows Araragi as he attempts to help those who suffer from supernatural maladies.
    `,
    valumes: 20,
  },
  // [18]
  {
    title: `Blood on the Tracks`,
    authors: ` Oshimi Shuzo`,
    demographic: `Seinen`,
    published: `2017`,
    status: `Ongoing`,
    ranked: `#530`,
    genres: ` Drama, Ecchi, Horror, Psychological, School Life, Slice of Life`,
    description: `Seiichi Osabe is just a normal if not insular 14-year-old boy with a beautiful, loving mother and a hardworking father. The bond between him and his mother is iron-clad, but when an accident involving his cousin sows the seeds of doubt in his head, Seiichi begins to question whether his mother's doting nature is normal, or something more sinister and abnormal. Where do you draw the line between motherly love and unhealthy adoration? And how can you tell where that line is when your mother's love is all you've ever known?
    `,
    valumes: 15,
  },
  // [19]
  {
    title: `Boarding School Juliet`,
    authors: ` Kaneda Yousuke`,
    demographic: `Shounen`,
    published: `2015`,
    status: `Completed`,
    ranked: `#1,183`,
    genres: `Action, Comedy, Drama, Ecchi, Romance, School Life, Slice of Life, Crossdressing, Loli`,
    description: `Juliet Persia and Inuzuka Romio are archenemies. They lead two high school dormitories from two rivaling countries. Both factions are dead set on defeating the other to gain control over the island they have to share. Beneath the feuding exterior, however, Persia and Inuzuka long for love and peace for their budding relationship…
    `,
    valumes: 16,
  },
  // [20]
  {
    title: `Bokura wa Minna Kawaisou`,
    authors: `Miyahara Ruri`,
    demographic: `Shounen`,
    published: `2010`,
    status: `Completed`,
    ranked: `#2,861`,
    genres: `Comedy, Drama, Romance, School Life, Slice of Life`,
    description: `Kazunari Usa's dream to live away from his parents is fulfilled when they allow him to move into an old boarding house called Kawai Complex. With his landlady providing him meals and his parents covering his rent, Kazunari finally achieves the peaceful life he longs for, as he is ready to enter his first year at high school. Or so it seems…
    `,
    valumes: 11,
  },
  // [21]
  {
    title: `Bungou Stray Dogs`,
    authors: ` Asagiri Kafka`,
    demographic: `Seinen`,
    published: `2012`,
    status: `Ongoing`,
    ranked: `#603`,
    genres: ` Action, Drama, Mystery, Supernatural, Crime, Mafia`,
    description: `Nakajima Atsushi was kicked out of his orphanage, and now he has no place to go and no food. While he is standing by a river, on the brink of starvation, he rescues a man whimsically attempting suicide. That man is Dazai Osamu, and he and his partner Kunikida are members of a very special detective agency. They have supernatural powers, and deal with cases that are too dangerous for the police or the military. They're tracking down a tiger that has appeared in the area recently, around the time Atsushi came to the area. The tiger seems to have a connection to Atsushi, and by the time the case is solved, it is clear that Atsushi's future will involve much more of Dazai and the rest of the detectives!
    `,
    valumes: 23,
  },
  // [22]
  {
    title: `Classroom of the Elite`,
    authors: `Kinugasa Shougo`,
    demographic: `Seinen`,
    published: `2016`,
    status: `Ongoing`,
    ranked: `#275`,
    genres: ` Comedy, Drama, Ecchi, Romance, School Life, Adaptatio`,
    description: `Kodo Ikusei Senior High School, a leading prestigious school with state-of-the-art facilities where nearly 100% of students go on to university or find employment. The students there have the freedom to wear any hairstyle and bring any personal effects they desire. Kodo Ikusei is a paradise-like school, but the truth is that only the most superior of students receive favorable treatment. The protagonist Kiyotaka Ayanokoji is a student of D-class, which is where the school dumps its "inferior" students in order to ridicule them. For a certain reason, Kiyotaka was careless on his entrance examination, and was put in D-class. After meeting Suzune Horikita and Kikyo Kushida, two other students in his class, Kiyotaka's situation begins to change. Based on the popular light novel series of the same name.
    `,
    valumes: 12,
  },
  // [23]
  {
    title: `Darling in the FranXX`,
    authors: ` Code 000`,
    demographic: `Shounen`,
    published: `2018`,
    status: `Completed`,
    ranked: `#1,324`,
    genres: `Action, Drama, Ecchi, Mecha, Romance, Sci-Fi, Adaptation`,
    description: `The story is set in the distant future. The land is ruined, and humanity establishes the mobile fort city Plantation. Pilots produced inside Plantation live in Mistilteinn, also know as the "birdcage." Children live there knowing nothing of the outside world or the freedom of the sky.<br>
    Their lives consist of battling to carry out missions. Their enemies are mysterious giant lifeforms known as Kyouryuu, and the children pilot robots called FranXX to face off against them. For the children, riding the FranXX proves their existence.
   `,
    valumes: 8,
  },
  // [24]
  {
    title: `Do You Think Someone Like You Could Defeat the Demon Lord`,
    authors: ` Kiki`,
    demographic: `Seinen`,
    published: `2018`,
    status: `Ongoing`,
    ranked: `#01,597`,
    genres: `Action, Adventure, Drama, Fantasy, Horror, Slice of Life, Yuri, Adaptation, Gore `,
    description: `According to the god’s prophecy, the girl Flamm was chosen to be one of the members of the demon king’s subjugation journey. Everyone was a hero and possessed a top class power. However, for some reason only Flamm did not possess the power to fight, and all of her status values were 0. While being ashamed, she continued to put great efforts to be useful to the heroes.
    `,
    valumes: 4,
  },
  // [25]
  {
    title: `Fushi no Sougishi`,
    authors: ` Kiyomiya Kousuke`,
    demographic: `Seinen`,
    published: `2017`,
    status: `Ongoing`,
    ranked: `#2,704`,
    genres: ` Action, Drama, Fantasy, Tragedy`,
    description: `[This is a story where the hero kills the princess.]
    In a world where the dead devour the living, it is a great honor to become an "Undertaker", beings whose mission is to grant peace to the dead and return their souls to heaven. Advancing to the final stages of the exam, an apprentice, Leon, encounters a panicked girl while on a train to the capital…?!
    `,
    valumes: 4,
  },
  // [26]
  {
    title: `Hataraku Maou sama`,
    authors: `Wagahara Satoshi`,
    demographic: `Shounen`,
    published: `2012`,
    status: `Ongoing`,
    ranked: `#1,030`,
    genres: `Comedy, Fantasy, Harem, Romance, Supernatural, Isekai, Adaptation, Demons, Monster Girls, Magic`,
    description: `After being soundly thrashed by the hero Emilia, the Devil King and his general beat a hasty retreat to a parallel universe… only to land plop in the middle of bustling, modern-day Tokyo! Lacking the magic necessary to return home, the two are forced to assume human identities and live average human lives until they can find a better solution. And to make ends meet, Satan finds gainful employment at a nearby fast food joint! With his devilish mind set on working his way up the management food chain, what will become of his thirst for conquest?
    `,
    valumes: 20,
  },
  // [27]
  {
    title: `Homunculus`,
    authors: ` Yamamoto Hideo`,
    demographic: `Seinen`,
    published: `2003`,
    status: `Completed`,
    ranked: `#494`,
    genres: `Drama, Horror, Psychological, Supernatural, Tragedy, Gore, Sexual Violence`,
    description: `Trepanation is the procedure of drilling a hole in the skull. It is said to increase the blood circulation and improve pressure inside the skull. It is also said to bring out a person's sixth sense, the ability to use ESP, see ghosts, move objects with one's mind. This is speculative fiction based on the concept of trepanation.
    `,
    valumes: 15,
  },
  // [28]
  {
    title: `Horimiya`,
    authors: ` Hero`,
    demographic: `Shounen`,
    published: `2011`,
    status: `Completed`,
    ranked: `#139`,
    genres: ` Comedy, Romance, School Life, Slice of Life, Adaptation`,
    description: `Kyoko Hori is your average teenage girl… who has a side she wants no one else to ever discover. Then there's her classmate Izumi Miyamura, your average glasses-wearing boy — who's also a totally different person outside of school. When the two unexpectedly meet, they discover each other's secrets, and a friendship is born.
    `,
    valumes: 16,
  },
  // [29]
  {
    title: `Ijimeru Yabai Yatsu`,
    authors: `Nakamura Nan`,
    demographic: `Shounen`,
    published: `2018`,
    status: `Ongoing`,
    ranked: `#1,954`,
    genres: `Comedy, Drama, Ecchi, Harem, Psychological, Romance, School Life, Tragedy, Web Comic, Gore, Survival`,
    description: `[It is not just "bullying."] Nakajima was ruling over the class as a "bully." The subject of bullying is a fragile girl, Shirasaki-san. Going as far as violence, every day was horrible. Everyone in the class pretends to not see it. If they stop, then they will be the next target. Nakajima performs "bullying" as if possessed. It was clear that something was wrong. Why does he do such brutal acts? The reality is terrible...
    `,
    valumes: 17,
  },
  // [30]
  {
    title: `I Will Be Eaten by You`,
    authors: `tomomi`,
    demographic: `Shounen`,
    published: `2020`,
    status: `Ongoing`,
    ranked: `#612`,
    genres: ` Drama, Horror, Mystery, Romance, Supernatural, Gore, Thriller, Demons, Ghosts, Monster Girls, Monsters`,
    description: `In order to eat me, my enigmatic stalker is protecting me from other strange women―
    A high school boy, Sakurai, has a secret he cannot tell anyone: he has been plagued by stalkers since he was a child.
    One day, his classmate, Ueda, suddenly transforms into a monster, revealed to be one of his stalkers.
    Miyako, who has always been closely following him, appears and saves him.
    She tells Sakurai that the monsters, commonly known as urban legends in Japan, are after him because they love him.
    What will be the fate of Sakurai who is loved by countless creatures disguised as beautiful girls?
    `,
    valumes: 4,
  },
  // [31]
  {
    title: `Juujika no Rokunin`,
    authors: `Nakatake Shiryuu`,
    demographic: `Shounen`,
    published: `2020`,
    status: `Ongoing`,
    ranked: `#26`,
    genres: `Drama, Psychological, Tragedy, Gore, Sexual Violence, Thriller`,
    description: `”Is it okay to kill people?"
    A treacherous revenge suspense by Shiryu Nakatake, a newcomer to Bessatsu Shonen Magazine.
    "Shun, if someone is converted, let him go and do nothing. He should be given a chance to be reborn."
    "Grandpa, I hope he doesn't reincarnate himself."
    In order to defeat several non-human monsters, the boy also became something non-human.
    Shun Uruma, a sixth-grade student, was named "Experimental body: A" by five of his classmates and was severely bullied and lived in hell. His only peace was with his brother, who loved him, and his parents, who protected him….  until the five monsters killed his family.
    When he finally loses everything and faces true hell, a dark "wish" is born inside Shun. He was reborn under the training of his grandfather, who served in a secret unit during WWII. Now, four years later, he appears in front of his fated enemy.
    "I won't let ANYONE get in the way of my revenge."
    `,
    valumes: 9,
  },
  // [32]
  {
    title: `kaguya sama love is war`,
    authors: `Akasaka Aka`,
    demographic: `Seinen`,
    published: `2015`,
    status: `Completed`,
    ranked: `#130`,
    genres: ` Comedy, Drama, Romance, School Life, Slice of Life`,
    description: `All’s fair when love is war!
    Two geniuses. Two brains. Two hearts. One battle. Who will confess their love first…?!
    Kaguya Shinomiya and Miyuki Shirogane are two geniuses who stand atop their prestigious academy’s student council, making them the elite among elite. But it’s lonely at the top and each has fallen for the other. There’s just one huge problem standing in the way of lovey-dovey bliss—they’re both too prideful to be the first to confess their romantic feelings and thus become the “loser” in the competition of love! And so begins their daily schemes to force the other to confess first!
    `,
    valumes: 28,
  },
  // [33]
  {
    title: `Kaiju No 8`,
    authors: `Matsumoto Naoya`,
    demographic: `Shounen`,
    published: `2020`,
    status: `Ongoing`,
    ranked: `#25`,
    genres: ` Action, Comedy, Drama, Horror, Martial Arts, Sci-Fi, Supernatural, Web Comic, Aliens, Military, Monsters`,
    description: `A man working a job far removed from his childhood dreams gets wrapped up in an unexpected situation…! <br> 
    Becoming a monster, he aims once again to fulfill his lifelong dream…!
    `,
    valumes: 8,
  },
  // [34]
  {
    title: `Kakegurui`,
    authors: ` Kawamoto Homura`,
    demographic: `Shounen`,
    published: `2014`,
    status: `Ongoing`,
    ranked: `#1,273`,
    genres: `Award Winning, Comedy, Drama, Ecchi, Psychological, School Life, Slice of Life, Yuri, Thriller, Loli`,
    description: `Hyakkaou Private Academy. An institution for the privileged with a very peculiar curriculum. You see, when you're the sons and daughters of the wealthiest of the wealthy, it's not athletic prowess or book smarts that keep you ahead. It's reading your opponent, the art of the deal. What better way to hone those skills than with a rigorous curriculum of gambling?
    At Hyakkaou Private Academy, the winners live like kings, and the losers are put through the wringer. But when Yumeko Jabami enrolls, she's gonna teach these kids what a high roller really looks like!
    `,
    valumes: 16,
  },
  // [35]
  {
    title: `Kakkou no Iinazuke`,
    authors: ` Yoshikawa Miki`,
    demographic: ` Shounen`,
    published: `2020`,
    status: `Ongoing`,
    ranked: `#256`,
    genres: ` Comedy, Ecchi, Harem, Romance, School Life, Slice of Life`,
    description: `Nagi Umino was mistakenly switched at birth, and now attends a prestigious private high school. One day, he has a chance meeting with Erika Amano, an incredibly high society highschool girl who claims she's on the way to meet her fiancé, and who asks/forces him to be her fake boyfriend. Neither of them, at the time, understood the significance of their meeting for Erika was the girl Nagi was switched at birth with, and Nagi was Erika's soon-to-be fiancé! The curtain raises on a romantic comedy of intertwined fates that begins with being switched at birth!
    `,
    valumes: 15,
  },
  // [36]
  {
    title: `Kings Viking`,
    authors: `Fukami Makoto`,
    demographic: `Seinen`,
    published: `2013`,
    status: `Completed`,
    ranked: `#6,019`,
    genres: `Drama, Mystery, Psychological, Slice of Life`,
    description: `18-year-old Koreeda Kazuki is a genius hacker whose only real skill lies with computers. <br>
    Into his aimless life steps a wealthy man who makes him a proposition he finds impossible to refuse: that he will become Koreeda's investor on the condition that Koreeda use his abilities to help the man "conquer the world."<br>
     In cyberspace where national borders hold no meaning, thus begins the story of two modern-day adventurers who stand against crime on a global scale.
   `,
    valumes: 19,
  },
  // [37]
  {
    title: `Mochizuki sanchi no Yankee`,
    authors: `Uzuki Miya`,
    demographic: `Shoujo`,
    published: `2019`,
    status: `Ongoing`,
    ranked: `#3,421`,
    genres: `Comedy, Cooking, Ecchi, Romance, School Life, Slice of Life, Delinquents`,
    description: `When their mother passed away, the Mochizuki family's eldest daughter Yuka tried to take care of her father and siblings as best she could, but her cooking was just too awful.<br> When Yuka's father accidentally tasted an amazing bento, he hired the person who made it to be a domestic helper.<br> That person turned out to be Kuraku, the blonde-haired delinquent (but with the best grades) in Yuka's class! Based on the popular Pixiv series!
    `,
    valumes: 3,
  },
  // [38]
  {
    title: `Satsuriku no Tenshi`,
    authors: `Kudan Nazuka`,
    demographic: `Shoujo`,
    published: `2015`,
    status: `Completed`,
    ranked: `#3,569`,
    genres: ` Action, Drama, Horror, Mystery, Psychological, Adaptation, Survival`,
    description: `13-year old Rachel awakens to find herself trapped in the basement of an abandoned building. Without any memories, or even a clue as to where she could be, she wanders the building, lost and dizzy. In her search, she comes across a man covered in bandages. He introduces himself as Zack and he wields a grim-reaper like sickle. A strange bond is struck between them, strengthened by strange, crazy promises… These two, trapped in this strange building, don't know why fate has placed them there. But they will work together desperately to find a way out…
    `,
    valumes: 12,
  },
  // [39]
  {
    title: `Science Fell in Love So I Tried to Prove It`,
    authors: `Yamamoto Alfred`,
    demographic: `Seinen`,
    published: `2016`,
    status: `Ongoing`,
    ranked: `#2,736`,
    genres: `Comedy, Romance, School Life, Slice of Life, Web Comic`,
    description: `Yukimura Shinya and Himuro Ayame are two scientists that want to find out if love can be solved by a scientific theory. These two scientists also have feelings for each other and want to be able to solve their true feelings through similar theoretical facts. With this perfect opportunity, these scientists will attempt to solve the theory of the love they express for each other.
    `,
    valumes: 14,
  },
  // [40]
  {
    title: `Seraph of the End`,
    authors: `Kagami Takaya, Furuya Daisuke`,
    demographic: `Shounen`,
    published: `2012`,
    status: `Ongoing`,
    ranked: `#401`,
    genres: ` Action, Drama, Mystery, Psychological, Romance, School Life, Sci-Fi, Slice of Life, Supernatural, Gore, Thriller, Demons, Monster Girls, Military, Monsters, Post-Apocalyptic, Survival, Vampires`,
    description: `One day, a mysterious virus appeared on Earth which killed every infected human over the age of 13. At the same time, vampires emerged from the world's dark recesses and enslaved mankind. Enter Hyakuya Yuuichirou, a young boy, who along with the rest of the children from his orphanage, are treated as livestock by the vampires. Even in captivity, Yuuichirou dreams big. He dreams of killing vampires. He dreams of killing them all.
    `,
    valumes: 28,
  },
  // [41]
  {
    title: `Sometimes Even Reality is a Lie`,
    authors: ` Niichi`,
    demographic: `Seinen`,
    published: `2018`,
    status: `Ongoing`,
    ranked: `#304`,
    genres: ` Comedy, Doujinshi, Romance, Slice of Life, Video Games, Full Color, Crossdressing`,
    description: `Kaoru Terasaki is a gamer who’s into MMORPGs, and he’s finally meeting up with someone he’s been friends with in-game for a long while—this time, offline and in person. He’s worried that his friend will be disappointed to see Kaoru is a guy, unlike his female character in the game. But he’s the one who’s in for a surprise when, instead of another guy, his friend turns out to be a cute girl, Nanami Osaka. On top of that, Nanami told her parents that she would be bringing a friend over—a female friend. Even worse, Nanami’s dad is the super overprotective type who won’t allow any guys near his daughter. There’s only one solution to this dilemma: Kaoru has to cross-dress as a girl! Will Kaoru’s efforts pay off in the end?! Will Kaoru and Nanami remain just friends, or will their time together IRL change everything? Follow their romantic-comedy adventures to find out!
    `,
    valumes: 8,
  },
  // [42]
  {
    title: `SPYxFAMILY`,
    authors: ` Endou Tatsuya`,
    demographic: `Shounen`,
    published: `2019`,
    status: `Ongoing`,
    ranked: `#15`,
    genres: `Action, Adventure, Award Winning, Comedy, Martial Arts, Romance, School Life,<br> Slice of Life, Supernatural, Web Comic, Animals, Police
    </p>`,
    description: `The master spy codenamed has spent his days on undercover missions, all for the dream of a better world.<br> But one day, he receives a particularly difficult new order from command.<br>For his mission, he must form a temporary family and start a new life?! A Spy/Action/Comedy about a one-of-a-kind family!
    `,
    valumes: 10,
  },
  // [43]
  {
    title: `Sweet Home`,
    authors: `Kim Carnby`,
    demographic: `0000000000`,
    published: `2018`,
    status: `Completed`,
    ranked: `#328`,
    genres: ` Action, Drama, Horror, Psychological, Sci-Fi, Tragedy, Long Strip, Web Comic, Full Color, Thriller, Monsters, Post-Apocalyptic, Survi`,
    description: `Now a major adaptation on streaming. After an unexpected family tragedy, a reclusive high school student is forced to leave his home -- only to face something much scarier: a reality where monsters are trying to wipe out humanity. Now he must fight alongside a handful of reluctant heroes to try and save the world before it’s too late.
    `,
    valumes: 12,
  },
  // [44]
  {
    title: `The Flowers of Evil`,
    authors: `Oshimi Shuzo`,
    demographic: `Shounen`,
    published: `2009`,
    status: `Completed`,
    ranked: `#733`,
    genres: `Drama, Ecchi, Horror, Psychological, Romance, School Life, Slice of Life, Supernatural, Tragedy, Philosophical, Delinquents, Survival
    `,
    description: `Kasuga Takao is a boy who loves reading books, particularly Baudelaire's The Flowers of Evil. A girl at his school, Saeki Nanako, is his muse and his Venus, and he admires her from a distance. One day, he forgets his copy of The Flowers of Evil in the classroom and runs back alone to pick it up. In the classroom, he finds not only his book but Saeki's gym uniform. On a mad impulse, he steals it.
    Now everyone knows "some pervert" stole Saeki's uniform, and Kasuga is dying with shame and guilt. Furthermore, the weird, creepy, and friendless girl of the class, Nakamura, saw him take the uniform. Instead of revealing it was him, she recognizes his kindred deviant spirit and uses her knowledge to take control of his life. Will it be possible for Kasuga to get closer to Saeki, despite Nakamura's meddling and his dark secret? What exactly does Nakamura intend to do with him?
    `,
    valumes: 11,
  },
  // [45]
  {
    title: `Toilet bound Hanako-kun`,
    authors: `Aida Iro`,
    demographic: `Shounen`,
    published: `2014`,
    status: `Ongoing`,
    ranked: `#423`,
    genres: `Action, Comedy, Drama, Mystery, Romance, School Life, Slice of Life, Supernatural, Tragedy, Thriller, Ghosts, Magic, Monsters, Time Travel`,
    description: `"Hanako-san, Hanako-san… are you there?"
    At Kamome Academy, rumors abound about the school's Seven Mysteries, one of which is Hanako-san. Said to occupy the third stall of the third floor girls' bathroom in the old school building, Hanako-san grants any wish when summoned. Nene Yashiro, an occult-loving high school girl who dreams of romance, ventures into this haunted bathroom… but the Hanako-san she meets there is nothing like she imagined! Kamome Academy's Hanako-san… is a boy!
    `,
    valumes: 19,
  },
  // [46]
  {
    title: `Tokyo Ghoul`,
    authors: `Ishida Sui`,
    demographic: `Seinen`,
    published: `2011`,
    status: `Completed`,
    ranked: `#93`,
    genres: `Action, Adventure, Drama, Horror, Mystery, Psychological, Romance, Sci-Fi, <br> Tragedy, Gore, Philosophical, Thriller, Delinquents, Monsters, Police, Survival`,
    description: `Lurking within the shadows of Tokyo are frightening beings known as "ghouls," who satisfy their hunger by feeding on humans once night falls. Ken Kaneki, an unsuspecting university freshman, finds himself caught in a world between humans and ghouls when his date turns out to be a ghoul after his flesh.
    `,
    valumes: 14,
  },
  // [47]
  {
    title: `Vanitas no Carte`,
    authors: `Mochizuki Jun`,
    demographic: `Shounen`,
    published: `2015`,
    status: `Ongoing`,
    ranked: `#777`,
    genres: `Action, Adventure, Comedy, Drama, Historical, Mystery, Supernatural, Vampires`,
    description: `Paris, late 19th century. Vanitas is a human who works as a doctor for vampires and wishes to save them. He uses a magical book called The Vanitas Grimoire to dispel an evil curse that corrupts vampires and turns them into blood-sucking monsters. But…this very same book is rumoured to be the cursed tome that gives birth to vampires on nights when the blue moon is full. Noe is a vampire on the hunt for The Grimoire. Who, really, is Dr Vanitas? What are the secrets that he holds, and what fate do those secrets spell for the vampire species?
    `,
    valumes: 10,
  },
  // [48]
  {
    title: `Youjo Senki`,
    authors: `Carlo Zen`,
    demographic: `Seinen`,
    published: `2016`,
    status: `Ongoing`,
    ranked: `#1,324`,
    genres: ` Action, Drama, Fantasy, Historical, Psychological, Isekai, Adaptation, Gore, Genderswap, Magic, Military, Reincarnation`,
    description: `A young girl fights on the frontlines in war. She has blonde hair, blue eyes, and nearly transparent white skin as she flies through the air and mercilessly strikes down her enemies. Her name is Tanya Degurechaff and speaks with a young girl's lisp while she commands the army. Tanya used to be one of Japan's elite office workers, but because of a wrathful god was reborn as a little girl. Prioritizing optimization and career advancement above all, she will become the most dangerous entity among the Imperial Army's sorcerers.
    `,
    valumes: 26,
  },
];
