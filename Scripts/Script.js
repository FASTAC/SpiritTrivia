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
  var SpiritQuestions = [
    {
      "Question": "Who is the Genius of Irrevocable Choice?",
      "Choices": ["Sialul", "Nitika", "Zeffak", "Sair"], 
      "Answer": "Zeffak"
    }
  ]
  var CurrentQuestion;
  var AnsweredQuestions = [];

  const app = new PIXI.Application({
    backgroundColor: 0x36393f,
    resizeTo: window,
    antialias: true
  });
  console.log(app.resolution)
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
