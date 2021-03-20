window.onload = function () {
  var Screens = { Menu: 1, Game: 2 };
  var SpiritTypes = { Gods: 0, Angels: 1, Demons: 2, Spirits: 3 };
  var CurrentSpiritType = -1;
  var CurrentScreen = Screens.Menu;
  var FPS = 30;


  var GodsQuestions = [[
    {
      "Question": "Which goddess is commonly titled \"the goddess of the crossroads\"?",
      "Choices": ["Athena", "Hecate", "Artemis", "Aphrodite"],
      "Answer": "Hecate"
    },
    {
      "Question": "What is considered one of Jupiter's domains?",
      "Choices": ["Warfare", "Death", "Prosperity", "Love"],
      "Answer": "Prosperity"
    }
  ],[],[],[]]
  //#region  Angels
  var AngelsQuestions = [
  [
    {
      "Question": "What power is commonly associated with Archangel Michael?",
      "Choices": ["Protection", "Healing", "Love", "Rain"],
      "Answer": "Protection"
    },
    {
      "Question": "Which Archangel is commonly titled \"Keeper of Secrets\"?",
      "Choices": ["Raziel", "Gabriel", "Michael", "Azrael"],
      "Answer": "Raziel"
    },
    {
      "Question": "Which Archangel is commonly titled \"Messenger of god\"?",
      "Choices": ["Raziel", "Gabriel", "Michael", "Metatron"],
      "Answer": "Gabriel"
    },
    {
      "Question": "Who is the Archangel of the moon?",
      "Choices": ["Tzadkiel", "Haniel", "Sariel", "Camael"],
      "Answer": "Sariel"
    },
    {
      "Question": "Which Archangel used to be the prophet Enoch?",
      "Choices": ["Cassiel", "Metatron", "Michael", "Camael"],
      "Answer": "Metatron"
    },
    {
      "Question": "What Archangel's name translates to \"Joy of God\"?",
      "Choices": ["Michael", "Haniel", "Sariel", "Zaphkiel"],
      "Answer": "Haniel"
    },
    {
      "Question": "Which angel's name translates to \"mercy of God\"?",
      "Choices": ["Jeremiel", "Baruch", "Hofniel", "Iofiel"],
      "Answer": "Jeremiel"
    },
    {
      "Question": "Which angel is the angel of anger?",
      "Choices": ["Tadhiel", "Zakzakiel", "Af", "Boel"],
      "Answer": "Af"
    },
    {
      "Question": "Which angel's name translates to \"God is my strength\"?",
      "Choices": ["He’el", "Gabriel", "Ansiel", "Adrael"],
      "Answer": "Gabriel"
    },
  ],
  [
    {
      "Question": "What planet is Vehuiah associated with?",
      "Choices": ["Mercury", "Jupiter", "Venus", "Neptune"],
      "Answer": "Neptune"
    },
    {
      "Question": "What planet is Yeliel associated with?",
      "Choices": ["Jupiter", "Sun", "Mars", "Saturn"],
      "Answer": "Saturn"
    },
    {
      "Question": "What planet is Sitael associated with?",
      "Choices": ["Venus", "Jupiter", "Saturn", "Neptune"],
      "Answer": "Jupiter"
    },
    {
      "Question": "What planet is Elemiah associated with?",
      "Choices": ["Venus", "Mars", "Sun", "Jupiter"],
      "Answer": "Mars"
    },
    {
      "Question": "What planet is Mahashiah associated with?",
      "Choices": ["Saturn", "Jupiter", "Mars", "Sun"],
      "Answer": "Sun"
    },
    {
      "Question": "What planet is Lelahel associated with?",
      "Choices": ["Saturn", "Neptune", "Venus", "Mercury"],
      "Answer": "Venus"
    },
    {
      "Question": "What planet is Achaiah associated with?",
      "Choices": ["Mercury", "Venus", "Mars", "Jupiter"],
      "Answer": "Mercury"
    },
    {
      "Question": "What planet is Cahetel associated with?",
      "Choices": ["Moon", "Mercury", "Jupiter", "Venus"],
      "Answer": "Moon"
    },
    {
      "Question": "What planet is Heziel associated with?",
      "Choices": ["Mercury", "Sun", "Neptune", "Mars"],
      "Answer": "Neptune"
    },
    {
      "Question": "What planet is Aladiah associated with?",
      "Choices": ["Jupiter", "Mercury", "Sun", "Saturn"],
      "Answer": "Saturn"
    },
    {
      "Question": "What planet is Laviah associated with?",
      "Choices": ["Neptune", "Sun", "Jupiter", "Mercury"],
      "Answer": "Jupiter"
    },
    {
      "Question": "What planet is Hahaiah associated with?",
      "Choices": ["Sun", "Jupiter", "Saturn", "Mars"],
      "Answer": "Mars"
    },
    {
      "Question": "What planet is Yezelel associated with?",
      "Choices": ["Jupiter", "Sun", "Neptune", "Venus"],
      "Answer": "Sun"
    },
    {
      "Question": "What planet is Mebahel associated with?",
      "Choices": ["Saturn", "Mercury", "Neptune", "Venus"],
      "Answer": "Venus"
    },
    {
      "Question": "What planet is Hariel associated with?",
      "Choices": ["Mars", "Jupiter", "Venus", "Mercury"],
      "Answer": "Mercury"
    },
    {
      "Question": "What planet is Hakemiah associated with?",
      "Choices": ["Mars", "Moon", "Sun", "Mercury"],
      "Answer": "Moon"
    },
    {
      "Question": "What planet is Lahviah associated with?",
      "Choices": ["Venus", "Neptune", "Mars", "Sun"],
      "Answer": "Neptune"
    },
    {
      "Question": "What planet is Keliel associated with?",
      "Choices": ["Neptune", "Mars", "Saturn", "Mercury"],
      "Answer": "Saturn"
    },
    {
      "Question": "What planet is Loviah associated with?",
      "Choices": ["Saturn", "Venus", "Jupiter", "Neptune"],
      "Answer": "Jupiter"
    },
    {
      "Question": "What planet is Pahaliah associated with?",
      "Choices": ["Saturn", "Venus", "Mars", "Sun"],
      "Answer": "Mars"
    },
    {
      "Question": "What planet is Nelakel associated with?",
      "Choices": ["Sun", "Mars", "Saturn", "Jupiter"],
      "Answer": "Sun"
    },
    {
      "Question": "What planet is Yeialel associated with?",
      "Choices": ["Mercury", "Mars", "Venus", "Sun"],
      "Answer": "Venus"
    },
    {
      "Question": "What planet is Melahel associated with?",
      "Choices": ["Mercury", "Neptune", "Mars", "Venus"],
      "Answer": "Mercury"
    },
    {
      "Question": "What planet is Chahuiah associated with?",
      "Choices": ["Neptune", "Jupiter", "Mercury", "Moon"],
      "Answer": "Moon"
    },
    {
      "Question": "What planet is Nilaihah associated with?",
      "Choices": ["Neptune", "Mercury", "Mars", "Jupiter"],
      "Answer": "Neptune"
    },
    {
      "Question": "What planet is Haaiah associated with?",
      "Choices": ["Venus", "Saturn", "Neptune", "Jupiter"],
      "Answer": "Saturn"
    },
    {
      "Question": "What planet is Yerathel associated with?",
      "Choices": ["Jupiter", "Sun", "Saturn", "Neptune"],
      "Answer": "Jupiter"
    },
    {
      "Question": "What planet is Shahaiah associated with?",
      "Choices": ["Saturn", "Mars", "Jupiter", "Sun"],
      "Answer": "Mars"
    },
    {
      "Question": "What planet is Reiyel associated with?",
      "Choices": ["Jupiter", "Sun", "Neptune", "Mars"],
      "Answer": "Sun"
    },
    {
      "Question": "What planet is Omael associated with?",
      "Choices": ["Venus", "Saturn", "Mars", "Jupiter"],
      "Answer": "Venus"
    },
    {
      "Question": "What planet is Lecabel associated with?",
      "Choices": ["Venus", "Saturn", "Mercury", "Neptune"],
      "Answer": "Mercury"
    },
    {
      "Question": "What planet is Veshariah associated with?",
      "Choices": ["Saturn", "Venus", "Moon", "Mercury"],
      "Answer": "Moon"
    },
    {
      "Question": "What planet is Yechuiah associated with?",
      "Choices": ["Mars", "Venus", "Neptune", "Saturn"],
      "Answer": "Neptune"
    },
    {
      "Question": "What planet is Lehakiah associated with?",
      "Choices": ["Mars", "Sun", "Saturn", "Venus"],
      "Answer": "Saturn"
    },
    {
      "Question": "What planet is Kavachiah associated with?",
      "Choices": ["Sun", "Jupiter", "Saturn", "Neptune"],
      "Answer": "Jupiter"
    },
    {
      "Question": "What planet is Menadel associated with?",
      "Choices": ["Mars", "Jupiter", "Sun", "Saturn"],
      "Answer": "Mars"
    },
    {
      "Question": "What planet is Aniel associated with?",
      "Choices": ["Jupiter", "Neptune", "Venus", "Sun"],
      "Answer": "Sun"
    },
    {
      "Question": "What planet is Chaamiah associated with?",
      "Choices": ["Venus", "Mars", "Jupiter", "Mercury"],
      "Answer": "Venus"
    },
    {
      "Question": "What planet is Rehoel associated with?",
      "Choices": ["Saturn", "Jupiter", "Mars", "Mercury"],
      "Answer": "Mercury"
    },
    {
      "Question": "What planet is Yeyizel associated with?",
      "Choices": ["Mars", "Moon", "Mercury", "Sun"],
      "Answer": "Moon"
    },
    {
      "Question": "What planet is Hahahel associated with?",
      "Choices": ["Jupiter", "Mercury", "Sun", "Neptune"],
      "Answer": "Neptune"
    },
    {
      "Question": "What planet is Mikael associated with?",
      "Choices": ["Saturn", "Jupiter", "Sun", "Venus"],
      "Answer": "Saturn"
    },
    {
      "Question": "What planet is Vevaliah associated with?",
      "Choices": ["Mars", "Sun", "Venus", "Jupiter"],
      "Answer": "Jupiter"
    },
    {
      "Question": "What planet is Yelahiah associated with?",
      "Choices": ["Mercury", "Mars", "Neptune", "Sun"],
      "Answer": "Mars"
    },
    {
      "Question": "What planet is Sealiah associated with?",
      "Choices": ["Saturn", "Sun", "Mars", "Venus"],
      "Answer": "Sun"
    },
    {
      "Question": "What planet is Ariel associated with?",
      "Choices": ["Venus", "Sun", "Mercury", "Neptune"],
      "Answer": "Venus"
    },
    {
      "Question": "What planet is Eshaliah associated with?",
      "Choices": ["Saturn", "Mars", "Mercury", "Venus"],
      "Answer": "Mercury"
    },
    {
      "Question": "What planet is Mihael associated with?",
      "Choices": ["Mercury", "Saturn", "Neptune", "Moon"],
      "Answer": "Moon"
    },
    {
      "Question": "What planet is Vehuel associated with?",
      "Choices": ["Sun", "Neptune", "Mercury", "Venus"],
      "Answer": "Neptune"
    },
    {
      "Question": "What planet is Daniel associated with?",
      "Choices": ["Saturn", "Venus", "Jupiter", "Mercury"],
      "Answer": "Saturn"
    },
    {
      "Question": "What planet is Hachashiah associated with?",
      "Choices": ["Sun", "Mercury", "Venus", "Jupiter"],
      "Answer": "Jupiter"
    },
    {
      "Question": "What planet is Imamiah associated with?",
      "Choices": ["Venus", "Mars", "Sun", "Saturn"],
      "Answer": "Mars"
    },
    {
      "Question": "What planet is Nanael associated with?",
      "Choices": ["Jupiter", "Venus", "Mercury", "Sun"],
      "Answer": "Sun"
    },
    {
      "Question": "What planet is Nitael associated with?",
      "Choices": ["Sun", "Jupiter", "Venus", "Mars"],
      "Answer": "Venus"
    },
    {
      "Question": "What planet is Mebahiah associated with?",
      "Choices": ["Jupiter", "Mercury", "Sun", "Saturn"],
      "Answer": "Mercury"
    },
    {
      "Question": "What planet is Poyel associated with?",
      "Choices": ["Moon", "Venus", "Mars", "Saturn"],
      "Answer": "Moon"
    },
    {
      "Question": "What planet is Nememiah associated with?",
      "Choices": ["Mars", "Saturn", "Neptune", "Mercury"],
      "Answer": "Neptune"
    },
    {
      "Question": "What planet is Yeialel associated with?",
      "Choices": ["Mars", "Jupiter", "Neptune", "Saturn"],
      "Answer": "Saturn"
    },
    {
      "Question": "What planet is Harachel associated with?",
      "Choices": ["Jupiter", "Mercury", "Neptune", "Venus"],
      "Answer": "Jupiter"
    },
    {
      "Question": "What planet is Mitzrael associated with?",
      "Choices": ["Venus", "Sun", "Saturn", "Mars"],
      "Answer": "Mars"
    },
    {
      "Question": "What planet is Umabel associated with?",
      "Choices": ["Sun", "Venus", "Mars", "Mercury"],
      "Answer": "Sun"
    },
    {
      "Question": "What planet is Yahahel associated with?",
      "Choices": ["Saturn", "Mercury", "Venus", "Mars"],
      "Answer": "Venus"
    },
    {
      "Question": "What planet is Anuel associated with?",
      "Choices": ["Saturn", "Jupiter", "Mercury", "Venus"],
      "Answer": "Mercury"
    },
    {
      "Question": "What planet is Machiel associated with?",
      "Choices": ["Moon", "Mars", "Jupiter", "Neptune"],
      "Answer": "Moon"
    },
    {
      "Question": "What planet is Damabiah associated with?",
      "Choices": ["Mercury", "Mars", "Neptune", "Sun"],
      "Answer": "Neptune"
    },
    {
      "Question": "What planet is Menakel associated with?",
      "Choices": ["Venus", "Saturn", "Mars", "Mercury"],
      "Answer": "Saturn"
    },
    {
      "Question": "What planet is Iyahel associated with?",
      "Choices": ["Venus", "Neptune", "Jupiter", "Mars"],
      "Answer": "Jupiter"
    },
    {
      "Question": "What planet is Chavuiah associated with?",
      "Choices": ["Mars", "Saturn", "Jupiter", "Neptune"],
      "Answer": "Mars"
    },
    {
      "Question": "What planet is Rahael associated with?",
      "Choices": ["Sun", "Venus", "Mercury", "Mars"],
      "Answer": "Sun"
    },
    {
      "Question": "What planet is Yabamiah associated with?",
      "Choices": ["Venus", "Mercury", "Saturn", "Jupiter"],
      "Answer": "Venus"
    },
    {
      "Question": "What planet is Hayiel associated with?",
      "Choices": ["Venus", "Mercury", "Jupiter", "Neptune"],
      "Answer": "Mercury"
    },
    {
      "Question": "What planet is Mumiah associated with?",
      "Choices": ["Mars", "Sun", "Moon", "Saturn"],
      "Answer": "Moon"
    }
  ],[
    {
      "Question": "Which angel's name translates to \"lion of God\"?",
      "Choices": ["Akhraziel", "Aariel", "Pusiel", "Achaiah"],
      "Answer": "Aariel"
    },
    {
      "Question": "Which angel's name translates to \"power of God\"?",
      "Choices": ["Turel", "Ariel", "Armasa", "Abru-El"],
      "Answer": "Abru-El"
    },
    {
      "Question": "Which angel's name translates to \"trouble\"?",
      "Choices": ["Zotiel", "Aariel", "Schrewniel", "Achaiah"],
      "Answer": "Achaiah"
    },
    {
      "Question": "Which angel's name translates to \"magnificence of God\"?",
      "Choices": ["Adirael", "Harbonah", "Adnarel", "Kadmiel"],
      "Answer": "Adirael"
    },
    {
      "Question": "Which angel's name translates to \"pleasure\"?",
      "Choices": ["Adnai", "Keel", "Asbeel", "Iofiel"],
      "Answer": "Adnai"
    },
    {
      "Question": "Which angel's name translates to \"my lord is God\"?",
      "Choices": ["Makatiel", "Jeremiel", "Zechariel", "Adnarel"],
      "Answer": "Adnarel"
    },
    {
      "Question": "Which angel's name translates to \"my help is God\"?",
      "Choices": ["Penemue", "Rachmiel", "Ahiel", "Adrael"],
      "Answer": "Adrael"
    },
    {
      "Question": "Which angel's name translates to \"my help is God\"?",
      "Choices": ["Adriel", "Hananiel", "Daniel", "Netzach"],
      "Answer": "Adriel"
    },

    {
      "Question": "Which angel's name translates to \"brother of God\"?",
      "Choices": ["Makatiel", "Ansiel", "Imriel", "Ahiel"],
      "Answer": "Ahiel"
    },
    {
      "Question": "Which angel's name translates to \"herald of God\"?",
      "Choices": ["Akhraziel", "Armasa", "Netzach", "Pusiel"],
      "Answer": "Akhraziel"
    },
    {
      "Question": "Which angel's name translates to \"fire of God\"?",
      "Choices": ["Ansiel", "Puriel", "Noriel", "Turel"],
      "Answer": "Puriel"
    },
    {
      "Question": "Which angel's name translates to \"the constrainer\"?",
      "Choices": ["Malakim", "Ansiel", "Armasa", "Nathanael"],
      "Answer": "Ansiel"
    },
    {
      "Question": "Which angel's name translates to \"neck of God\"?",
      "Choices": ["Archons", "Araphiel", "Sathariel", "Schrewniel"],
      "Answer": "Araphiel"
    },
    {
      "Question": "Which angel's name translates to \"rulers\"?",
      "Choices": ["Archons", "Memuneh", "Pusiel", "Rahab"],
      "Answer": "Archons"
    },
    {
      "Question": "Which angel's name translates to \"Athenaeum\"?",
      "Choices": ["Neriah", "Ariel", "Hoesediel", "Rahab"],
      "Answer": "Ariel"
    },
    {
      "Question": "Which angel's name translates to \"the great lord\"?",
      "Choices": ["Ketheriel", "Armasa", "Penemue", "Schrewniel"],
      "Answer": "Armasa"
    },
    {
      "Question": "Which angel's name translates to \"whom God made\"?",
      "Choices": ["Machidiel", "Asael", "Mupiel", "Nuriel"],
      "Answer": "Asael"
    },
    {
      "Question": "Which angel's name translates to \"whom God has bound\"?",
      "Choices": ["Pachdiel", "Asariel", "Jabniel", "Zazriel"],
      "Answer": "Asariel"
    },
    {
      "Question": "Which angel's name translates to \"deserter from God\"?",
      "Choices": ["Zophiel", "Jeremiel", "Asbeel", "Archons"],
      "Answer": "Asbeel"
    },
    {
      "Question": "Which angel's name translates to \"God adds\"?",
      "Choices": ["Atuniel", "Hananiel", "Asfa’el", "Zotiel"],
      "Answer": "Asfa’el"
    },
    {
      "Question": "Which angel's name translates to \"created of God\"?",
      "Choices": ["Asiel", "Af", "Zehanpuryu’h", "Daniel"],
      "Answer": "Asiel"
    },
    {
      "Question": "Which angel's name translates to \"furnace\"?",
      "Choices": ["Atuniel", "Af", "Zephon", "Nuriel"],
      "Answer": "Atuniel"
    },
    {
      "Question": "Which angel's name translates to \"whom God helps\"?",
      "Choices": ["Nathanael", "Zehanpuryu’h", "Lahatiel", "Azariah"],
      "Answer": "Azariah"
    },
    {
      "Question": "Which angel's name translates to \"blessed\"?",
      "Choices": ["Mehuman", "Baruch", "Raphael", "Adirael"],
      "Answer": "Baruch"
    },
    {
      "Question": "Which angel's name translates to \"my blessing is God\"?",
      "Choices": ["Berekeel", "Keel", "Gabriel", "Elimelech"],
      "Answer": "Berekeel"
    },
    {
      "Question": "Which angel's name translates to \"house or man of God\"?",
      "Choices": ["Bethuael", "Hoesediel", "Nuriel", "Hodiel"],
      "Answer": "Bethuael"
    },
    {
      "Question": "Which angel's name translates to \"God is in him\"?",
      "Choices": ["Asbeel", "Boel", "Michael", "Pathiel"],
      "Answer": "Boel"
    },
    {
      "Question": "Which angel's name translates to \"he who seeks God\"?",
      "Choices": ["Chamuel", "Baruch", "Abru-El", "Tadhiel"],
      "Answer": "Chamuel"
    },
    {
      "Question": "Which angel's name translates to \"God is my judge\"?",
      "Choices": ["Shamsiel", "Daniel", "Kushiel", "Atuniel"],
      "Answer": "Daniel"
    },
    {
      "Question": "Which angel's name translates to \"my God is king\"?",
      "Choices": ["Pathiel", "Elimelech", "Azariah", "Armasa"],
      "Answer": "Elimelech"
    },
    {
      "Question": "Which angel's name translates to \"God with us\"?",
      "Choices": ["Emmanuel", "Zakzakiel", "Mehuman", "Shoftiel"],
      "Answer": "Emmanuel"
    },
    {
      "Question": "Which angel's name translates to \"majesty of God\"?",
      "Choices": ["Daniel", "Zahariel", "Germael", "Boel"],
      "Answer": "Germael"
    },
    {
      "Question": "Which angel's name translates to \"mighty ones\"?",
      "Choices": ["Ithuriel", "Iofiel", "Gibborim", "Jeremiel"],
      "Answer": "Gibborim"
    },
    {
      "Question": "Which angel's name translates to \"whelp of God\"?",
      "Choices": ["Jabniel", "Adirael", "Guriel", "Pusiel"],
      "Answer": "Guriel"
    },
    {
      "Question": "Which angel's name translates to \"graciously given of God\"?",
      "Choices": ["Schrewniel", "Mahniel", "Hofniel", "Hananiel"],
      "Answer": "Hananiel"
    },
    {
      "Question": "Which angel's name translates to \"ass driver\"?",
      "Choices": ["Zakzakiel", "Nahaliel", "Armasa", "Harbonah"],
      "Answer": "Harbonah"
    },
    {
      "Question": "Which angel's name translates to \"vision of God\"?",
      "Choices": ["Pedael", "Haziel", "Zohar", "Iadiel"],
      "Answer": "Haziel"
    },
    {
      "Question": "Which angel's name translates to \"life of God\"?",
      "Choices": ["Zakzakiel", "He’el", "Israel", "Ansiel"],
      "Answer": "He’el"
    },
    {
      "Question": "Which angel's name translates to \"victory of God\"?",
      "Choices": ["Pathiel", "Hodiel", "Araphiel", "Mashith"],
      "Answer": "Hodiel"
    },
    {
      "Question": "Which angel's name translates to \"mercy of God\"?",
      "Choices": ["Zebul", "Puriel", "Zahariel", "Hoesediel"],
      "Answer": "Hoesediel"
    },
    {
      "Question": "Which angel's name translates to \"fighter for God\"?",
      "Choices": ["Ansiel", "Hofniel", "Zehanpuryu’h", "Netzach"],
      "Answer": "Hofniel"
    },
    {
      "Question": "Which angel's name translates to \"hand of God\"?",
      "Choices": ["He’el", "Adirael", "Adnai", "Iadiel"],
      "Answer": "Iadiel"
    },
    {
      "Question": "Which angel's name translates to \"eloquence of God\"?",
      "Choices": ["Zelebsel", "Makatiel", "Ketheriel", "Imriel"],
      "Answer": "Imriel"
    },
    {
      "Question": "Which angel's name translates to \"beauty of God\"?",
      "Choices": ["Makatiel", "Iofiel", "Sathariel", "Adrael"],
      "Answer": "Iofiel"
    },
    {
      "Question": "Which angel's name translates to \"striver with God\"?",
      "Choices": ["Yisrael", "Nuriel", "Israel", "Emmanuel"],
      "Answer": "Israel"
    },
    {
      "Question": "Which angel's name translates to \"discovery of God\"?",
      "Choices": ["Mehuman", "Ithuriel", "Schrewniel", "Araphiel"],
      "Answer": "Ithuriel"
    },
    {
      "Question": "Which angel's name translates to \"Jehovah causes to be built\"?",
      "Choices": ["Mahariel", "Tarfiel", "Jabniel", "Zephon"],
      "Answer": "Jabniel"
    },
    {
      "Question": "Which angel's name translates to \"before God\"?",
      "Choices": ["Ariel", "Kadmiel", "Adirael", "Zahariel"],
      "Answer": "Kadmiel"
    },
    {
      "Question": "Which angel's name translates to \"like God\"?",
      "Choices": ["Af", "Keel", "Jabniel", "Michael"],
      "Answer": "Keel"
    },
    {
      "Question": "Which angel's name translates to \"crown of God\"?",
      "Choices": ["Ketheriel", "Asariel", "Haziel", "Mataqiel"],
      "Answer": "Ketheriel"
    },
    {
      "Question": "Which angel's name translates to \"fulness of God\"?",
      "Choices": ["Machidiel", "Jabniel", "Adriel", "Netzach"],
      "Answer": "Machidiel"
    },
    {
      "Question": "Which angel's name translates to \"swift\"?",
      "Choices": ["Jeremiel", "Mahariel", "Atuniel", "Mupiel"],
      "Answer": "Mahariel"
    },
    {
      "Question": "Which angel's name translates to \"mighty camp\"?",
      "Choices": ["Noriel", "Mahniel", "Zakzakiel", "Ahiel"],
      "Answer": "Mahniel"
    },
    {
      "Question": "Which angel's name translates to \"kings\"?",
      "Choices": ["Archons", "Zahariel", "Adnarel", "Malakim"],
      "Answer": "Malakim"
    },
    {
      "Question": "Which angel's name translates to \"destroyer\"?",
      "Choices": ["Makatiel", "Mashith", "Adirael", "Zelebsel"],
      "Answer": "Mashith"
    },
    {
      "Question": "Which angel's name translates to \"sweet\"?",
      "Choices": ["Berekeel", "Ophis", "Mataqiel", "Af"],
      "Answer": "Mataqiel"
    },
    {
      "Question": "Which angel's name translates to \"true faithful\"?",
      "Choices": ["Bethuael", "Mehuman", "Adnai", "Memuneh"],
      "Answer": "Mehuman"
    },
    {
      "Question": "Which angel's name translates to \"appointed one\"?",
      "Choices": ["Daniel", "Shoftiel", "Rachmiel", "Memuneh"],
      "Answer": "Memuneh"
    },
    {
      "Question": "Which angel's name translates to \"who is as God\"?",
      "Choices": ["Germael", "Jabniel", "Michael", "Boel"],
      "Answer": "Michael"
    },
    {
      "Question": "Which angel's name translates to \"out of the mouth of God\"?",
      "Choices": ["Neriah", "Hodiel", "Guriel", "Mupiel"],
      "Answer": "Mupiel"
    },
    {
      "Question": "Which angel's name translates to \"valley of God\"?",
      "Choices": ["Machidiel", "Pachdiel", "Nahaliel", "Ithuriel"],
      "Answer": "Nahaliel"
    },
    {
      "Question": "Which angel's name translates to \"gift of God\"?",
      "Choices": ["Nathanael", "Ahiel", "Gibborim", "Boel"],
      "Answer": "Nathanael"
    },
    {
      "Question": "Which angel's name translates to \"lamp of God\"?",
      "Choices": ["Baruch", "Neriah", "Abru-El", "Malakim"],
      "Answer": "Neriah"
    },
    {
      "Question": "Which angel's name translates to \"victory/ firmness\"?",
      "Choices": ["Netzach", "Hananiel", "Turel", "Achaiah"],
      "Answer": "Netzach"
    },
    {
      "Question": "Which angel's name translates to \"fire of God\"?",
      "Choices": ["Raphael", "Lahatiel", "Noriel", "Nuriel"],
      "Answer": "Noriel"
    },
    {
      "Question": "Which angel's name translates to \"fire\"?",
      "Choices": ["Adnarel", "Michael", "Nahaliel", "Nuriel"],
      "Answer": "Nuriel"
    },
    {
      "Question": "Which angel's name translates to \"serpent\"?",
      "Choices": ["Ophis", "He’el", "Baruch", "Asfa’el"],
      "Answer": "Ophis"
    },
    {
      "Question": "Which angel's name translates to \"fear\"?",
      "Choices": ["Adnai", "Pachdiel", "Zazriel", "Nahaliel"],
      "Answer": "Pachdiel"
    },
    {
      "Question": "Which angel's name translates to \"the opener\"?",
      "Choices": ["Pusiel", "Zahariel", "Pathiel", "Imriel"],
      "Answer": "Pathiel"
    },
    {
      "Question": "Which angel's name translates to \"whom God delivers\"?",
      "Choices": ["Zechariel", "Pedael", "Iofiel", "Penemue"],
      "Answer": "Pedael"
    },
    {
      "Question": "Which angel's name translates to \"the inside\"?",
      "Choices": ["Schrewniel", "Penemue", "Zuriel", "Machidiel"],
      "Answer": "Penemue"
    },
    {
      "Question": "Which angel's name translates to \"face of God\"?",
      "Choices": ["Ophis", "Peniel", "Atuniel", "Rahab"],
      "Answer": "Peniel"
    },
    {
      "Question": "Which angel's name translates to \"trembling before God\"?",
      "Choices": ["Kushiel", "Zahariel", "Raamicl", "Nahaliel"],
      "Answer": "Raamicl"
    },
    {
      "Question": "Which angel's name translates to \"mercy\"?",
      "Choices": ["Asfa’el", "Armasa", "Neriah", "Rachmiel"],
      "Answer": "Rachmiel"
    },
    {
      "Question": "Which angel's name translates to \"violence\"?",
      "Choices": ["Pathiel", "Rahab", "Puriel", "Mahariel"],
      "Answer": "Rahab"
    },
    {
      "Question": "Which angel's name translates to \"God has healed\"?",
      "Choices": ["Hananiel", "Zephon", "Shamsiel", "Raphael"],
      "Answer": "Raphael"
    },
    {
      "Question": "Which angel's name translates to \"covering of God\"?",
      "Choices": ["Sachiel", "He’el", "Boel", "Tartaruchus"],
      "Answer": "Sachiel"
    },
    {
      "Question": "Which angel's name translates to \"God’s side\"?",
      "Choices": ["Yisrael", "Sartael", "Adrael", "Zotiel"],
      "Answer": "Sartael"
    },
    {
      "Question": "Which angel's name translates to \"concealment of God\"?",
      "Choices": ["Kadmiel", "Asbeel", "Asael", "Sathariel"],
      "Answer": "Sathariel"
    },
    {
      "Question": "Which angel's name translates to \"convert\"?",
      "Choices": ["Jeremiel", "Nathanael", "Schrewniel", "Af"],
      "Answer": "Schrewniel"
    },
    {
      "Question": "Which angel's name translates to \"prince of the face\"?",
      "Choices": ["Adnai", "Zahariel", "Serpanim", "Nathanael"],
      "Answer": "Serpanim"
    },
    {
      "Question": "Which angel's name translates to \"light of day\"?",
      "Choices": ["Harbonah", "Zahariel", "Suruph", "Shamsiel"],
      "Answer": "Shamsiel"
    },
    {
      "Question": "Which angel's name translates to \"strength of God\"?",
      "Choices": ["Gabriel", "Adnai", "Yisrael", "Suruph"],
      "Answer": "Suruph"
    },
    {
      "Question": "Which angel's name translates to \"righteousness of God\"?",
      "Choices": ["Ketheriel", "Mashith", "Nathanael", "Tadhiel"],
      "Answer": "Tadhiel"
    },
    {
      "Question": "Which angel's name translates to \"God nourishes\"?",
      "Choices": ["Tarfiel", "Asariel", "Zophiel", "Asiel"],
      "Answer": "Tarfiel"
    },
    {
      "Question": "Which angel's name translates to \"brilliant ones\"?",
      "Choices": ["Malakim", "Tarfiel", "Pusiel", "Tarshishim"],
      "Answer": "Tarshishim"
    },
    {
      "Question": "Which angel's name translates to \"keeper of Hell\"?",
      "Choices": ["Tartaruchus", "Ophis", "Jabniel", "Peniel"],
      "Answer": "Tartaruchus"
    },
    {
      "Question": "Which angel's name translates to \"rock of God\"?",
      "Choices": ["Armasa", "Adnai", "Turel", "Zelebsel"],
      "Answer": "Turel"
    },
    {
      "Question": "Which angel's name translates to \"fire of God\"?",
      "Choices": ["Zahariel", "Adrael", "Uriel", "Elimelech"],
      "Answer": "Uriel"
    },
    {
      "Question": "Which angel's name translates to \"princehood and strength\"?",
      "Choices": ["Zophiel", "Yisrael", "Nathanael", "Pusiel"],
      "Answer": "Yisrael"
    },
    {
      "Question": "Which angel's name translates to \"princehood\"?",
      "Choices": ["Mehuman", "Adriel", "YIzriel", "Michael"],
      "Answer": "YIzriel"
    },
    {
      "Question": "Which angel's name translates to \"brightness\"?",
      "Choices": ["Sathariel", "Zazriel", "Zahariel", "Armasa"],
      "Answer": "Zahariel"
    },
    {
      "Question": "Which angel's name translates to \"merit-God\"?",
      "Choices": ["Germael", "Zakzakiel", "Archons", "Tarshishim"],
      "Answer": "Zakzakiel"
    },
    {
      "Question": "Which angel's name translates to \"heart of God\"?",
      "Choices": ["Kushiel", "Af", "Zalbesael", "Jeremiel"],
      "Answer": "Zalbesael"
    },
    {
      "Question": "Which angel's name translates to \"strength of God\"?",
      "Choices": ["Zazriel", "Keel", "Adnai", "Raamicl"],
      "Answer": "Zazriel"
    },
    {
      "Question": "Which angel's name translates to \"habitation\"?",
      "Choices": ["Penemue", "He’el", "Zebul", "Zahariel"],
      "Answer": "Zebul"
    },
    {
      "Question": "Which angel's name translates to \"Jehovah remembers\"?",
      "Choices": ["Ansiel", "Zechariel", "Haziel", "Af"],
      "Answer": "Zechariel"
    },
    {
      "Question": "Which angel's name translates to \"this one sets free\"?",
      "Choices": ["Emmanuel", "Zebul", "Zehanpuryu’h", "Turel"],
      "Answer": "Zehanpuryu’h"
    },
    {
      "Question": "Which angel's name translates to \"heart of God\"?",
      "Choices": ["Pusiel", "Aariel", "Zotiel", "Zelebsel"],
      "Answer": "Zelebsel"
    },
    {
      "Question": "Which angel's name translates to \"a looking out\"?",
      "Choices": ["Mahariel", "Zalbesael", "Zephon", "Elimelech"],
      "Answer": "Zephon"
    },
    {
      "Question": "Which angel's name translates to \"splendor\"?",
      "Choices": ["Makatiel", "Zohar", "Mahariel", "Af"],
      "Answer": "Zohar"
    },
    {
      "Question": "Which angel's name translates to \"God’s spy\"?",
      "Choices": ["Ophis", "Zophiel", "Serpanim", "Zehanpuryu’h"],
      "Answer": "Zophiel"
    },
    {
      "Question": "Which angel's name translates to \"little one of God\"?",
      "Choices": ["Chamuel", "Zotiel", "Uriel", "Peniel"],
      "Answer": "Zotiel"
    },
    {
      "Question": "Which angel's name translates to \"my rock is God\"?",
      "Choices": ["He’el", "Zuriel", "Achaiah", "Neriah"],
      "Answer": "Zuriel"
    },
    {
      "Question": "Which angel's name translates to \"rigid one of God\"?",
      "Choices": ["Ithuriel", "Nathanael", "Bethuael", "Kushiel"],
      "Answer": "Kushiel"
    },
    {
      "Question": "Which angel's name translates to \"flaming one of God\"?",
      "Choices": ["Mehuman", "Tarshishim", "Schrewniel", "Lahatiel"],
      "Answer": "Lahatiel"
    },
    {
      "Question": "Which angel's name translates to \"judge of God\"?",
      "Choices": ["Ahiel", "Pachdiel", "Araphiel", "Shoftiel"],
      "Answer": "Shoftiel"
    },
    {
      "Question": "Which angel's name translates to \"plague of God\"?",
      "Choices": ["Makatiel", "Atuniel", "Berekeel", "Shamsiel"],
      "Answer": "Makatiel"
    },
    {
      "Question": "Which angel's name translates to \"rod of God\"?",
      "Choices": ["Hutriel", "Tarfiel", "Rogziel", "Adrael"],
      "Answer": "Hutriel"
    },
    {
      "Question": "Which angel's name translates to \"fire of God\"?",
      "Choices": ["Hananiel", "Mupiel", "Pusiel", "Atuniel"],
      "Answer": "Pusiel"
    },
    {
      "Question": "Which angel's name translates to \"wrath of God\"?",
      "Choices": ["Mehuman", "Rogziel", "Zechariel", "Gabriel"],
      "Answer": "Rogziel"
    }
  ],
  []]


  //#endregion
  //#region Demons
  var DemonsQuestions = [[
    {
      "Question": "Which demon possesses the title of \"the light bringer\"?",
      "Choices": ["Dantalion", "Azazel", "Lucifer", "Astaroth"],
      "Answer": "Lucifer"
    },
    {
      "Question": "Which demon's name translates to \"scapegoat\"?",
      "Choices": ["Dantalion", "Azazel", "Vassago", "Marbas"],
      "Answer": "Azazel"
    }
  ],[
    {
      "Question": "According to the Ars Goetia, what rank is Bael?",
      "Choices": ["Marquis", "King", "Duke", "Prince"],
      "Answer": "King"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Agares?",
      "Choices": ["Marquis", "Duke", "Prince", "King"],
      "Answer": "Duke"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Vassago?",
      "Choices": ["King", "Prince", "President", "Earl"],
      "Answer": "Prince"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Gamigin?",
      "Choices": ["Marquis", "Duke", "Earl", "Prince"],
      "Answer": "Marquis"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Marbas?",
      "Choices": ["President", "Earl", "Marquis", "Duke"],
      "Answer": "President"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Valefar?",
      "Choices": ["Duke", "Prince", "King", "Marquis"],
      "Answer": "Duke"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Amon?",
      "Choices": ["Marquis", "Duke", "Earl", "President"],
      "Answer": "Marquis"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Barbatos?",
      "Choices": ["King", "President", "Earl", "Duke"],
      "Answer": "Duke"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Paimon?",
      "Choices": ["King", "Marquis", "Earl", "Duke"],
      "Answer": "King"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Buer?",
      "Choices": ["King", "Prince", "President", "Duke"],
      "Answer": "President"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Gusoin?",
      "Choices": ["King", "Duke", "Prince", "Earl"],
      "Answer": "Duke"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Sitri?",
      "Choices": ["King", "Earl", "Prince", "Duke"],
      "Answer": "Prince"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Beleth?",
      "Choices": ["King", "Duke", "Earl", "President"],
      "Answer": "King"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Leraje?",
      "Choices": ["Marquis", "President", "Prince", "Earl"],
      "Answer": "Marquis"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Eligos?",
      "Choices": ["King", "President", "Duke", "Marquis"],
      "Answer": "Duke"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Zepar?",
      "Choices": ["Prince", "Duke", "Earl", "President"],
      "Answer": "Duke"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Botis?",
      "Choices": ["Earl", "Duke", "King", "Marquis"],
      "Answer": "Earl"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Bathin?",
      "Choices": ["Earl", "Prince", "Duke", "King"],
      "Answer": "Duke"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Sallos?",
      "Choices": ["Earl", "Duke", "King", "President"],
      "Answer": "Duke"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Purson?",
      "Choices": ["King", "Prince", "Earl", "Duke"],
      "Answer": "King"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Marax?",
      "Choices": ["Marquis", "King", "Prince", "Earl"],
      "Answer": "Earl"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Ipos?",
      "Choices": ["Prince", "Earl", "President", "Duke"],
      "Answer": "Prince"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Aim?",
      "Choices": ["Prince", "Duke", "Earl", "President"],
      "Answer": "Duke"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Naberius?",
      "Choices": ["President", "Earl", "King", "Marquis"],
      "Answer": "Marquis"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Glasyalabolas?",
      "Choices": ["Prince", "President", "Earl", "King"],
      "Answer": "President"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Bime?",
      "Choices": ["Marquis", "President", "Duke", "Prince"],
      "Answer": "Duke"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Ronove?",
      "Choices": ["Duke", "Marquis", "King", "Prince"],
      "Answer": "Marquis"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Berith?",
      "Choices": ["King", "Prince", "Earl", "Duke"],
      "Answer": "Duke"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Astaroth?",
      "Choices": ["Earl", "Prince", "Marquis", "King"],
      "Answer": "King"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Forneus?",
      "Choices": ["Marquis", "Prince", "Duke", "President"],
      "Answer": "Marquis"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Foras?",
      "Choices": ["King", "President", "Prince", "Marquis"],
      "Answer": "President"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Asmodai?",
      "Choices": ["Marquis", "Duke", "Earl", "King"],
      "Answer": "King"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Gaap?",
      "Choices": ["King", "President", "Duke", "Prince"],
      "Answer": "Prince"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Furfur?",
      "Choices": ["Duke", "Marquis", "President", "Earl"],
      "Answer": "Earl"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Marchosias?",
      "Choices": ["Marquis", "Prince", "President", "Earl"],
      "Answer": "Marquis"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Stolas?",
      "Choices": ["President", "Earl", "Marquis", "Prince"],
      "Answer": "Prince"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Phenix?",
      "Choices": ["Duke", "King", "Earl", "Marquis"],
      "Answer": "Marquis"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Halphas?",
      "Choices": ["Marquis", "Prince", "King", "Earl"],
      "Answer": "Earl"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Malphas?",
      "Choices": ["Earl", "King", "President", "Prince"],
      "Answer": "President"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Raum?",
      "Choices": ["Duke", "Earl", "King", "Prince"],
      "Answer": "Earl"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Forcalor?",
      "Choices": ["President", "Marquis", "King", "Duke"],
      "Answer": "Duke"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Vepar?",
      "Choices": ["King", "President", "Duke", "Earl"],
      "Answer": "Duke"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Sabnock?",
      "Choices": ["King", "Prince", "Marquis", "Earl"],
      "Answer": "Marquis"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Shax?",
      "Choices": ["Marquis", "King", "President", "Earl"],
      "Answer": "Marquis"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Vine?",
      "Choices": ["King", "Prince", "Marquis", "Duke"],
      "Answer": "King"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Bifrons?",
      "Choices": ["Marquis", "Earl", "King", "President"],
      "Answer": "Earl"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Vuall?",
      "Choices": ["Duke", "President", "King", "Earl"],
      "Answer": "Duke"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Haagenti?",
      "Choices": ["President", "Earl", "Prince", "Duke"],
      "Answer": "President"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Crocell?",
      "Choices": ["Earl", "Duke", "President", "Prince"],
      "Answer": "Duke"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Furcas?",
      "Choices": ["Knight", "King", "Earl", "Marquis"],
      "Answer": "Knight"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Balam?",
      "Choices": ["Duke", "President", "Marquis", "King"],
      "Answer": "King"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Alloces?",
      "Choices": ["Marquis", "President", "Duke", "Prince"],
      "Answer": "Duke"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Camio?",
      "Choices": ["Earl", "Marquis", "Duke", "President"],
      "Answer": "President"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Murmus?",
      "Choices": ["King", "Marquis", "Prince", "Duke"],
      "Answer": "Duke"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Orobas?",
      "Choices": ["Prince", "King", "Marquis", "President"],
      "Answer": "Prince"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Gremori?",
      "Choices": ["Earl", "Duke", "King", "Prince"],
      "Answer": "Duke"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Ose?",
      "Choices": ["Earl", "Marquis", "King", "President"],
      "Answer": "President"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Auns?",
      "Choices": ["Marquis", "President", "King", "Prince"],
      "Answer": "President"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Orias?",
      "Choices": ["Prince", "President", "Earl", "Marquis"],
      "Answer": "Marquis"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Vapula?",
      "Choices": ["Duke", "King", "Prince", "Marquis"],
      "Answer": "Duke"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Zagan?",
      "Choices": ["King", "Earl", "Marquis", "Prince"],
      "Answer": "King"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Valac?",
      "Choices": ["King", "President", "Marquis", "Duke"],
      "Answer": "President"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Andras?",
      "Choices": ["Duke", "Marquis", "King", "Earl"],
      "Answer": "Marquis"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Haures?",
      "Choices": ["King", "Marquis", "Duke", "Prince"],
      "Answer": "Duke"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Andrealphus?",
      "Choices": ["King", "Earl", "President", "Marquis"],
      "Answer": "Marquis"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Cimeries?",
      "Choices": ["Duke", "Prince", "Marquis", "King"],
      "Answer": "Marquis"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Amducias?",
      "Choices": ["Duke", "King", "Earl", "Marquis"],
      "Answer": "Duke"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Belial?",
      "Choices": ["Marquis", "President", "Duke", "King"],
      "Answer": "King"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Decarabia?",
      "Choices": ["King", "Marquis", "Prince", "Duke"],
      "Answer": "Marquis"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Seer?",
      "Choices": ["Duke", "Marquis", "Prince", "King"],
      "Answer": "Prince"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Dantalion?",
      "Choices": ["King", "Earl", "Prince", "Duke"],
      "Answer": "Duke"
    },
    {
      "Question": "According to the Ars Goetia, what rank is Andromalius?",
      "Choices": ["Marquis", "Prince", "Earl", "King"],
      "Answer": "Earl"
    },
    {
      "Question": "What planet is King Bael commonly associated with?",
      "Choices": ["Moon", "Mars", "Venus", "Sun"],
      "Answer": "Sun"
    },
    {
      "Question": "What planet is Duke Agares commonly associated with?",
      "Choices": ["Venus", "Mars", "Jupiter", "Moon"],
      "Answer": "Venus"
    },
    {
      "Question": "What planet is Prince Vassago commonly associated with?",
      "Choices": ["Sun", "Jupiter", "Moon", "Mars"],
      "Answer": "Jupiter"
    },
    {
      "Question": "What planet is Marquis Gamigin commonly associated with?",
      "Choices": ["Venus", "Jupiter", "Moon", "Mercury"],
      "Answer": "Moon"
    },
    {
      "Question": "What planet is President Marbas commonly associated with?",
      "Choices": ["Jupiter", "Mercury", "Sun", "Moon"],
      "Answer": "Mercury"
    },
    {
      "Question": "What planet is Duke Valefar commonly associated with?",
      "Choices": ["Jupiter", "Venus", "Mercury", "Mars"],
      "Answer": "Venus"
    },
    {
      "Question": "What planet is Marquis Amon commonly associated with?",
      "Choices": ["Sun", "Venus", "Moon", "Mars"],
      "Answer": "Moon"
    },
    {
      "Question": "What planet is Duke Barbatos commonly associated with?",
      "Choices": ["Mars", "Sun", "Venus", "Moon"],
      "Answer": "Venus"
    },
    {
      "Question": "What planet is King Paimon commonly associated with?",
      "Choices": ["Moon", "Sun", "Jupiter", "Mars"],
      "Answer": "Sun"
    },
    {
      "Question": "What planet is President Buer commonly associated with?",
      "Choices": ["Mercury", "Mars", "Sun", "Moon"],
      "Answer": "Mercury"
    },
    {
      "Question": "What planet is Duke Gusoin commonly associated with?",
      "Choices": ["Moon", "Sun", "Mars", "Venus"],
      "Answer": "Venus"
    },
    {
      "Question": "What planet is Prince Sitri commonly associated with?",
      "Choices": ["Mars", "Sun", "Moon", "Jupiter"],
      "Answer": "Jupiter"
    },
    {
      "Question": "What planet is King Beleth commonly associated with?",
      "Choices": ["Jupiter", "Sun", "Moon", "Venus"],
      "Answer": "Sun"
    },
    {
      "Question": "What planet is Marquis Leraje commonly associated with?",
      "Choices": ["Sun", "Jupiter", "Venus", "Moon"],
      "Answer": "Moon"
    },
    {
      "Question": "What planet is Duke Eligos commonly associated with?",
      "Choices": ["Jupiter", "Sun", "Moon", "Venus"],
      "Answer": "Venus"
    },
    {
      "Question": "What planet is Duke Zepar commonly associated with?",
      "Choices": ["Mercury", "Mars", "Venus", "Sun"],
      "Answer": "Venus"
    },
    {
      "Question": "What planet is Earl Botis commonly associated with?",
      "Choices": ["Mercury", "Mars", "Venus", "Moon"],
      "Answer": "Mars"
    },
    {
      "Question": "What planet is Duke Bathin commonly associated with?",
      "Choices": ["Venus", "Mercury", "Jupiter", "Moon"],
      "Answer": "Venus"
    },
    {
      "Question": "What planet is Duke Sallos commonly associated with?",
      "Choices": ["Venus", "Sun", "Jupiter", "Mercury"],
      "Answer": "Venus"
    },
    {
      "Question": "What planet is King Purson commonly associated with?",
      "Choices": ["Jupiter", "Venus", "Mars", "Sun"],
      "Answer": "Sun"
    },
    {
      "Question": "What planet is Earl Marax commonly associated with?",
      "Choices": ["Moon", "Jupiter", "Mars", "Venus"],
      "Answer": "Mars"
    },
    {
      "Question": "What planet is Prince Ipos commonly associated with?",
      "Choices": ["Sun", "Mercury", "Venus", "Jupiter"],
      "Answer": "Jupiter"
    },
    {
      "Question": "What planet is Duke Aim commonly associated with?",
      "Choices": ["Jupiter", "Mars", "Sun", "Venus"],
      "Answer": "Venus"
    },
    {
      "Question": "What planet is Marquis Naberius commonly associated with?",
      "Choices": ["Mercury", "Venus", "Moon", "Sun"],
      "Answer": "Moon"
    },
    {
      "Question": "What planet is President Glasyalabolas commonly associated with?",
      "Choices": ["Mercury", "Jupiter", "Mars", "Venus"],
      "Answer": "Mercury"
    },
    {
      "Question": "What planet is Duke Bime commonly associated with?",
      "Choices": ["Sun", "Mars", "Moon", "Venus"],
      "Answer": "Venus"
    },
    {
      "Question": "What planet is Marquis Ronove commonly associated with?",
      "Choices": ["Jupiter", "Sun", "Mercury", "Moon"],
      "Answer": "Moon"
    },
    {
      "Question": "What planet is Duke Berith commonly associated with?",
      "Choices": ["Moon", "Mercury", "Sun", "Venus"],
      "Answer": "Venus"
    },
    {
      "Question": "What planet is King Astaroth commonly associated with?",
      "Choices": ["Venus", "Jupiter", "Sun", "Mercury"],
      "Answer": "Sun"
    },
    {
      "Question": "What planet is Marquis Forneus commonly associated with?",
      "Choices": ["Sun", "Moon", "Mercury", "Jupiter"],
      "Answer": "Moon"
    },
    {
      "Question": "What planet is President Foras commonly associated with?",
      "Choices": ["Venus", "Mercury", "Jupiter", "Sun"],
      "Answer": "Mercury"
    },
    {
      "Question": "What planet is King Asmodai commonly associated with?",
      "Choices": ["Mercury", "Sun", "Venus", "Moon"],
      "Answer": "Sun"
    },
    {
      "Question": "What planet is Prince Gaap commonly associated with?",
      "Choices": ["Moon", "Mercury", "Jupiter", "Mars"],
      "Answer": "Jupiter"
    },
    {
      "Question": "What planet is Earl Furfur commonly associated with?",
      "Choices": ["Moon", "Mars", "Sun", "Jupiter"],
      "Answer": "Mars"
    },
    {
      "Question": "What planet is Marquis Marchosias commonly associated with?",
      "Choices": ["Mercury", "Moon", "Mars", "Jupiter"],
      "Answer": "Moon"
    },
    {
      "Question": "What planet is Prince Stolas commonly associated with?",
      "Choices": ["Mercury", "Sun", "Moon", "Jupiter"],
      "Answer": "Jupiter"
    },
    {
      "Question": "What planet is Marquis Phenix commonly associated with?",
      "Choices": ["Moon", "Sun", "Venus", "Jupiter"],
      "Answer": "Moon"
    },
    {
      "Question": "What planet is Earl Halphas commonly associated with?",
      "Choices": ["Mars", "Venus", "Sun", "Moon"],
      "Answer": "Mars"
    },
    {
      "Question": "What planet is President Malphas commonly associated with?",
      "Choices": ["Moon", "Mercury", "Jupiter", "Mars"],
      "Answer": "Mercury"
    },
    {
      "Question": "What planet is Earl Raum commonly associated with?",
      "Choices": ["Mars", "Jupiter", "Sun", "Moon"],
      "Answer": "Mars"
    },
    {
      "Question": "What planet is Duke Forcalor commonly associated with?",
      "Choices": ["Mars", "Venus", "Moon", "Sun"],
      "Answer": "Venus"
    },
    {
      "Question": "What planet is Duke Vepar commonly associated with?",
      "Choices": ["Mercury", "Mars", "Jupiter", "Venus"],
      "Answer": "Venus"
    },
    {
      "Question": "What planet is Marquis Sabnock commonly associated with?",
      "Choices": ["Moon", "Jupiter", "Mercury", "Sun"],
      "Answer": "Moon"
    },
    {
      "Question": "What planet is Marquis Shax commonly associated with?",
      "Choices": ["Mercury", "Moon", "Mars", "Jupiter"],
      "Answer": "Moon"
    },
    {
      "Question": "What planet is King Vine commonly associated with?",
      "Choices": ["Venus", "Sun", "Mercury", "Jupiter"],
      "Answer": "Sun"
    },
    {
      "Question": "What planet is Earl Bifrons commonly associated with?",
      "Choices": ["Sun", "Jupiter", "Mars", "Mercury"],
      "Answer": "Mars"
    },
    {
      "Question": "What planet is Duke Vuall commonly associated with?",
      "Choices": ["Mars", "Venus", "Sun", "Moon"],
      "Answer": "Venus"
    },
    {
      "Question": "What planet is President Haagenti commonly associated with?",
      "Choices": ["Jupiter", "Mars", "Venus", "Mercury"],
      "Answer": "Mercury"
    },
    {
      "Question": "What planet is Duke Crocell commonly associated with?",
      "Choices": ["Mercury", "Jupiter", "Venus", "Moon"],
      "Answer": "Venus"
    },
    {
      "Question": "What planet is Knight Furcas commonly associated with?",
      "Choices": ["Saturn", "Sun", "Venus", "Moon"],
      "Answer": "Saturn"
    },
    {
      "Question": "What planet is King Balam commonly associated with?",
      "Choices": ["Mercury", "Moon", "Mars", "Sun"],
      "Answer": "Sun"
    },
    {
      "Question": "What planet is Duke Alloces commonly associated with?",
      "Choices": ["Moon", "Mars", "Venus", "Jupiter"],
      "Answer": "Venus"
    },
    {
      "Question": "What planet is President Camio commonly associated with?",
      "Choices": ["Jupiter", "Sun", "Mars", "Mercury"],
      "Answer": "Mercury"
    },
    {
      "Question": "What planet is Duke Murmus commonly associated with?",
      "Choices": ["Venus", "Moon", "Mars", "Sun"],
      "Answer": "Venus"
    },
    {
      "Question": "What planet is Prince Orobas commonly associated with?",
      "Choices": ["Mars", "Jupiter", "Moon", "Sun"],
      "Answer": "Jupiter"
    },
    {
      "Question": "What planet is Duke Gremori commonly associated with?",
      "Choices": ["Mercury", "Venus", "Sun", "Mars"],
      "Answer": "Venus"
    },
    {
      "Question": "What planet is President Ose commonly associated with?",
      "Choices": ["Mercury", "Sun", "Venus", "Moon"],
      "Answer": "Mercury"
    },
    {
      "Question": "What planet is President Auns commonly associated with?",
      "Choices": ["Venus", "Mars", "Sun", "Mercury"],
      "Answer": "Mercury"
    },
    {
      "Question": "What planet is Marquis Orias commonly associated with?",
      "Choices": ["Moon", "Jupiter", "Mercury", "Venus"],
      "Answer": "Moon"
    },
    {
      "Question": "What planet is Duke Vapula commonly associated with?",
      "Choices": ["Venus", "Moon", "Mercury", "Mars"],
      "Answer": "Venus"
    },
    {
      "Question": "What planet is King Zagan commonly associated with?",
      "Choices": ["Mars", "Sun", "Venus", "Mercury"],
      "Answer": "Sun"
    },
    {
      "Question": "What planet is President Valac commonly associated with?",
      "Choices": ["Mercury", "Sun", "Venus", "Mars"],
      "Answer": "Mercury"
    },
    {
      "Question": "What planet is Marquis Andras commonly associated with?",
      "Choices": ["Venus", "Jupiter", "Moon", "Mercury"],
      "Answer": "Moon"
    },
    {
      "Question": "What planet is Duke Haures commonly associated with?",
      "Choices": ["Venus", "Jupiter", "Mars", "Moon"],
      "Answer": "Venus"
    },
    {
      "Question": "What planet is Marquis Andrealphus commonly associated with?",
      "Choices": ["Jupiter", "Sun", "Moon", "Venus"],
      "Answer": "Moon"
    },
    {
      "Question": "What planet is Marquis Cimeries commonly associated with?",
      "Choices": ["Moon", "Mars", "Jupiter", "Mercury"],
      "Answer": "Moon"
    },
    {
      "Question": "What planet is Duke Amducias commonly associated with?",
      "Choices": ["Sun", "Jupiter", "Moon", "Venus"],
      "Answer": "Venus"
    },
    {
      "Question": "What planet is King Belial commonly associated with?",
      "Choices": ["Venus", "Mercury", "Sun", "Jupiter"],
      "Answer": "Sun"
    },
    {
      "Question": "What planet is Marquis Decarabia commonly associated with?",
      "Choices": ["Moon", "Sun", "Venus", "Jupiter"],
      "Answer": "Moon"
    },
    {
      "Question": "What planet is Prince Seer commonly associated with?",
      "Choices": ["Jupiter", "Moon", "Venus", "Mercury"],
      "Answer": "Jupiter"
    },
    {
      "Question": "What planet is Duke Dantalion commonly associated with?",
      "Choices": ["Sun", "Moon", "Mercury", "Venus"],
      "Answer": "Venus"
    },
    {
      "Question": "What planet is Earl Andromalius commonly associated with?",
      "Choices": ["Mars", "Moon", "Mercury", "Venus"],
      "Answer": "Mars"
    },
    {
      "Question": "What element is King Bael commonly associated with?",
      "Choices": ["Earth", "Air", "Fire", "Water"],
      "Answer": "Fire"
    },
    {
      "Question": "What element is Duke Agares commonly associated with?",
      "Choices": ["Earth", "Water", "Fire", "Air"],
      "Answer": "Fire"
    },
    {
      "Question": "What element is Prince Vassago commonly associated with?",
      "Choices": ["Water", "Earth", "Fire", "Air"],
      "Answer": "Fire"
    },
    {
      "Question": "What element is Marquis Gamigin commonly associated with?",
      "Choices": ["Air", "Earth", "Water", "Fire"],
      "Answer": "Fire"
    },
    {
      "Question": "What element is President Marbas commonly associated with?",
      "Choices": ["Earth", "Air", "Fire", "Water"],
      "Answer": "Fire"
    },
    {
      "Question": "What element is Duke Valefar commonly associated with?",
      "Choices": ["Air", "Fire", "Water", "Earth"],
      "Answer": "Fire"
    },
    {
      "Question": "What element is Marquis Amon commonly associated with?",
      "Choices": ["Earth", "Fire", "Water", "Air"],
      "Answer": "Earth"
    },
    {
      "Question": "What element is Duke Barbatos commonly associated with?",
      "Choices": ["Water", "Fire", "Air", "Earth"],
      "Answer": "Earth"
    },
    {
      "Question": "What element is King Paimon commonly associated with?",
      "Choices": ["Fire", "Earth", "Air", "Water"],
      "Answer": "Earth"
    },
    {
      "Question": "What element is President Buer commonly associated with?",
      "Choices": ["Fire", "Air", "Water", "Earth"],
      "Answer": "Earth"
    },
    {
      "Question": "What element is Duke Gusoin commonly associated with?",
      "Choices": ["Water", "Air", "Earth", "Fire"],
      "Answer": "Earth"
    },
    {
      "Question": "What element is Prince Sitri commonly associated with?",
      "Choices": ["Fire", "Water", "Air", "Earth"],
      "Answer": "Earth"
    },
    {
      "Question": "What element is King Beleth commonly associated with?",
      "Choices": ["Fire", "Air", "Earth", "Water"],
      "Answer": "Air"
    },
    {
      "Question": "What element is Marquis Leraje commonly associated with?",
      "Choices": ["Fire", "Air", "Water", "Earth"],
      "Answer": "Air"
    },
    {
      "Question": "What element is Duke Eligos commonly associated with?",
      "Choices": ["Air", "Fire", "Earth", "Water"],
      "Answer": "Air"
    },
    {
      "Question": "What element is Duke Zepar commonly associated with?",
      "Choices": ["Earth", "Air", "Fire", "Water"],
      "Answer": "Air"
    },
    {
      "Question": "What element is Earl Botis commonly associated with?",
      "Choices": ["Air", "Earth", "Fire", "Water"],
      "Answer": "Air"
    },
    {
      "Question": "What element is Duke Bathin commonly associated with?",
      "Choices": ["Water", "Fire", "Air", "Earth"],
      "Answer": "Air"
    },
    {
      "Question": "What element is Duke Sallos commonly associated with?",
      "Choices": ["Air", "Fire", "Water", "Earth"],
      "Answer": "Water"
    },
    {
      "Question": "What element is King Purson commonly associated with?",
      "Choices": ["Air", "Fire", "Earth", "Water"],
      "Answer": "Water"
    },
    {
      "Question": "What element is Earl Marax commonly associated with?",
      "Choices": ["Fire", "Air", "Earth", "Water"],
      "Answer": "Water"
    },
    {
      "Question": "What element is Prince Ipos commonly associated with?",
      "Choices": ["Water", "Air", "Fire", "Earth"],
      "Answer": "Water"
    },
    {
      "Question": "What element is Duke Aim commonly associated with?",
      "Choices": ["Air", "Fire", "Water", "Earth"],
      "Answer": "Water"
    },
    {
      "Question": "What element is Marquis Naberius commonly associated with?",
      "Choices": ["Fire", "Air", "Earth", "Water"],
      "Answer": "Water"
    },
    {
      "Question": "What element is President Glasyalabolas commonly associated with?",
      "Choices": ["Air", "Water", "Fire", "Earth"],
      "Answer": "Fire"
    },
    {
      "Question": "What element is Duke Bime commonly associated with?",
      "Choices": ["Earth", "Water", "Fire", "Air"],
      "Answer": "Fire"
    },
    {
      "Question": "What element is Marquis Ronove commonly associated with?",
      "Choices": ["Earth", "Air", "Water", "Fire"],
      "Answer": "Fire"
    },
    {
      "Question": "What element is Duke Berith commonly associated with?",
      "Choices": ["Water", "Air", "Fire", "Earth"],
      "Answer": "Fire"
    },
    {
      "Question": "What element is King Astaroth commonly associated with?",
      "Choices": ["Earth", "Water", "Air", "Fire"],
      "Answer": "Fire"
    },
    {
      "Question": "What element is Marquis Forneus commonly associated with?",
      "Choices": ["Fire", "Air", "Earth", "Water"],
      "Answer": "Fire"
    },
    {
      "Question": "What element is President Foras commonly associated with?",
      "Choices": ["Air", "Fire", "Water", "Earth"],
      "Answer": "Earth"
    },
    {
      "Question": "What element is King Asmodai commonly associated with?",
      "Choices": ["Fire", "Earth", "Water", "Air"],
      "Answer": "Earth"
    },
    {
      "Question": "What element is Prince Gaap commonly associated with?",
      "Choices": ["Fire", "Water", "Earth", "Air"],
      "Answer": "Earth"
    },
    {
      "Question": "What element is Earl Furfur commonly associated with?",
      "Choices": ["Earth", "Fire", "Air", "Water"],
      "Answer": "Earth"
    },
    {
      "Question": "What element is Marquis Marchosias commonly associated with?",
      "Choices": ["Fire", "Earth", "Water", "Air"],
      "Answer": "Earth"
    },
    {
      "Question": "What element is Prince Stolas commonly associated with?",
      "Choices": ["Earth", "Fire", "Air", "Water"],
      "Answer": "Earth"
    },
    {
      "Question": "What element is Marquis Phenix commonly associated with?",
      "Choices": ["Fire", "Water", "Air", "Earth"],
      "Answer": "Air"
    },
    {
      "Question": "What element is Earl Halphas commonly associated with?",
      "Choices": ["Air", "Water", "Earth", "Fire"],
      "Answer": "Air"
    },
    {
      "Question": "What element is President Malphas commonly associated with?",
      "Choices": ["Fire", "Earth", "Water", "Air"],
      "Answer": "Air"
    },
    {
      "Question": "What element is Earl Raum commonly associated with?",
      "Choices": ["Earth", "Water", "Air", "Fire"],
      "Answer": "Air"
    },
    {
      "Question": "What element is Duke Forcalor commonly associated with?",
      "Choices": ["Fire", "Earth", "Water", "Air"],
      "Answer": "Air"
    },
    {
      "Question": "What element is Duke Vepar commonly associated with?",
      "Choices": ["Earth", "Water", "Fire", "Air"],
      "Answer": "Air"
    },
    {
      "Question": "What element is Marquis Sabnock commonly associated with?",
      "Choices": ["Earth", "Water", "Fire", "Air"],
      "Answer": "Water"
    },
    {
      "Question": "What element is Marquis Shax commonly associated with?",
      "Choices": ["Air", "Water", "Fire", "Earth"],
      "Answer": "Water"
    },
    {
      "Question": "What element is King Vine commonly associated with?",
      "Choices": ["Air", "Earth", "Water", "Fire"],
      "Answer": "Fire"
    },
    {
      "Question": "What element is Earl Bifrons commonly associated with?",
      "Choices": ["Fire", "Water", "Earth", "Air"],
      "Answer": "Water"
    },
    {
      "Question": "What element is Duke Vuall commonly associated with?",
      "Choices": ["Water", "Earth", "Air", "Fire"],
      "Answer": "Water"
    },
    {
      "Question": "What element is President Haagenti commonly associated with?",
      "Choices": ["Air", "Fire", "Earth", "Water"],
      "Answer": "Water"
    },
    {
      "Question": "What element is Duke Crocell commonly associated with?",
      "Choices": ["Water", "Earth", "Air", "Fire"],
      "Answer": "Fire"
    },
    {
      "Question": "What element is Knight Furcas commonly associated with?",
      "Choices": ["Air", "Water", "Earth", "Fire"],
      "Answer": "Fire"
    },
    {
      "Question": "What element is King Balam commonly associated with?",
      "Choices": ["Water", "Air", "Earth", "Fire"],
      "Answer": "Fire"
    },
    {
      "Question": "What element is Duke Alloces commonly associated with?",
      "Choices": ["Fire", "Water", "Air", "Earth"],
      "Answer": "Fire"
    },
    {
      "Question": "What element is President Camio commonly associated with?",
      "Choices": ["Air", "Water", "Fire", "Earth"],
      "Answer": "Fire"
    },
    {
      "Question": "What element is Duke Murmus commonly associated with?",
      "Choices": ["Earth", "Fire", "Water", "Air"],
      "Answer": "Fire"
    },
    {
      "Question": "What element is Prince Orobas commonly associated with?",
      "Choices": ["Water", "Air", "Fire", "Earth"],
      "Answer": "Earth"
    },
    {
      "Question": "What element is Duke Gremori commonly associated with?",
      "Choices": ["Earth", "Fire", "Water", "Air"],
      "Answer": "Earth"
    },
    {
      "Question": "What element is President Ose commonly associated with?",
      "Choices": ["Air", "Earth", "Fire", "Water"],
      "Answer": "Earth"
    },
    {
      "Question": "What element is President Auns commonly associated with?",
      "Choices": ["Water", "Earth", "Fire", "Air"],
      "Answer": "Earth"
    },
    {
      "Question": "What element is Marquis Orias commonly associated with?",
      "Choices": ["Water", "Earth", "Fire", "Air"],
      "Answer": "Earth"
    },
    {
      "Question": "What element is Duke Vapula commonly associated with?",
      "Choices": ["Air", "Earth", "Fire", "Water"],
      "Answer": "Earth"
    },
    {
      "Question": "What element is King Zagan commonly associated with?",
      "Choices": ["Fire", "Water", "Air", "Earth"],
      "Answer": "Air"
    },
    {
      "Question": "What element is President Valac commonly associated with?",
      "Choices": ["Air", "Fire", "Earth", "Water"],
      "Answer": "Air"
    },
    {
      "Question": "What element is Marquis Andras commonly associated with?",
      "Choices": ["Water", "Earth", "Fire", "Air"],
      "Answer": "Air"
    },
    {
      "Question": "What element is Duke Haures commonly associated with?",
      "Choices": ["Water", "Earth", "Air", "Fire"],
      "Answer": "Air"
    },
    {
      "Question": "What element is Marquis Andrealphus commonly associated with?",
      "Choices": ["Air", "Water", "Earth", "Fire"],
      "Answer": "Air"
    },
    {
      "Question": "What element is Marquis Cimeries commonly associated with?",
      "Choices": ["Air", "Fire", "Earth", "Water"],
      "Answer": "Air"
    },
    {
      "Question": "What element is Duke Amducias commonly associated with?",
      "Choices": ["Fire", "Earth", "Water", "Air"],
      "Answer": "Water"
    },
    {
      "Question": "What element is King Belial commonly associated with?",
      "Choices": ["Water", "Earth", "Fire", "Air"],
      "Answer": "Water"
    },
    {
      "Question": "What element is Marquis Decarabia commonly associated with?",
      "Choices": ["Earth", "Fire", "Water", "Air"],
      "Answer": "Water"
    },
    {
      "Question": "What element is Prince Seer commonly associated with?",
      "Choices": ["Earth", "Fire", "Air", "Water"],
      "Answer": "Water"
    },
    {
      "Question": "What element is Duke Dantalion commonly associated with?",
      "Choices": ["Fire", "Air", "Water", "Earth"],
      "Answer": "Water"
    },
    {
      "Question": "What element is Earl Andromalius commonly associated with?",
      "Choices": ["Earth", "Fire", "Water", "Air"],
      "Answer": "Water"
    },
    {
      "Question": "What color is King Bael commonly associated with?",
      "Choices": ["Blue/Purple", "Gold/Yellow", "Blue/purple", "Red"],
      "Answer": "Gold/Yellow"
    },
    {
      "Question": "What color is Duke Agares commonly associated with?",
      "Choices": ["Green", "Silver/White", "Black", "Silver/Water"],
      "Answer": "Green"
    },
    {
      "Question": "What color is Prince Vassago commonly associated with?",
      "Choices": ["Gold/Yellow", "Silver/White", "Blue/Purple", "Blue/purple"],
      "Answer": "Blue/Purple"
    },
    {
      "Question": "What color is Marquis Gamigin commonly associated with?",
      "Choices": ["Yellow", "Silver/White", "Silver/white", "Red"],
      "Answer": "Silver/white"
    },
    {
      "Question": "What color is President Marbas commonly associated with?",
      "Choices": ["Orange", "Red", "Green", "Silver/White"],
      "Answer": "Orange"
    },
    {
      "Question": "What color is Duke Valefar commonly associated with?",
      "Choices": ["Green", "Red", "Blue/Purple", "Black"],
      "Answer": "Green"
    },
    {
      "Question": "What color is Marquis Amon commonly associated with?",
      "Choices": ["Silver/White", "Blue/Purple", "Blue/purple", "Gold/Yellow"],
      "Answer": "Silver/White"
    },
    {
      "Question": "What color is Duke Barbatos commonly associated with?",
      "Choices": ["Silver/white", "Green", "Blue/Purple", "Black/Purple"],
      "Answer": "Green"
    },
    {
      "Question": "What color is King Paimon commonly associated with?",
      "Choices": ["Blue/Purple", "Gold/Yellow", "Black/Purple", "Blue/purple"],
      "Answer": "Gold/Yellow"
    },
    {
      "Question": "What color is President Buer commonly associated with?",
      "Choices": ["Green", "Silver/Water", "Gold/Yellow", "Orange"],
      "Answer": "Orange"
    },
    {
      "Question": "What color is Duke Gusoin commonly associated with?",
      "Choices": ["Silver/white", "Gold/Yellow", "Silver/White", "Green"],
      "Answer": "Green"
    },
    {
      "Question": "What color is Prince Sitri commonly associated with?",
      "Choices": ["Blue/Purple", "Black", "Green", "Blue/purple"],
      "Answer": "Blue/purple"
    },
    {
      "Question": "What color is King Beleth commonly associated with?",
      "Choices": ["Gold/Yellow", "Orange", "Black/Purple", "Green"],
      "Answer": "Gold/Yellow"
    },
    {
      "Question": "What color is Marquis Leraje commonly associated with?",
      "Choices": ["Blue/Purple", "Silver/white", "Red", "Silver/Water"],
      "Answer": "Silver/white"
    },
    {
      "Question": "What color is Duke Eligos commonly associated with?",
      "Choices": ["Green", "Red", "Blue/purple", "Gold/Yellow"],
      "Answer": "Green"
    },
    {
      "Question": "What color is Duke Zepar commonly associated with?",
      "Choices": ["Gold/Yellow", "Green", "Silver/Water", "Black"],
      "Answer": "Green"
    },
    {
      "Question": "What color is Earl Botis commonly associated with?",
      "Choices": ["Red", "Green", "Silver/white", "Orange"],
      "Answer": "Red"
    },
    {
      "Question": "What color is Duke Bathin commonly associated with?",
      "Choices": ["Red", "Black/Purple", "Orange", "Green"],
      "Answer": "Green"
    },
    {
      "Question": "What color is Duke Sallos commonly associated with?",
      "Choices": ["Green", "Silver/White", "Blue/Purple", "Gold/Yellow"],
      "Answer": "Green"
    },
    {
      "Question": "What color is King Purson commonly associated with?",
      "Choices": ["Gold/Yellow", "Black/Purple", "Red", "Green"],
      "Answer": "Gold/Yellow"
    },
    {
      "Question": "What color is Earl Marax commonly associated with?",
      "Choices": ["Gold/Yellow", "Red", "Blue/purple", "Blue/Purple"],
      "Answer": "Red"
    },
    {
      "Question": "What color is Prince Ipos commonly associated with?",
      "Choices": ["Gold/Yellow", "Silver/white", "Yellow", "Blue/purple"],
      "Answer": "Blue/purple"
    },
    {
      "Question": "What color is Duke Aim commonly associated with?",
      "Choices": ["Green", "Black", "Gold/Yellow", "Silver/White"],
      "Answer": "Green"
    },
    {
      "Question": "What color is Marquis Naberius commonly associated with?",
      "Choices": ["Blue/Purple", "Silver/White", "Red", "Silver/white"],
      "Answer": "Silver/white"
    },
    {
      "Question": "What color is President Glasyalabolas commonly associated with?",
      "Choices": ["Blue/Purple", "Orange", "Yellow", "Silver/White"],
      "Answer": "Orange"
    },
    {
      "Question": "What color is Duke Bime commonly associated with?",
      "Choices": ["Red", "Silver/White", "Orange", "Green"],
      "Answer": "Green"
    },
    {
      "Question": "What color is Marquis Ronove commonly associated with?",
      "Choices": ["Orange", "Green", "Gold/Yellow", "Silver/white"],
      "Answer": "Silver/white"
    },
    {
      "Question": "What color is Duke Berith commonly associated with?",
      "Choices": ["Silver/White", "Blue/Purple", "Green", "Blue/purple"],
      "Answer": "Green"
    },
    {
      "Question": "What color is King Astaroth commonly associated with?",
      "Choices": ["Blue/Purple", "Gold/Yellow if King", "Silver/white", "Black/Purple"],
      "Answer": "Gold/Yellow if King"
    },
    {
      "Question": "What color is Marquis Forneus commonly associated with?",
      "Choices": ["Blue/Purple", "Blue/purple", "Silver/White", "Green"],
      "Answer": "Silver/White"
    },
    {
      "Question": "What color is President Foras commonly associated with?",
      "Choices": ["Yellow", "Blue/Purple", "Orange", "Silver/white"],
      "Answer": "Orange"
    },
    {
      "Question": "What color is King Asmodai commonly associated with?",
      "Choices": ["Black", "Gold/Yellow", "Black/Purple", "Red"],
      "Answer": "Gold/Yellow"
    },
    {
      "Question": "What color is Prince Gaap commonly associated with?",
      "Choices": ["Red", "Orange", "Blue/purple", "Yellow"],
      "Answer": "Blue/purple"
    },
    {
      "Question": "What color is Earl Furfur commonly associated with?",
      "Choices": ["Gold/Yellow", "Orange", "Red", "Yellow"],
      "Answer": "Red"
    },
    {
      "Question": "What color is Marquis Marchosias commonly associated with?",
      "Choices": ["Silver/White", "Silver/Water", "Orange", "Blue/Purple"],
      "Answer": "Silver/White"
    },
    {
      "Question": "What color is Prince Stolas commonly associated with?",
      "Choices": ["Black/Purple", "Silver/Water", "Silver/White", "Gold/Yellow"],
      "Answer": "Black/Purple"
    },
    {
      "Question": "What color is Marquis Phenix commonly associated with?",
      "Choices": ["Black/Purple", "Silver/White", "Yellow", "Black"],
      "Answer": "Silver/White"
    },
    {
      "Question": "What color is Earl Halphas commonly associated with?",
      "Choices": ["Silver/white", "Red", "Silver/White", "Black/Purple"],
      "Answer": "Red"
    },
    {
      "Question": "What color is President Malphas commonly associated with?",
      "Choices": ["Blue/Purple", "Orange", "Black", "Silver/Water"],
      "Answer": "Orange"
    },
    {
      "Question": "What color is Earl Raum commonly associated with?",
      "Choices": ["Green", "Red", "Silver/white", "Silver/Water"],
      "Answer": "Red"
    },
    {
      "Question": "What color is Duke Forcalor commonly associated with?",
      "Choices": ["Black", "Blue/Purple", "Green", "Silver/White"],
      "Answer": "Green"
    },
    {
      "Question": "What color is Duke Vepar commonly associated with?",
      "Choices": ["Silver/Water", "Green", "Red", "Black/Purple"],
      "Answer": "Green"
    },
    {
      "Question": "What color is Marquis Sabnock commonly associated with?",
      "Choices": ["Gold/Yellow", "Black", "Green", "Silver/White"],
      "Answer": "Silver/White"
    },
    {
      "Question": "What color is Marquis Shax commonly associated with?",
      "Choices": ["Black/Purple", "Silver/white", "Yellow", "Silver/White"],
      "Answer": "Silver/White"
    },
    {
      "Question": "What color is King Vine commonly associated with?",
      "Choices": ["Yellow", "Gold/Yellow", "Green", "Blue/purple"],
      "Answer": "Yellow"
    },
    {
      "Question": "What color is Earl Bifrons commonly associated with?",
      "Choices": ["Gold/Yellow", "Red", "Blue/Purple", "Blue/purple"],
      "Answer": "Red"
    },
    {
      "Question": "What color is Duke Vuall commonly associated with?",
      "Choices": ["Silver/Water", "Green", "Blue/purple", "Silver/White"],
      "Answer": "Green"
    },
    {
      "Question": "What color is President Haagenti commonly associated with?",
      "Choices": ["Orange", "Blue/Purple", "Blue/purple", "Yellow"],
      "Answer": "Orange"
    },
    {
      "Question": "What color is Duke Crocell commonly associated with?",
      "Choices": ["Red", "Silver/white", "Green", "Yellow"],
      "Answer": "Green"
    },
    {
      "Question": "What color is Knight Furcas commonly associated with?",
      "Choices": ["Red", "Gold/Yellow", "Black/Purple", "Black"],
      "Answer": "Black"
    },
    {
      "Question": "What color is King Balam commonly associated with?",
      "Choices": ["Red", "Black/Purple", "Black", "Gold/Yellow"],
      "Answer": "Gold/Yellow"
    },
    {
      "Question": "What color is Duke Alloces commonly associated with?",
      "Choices": ["Orange", "Silver/Water", "Red", "Green"],
      "Answer": "Green"
    },
    {
      "Question": "What color is President Camio commonly associated with?",
      "Choices": ["Silver/Water", "Blue/Purple", "Silver/White", "Orange"],
      "Answer": "Orange"
    },
    {
      "Question": "What color is Duke Murmus commonly associated with?",
      "Choices": ["Silver/White", "Orange", "Black", "Green"],
      "Answer": "Green"
    },
    {
      "Question": "What color is Prince Orobas commonly associated with?",
      "Choices": ["Yellow", "Black/Purple", "Green", "Blue/Purple"],
      "Answer": "Blue/Purple"
    },
    {
      "Question": "What color is Duke Gremori commonly associated with?",
      "Choices": ["Black/Purple", "Blue/Purple", "Red", "Green"],
      "Answer": "Green"
    },
    {
      "Question": "What color is President Ose commonly associated with?",
      "Choices": ["Silver/Water", "Orange", "Green", "Black"],
      "Answer": "Orange"
    },
    {
      "Question": "What color is President Auns commonly associated with?",
      "Choices": ["Silver/Water", "Silver/white", "Orange", "Blue/Purple"],
      "Answer": "Orange"
    },
    {
      "Question": "What color is Marquis Orias commonly associated with?",
      "Choices": ["Silver/White", "Yellow", "Black/Purple", "Green"],
      "Answer": "Silver/White"
    },
    {
      "Question": "What color is Duke Vapula commonly associated with?",
      "Choices": ["Green", "Silver/White", "Black/Purple", "Blue/purple"],
      "Answer": "Green"
    },
    {
      "Question": "What color is King Zagan commonly associated with?",
      "Choices": ["Gold/Yellow", "Black", "Yellow", "Blue/Purple"],
      "Answer": "Gold/Yellow"
    },
    {
      "Question": "What color is President Valac commonly associated with?",
      "Choices": ["Orange", "Black/Purple", "Silver/White", "Red"],
      "Answer": "Orange"
    },
    {
      "Question": "What color is Marquis Andras commonly associated with?",
      "Choices": ["Black/Purple", "Black", "Silver/White", "Blue/purple"],
      "Answer": "Silver/White"
    },
    {
      "Question": "What color is Duke Haures commonly associated with?",
      "Choices": ["Orange", "Green", "Yellow", "Silver/White"],
      "Answer": "Green"
    },
    {
      "Question": "What color is Marquis Andrealphus commonly associated with?",
      "Choices": ["Blue/purple", "Silver/White", "Blue/Purple", "Black"],
      "Answer": "Silver/White"
    },
    {
      "Question": "What color is Marquis Cimeries commonly associated with?",
      "Choices": ["Gold/Yellow", "Silver/white", "Silver/Water", "Blue/purple"],
      "Answer": "Silver/white"
    },
    {
      "Question": "What color is Duke Amducias commonly associated with?",
      "Choices": ["Green", "Silver/white", "Silver/Water", "Red"],
      "Answer": "Green"
    },
    {
      "Question": "What color is King Belial commonly associated with?",
      "Choices": ["Yellow", "Blue/purple", "Silver/white", "Gold/Yellow"],
      "Answer": "Gold/Yellow"
    },
    {
      "Question": "What color is Marquis Decarabia commonly associated with?",
      "Choices": ["Blue/Purple", "Silver/Water", "Orange", "Blue/purple"],
      "Answer": "Silver/Water"
    },
    {
      "Question": "What color is Prince Seer commonly associated with?",
      "Choices": ["Orange", "Black", "Silver/white", "Blue/Purple"],
      "Answer": "Blue/Purple"
    },
    {
      "Question": "What color is Duke Dantalion commonly associated with?",
      "Choices": ["Black", "Silver/white", "Green", "Blue/Purple"],
      "Answer": "Green"
    },
    {
      "Question": "What color is Earl Andromalius commonly associated with?",
      "Choices": ["Black", "Blue/purple", "Silver/Water", "Red"],
      "Answer": "Red"
    },

    {
      "Question": "What metal is King Bael commonly associated with?",
      "Choices": ["Lead", "Copper/Silver", "Gold", "Silver"],
      "Answer": "Gold"
    },
    {
      "Question": "What metal is Duke Agares commonly associated with?",
      "Choices": ["Copper", "Copper/Tin", "Silver", "Tin"],
      "Answer": "Copper/Tin"
    },
    {
      "Question": "What metal is Prince Vassago commonly associated with?",
      "Choices": ["Aluminium", "Tin", "Lead", "Copper & Silver"],
      "Answer": "Tin"
    },
    {
      "Question": "What metal is Marquis Gamigin commonly associated with?",
      "Choices": ["Lead", "Silver", "Copper/Silver", "Gold"],
      "Answer": "Silver"
    },
    {
      "Question": "What metal is President Marbas commonly associated with?",
      "Choices": ["Copper/Silver", "Silver", "Lead", "Aluminium"],
      "Answer": "Aluminium"
    },
    {
      "Question": "What metal is Duke Valefar commonly associated with?",
      "Choices": ["Copper/Silver", "Silver", "Copper & Silver", "Copper"],
      "Answer": "Copper"
    },
    {
      "Question": "What metal is Marquis Amon commonly associated with?",
      "Choices": ["Gold", "Silver", "Copper/Tin", "Tin"],
      "Answer": "Silver"
    },
    {
      "Question": "What metal is Duke Barbatos commonly associated with?",
      "Choices": ["Lead", "Aluminium", "Copper", "Gold"],
      "Answer": "Copper"
    },
    {
      "Question": "What metal is King Paimon commonly associated with?",
      "Choices": ["Gold", "Copper & Silver", "Lead", "Copper"],
      "Answer": "Gold"
    },
    {
      "Question": "What metal is President Buer commonly associated with?",
      "Choices": ["Aluminium", "Copper/Tin", "Gold", "Tin"],
      "Answer": "Aluminium"
    },
    {
      "Question": "What metal is Duke Gusoin commonly associated with?",
      "Choices": ["Copper", "Lead", "Copper/Tin", "Tin"],
      "Answer": "Copper"
    },
    {
      "Question": "What metal is Prince Sitri commonly associated with?",
      "Choices": ["Lead", "Copper/Silver", "Tin", "Silver"],
      "Answer": "Tin"
    },
    {
      "Question": "What metal is King Beleth commonly associated with?",
      "Choices": ["Lead", "Silver", "Gold", "Copper/Silver"],
      "Answer": "Gold"
    },
    {
      "Question": "What metal is Marquis Leraje commonly associated with?",
      "Choices": ["Aluminium", "Silver", "Copper/Tin", "Copper & Silver"],
      "Answer": "Silver"
    },
    {
      "Question": "What metal is Duke Eligos commonly associated with?",
      "Choices": ["Aluminium", "Tin", "Copper/Silver", "Copper"],
      "Answer": "Copper"
    },
    {
      "Question": "What metal is Duke Zepar commonly associated with?",
      "Choices": ["Copper", "Tin", "Copper/Tin", "Lead"],
      "Answer": "Copper"
    },
    {
      "Question": "What metal is Earl Botis commonly associated with?",
      "Choices": ["Copper/Tin", "Copper/Silver", "Silver", "Copper & Silver"],
      "Answer": "Copper/Silver"
    },
    {
      "Question": "What metal is Duke Bathin commonly associated with?",
      "Choices": ["Lead", "Copper/Silver", "Copper", "Copper & Silver"],
      "Answer": "Copper"
    },
    {
      "Question": "What metal is Duke Sallos commonly associated with?",
      "Choices": ["Lead", "Copper/Silver", "Gold", "Copper"],
      "Answer": "Copper"
    },
    {
      "Question": "What metal is King Purson commonly associated with?",
      "Choices": ["Gold", "Aluminium", "Silver", "Copper/Silver"],
      "Answer": "Gold"
    },
    {
      "Question": "What metal is Earl Marax commonly associated with?",
      "Choices": ["Copper", "Copper & Silver", "Silver", "Copper/Silver"],
      "Answer": "Copper/Silver"
    },
    {
      "Question": "What metal is Prince Ipos commonly associated with?",
      "Choices": ["Gold", "Copper/Tin", "Tin", "Copper"],
      "Answer": "Tin"
    },
    {
      "Question": "What metal is Duke Aim commonly associated with?",
      "Choices": ["Copper/Silver", "Copper", "Lead", "Silver"],
      "Answer": "Copper"
    },
    {
      "Question": "What metal is Marquis Naberius commonly associated with?",
      "Choices": ["Tin", "Copper/Tin", "Silver", "Lead"],
      "Answer": "Silver"
    },
    {
      "Question": "What metal is President Glasyalabolas commonly associated with?",
      "Choices": ["Tin", "Aluminium", "Silver", "Lead"],
      "Answer": "Aluminium"
    },
    {
      "Question": "What metal is Duke Bime commonly associated with?",
      "Choices": ["Aluminium", "Gold", "Silver", "Copper"],
      "Answer": "Copper"
    },
    {
      "Question": "What metal is Marquis Ronove commonly associated with?",
      "Choices": ["Copper/Silver", "Copper/Tin", "Silver", "Tin"],
      "Answer": "Silver"
    },
    {
      "Question": "What metal is Duke Berith commonly associated with?",
      "Choices": ["Silver", "Copper", "Tin", "Gold"],
      "Answer": "Copper"
    },
    {
      "Question": "What metal is King Astaroth commonly associated with?",
      "Choices": ["Lead", "Gold", "Silver", "Copper & Silver"],
      "Answer": "Gold"
    },
    {
      "Question": "What metal is Marquis Forneus commonly associated with?",
      "Choices": ["Copper/Tin", "Copper & Silver", "Gold", "Silver"],
      "Answer": "Silver"
    },
    {
      "Question": "What metal is President Foras commonly associated with?",
      "Choices": ["Aluminium", "Copper/Silver", "Silver", "Copper & Silver"],
      "Answer": "Aluminium"
    },
    {
      "Question": "What metal is King Asmodai commonly associated with?",
      "Choices": ["Copper & Silver", "Aluminium", "Gold", "Silver"],
      "Answer": "Gold"
    },
    {
      "Question": "What metal is Prince Gaap commonly associated with?",
      "Choices": ["Silver", "Copper/Silver", "Tin", "Copper & Silver"],
      "Answer": "Tin"
    },
    {
      "Question": "What metal is Earl Furfur commonly associated with?",
      "Choices": ["Silver", "Copper/Silver", "Lead", "Gold"],
      "Answer": "Copper/Silver"
    },
    {
      "Question": "What metal is Marquis Marchosias commonly associated with?",
      "Choices": ["Lead", "Silver", "Aluminium", "Tin"],
      "Answer": "Silver"
    },
    {
      "Question": "What metal is Prince Stolas commonly associated with?",
      "Choices": ["Copper/Tin", "Copper & Silver", "Tin", "Lead"],
      "Answer": "Tin"
    },
    {
      "Question": "What metal is Marquis Phenix commonly associated with?",
      "Choices": ["Copper/Silver", "Silver", "Lead", "Copper"],
      "Answer": "Silver"
    },
    {
      "Question": "What metal is Earl Halphas commonly associated with?",
      "Choices": ["Aluminium", "Gold", "Copper/Tin", "Copper & Silver"],
      "Answer": "Copper & Silver"
    },
    {
      "Question": "What metal is President Malphas commonly associated with?",
      "Choices": ["Silver", "Copper & Silver", "Tin", "Aluminium"],
      "Answer": "Aluminium"
    },
    {
      "Question": "What metal is Earl Raum commonly associated with?",
      "Choices": ["Aluminium", "Copper/Silver", "Tin", "Gold"],
      "Answer": "Copper/Silver"
    },
    {
      "Question": "What metal is Duke Forcalor commonly associated with?",
      "Choices": ["Lead", "Silver", "Aluminium", "Copper"],
      "Answer": "Copper"
    },
    {
      "Question": "What metal is Duke Vepar commonly associated with?",
      "Choices": ["Tin", "Copper/Silver", "Copper", "Aluminium"],
      "Answer": "Copper"
    },
    {
      "Question": "What metal is Marquis Sabnock commonly associated with?",
      "Choices": ["Gold", "Copper", "Silver", "Copper/Tin"],
      "Answer": "Silver"
    },
    {
      "Question": "What metal is Marquis Shax commonly associated with?",
      "Choices": ["Copper", "Aluminium", "Tin", "Silver"],
      "Answer": "Silver"
    },
    {
      "Question": "What metal is King Vine commonly associated with?",
      "Choices": ["Copper/Silver", "Copper/Tin", "Aluminium", "Gold"],
      "Answer": "Gold"
    },
    {
      "Question": "What metal is Earl Bifrons commonly associated with?",
      "Choices": ["Copper & Silver", "Gold", "Copper/Silver", "Copper/Tin"],
      "Answer": "Copper & Silver"
    },
    {
      "Question": "What metal is Duke Vuall commonly associated with?",
      "Choices": ["Gold", "Tin", "Silver", "Copper"],
      "Answer": "Copper"
    },
    {
      "Question": "What metal is President Haagenti commonly associated with?",
      "Choices": ["Silver", "Aluminium", "Tin", "Copper/Tin"],
      "Answer": "Aluminium"
    },
    {
      "Question": "What metal is Duke Crocell commonly associated with?",
      "Choices": ["Tin", "Copper", "Silver", "Gold"],
      "Answer": "Copper"
    },
    {
      "Question": "What metal is Knight Furcas commonly associated with?",
      "Choices": ["Lead", "Copper", "Copper/Silver", "Copper/Tin"],
      "Answer": "Lead"
    },
    {
      "Question": "What metal is King Balam commonly associated with?",
      "Choices": ["Copper & Silver", "Silver", "Gold", "Copper/Silver"],
      "Answer": "Gold"
    },
    {
      "Question": "What metal is Duke Alloces commonly associated with?",
      "Choices": ["Copper & Silver", "Copper", "Lead", "Silver"],
      "Answer": "Copper"
    },
    {
      "Question": "What metal is President Camio commonly associated with?",
      "Choices": ["Copper/Silver", "Aluminium", "Tin", "Copper/Tin"],
      "Answer": "Aluminium"
    },
    {
      "Question": "What metal is Duke Murmus commonly associated with?",
      "Choices": ["Aluminium", "Silver", "Copper", "Gold"],
      "Answer": "Copper"
    },
    {
      "Question": "What metal is Prince Orobas commonly associated with?",
      "Choices": ["Copper & Silver", "Silver", "Aluminium", "Tin"],
      "Answer": "Tin"
    },
    {
      "Question": "What metal is Duke Gremori commonly associated with?",
      "Choices": ["Copper", "Tin", "Aluminium", "Copper/Silver"],
      "Answer": "Copper"
    },
    {
      "Question": "What metal is President Ose commonly associated with?",
      "Choices": ["Copper", "Lead", "Silver", "Aluminium"],
      "Answer": "Aluminium"
    },
    {
      "Question": "What metal is President Auns commonly associated with?",
      "Choices": ["Copper & Silver", "Aluminium", "Tin", "Silver"],
      "Answer": "Aluminium"
    },
    {
      "Question": "What metal is Marquis Orias commonly associated with?",
      "Choices": ["Copper & Silver", "Aluminium", "Tin", "Silver"],
      "Answer": "Silver"
    },
    {
      "Question": "What metal is Duke Vapula commonly associated with?",
      "Choices": ["Tin", "Copper/Silver", "Copper/Tin", "Copper"],
      "Answer": "Copper"
    },
    {
      "Question": "What metal is King Zagan commonly associated with?",
      "Choices": ["Copper/Silver", "Lead", "Gold", "Copper/Tin"],
      "Answer": "Gold"
    },
    {
      "Question": "What metal is President Valac commonly associated with?",
      "Choices": ["Tin", "Copper & Silver", "Copper/Tin", "Aluminium"],
      "Answer": "Aluminium"
    },
    {
      "Question": "What metal is Marquis Andras commonly associated with?",
      "Choices": ["Copper", "Silver", "Tin", "Copper/Silver"],
      "Answer": "Silver"
    },
    {
      "Question": "What metal is Duke Haures commonly associated with?",
      "Choices": ["Silver", "Tin", "Copper/Tin", "Copper"],
      "Answer": "Copper"
    },
    {
      "Question": "What metal is Marquis Andrealphus commonly associated with?",
      "Choices": ["Copper", "Gold", "Silver", "Copper & Silver"],
      "Answer": "Silver"
    },
    {
      "Question": "What metal is Marquis Cimeries commonly associated with?",
      "Choices": ["Tin", "Silver", "Copper", "Copper/Silver"],
      "Answer": "Silver"
    },
    {
      "Question": "What metal is Duke Amducias commonly associated with?",
      "Choices": ["Copper & Silver", "Copper", "Aluminium", "Gold"],
      "Answer": "Copper"
    },
    {
      "Question": "What metal is King Belial commonly associated with?",
      "Choices": ["Gold", "Copper/Tin", "Tin", "Copper"],
      "Answer": "Gold"
    },
    {
      "Question": "What metal is Marquis Decarabia commonly associated with?",
      "Choices": ["Gold", "Silver", "Copper/Silver", "Copper & Silver"],
      "Answer": "Silver"
    },
    {
      "Question": "What metal is Prince Seer commonly associated with?",
      "Choices": ["Tin", "Lead", "Aluminium", "Copper"],
      "Answer": "Tin"
    },
    {
      "Question": "What metal is Duke Dantalion commonly associated with?",
      "Choices": ["Copper", "Silver", "Copper & Silver", "Tin"],
      "Answer": "Copper"
    },
    {
      "Question": "What metal is Earl Andromalius commonly associated with?",
      "Choices": ["Copper/Tin", "Silver", "Gold", "Copper/Silver"],
      "Answer": "Copper/Silver"
    },
    {
      "Question": "What incense is King Bael commonly associated with?",
      "Choices": ["Frankincense", "Dragon's Blood", "Storax", "Myrrh"],
      "Answer": "Frankincense"
    },
    {
      "Question": "What incense is Duke Agares commonly associated with?",
      "Choices": ["Storax", "Sandalwood", "Jasmine", "Dragon's blood"],
      "Answer": "Sandalwood"
    },
    {
      "Question": "What incense is Prince Vassago commonly associated with?",
      "Choices": ["Myrrh", "Cedar", "Dragon's blood", "Frankincense"],
      "Answer": "Cedar"
    },
    {
      "Question": "What incense is Marquis Gamigin commonly associated with?",
      "Choices": ["Dragon's blood", "Cedar", "Jasmine", "Myrrh"],
      "Answer": "Jasmine"
    },
    {
      "Question": "What incense is President Marbas commonly associated with?",
      "Choices": ["Dragon's Blood", "Dragon's blood", "Storax", "Myrrh"],
      "Answer": "Storax"
    },
    {
      "Question": "What incense is Duke Valefar commonly associated with?",
      "Choices": ["Frankincense", "Dragon's blood", "Dragon's Blood", "Sandalwood"],
      "Answer": "Sandalwood"
    },
    {
      "Question": "What incense is Marquis Amon commonly associated with?",
      "Choices": ["Dragon's blood", "Sandalwood", "Cedar", "Jasmine"],
      "Answer": "Jasmine"
    },
    {
      "Question": "What incense is Duke Barbatos commonly associated with?",
      "Choices": ["Jasmine", "Sandalwood", "Dragon's blood", "Frankincense"],
      "Answer": "Sandalwood"
    },
    {
      "Question": "What incense is King Paimon commonly associated with?",
      "Choices": ["Frankincense", "Cedar", "Dragon's Blood", "Dragon's blood"],
      "Answer": "Frankincense"
    },
    {
      "Question": "What incense is President Buer commonly associated with?",
      "Choices": ["Dragon's Blood", "Myrrh", "Storax", "Sandalwood"],
      "Answer": "Storax"
    },
    {
      "Question": "What incense is Duke Gusoin commonly associated with?",
      "Choices": ["Myrrh", "Sandalwood", "Storax", "Cedar"],
      "Answer": "Sandalwood"
    },
    {
      "Question": "What incense is Prince Sitri commonly associated with?",
      "Choices": ["Sandalwood", "Cedar", "Jasmine", "Myrrh"],
      "Answer": "Cedar"
    },
    {
      "Question": "What incense is King Beleth commonly associated with?",
      "Choices": ["Sandalwood", "Frankincense", "Dragon's blood", "Myrrh"],
      "Answer": "Frankincense"
    },
    {
      "Question": "What incense is Marquis Leraje commonly associated with?",
      "Choices": ["Frankincense", "Myrrh", "Sandalwood", "Jasmine"],
      "Answer": "Jasmine"
    },
    {
      "Question": "What incense is Duke Eligos commonly associated with?",
      "Choices": ["Dragon's Blood", "Myrrh", "Sandalwood", "Cedar"],
      "Answer": "Sandalwood"
    },
    {
      "Question": "What incense is Duke Zepar commonly associated with?",
      "Choices": ["Jasmine", "Frankincense", "Sandalwood", "Dragon's Blood"],
      "Answer": "Sandalwood"
    },
    {
      "Question": "What incense is Earl Botis commonly associated with?",
      "Choices": ["Jasmine", "Dragon's Blood", "Sandalwood", "Frankincense"],
      "Answer": "Dragon's Blood"
    },
    {
      "Question": "What incense is Duke Bathin commonly associated with?",
      "Choices": ["Jasmine", "Cedar", "Sandalwood", "Frankincense"],
      "Answer": "Sandalwood"
    },
    {
      "Question": "What incense is Duke Sallos commonly associated with?",
      "Choices": ["Sandalwood", "Dragon's blood", "Jasmine", "Cedar"],
      "Answer": "Sandalwood"
    },
    {
      "Question": "What incense is King Purson commonly associated with?",
      "Choices": ["Frankincense", "Cedar", "Myrrh", "Sandalwood"],
      "Answer": "Frankincense"
    },
    {
      "Question": "What incense is Earl Marax commonly associated with?",
      "Choices": ["Jasmine", "Myrrh", "Frankincense", "Dragon's blood"],
      "Answer": "Dragon's blood"
    },
    {
      "Question": "What incense is Prince Ipos commonly associated with?",
      "Choices": ["Dragon's Blood", "Sandalwood", "Cedar", "Frankincense"],
      "Answer": "Cedar"
    },
    {
      "Question": "What incense is Duke Aim commonly associated with?",
      "Choices": ["Jasmine", "Dragon's Blood", "Frankincense", "Sandalwood"],
      "Answer": "Sandalwood"
    },
    {
      "Question": "What incense is Marquis Naberius commonly associated with?",
      "Choices": ["Cedar", "Dragon's Blood", "Jasmine", "Myrrh"],
      "Answer": "Jasmine"
    },
    {
      "Question": "What incense is President Glasyalabolas commonly associated with?",
      "Choices": ["Frankincense", "Sandalwood", "Jasmine", "Storax"],
      "Answer": "Storax"
    },
    {
      "Question": "What incense is Duke Bime commonly associated with?",
      "Choices": ["Sandalwood", "Frankincense", "Cedar", "Storax"],
      "Answer": "Sandalwood"
    },
    {
      "Question": "What incense is Marquis Ronove commonly associated with?",
      "Choices": ["Cedar", "Jasmine", "Dragon's Blood", "Dragon's blood"],
      "Answer": "Jasmine"
    },
    {
      "Question": "What incense is Duke Berith commonly associated with?",
      "Choices": ["Jasmine", "Sandalwood", "Myrrh", "Frankincense"],
      "Answer": "Sandalwood"
    },
    {
      "Question": "What incense is King Astaroth commonly associated with?",
      "Choices": ["Storax", "Frankincense", "Dragon's blood", "Cedar"],
      "Answer": "Frankincense"
    },
    {
      "Question": "What incense is Marquis Forneus commonly associated with?",
      "Choices": ["Myrrh", "Jasmine", "Dragon's Blood", "Dragon's blood"],
      "Answer": "Jasmine"
    },
    {
      "Question": "What incense is President Foras commonly associated with?",
      "Choices": ["Frankincense", "Cedar", "Storax", "Dragon's blood"],
      "Answer": "Storax"
    },
    {
      "Question": "What incense is King Asmodai commonly associated with?",
      "Choices": ["Dragon's blood", "Myrrh", "Cedar", "Frankincense"],
      "Answer": "Frankincense"
    },
    {
      "Question": "What incense is Prince Gaap commonly associated with?",
      "Choices": ["Jasmine", "Myrrh", "Frankincense", "Cedar"],
      "Answer": "Cedar"
    },
    {
      "Question": "What incense is Earl Furfur commonly associated with?",
      "Choices": ["Dragon's blood", "Sandalwood", "Storax", "Cedar"],
      "Answer": "Dragon's blood"
    },
    {
      "Question": "What incense is Marquis Marchosias commonly associated with?",
      "Choices": ["Cedar", "Myrrh", "Jasmine", "Frankincense"],
      "Answer": "Jasmine"
    },
    {
      "Question": "What incense is Prince Stolas commonly associated with?",
      "Choices": ["Cedar", "Sandalwood", "Myrrh", "Storax"],
      "Answer": "Cedar"
    },
    {
      "Question": "What incense is Marquis Phenix commonly associated with?",
      "Choices": ["Frankincense", "Dragon's blood", "Sandalwood", "Jasmine"],
      "Answer": "Jasmine"
    },
    {
      "Question": "What incense is Earl Halphas commonly associated with?",
      "Choices": ["Myrrh", "Jasmine", "Dragon's Blood", "Sandalwood"],
      "Answer": "Dragon's Blood"
    },
    {
      "Question": "What incense is President Malphas commonly associated with?",
      "Choices": ["Frankincense", "Jasmine", "Storax", "Dragon's Blood"],
      "Answer": "Storax"
    },
    {
      "Question": "What incense is Earl Raum commonly associated with?",
      "Choices": ["Jasmine", "Dragon's blood", "Myrrh", "Storax"],
      "Answer": "Dragon's blood"
    },
    {
      "Question": "What incense is Duke Forcalor commonly associated with?",
      "Choices": ["Cedar", "Frankincense", "Dragon's Blood", "Sandalwood"],
      "Answer": "Sandalwood"
    },
    {
      "Question": "What incense is Duke Vepar commonly associated with?",
      "Choices": ["Dragon's blood", "Sandalwood", "Storax", "Dragon's Blood"],
      "Answer": "Sandalwood"
    },
    {
      "Question": "What incense is Marquis Sabnock commonly associated with?",
      "Choices": ["Dragon's blood", "Cedar", "Myrrh", "Jasmine"],
      "Answer": "Jasmine"
    },
    {
      "Question": "What incense is Marquis Shax commonly associated with?",
      "Choices": ["Storax", "Myrrh", "Sandalwood", "Jasmine"],
      "Answer": "Jasmine"
    },
    {
      "Question": "What incense is King Vine commonly associated with?",
      "Choices": ["Sandalwood", "Frankincense", "Dragon's blood", "Jasmine"],
      "Answer": "Frankincense"
    },
    {
      "Question": "What incense is Earl Bifrons commonly associated with?",
      "Choices": ["Storax", "Cedar", "Dragon's Blood", "Sandalwood"],
      "Answer": "Dragon's Blood"
    },
    {
      "Question": "What incense is Duke Vuall commonly associated with?",
      "Choices": ["Frankincense", "Dragon's Blood", "Sandalwood", "Storax"],
      "Answer": "Sandalwood"
    },
    {
      "Question": "What incense is President Haagenti commonly associated with?",
      "Choices": ["Sandalwood", "Storax", "Dragon's blood", "Dragon's Blood"],
      "Answer": "Storax"
    },
    {
      "Question": "What incense is Duke Crocell commonly associated with?",
      "Choices": ["Cedar", "Sandalwood", "Dragon's Blood", "Frankincense"],
      "Answer": "Sandalwood"
    },
    {
      "Question": "What incense is Knight Furcas commonly associated with?",
      "Choices": ["Cedar", "Frankincense", "Myrrh", "Dragon's blood"],
      "Answer": "Myrrh"
    },
    {
      "Question": "What incense is King Balam commonly associated with?",
      "Choices": ["Storax", "Dragon's blood", "Frankincense", "Dragon's Blood"],
      "Answer": "Frankincense"
    },
    {
      "Question": "What incense is Duke Alloces commonly associated with?",
      "Choices": ["Sandalwood", "Myrrh", "Storax", "Dragon's blood"],
      "Answer": "Sandalwood"
    },
    {
      "Question": "What incense is President Camio commonly associated with?",
      "Choices": ["Storax", "Jasmine", "Sandalwood", "Dragon's blood"],
      "Answer": "Storax"
    },
    {
      "Question": "What incense is Duke Murmus commonly associated with?",
      "Choices": ["Cedar", "Dragon's blood", "Dragon's Blood", "Sandalwood"],
      "Answer": "Sandalwood"
    },
    {
      "Question": "What incense is Prince Orobas commonly associated with?",
      "Choices": ["Cedar", "Sandalwood", "Jasmine", "Dragon's Blood"],
      "Answer": "Cedar"
    },
    {
      "Question": "What incense is Duke Gremori commonly associated with?",
      "Choices": ["Dragon's Blood", "Myrrh", "Sandalwood", "Storax"],
      "Answer": "Sandalwood"
    },
    {
      "Question": "What incense is President Ose commonly associated with?",
      "Choices": ["Dragon's blood", "Myrrh", "Storax", "Frankincense"],
      "Answer": "Storax"
    },
    {
      "Question": "What incense is President Auns commonly associated with?",
      "Choices": ["Cedar", "Storax", "Jasmine", "Sandalwood"],
      "Answer": "Storax"
    },
    {
      "Question": "What incense is Marquis Orias commonly associated with?",
      "Choices": ["Sandalwood", "Jasmine", "Dragon's blood", "Cedar"],
      "Answer": "Jasmine"
    },
    {
      "Question": "What incense is Duke Vapula commonly associated with?",
      "Choices": ["Myrrh", "Sandalwood", "Cedar", "Dragon's blood"],
      "Answer": "Sandalwood"
    },
    {
      "Question": "What incense is King Zagan commonly associated with?",
      "Choices": ["Dragon's blood", "Jasmine", "Dragon's Blood", "Frankincense"],
      "Answer": "Frankincense"
    },
    {
      "Question": "What incense is President Valac commonly associated with?",
      "Choices": ["Myrrh", "Cedar", "Sandalwood", "Storax"],
      "Answer": "Storax"
    },
    {
      "Question": "What incense is Marquis Andras commonly associated with?",
      "Choices": ["Jasmine", "Storax", "Cedar", "Sandalwood"],
      "Answer": "Jasmine"
    },
    {
      "Question": "What incense is Duke Haures commonly associated with?",
      "Choices": ["Sandalwood", "Jasmine", "Myrrh", "Dragon's Blood"],
      "Answer": "Sandalwood"
    },
    {
      "Question": "What incense is Marquis Andrealphus commonly associated with?",
      "Choices": ["Myrrh", "Jasmine", "Storax", "Sandalwood"],
      "Answer": "Jasmine"
    },
    {
      "Question": "What incense is Marquis Cimeries commonly associated with?",
      "Choices": ["Storax", "Jasmine", "Dragon's Blood", "Cedar"],
      "Answer": "Jasmine"
    },
    {
      "Question": "What incense is Duke Amducias commonly associated with?",
      "Choices": ["Dragon's blood", "Myrrh", "Sandalwood", "Jasmine"],
      "Answer": "Sandalwood"
    },
    {
      "Question": "What incense is King Belial commonly associated with?",
      "Choices": ["Frankincense", "Cedar", "Sandalwood", "Storax"],
      "Answer": "Frankincense"
    },
    {
      "Question": "What incense is Marquis Decarabia commonly associated with?",
      "Choices": ["Dragon's Blood", "Jasmine", "Dragon's blood", "Sandalwood"],
      "Answer": "Jasmine"
    },
    {
      "Question": "What incense is Prince Seer commonly associated with?",
      "Choices": ["Cedar", "Dragon's blood", "Jasmine", "Myrrh"],
      "Answer": "Cedar"
    },
    {
      "Question": "What incense is Duke Dantalion commonly associated with?",
      "Choices": ["Cedar", "Dragon's Blood", "Sandalwood", "Jasmine"],
      "Answer": "Sandalwood"
    },
    {
      "Question": "What incense is Earl Andromalius commonly associated with?",
      "Choices": ["Dragon's Blood", "Dragon's blood", "Frankincense", "Sandalwood"],
      "Answer": "Dragon's Blood"
    }
  ],[],[]]
  //#endregion
  //#region Spirits
  var SpiritQuestions =
    [[
      {
        "Question": "What is the role of the Genius Papus?",
        "Choices": ["Genius Of The Seas", "Genius Of Desire", "Devil Or Hostile Genius", "Physician"],
        "Answer": "Physician"
      },
      {
        "Question": "What is the role of the Genius Sinbuck?",
        "Choices": ["Genius Of Stryges", "Genius Of Doves", "Genius Of Scandal", "Judge"],
        "Answer": "Judge"
      },
      {
        "Question": "What is the role of the Genius Kasphuia?",
        "Choices": ["Genius Of The Stibium Of The Sages", "Genius Of Confusion", "Necromancer", "Genius Of Writing"],
        "Answer": "Necromancer"
      },
      {
        "Question": "What is the role of the Genius Zahun?",
        "Choices": ["Genius Of Attire", "Genius Of Goetic Magic", "Genius Of Scandal", "Genius Who Compels Love"],
        "Answer": "Genius Of Scandal"
      },
      {
        "Question": "What is the role of the Genius Heiglot?",
        "Choices": ["Genius Of Adornments", "Genius Of Poisons", "Genius Of Snowstorms", "Genius Of Desire"],
        "Answer": "Genius Of Snowstorms"
      },
      {
        "Question": "What is the role of the Genius Mizkun?",
        "Choices": ["Genius Of Poisons", "Genius Of Amulets", "Genius Of The Seas", "Genius Of Calculations"],
        "Answer": "Genius Of Amulets"
      },
      {
        "Question": "What is the role of the Genius Haven?",
        "Choices": ["Genius Of Divination", "Genius Of Dignity", "Genius Of Doves", "Genius Of Mysteries"],
        "Answer": "Genius Of Dignity"
      },
      {
        "Question": "What is the role of the Genius Sisera?",
        "Choices": ["Genius Of The Onyx", "Genius Of Desire", "Genius Of Irrevocable Choice", "Genius Of Inquisition"],
        "Answer": "Genius Of Desire"
      },
      {
        "Question": "What is the role of the Genius Torvatus?",
        "Choices": ["Devil Or Hostile Genius", "Genius Of Prosperity", "Genius Of Confusion", "Genius Of Discord"],
        "Answer": "Genius Of Discord"
      },
      {
        "Question": "What is the role of the Genius Nitibus?",
        "Choices": ["Genius Of Free Will", "Genius Of Doves", "Genius Of The Stars", "Genius Of Inquisition"],
        "Answer": "Genius Of The Stars"
      },
      {
        "Question": "What is the role of the Genius Hizarbin?",
        "Choices": ["Genius Of Confusion", "Genius Of Divination", "Genius Of The Seas", "Genius Of The Stibium Of The Sages"],
        "Answer": "Genius Of The Seas"
      },
      {
        "Question": "What is the role of the Genius Sachluph?",
        "Choices": ["Genius Of Forests", "Genius Who Sets Prisons Open", "Genius Of Death", "Genius Of Plants"],
        "Answer": "Genius Of Plants"
      },
      {
        "Question": "What is the role of the Genius Baglis?",
        "Choices": ["Genius Of Sport", "Genius Of The Dust", "Genius Of Measure And Balance", "Genius Of Sacred Vessels"],
        "Answer": "Genius Of Measure And Balance"
      },
      {
        "Question": "What is the role of the Genius Labezerin?",
        "Choices": ["Genius Of Doves", "Genius Of Success", "Genius Of Goetic Magic", "Genius Of Cupidity"],
        "Answer": "Genius Of Success"
      },
      {
        "Question": "What is the role of the Genius Hahabi?",
        "Choices": ["Genius Of Bestial Love", "Genius Of Death", "Avenging Genius", "Genius Of Fear"],
        "Answer": "Genius Of Fear"
      },
      {
        "Question": "What is the role of the Genius Phlogabitus?",
        "Choices": ["Genius Of Association", "Genius Of Adornments", "Sustaining Genius", "Genius Of Goetic Magic"],
        "Answer": "Genius Of Adornments"
      },
      {
        "Question": "What is the role of the Genius Eirneus?",
        "Choices": ["Genius Of The Lightning", "Necromancer", "Destroying Genius Of Idols", "Genius Of Mysteries"],
        "Answer": "Destroying Genius Of Idols"
      },
      {
        "Question": "What is the role of the Genius Mascarun?",
        "Choices": ["Genius Of Fruits", "Genius Of Therapeutics", "Genius Of Writing", "Genius Of Death"],
        "Answer": "Genius Of Death"
      },
      {
        "Question": "What is the role of the Genius Zarobi?",
        "Choices": ["Genius Of Precipices", "Genius Of Attire", "Serpent-Charming Genius", "Genius Of Irrevocable Choice"],
        "Answer": "Genius Of Precipices"
      },
      {
        "Question": "What is the role of the Genius Butatar?",
        "Choices": ["Sustaining Genius", "Genius Of Calculations", "Genius Of Fascination", "Genius Of Persecution"],
        "Answer": "Genius Of Calculations"
      },
      {
        "Question": "What is the role of the Genius Cahor?",
        "Choices": ["Genius Of Adornments", "Genius Of Sacred Vessels", "Genius Of Deception", "Genius Of Fornication"],
        "Answer": "Genius Of Deception"
      },
      {
        "Question": "What is the role of the Genius Phalgus?",
        "Choices": ["Genius Of Judgment", "Genius Of Precious Stones", "Genius Of Cupidity", "Genius Of Plants"],
        "Answer": "Genius Of Judgment"
      },
      {
        "Question": "What is the role of the Genius Thagrinus?",
        "Choices": ["Genius Of Sympathies", "Genius Of Confusion", "Genius Of Irrevocable Choice", "Genius Of Pantacles"],
        "Answer": "Genius Of Confusion"
      },
      {
        "Question": "What is the role of the Genius Eistibus?",
        "Choices": ["Genius Of The Stars", "Genius Of Precipices", "Genius Of Divination", "Genius Of Therapeutics"],
        "Answer": "Genius Of Divination"
      },
      {
        "Question": "What is the role of the Genius Pharzuph?",
        "Choices": ["Genius Of The Dust", "Genius Of Fornication", "Genius Of Pantacles", "Genius Of Fascination"],
        "Answer": "Genius Of Fornication"
      },
      {
        "Question": "What is the role of the Genius Sislau?",
        "Choices": ["Genius Of Poisons", "Genius Of Voyages", "Genius Of The Marriage Of Contraries", "Genius Of Languages"],
        "Answer": "Genius Of Poisons"
      },
      {
        "Question": "What is the role of the Genius Schiekron?",
        "Choices": ["Genius Of Bestial Love", "Genius Of Discord", "Genius Of Sacred Vessels", "Genius Of Extortion"],
        "Answer": "Genius Of Bestial Love"
      },
      {
        "Question": "What is the role of the Genius Aclahayr?",
        "Choices": ["Genius Of Prosperity", "Necromancer", "Genius Of Sport", "Genius Of Rocks"],
        "Answer": "Genius Of Sport"
      },
      {
        "Question": "What is the role of the Genius Zeirna?",
        "Choices": ["Genius Of Languages", "Genius Of Delusive Appearances", "Genius Of Infirmities", "Genius Who Sets Prisons Open"],
        "Answer": "Genius Of Infirmities"
      },
      {
        "Question": "What is the role of the Genius Tablibik?",
        "Choices": ["Genius Of Fascination", "Genius Of The Dust", "Genius Of Therapeutics", "Destroyer Of Children"],
        "Answer": "Genius Of Fascination"
      },
      {
        "Question": "What is the role of the Genius Tacritau?",
        "Choices": ["Genius Of Poisons", "Genius Of Death", "Genius Of The Quintessence", "Genius Of Goetic Magic"],
        "Answer": "Genius Of Goetic Magic"
      },
      {
        "Question": "What is the role of the Genius Suphlatus?",
        "Choices": ["Physician", "Genius Of The Dust", "Genius Who Discovers Thieves", "Genius Who Sets Doors Open"],
        "Answer": "Genius Of The Dust"
      },
      {
        "Question": "What is the role of the Genius Sair?",
        "Choices": ["Genius Of The Stibium Of The Sages", "Genius Of The Quintessence", "Serpent-Charming Genius", "Genius Of Forests"],
        "Answer": "Genius Of The Stibium Of The Sages"
      },
      {
        "Question": "What is the role of the Genius Barcus?",
        "Choices": ["Genius Of Sacred Vessels", "Genius Of The Sun's Rays", "Genius Of The Quintessence", "Avenging Genius"],
        "Answer": "Genius Of The Quintessence"
      },
      {
        "Question": "What is the role of the Genius Camaysar?",
        "Choices": ["Genius Of The Marriage Of Contraries", "Genius Who Sets Prisons Open", "Genius Of Plants", "Genius Of Infirmities"],
        "Answer": "Genius Of The Marriage Of Contraries"
      },
      {
        "Question": "What is the role of the Genius Tabris?",
        "Choices": ["Genius Of Success", "Destroying Genius Of Idols", "Genius Of Fire", "Genius Of Free Will"],
        "Answer": "Genius Of Free Will"
      },
      {
        "Question": "What is the role of the Genius Susabo?",
        "Choices": ["Genius Of Success", "Genius Of Languages", "Genius Of The Stars", "Genius Of Voyages"],
        "Answer": "Genius Of Voyages"
      },
      {
        "Question": "What is the role of the Genius Eirnilus?",
        "Choices": ["Genius Of Precipices", "Genius Who Sets Prisons Open", "Genius Of Fruits", "Genius Of Stryges"],
        "Answer": "Genius Of Fruits"
      },
      {
        "Question": "What is the role of the Genius Nitika?",
        "Choices": ["Genius Of The Onyx", "Genius Who Conceals Treasures", "Genius Of Measure And Balance", "Genius Of Precious Stones"],
        "Answer": "Genius Of Precious Stones"
      },
      {
        "Question": "What is the role of the Genius Haatan?",
        "Choices": ["Genius Of Forests", "Genius Of Stryges", "Serpent-Charming Genius", "Genius Who Conceals Treasures"],
        "Answer": "Genius Who Conceals Treasures"
      },
      {
        "Question": "What is the role of the Genius Hatiphas?",
        "Choices": ["Genius Of The Quintessence", "Genius Who Discovers Thieves", "Genius Of Writing", "Genius Of Attire"],
        "Answer": "Genius Of Attire"
      },
      {
        "Question": "What is the role of the Genius Zaren?",
        "Choices": ["Avenging Genius", "Sustaining Genius", "Genius Of Therapeutics", "Genius Of Dogs Or Of The Profane"],
        "Answer": "Avenging Genius"
      },
      {
        "Question": "What is the role of the Genius Sialul?",
        "Choices": ["Genius Of Eagles", "Genius Of The Quintessence", "Genius Of Sympathies", "Genius Of Prosperity"],
        "Answer": "Genius Of Prosperity"
      },
      {
        "Question": "What is the role of the Genius Sabrus?",
        "Choices": ["Sustaining Genius", "Genius Of Measure And Balance", "Genius Of Death", "Physician"],
        "Answer": "Sustaining Genius"
      },
      {
        "Question": "What is the role of the Genius Librabis?",
        "Choices": ["Serpent-Charming Genius", "Genius Of The Stars", "Genius Of Hidden Gold", "Genius Of Delusive Appearances"],
        "Answer": "Genius Of Hidden Gold"
      },
      {
        "Question": "What is the role of the Genius Mizgitari?",
        "Choices": ["Genius Of The Onyx", "Genius Of Eagles", "Genius Of Free Will", "Genius Of Plants"],
        "Answer": "Genius Of Eagles"
      },
      {
        "Question": "What is the role of the Genius Causub?",
        "Choices": ["Serpent-Charming Genius", "Genius Of Therapeutics", "Genius Who Conceals Treasures", "Genius Of Forests"],
        "Answer": "Serpent-Charming Genius"
      },
      {
        "Question": "What is the role of the Genius Salilus?",
        "Choices": ["Physician", "Genius Of Sacred Vessels", "Genius Of Precious Stones", "Genius Who Sets Doors Open"],
        "Answer": "Genius Who Sets Doors Open"
      },
      {
        "Question": "What is the role of the Genius Jazer?",
        "Choices": ["Genius Who Compels Love", "Genius Of Fruits", "Genius Of The Stibium Of The Sages", "Genius Of Fire"],
        "Answer": "Genius Who Compels Love"
      },
      {
        "Question": "What is the role of the Genius Nantur?",
        "Choices": ["Genius Of Extortion", "Genius Of The Marriage Of Contraries", "Genius Of Snowstorms", "Genius Of Writing"],
        "Answer": "Genius Of Writing"
      },
      {
        "Question": "What is the role of the Genius Toglas?",
        "Choices": ["Genius Of Doves", "Genius Of Divination", "Genius Who Sets Prisons Open", "Genius Of Treasures"],
        "Answer": "Genius Of Treasures"
      },
      {
        "Question": "What is the role of the Genius Zalburis?",
        "Choices": ["Genius Who Conceals Treasures", "Genius Of Agriculture", "Genius Of Therapeutics", "Physician"],
        "Answer": "Genius Of Therapeutics"
      },
      {
        "Question": "What is the role of the Genius Alphun?",
        "Choices": ["Genius Of Doves", "Judge", "Physician", "Genius Of Fascination"],
        "Answer": "Genius Of Doves"
      },
      {
        "Question": "What is the role of the Genius Tukiphat?",
        "Choices": ["Genius Of The Schamir", "Genius Of Success", "Genius Of Mysteries", "Genius Of Scandal"],
        "Answer": "Genius Of The Schamir"
      },
      {
        "Question": "What is the role of the Genius Zizuph?",
        "Choices": ["Genius Of Mysteries", "Destroying Genius Of Idols", "Genius Of Inquisition", "Genius Of The Marriage Of Contraries"],
        "Answer": "Genius Of Mysteries"
      },
      {
        "Question": "What is the role of the Genius Cuniali?",
        "Choices": ["Genius Of Association", "Genius Of Measure And Balance", "Genius Of Oracles", "Devil Or Hostile Genius"],
        "Answer": "Genius Of Association"
      },
      {
        "Question": "What is the role of the Genius Eisnuch?",
        "Choices": ["Genius Of Confusion", "Genius Of Scandal", "Genius Of Agriculture", "Genius Who Compels Love"],
        "Answer": "Genius Of Agriculture"
      },
      {
        "Question": "What is the role of the Genius Suclagus?",
        "Choices": ["Genius Of Fire", "Genius Who Compels Love", "Genius Of Persecution", "Genius Of Precious Stones"],
        "Answer": "Genius Of Fire"
      },
      {
        "Question": "What is the role of the Genius Kirtabus?",
        "Choices": ["Genius Of Languages", "Genius Of Agriculture", "Serpent-Charming Genius", "Genius Of Infirmities"],
        "Answer": "Genius Of Languages"
      },
      {
        "Question": "What is the role of the Genius Sablil?",
        "Choices": ["Genius Who Discovers Thieves", "Genius Of Fear", "Judge", "Genius Of The Onyx"],
        "Answer": "Genius Who Discovers Thieves"
      },
      {
        "Question": "What is the role of the Genius Schachljl?",
        "Choices": ["Necromancer", "Genius Of Plants", "Genius Of Oracles", "Genius Of The Sun's Rays"],
        "Answer": "Genius Of The Sun's Rays"
      },
      {
        "Question": "What is the role of the Genius Colopatiron?",
        "Choices": ["Genius Of Fornication", "Genius Of Precious Stones", "Genius Of The Seas", "Genius Who Sets Prisons Open"],
        "Answer": "Genius Who Sets Prisons Open"
      },
      {
        "Question": "What is the role of the Genius Zeffak?",
        "Choices": ["Genius Of Therapeutics", "Genius Of Irrevocable Choice", "Genius Of Persecution", "Genius Of Amulets"],
        "Answer": "Genius Of Irrevocable Choice"
      },
      {
        "Question": "What is the role of the Genius Sezarbil?",
        "Choices": ["Devil Or Hostile Genius", "Genius Of Stryges", "Genius Of Hidden Gold", "Genius Who Compels Love"],
        "Answer": "Devil Or Hostile Genius"
      },
      {
        "Question": "What is the role of the Genius Azeuph?",
        "Choices": ["Destroyer Of Children", "Necromancer", "Genius Of Calculations", "Genius Of The Quintessence"],
        "Answer": "Destroyer Of Children"
      },
      {
        "Question": "What is the role of the Genius Armilus?",
        "Choices": ["Genius Who Discovers Thieves", "Genius Of Cupidity", "Genius Of Voyages", "Genius Of Association"],
        "Answer": "Genius Of Cupidity"
      },
      {
        "Question": "What is the role of the Genius Kataris?",
        "Choices": ["Genius Of Oracles", "Genius Of Confusion", "Genius Of Judgment", "Genius Of Dogs Or Of The Profane"],
        "Answer": "Genius Of Dogs Or Of The Profane"
      },
      {
        "Question": "What is the role of the Genius Razanil?",
        "Choices": ["Genius Of The Onyx", "Serpent-Charming Genius", "Genius Of Doves", "Genius Of Amulets"],
        "Answer": "Genius Of The Onyx"
      },
      {
        "Question": "What is the role of the Genius Bucaphi?",
        "Choices": ["Genius Who Sets Prisons Open", "Genius Of Divination", "Genius Of Stryges", "Destroying Genius Of Idols"],
        "Answer": "Genius Of Stryges"
      },
      {
        "Question": "What is the role of the Genius Mastho?",
        "Choices": ["Genius Of Amulets", "Genius Of Voyages", "Genius Of Extortion", "Genius Of Delusive Appearances"],
        "Answer": "Genius Of Delusive Appearances"
      },
      {
        "Question": "What is the role of the Genius Eglun?",
        "Choices": ["Genius Of Therapeutics", "Genius Of The Lightning", "Genius Of Persecution", "Genius Of Fruits"],
        "Answer": "Genius Of The Lightning"
      },
      {
        "Question": "What is the role of the Genius Zuphlas?",
        "Choices": ["Genius Of Forests", "Genius Who Sets Doors Open", "Genius Of Languages", "Genius Of Precipices"],
        "Answer": "Genius Of Forests"
      },
      {
        "Question": "What is the role of the Genius Phaldor?",
        "Choices": ["Genius Of Writing", "Genius Of Delusive Appearances", "Genius Of Voyages", "Genius Of Oracles"],
        "Answer": "Genius Of Oracles"
      },
      {
        "Question": "What is the role of the Genius Rosabis?",
        "Choices": ["Genius Of The Schamir", "Genius Of Metals", "Genius Of Sympathies", "Genius Of Mysteries"],
        "Answer": "Genius Of Metals"
      },
      {
        "Question": "What is the role of the Genius Adjuchas?",
        "Choices": ["Genius Of The Onyx", "Genius Of Rocks", "Physician", "Genius Of Hidden Gold"],
        "Answer": "Genius Of Rocks"
      },
      {
        "Question": "What is the role of the Genius Zophas?",
        "Choices": ["Genius Of The Stibium Of The Sages", "Genius Of Fear", "Genius Of Free Will", "Genius Of Pantacles"],
        "Answer": "Genius Of Pantacles"
      },
      {
        "Question": "What is the role of the Genius Halacho?",
        "Choices": ["Sustaining Genius", "Genius Of Delusive Appearances", "Genius Of Sympathies", "Genius Of Precipices"],
        "Answer": "Genius Of Sympathies"
      },
      {
        "Question": "What is the role of the Genius Tarab?",
        "Choices": ["Genius Of Adornments", "Genius Of Desire", "Physician", "Genius Of Extortion"],
        "Answer": "Genius Of Extortion"
      },
      {
        "Question": "What is the role of the Genius Misran?",
        "Choices": ["Genius Of Persecution", "Genius Of Sacred Vessels", "Genius Of Fear", "Genius Of Dogs Or Of The Profane"],
        "Answer": "Genius Of Persecution"
      },
      {
        "Question": "What is the role of the Genius Labus?",
        "Choices": ["Genius Of Fear", "Genius Of Inquisition", "Genius Of Death", "Genius Of The Onyx"],
        "Answer": "Genius Of Inquisition"
      },
      {
        "Question": "What is the role of the Genius Kalab?",
        "Choices": ["Genius Of Sacred Vessels", "Genius Who Conceals Treasures", "Judge", "Genius Of Voyages"],
        "Answer": "Genius Of Sacred Vessels"
      },
      {
        "Question": "What is the role of the Genius Hahab?",
        "Choices": ["Genius Of Royal Tables", "Genius Of The Onyx", "Genius Of The Marriage Of Contraries", "Genius Of Discord"],
        "Answer": "Genius Of Royal Tables"
      },
      {
        "Question": "What is the role of the Genius Marnes?",
        "Choices": ["Genius Of Sympathies", "Avenging Genius", "Genius Of The Discernment Of Spirits", "Genius Of Fascination"],
        "Answer": "Genius Of The Discernment Of Spirits"
      },
      {
        "Question": "What is the role of the Genius Sellen?",
        "Choices": ["Genius Of The Favour Of The Great", "Genius Of Extortion", "Genius Of Fruits", "Genius Of Death"],
        "Answer": "Genius Of The Favour Of The Great"
      },
    ],[],[],[]]
  //#endregion
  var CurrentQuestion;
  var CurrentQuestionTier = -1;
  var AnsweredQuestions = [[], [], [], []];
  var CurrentQuestion;
  const app = new PIXI.Application({
    backgroundColor: 0x36393f,
    resizeTo: window,
    antialias: true
  });
  var GameDiagonal = CalculateDiagonal(app.renderer.width, app.renderer.height)
  var Margin = GameDiagonal * 0.005;

  document.body.appendChild(app.view);
  console.log(app.renderer.width);

  var MenuContainer = new PIXI.Container();
  const MenuTextStyle = new PIXI.TextStyle({
    fill: "white",
    fontSize: 32,
    strokeThickness: 3
  });

  var CategoryCount = 4;

  var Title = "Spirit Trivia";
  var TitleObject;
  const RectColor = 0x46b5b9;
  var GodsRect;
  var GodsText = new PIXI.Text('Gods', MenuTextStyle);
  var AngelsRect;
  var AngelsText = new PIXI.Text('Angels', MenuTextStyle);;
  var DemonsRect;
  var DemonsText = new PIXI.Text('Demons', MenuTextStyle);;
  var SpiritsRect;
  var SpiritsText = new PIXI.Text('Spirits', MenuTextStyle);;

  var MenuRectWidthScale = 0.18;
  var MenuRectHeightScale = 0.11;



  let GameContainer = new PIXI.Container();
  const QuestionTextStyle = new PIXI.TextStyle({
    fill: "white",
    fontSize: 48,
    strokeThickness: 2
  });
  const ChoicesTextStyle = new PIXI.TextStyle({
    fill: "white",
    fontSize: 32,
    strokeThickness: 0
  });

  var QuestionText = new PIXI.Text('Question', QuestionTextStyle);
  var OptionA;
  var OptionB;
  var OptionC;
  var OptionD;

  var OptionAText = new PIXI.Text('Placeholder', ChoicesTextStyle);
  var OptionBText = new PIXI.Text('Placeholder', ChoicesTextStyle);
  var OptionCText = new PIXI.Text('Placeholder', ChoicesTextStyle);
  var OptionDText = new PIXI.Text('Placeholder', ChoicesTextStyle);

  var BackButton = new PIXI.Graphics();

  setup();

  function setup() {
    app.stage.addChild(MenuContainer);
    app.stage.addChild(GameContainer);
    HideGame();

    var style = new PIXI.TextStyle({
      fontFamily: "Arial",
      fontSize: 52,
      fill: GenerateRainbow(),
      fillGradientType: 1,
      stroke: "#000000",
      strokeThickness: 4,
      dropShadow: true,
      dropShadowColor: "#000000",
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6
    });



    TitleObject = new PIXI.Text(Title, style);
    TitleObject.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
    MenuContainer.addChild(TitleObject);

    GodsRect = new PIXI.Graphics();
    GodsRect.beginFill(0xffffff);
    GodsRect.tint = 0xb3b3b3;
    GodsRect.drawRoundedRect(0, 0, app.renderer.width * MenuRectWidthScale, app.renderer.height * MenuRectHeightScale, 25);
    GodsRect.endFill();
    GodsRect.interactive = true;

    GodsRect.mouseover = function (mouseData) {
      GodsRect.tint = 0xbfbfbf;
    }

    GodsRect.mouseout = function (mouseData) {
      GodsRect.tint = 0xb3b3b3;
    }

    GodsRect.on('click', () => { StartGame(SpiritTypes.Gods) });
    MenuContainer.addChild(GodsRect);

    AngelsRect = new PIXI.Graphics();
    AngelsRect.beginFill(0xffffff);
    AngelsRect.tint = 0x98cdca;
    AngelsRect.drawRoundedRect(0, 0, app.renderer.width * MenuRectWidthScale, app.renderer.height * MenuRectHeightScale, 25);
    AngelsRect.endFill();
    AngelsRect.interactive = true;

    AngelsRect.mouseover = function (mouseData) {
      AngelsRect.tint = 0xa9d6d3;
    }

    AngelsRect.mouseout = function (mouseData) {
      AngelsRect.tint = 0x98cdca;
    }
    AngelsRect.on('click', () => { StartGame(SpiritTypes.Angels) });
    MenuContainer.addChild(AngelsRect);

    DemonsRect = new PIXI.Graphics();
    DemonsRect.beginFill(0xffffff);
    DemonsRect.tint = 0xb34d5e;
    DemonsRect.drawRoundedRect(0, 0, app.renderer.width * MenuRectWidthScale, app.renderer.height * MenuRectHeightScale, 25);
    DemonsRect.endFill();
    DemonsRect.interactive = true;

    DemonsRect.mouseover = function (mouseData) {
      DemonsRect.tint = 0xba5e6e;
    }

    DemonsRect.mouseout = function (mouseData) {
      DemonsRect.tint = 0xb34d5e;
    }
    DemonsRect.on('click', () => { StartGame(SpiritTypes.Demons) });
    MenuContainer.addChild(DemonsRect);

    SpiritsRect = new PIXI.Graphics();
    SpiritsRect.beginFill(0xffffff);
    SpiritsRect.tint = 0x4d75b3;
    SpiritsRect.drawRoundedRect(0, 0, app.renderer.width * MenuRectWidthScale, app.renderer.height * MenuRectHeightScale, 25);
    SpiritsRect.endFill();
    SpiritsRect.interactive = true;

    SpiritsRect.mouseover = function (mouseData) {
      SpiritsRect.tint = 0x5e83ba;
    }

    SpiritsRect.mouseout = function (mouseData) {
      SpiritsRect.tint = 0x4d75b3;
    }
    SpiritsRect.on('click', () => { StartGame(SpiritTypes.Spirits) });
    MenuContainer.addChild(SpiritsRect);

    MenuContainer.addChild(GodsText);
    MenuContainer.addChild(AngelsText);
    MenuContainer.addChild(DemonsText);
    MenuContainer.addChild(SpiritsText);

    OptionA = new PIXI.Graphics();
    OptionA.beginFill(0xffffff);
    OptionA.tint = RectColor;
    OptionA.drawRoundedRect(0, 0, app.renderer.width / 2 - Margin * 2, app.renderer.height / 2 / 2 - Margin * 2, 25);
    OptionA.endFill();
    OptionA.interactive = true;
    OptionA.mouseover = function (mouseData) {
      OptionA.tint = 0x40bbbf;
    }

    OptionA.mouseout = function (mouseData) {
      OptionA.tint = RectColor;
    }

    OptionA.on('click', () => { CheckAnswer(OptionAText.text); });

    OptionB = new PIXI.Graphics();
    OptionB.beginFill(0xffffff);
    OptionB.tint = RectColor;
    OptionB.drawRoundedRect(0, 0, app.renderer.width / 2 - Margin * 2, app.renderer.height / 2 / 2 - Margin * 2, 25);
    OptionB.endFill();
    OptionB.interactive = true;
    OptionB.mouseover = function (mouseData) {
      OptionB.tint = 0x40bbbf;
    }

    OptionB.mouseout = function (mouseData) {
      OptionB.tint = RectColor;
    }

    OptionB.on('click', () => { CheckAnswer(OptionBText.text); });

    OptionC = new PIXI.Graphics();
    OptionC.beginFill(0xffffff);
    OptionC.tint = RectColor;
    OptionC.drawRoundedRect(0, 0, app.renderer.width / 2 - Margin * 2, app.renderer.height / 2 / 2 - Margin * 2, 25);
    OptionC.endFill();
    OptionC.interactive = true;
    OptionC.mouseover = function (mouseData) {
      OptionC.tint = 0x40bbbf;
    }

    OptionC.mouseout = function (mouseData) {
      OptionC.tint = RectColor;
    }

    OptionC.on('click', () => { CheckAnswer(OptionCText.text); });
    OptionD = new PIXI.Graphics();
    OptionD.beginFill(0xffffff);
    OptionD.tint = RectColor;
    OptionD.drawRoundedRect(0, 0, app.renderer.width / 2 - Margin * 2, app.renderer.height / 2 / 2 - Margin * 2, 25);
    OptionD.endFill();
    OptionD.interactive = true;
    OptionD.mouseover = function (mouseData) {
      OptionD.tint = 0x40bbbf;
    }

    OptionD.mouseout = function (mouseData) {
      OptionD.tint = RectColor;
    }

    OptionD.on('click', () => { CheckAnswer(OptionDText.text); });
    GameContainer.addChild(QuestionText);
    GameContainer.addChild(OptionA);
    GameContainer.addChild(OptionB);
    GameContainer.addChild(OptionC);
    GameContainer.addChild(OptionD);

    GameContainer.addChild(OptionAText);
    GameContainer.addChild(OptionBText);
    GameContainer.addChild(OptionCText);
    GameContainer.addChild(OptionDText);

    BackButton.interactive = true;
    BackButton.beginFill(0xffffff).drawRegularPolygon(0, 0, 20, 3, 4.71)
    BackButton.tint = 0x5e636e;
    BackButton.mouseover = function (mouseData) {
      BackButton.tint = 0x757c8a;
    }

    BackButton.mouseout = function (mouseData) {
      BackButton.tint = 0x5e636e;
    }

    BackButton.on('click', () => {
      // To be implemented better
      location.reload();
    });
    GameContainer.addChild(BackButton);
    PositionObjects();


    app.ticker.maxFPS = FPS;
    app.ticker.add((delta) => Update(delta));


  }

  function Update(delta) {
    // If more advanced graphics are needed later on
  }

  // Functions

  function CalculateDiagonal(Width, Height) {
    return Math.sqrt(Math.pow(Width, 2.0) + Math.pow(Height, 2.0));
  }
  function GenerateRainbow() {
    var Rainbow = [];
    var CurrentColor = tinycolor("hsl(0, 75%, 60%)");

    for (var i = 0; i != 360 / 30; i++) {
      Rainbow.push(CurrentColor.toHexString())
      CurrentColor.spin(30);
    }
    return Rainbow;
  }

  function StartGame(SpiritType) {
    CurrentSpiritType = SpiritType

    HideMenu();
    CurrentScreen = Screens.Game;
    NextQuestion(CurrentSpiritType);
    PositionObjects();
    ShowGame();
  }

  function HideGame() {
    GameContainer.alpha = 0;
  }

  function ShowGame() {
    GameContainer.alpha = 100;
  }
  function HideMenu() {
    MenuContainer.alpha = 0;
  }

  function ShowMenu() {
    MenuContainer.alpha = 100;
  }

  function NextQuestion(SpiritType) {
    CurrentQuestion = GetRandomQuestion(AnsweredQuestions.slice(0), SpiritType); // jump here
    CurrentQuestion.Choices = shuffleArray(CurrentQuestion.Choices);

    QuestionText.text = CurrentQuestion.Question;
    OptionAText.text = CurrentQuestion.Choices[0];
    OptionBText.text = CurrentQuestion.Choices[1];
    OptionCText.text = CurrentQuestion.Choices[2];
    OptionDText.text = CurrentQuestion.Choices[3];
  }

  function shuffleArray(array) {
    var arr = array.slice(0); // Clone Array
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

  function GetRandomQuestion(AlreadyAnswered, SpiritType) {
    var Tier = GetRandomTier(AlreadyAnswered, SpiritType);
    var PossibleQuestions = GetQuestionsBySpiritType(SpiritType)[Tier].slice(0);

    var QuestionsDone = AlreadyAnswered[Tier].sort((a, b) => a - b).reverse();

    for (var i = 0; i < QuestionsDone.length; i++) {
      PossibleQuestions.splice(QuestionsDone[i], 1);
    }
    
    CurrentQuestionTier = Tier;
    console.log(CurrentQuestionTier + ":" + Tier)
    
    return PossibleQuestions[Math.floor(Math.random() * PossibleQuestions.length)]
  }

  function GetRandomTier(AlreadyAnswered, SpiritType)
  {
    // I feel bad for whoever has to try and understand this function
    var Questions = GetQuestionsBySpiritType(SpiritType);

    // Prioritize higher quality questions
    var TierChances = [0.45, 0.25, 0.20, 0.10]
    for (var i = 0; i < TierChances.length; i++)
    {
      if (AlreadyAnswered[i].length >= Questions[i].length)
      {
        TierChances[i] = 0;
      }
    }

    var SumOfChances = TierChances.reduce((a, b) => a + b)
    if (SumOfChances == 0)
      {
        // Implement better
        alert("You've successfully answered all questions! Please consider contributing by adding your own.")
        location.reload(); 
      }
      else
      {
        var RandomNum = Math.random();
        var TierChancesSorted = TierChances.slice(0).sort((a, b) => a - b).reverse()
        
        for (var i = 0; i < TierChancesSorted.length; i++)
        {
          if (TierChancesSorted[i] == 0)
          {
            continue;
          }
          // Adjust tier chances to add up to 100%.
          TierChances[i] = TierChancesSorted[i] * (1 / SumOfChances);
          TierChancesSorted[i] = TierChancesSorted[i] * (1 / SumOfChances);

          var Min = 0;

          for (var j = 0; j < i; j++)
          {
            Min += TierChancesSorted[j]
          }

          if (RandomNum >= Min && RandomNum <= Min + TierChancesSorted[i])
          {
            return TierChances.indexOf(TierChancesSorted[i])
          }
        }
        
      }

      return CurrentTier;
  }

  function GetQuestionsBySpiritType(SpiritType)
  {
    switch (SpiritType) {
      case SpiritTypes.Gods:
        return GodsQuestions

      case SpiritTypes.Angels:
        return AngelsQuestions

      case SpiritTypes.Demons:
        return DemonsQuestions

      case SpiritTypes.Spirits:
        return SpiritQuestions
    }
  }
  function CheckAnswer(Answer) {
    /*if (CurrentQuestion.Answer == Answer)
    {
      // Correct
    }
    else
    {
      // Wrong
    }*/
    console.log(OptionA.text)
    OptionA.interactive = false;
    OptionB.interactive = false;
    OptionC.interactive = false;
    OptionD.interactive = false;

    if (OptionAText.text == CurrentQuestion.Answer) {
      OptionA.tint = 0x26d953;
    }
    else {
      OptionA.tint = 0xd92635;
    }

    if (OptionBText.text == CurrentQuestion.Answer) {
      OptionB.tint = 0x26d953;
    }
    else {
      OptionB.tint = 0xd92635;
    }

    if (OptionCText.text == CurrentQuestion.Answer) {
      OptionC.tint = 0x26d953;
    }
    else {
      OptionC.tint = 0xd92635;
    }

    if (OptionDText.text == CurrentQuestion.Answer) {
      OptionD.tint = 0x26d953;
    }
    else {
      OptionD.tint = 0xd92635;
    }

    switch (CurrentSpiritType) {
      case SpiritTypes.Gods:
        AnsweredQuestions[CurrentQuestionTier].push(GodsQuestions[CurrentQuestionTier].indexOf(CurrentQuestion));
        break;

      case SpiritTypes.Angels:
        AnsweredQuestions[CurrentQuestionTier].push(AngelsQuestions[CurrentQuestionTier].indexOf(CurrentQuestion));
        break;

      case SpiritTypes.Demons:
        AnsweredQuestions[CurrentQuestionTier].push(DemonsQuestions[CurrentQuestionTier].indexOf(CurrentQuestion));
        break;

      case SpiritTypes.Spirits:
        AnsweredQuestions[CurrentQuestionTier].push(SpiritQuestions[CurrentQuestionTier].indexOf(CurrentQuestion));
        break;
    }

    // Remove Effect and advance question
    setTimeout(() => {
      OptionA.tint = RectColor;
      OptionB.tint = RectColor;
      OptionC.tint = RectColor;
      OptionD.tint = RectColor;

      OptionA.interactive = true;
      OptionB.interactive = true;
      OptionC.interactive = true;
      OptionD.interactive = true;

      NextQuestion(CurrentSpiritType);
      PositionObjects();
    }, 2500);

  }


  // Events
  function PositionObjects() {
    app.renderer.resize(window.innerWidth, window.innerHeight);
    GameDiagonal = CalculateDiagonal(app.renderer.width, app.renderer.height);
    Margin = GameDiagonal * 0.005;
    if (CurrentScreen == Screens.Menu) {
      TitleObject.position.set(app.renderer.width / 2 - TitleObject.width / 2, app.renderer.height / 7);

      GodsRect.width = app.renderer.width * MenuRectWidthScale;
      GodsRect.height = app.renderer.height * MenuRectHeightScale;
      GodsRect.x = app.renderer.width / 2 - GodsRect.width / 2;
      GodsRect.y = TitleObject.y + GodsRect.height / 2 + TitleObject.height / 2 + Margin;
      GodsText.position.set(GodsRect.x + (GodsRect.width / 2 - GodsText.width / 2), GodsRect.y + (GodsRect.height / 2 - GodsText.height / 2));

      AngelsRect.width = app.renderer.width * MenuRectWidthScale;
      AngelsRect.height = app.renderer.height * MenuRectHeightScale;
      AngelsRect.x = app.renderer.width / 2 - AngelsRect.width / 2;
      AngelsRect.y = GodsRect.y + AngelsRect.height / 2 + GodsRect.height / 2 + Margin;
      AngelsText.position.set(AngelsRect.x + (AngelsRect.width / 2 - AngelsText.width / 2), AngelsRect.y + (AngelsRect.height / 2 - AngelsText.height / 2));

      DemonsRect.width = app.renderer.width * MenuRectWidthScale;
      DemonsRect.height = app.renderer.height * MenuRectHeightScale;
      DemonsRect.x = app.renderer.width / 2 - AngelsRect.width / 2;
      DemonsRect.y = AngelsRect.y + DemonsRect.height / 2 + AngelsRect.height / 2 + Margin;
      DemonsText.position.set(DemonsRect.x + (DemonsRect.width / 2 - DemonsText.width / 2), DemonsRect.y + (DemonsRect.height / 2 - DemonsText.height / 2));

      SpiritsRect.width = app.renderer.width * MenuRectWidthScale;
      SpiritsRect.height = app.renderer.height * MenuRectHeightScale;
      SpiritsRect.x = app.renderer.width / 2 - DemonsRect.width / 2;
      SpiritsRect.y = DemonsRect.y + SpiritsRect.height / 2 + DemonsRect.height / 2 + Margin;
      SpiritsText.position.set(SpiritsRect.x + (SpiritsRect.width / 2 - SpiritsText.width / 2), SpiritsRect.y + (SpiritsRect.height / 2 - SpiritsText.height / 2));

    }

    if (CurrentScreen == Screens.Game) {


      BackButton.width = GameDiagonal * 0.02
      BackButton.height = GameDiagonal * 0.02
      BackButton.x = BackButton.width + Margin;
      BackButton.y = BackButton.height / 2 + Margin;

      QuestionText.x = Margin + app.renderer.width / 2 - QuestionText.width / 2;
      QuestionText.y = app.renderer.height / 3 / 2 - QuestionText.height / 2 - Margin;

      OptionA.width = app.renderer.width / 2 - Margin * 2;
      OptionA.height = app.renderer.height / 2 / 2 - Margin * 2;

      OptionB.width = app.renderer.width / 2 - Margin * 2;
      OptionB.height = app.renderer.height / 2 / 2 - Margin * 2;

      OptionC.width = app.renderer.width / 2 - Margin * 2;
      OptionC.height = app.renderer.height / 2 / 2 - Margin * 2;

      OptionD.width = app.renderer.width / 2 - Margin * 2;
      OptionD.height = app.renderer.height / 2 / 2 - Margin * 2;

      OptionC.x = Margin;
      OptionC.y = app.renderer.height - OptionC.height - Margin;

      OptionD.x = 2 * Margin + OptionC.width;
      OptionD.y = OptionC.y;

      OptionA.x = Margin;
      OptionA.y = OptionC.y - OptionA.height - Margin;

      OptionB.x = 2 * Margin + OptionA.width;
      OptionB.y = OptionA.y;

      OptionAText.position.set(OptionA.x + (OptionA.width / 2 - OptionAText.width / 2), OptionA.y + (OptionA.height / 2 - OptionAText.height / 2));
      OptionBText.position.set(OptionB.x + (OptionB.width / 2 - OptionBText.width / 2), OptionB.y + (OptionB.height / 2 - OptionBText.height / 2));
      OptionCText.position.set(OptionC.x + (OptionC.width / 2 - OptionCText.width / 2), OptionC.y + (OptionC.height / 2 - OptionCText.height / 2));
      OptionDText.position.set(OptionD.x + (OptionD.width / 2 - OptionDText.width / 2), OptionD.y + (OptionD.height / 2 - OptionDText.height / 2));
    }
  }

  $(window).resize(function () {
    PositionObjects();
    setTimeout(PositionObjects, 250);
  });


};
