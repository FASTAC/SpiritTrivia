window.onload = function () {
  var Screens = { Menu: 1, Game: 2 };
  var SpiritTypes = { Gods: 0, Angels: 1, Demons: 2, Spirits: 3 };
  var CurrentSpiritType = -1;
  var CurrentScreen = Screens.Menu;
  var FPS = 30;

  
  var GodsQuestions = [
    {
      "Question": "Which goddess is commonly titled \"the goddess of the crossroads\"?",
      "Choices": ["Athena", "Hecate", "Artemis", "Aphrodite"], 
      "Answer": "Hecate"
    }
  ]
    
  var AngelsQuestions = [
    {
      "Question": "What power is commonly associated with Archangel Michael?",
      "Choices": ["Protection", "Healing", "Love", "Rain"], 
      "Answer": "Protection"
    },
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
    }]
  var DemonsQuestions = [
    {
      "Question": "Which demon possesses the title of \"the light bringer\"?",
      "Choices": ["Dantalion", "Azazel", "Lucifer", "Astaroth"], 
      "Answer": "Lucifer"
    }
  ]
  var SpiritQuestions = 
  [
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
    ]
    
  var CurrentQuestion;
  var AnsweredQuestions = [];

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
    BackButton.beginFill(0xffffff).drawRegularPolygon(0,0, 20, 3, 4.71) 
    BackButton.tint = 0x5e636e;
    BackButton.mouseover = function (mouseData) {
      BackButton.tint = 0x757c8a;
    }

    BackButton.mouseout = function (mouseData) {
      BackButton.tint = 0x5e636e;
    }

    BackButton.on('click', () => 
    { 
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

  function NextQuestion(SpiritType)
  {
    CurrentQuestion = GetRandomQuestion(AnsweredQuestions, SpiritType);
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
    var PossibleQuestions;
    switch (SpiritType) {
      case SpiritTypes.Gods:
        PossibleQuestions = GodsQuestions.slice(0)
        break;

      case SpiritTypes.Angels:
        PossibleQuestions = AngelsQuestions.slice(0)
        break;

      case SpiritTypes.Demons:
        PossibleQuestions = DemonsQuestions.slice(0)
        break;

      case SpiritTypes.Spirits:
        PossibleQuestions = SpiritQuestions.slice(0)
        break;
    }

    AlreadyAnswered = AlreadyAnswered.sort((a, b) => a - b).reverse();

    for (var i = 0; i < AlreadyAnswered.length; i++) 
    {
      PossibleQuestions.splice(AlreadyAnswered[i], 1);
    }

    return PossibleQuestions[Math.floor(Math.random() * PossibleQuestions.length)]
  }

  function CheckAnswer(Answer)
  {
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

    if (OptionAText.text == CurrentQuestion.Answer)
    {
      OptionA.tint = 0x26d953;
    }
    else
    {
      OptionA.tint = 0xd92635;
    }

    if (OptionBText.text == CurrentQuestion.Answer)
    {
      OptionB.tint = 0x26d953;
    }
    else
    {
      OptionB.tint = 0xd92635;
    }

    if (OptionCText.text == CurrentQuestion.Answer)
    {
      OptionC.tint = 0x26d953;
    }
    else
    {
      OptionC.tint = 0xd92635;
    }

    if (OptionDText.text == CurrentQuestion.Answer)
    {
      OptionD.tint = 0x26d953;
    }
    else
    {
      OptionD.tint = 0xd92635;
    }

    switch(CurrentSpiritType)
    {
      case SpiritTypes.Gods:
        AnsweredQuestions.push(GodsQuestions.indexOf(CurrentQuestion));
        break;
  
      case SpiritTypes.Angels:
        AnsweredQuestions.push(AngelsQuestions.indexOf(CurrentQuestion));
        break;
  
      case SpiritTypes.Demons:
        AnsweredQuestions.push(DemonsQuestions.indexOf(CurrentQuestion));
        break;
  
      case SpiritTypes.Spirits:
        AnsweredQuestions.push(SpiritQuestions.indexOf(CurrentQuestion));
        break;
    }

    console.log(AnsweredQuestions);
    // Remove Effect and advance question
    setTimeout(() => 
    {
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
      BackButton.y =  BackButton.height / 2 + Margin;

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
