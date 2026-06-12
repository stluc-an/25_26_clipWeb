/*----------------------------------------*\
  23_24_AN1_clipWeb - main.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2024-02-23 00:24:49
  @Last Modified time: 2024-02-23 08:58:36
\*----------------------------------------*/
let BPM = 142;
let audioPath = "assets/audio/efemer.mp3";
let sequencer;
let bird;
let bird2;
let bird3;
let bird4;
let cautand1;
let cautand2;
let begin1;
let closeup;
let above;
let delirand;
let delirand2;
let compass1;
let compass2;
let compassBird;
let nisip;
let smokePerson;
let personFreeze;
let fumBird;
let fumA;
let fumB;
let efemerBird;
let clouds;
let bigEfemerBird;
let efemer1;
let efemer2;
let efemer3;
let eter1;
let eter2;
let eter3;
let treasureMap;
let treasureBird;
let nuiBineHands;
let nuiBine;
let nuPot;
let gand;
let gandBird;
let dupaTine;
let birdInHands;
let handBird;
let eyes;
let eyesSmokeA;
let eyesSmokeB;
let ascend;
let handBreak;
let birdBreak;
let handReach;
let smokeOne;
let smokeTwo;




function setup(){
	createCanvas(windowWidth, windowHeight);
	sequencer = new Sequencer(audioPath, BPM, false);

  begin1 = new Animator(1,18,"./assets/images/begin/begin_imgNum_.jpg");
  begin1.setSize(windowWidth,windowHeight);

  closeup = new Animator(1,5,"./assets/images/begin/closeup/closeup_imgNum_.png");
  closeup.setSize(windowWidth,windowHeight);
  
  above = new Animator(1,10,"./assets/images/begin/above/above_imgNum_.png");
  above.setSize(windowWidth,windowHeight);
   


	bird = new Animator(1,1,"./assets/images/bird/flyA.png");
  bird.setSize(windowWidth,windowHeight);

	bird2 = new Animator(1,1,"./assets/images/bird/flyB.png");
  bird2.setSize(windowWidth,windowHeight);
	
	bird3 = new Animator(1,1,"./assets/images/bird/flyC.png");
  bird3.setSize(windowWidth,windowHeight);
	
 	bird4 = new Animator(1,1,"./assets/images/bird/flyD.png");
  bird4.setSize(windowWidth,windowHeight);

  

  cautand1 = new Animator(1,4,"./assets/images/cautand/cautandEye_imgNum_.png");
  cautand1.setSize(windowWidth, windowHeight);

  cautand2 = new Animator(1,4,"./assets/images/cautand/cautandEyeB_imgNum_.png");
  cautand2.setSize(windowWidth, windowHeight);



  delirand = new Animator(1,4,"./assets/images/delirand/delirand_imgNum_.png");
  delirand.setSize(windowWidth, windowHeight);
 
  delirand2 = new Animator(1,4,"./assets/images/delirand/delirandB_imgNum_.png");
  delirand2.setSize(windowWidth, windowHeight);
  


  compassBird = new Animator(1,1,"./assets/images/compass/compassBird/compassBird.png");
  compassBird.setSize(429, 375);
  compassBird.setPosition(0, windowHeight);

  compass1 = new Animator(1,2,"./assets/images/compass/compassEst/compassEst_imgNum_.png");
  compass1.setSize(windowWidth, windowHeight);
  
  compass2 = new Animator(1,2,"./assets/images/compass/compassWest/compassWest_imgNum_.png");
  compass2.setSize(windowWidth, windowHeight);

  
  nisip = new Animator(1,7,"./assets/images/refrain/nisip/nisip_imgNum_.jpg");
  nisip.setSize(windowWidth, windowHeight);


  smokePerson = new Animator(1,18,"./assets/images/refrain/smokePerson/person_imgNum_.jpg");
  smokePerson.setSize(windowWidth, windowHeight);

  personFreeze = new Animator(1,1,"./assets/images/refrain/smokePerson/person18.jpg");
  personFreeze.setSize(windowWidth, windowHeight);


  fumBird = new Animator(1,1,"./assets/images/refrain/fum/fumBird_imgNum_.jpg");
  fumBird.setSize(windowWidth, windowHeight);
  
  fumA = new Animator(1,1,"./assets/images/refrain/fum/fumA_imgNum_.png");
  fumA.setSize(windowWidth, windowHeight);
  fumA.setPosition(-windowWidth, 0);

  fumB = new Animator(1,1,"./assets/images/refrain/fum/fumB_imgNum_.png");
  fumB.setSize(windowWidth, windowHeight);
  fumB.setPosition(windowWidth, 0);


  efemerBird = new Animator(1,8,"./assets/images/refrain/efemerBird/efemerBird_imgNum_.jpg");
  efemerBird.setSize(windowWidth, windowHeight);

  bigEfemerBird = new Animator(1,1,"./assets/images/refrain/efemerBird/bigEfemerBird.png");
  bigEfemerBird.setSize(windowWidth, windowHeight);
  bigEfemerBird.setPosition(0, windowHeight);

  efemer1 = new Animator(1,1,"./assets/images/efemer/efemer.jpg");
  efemer1.setSize(windowWidth, windowHeight);

  efemer2 = new Animator(1,1,"./assets/images/efemer/efemerB.jpg");
  efemer2.setSize(windowWidth, windowHeight);

  efemer3 = new Animator(1,1,"./assets/images/efemer/efemerC.jpg");
  efemer3.setSize(windowWidth, windowHeight);


  eter1 = new Animator(1,1,"./assets/images/efemer/inEter/inEter.jpg");
  eter1.setSize(windowWidth, windowHeight);

  eter2 = new Animator(1,1,"./assets/images/efemer/inEter/inEterB.jpg");
  eter2.setSize(windowWidth, windowHeight);

  eter3 = new Animator(1,1,"./assets/images/efemer/inEter/inEterC.jpg");
  eter3.setSize(windowWidth, windowHeight);


  clouds = new Animator(1,1,"./assets/images/refrain/efemerBird/clouds.png");
  clouds.setSize(windowWidth, windowHeight);

  treasureMap = new Animator(1,1,"./assets/images/vin/treasureMap.jpg");
  treasureMap.setSize(windowWidth, windowHeight);

  treasureBird = new Animator(1,1,"./assets/images/vin/treasureBird.png");
  treasureBird.setSize(261, 265);
  treasureBird.setPosition(0, 0);



  nuiBineHands = new Animator(1,1,"./assets/images/gand/nuiBineHands.png");
  nuiBineHands.setSize(windowWidth, windowHeight);
  nuiBineHands.setPosition(0, 0);

  nuiBine = new Animator(1,1,"./assets/images/gand/nuiBine.jpg");
  nuiBine.setSize(windowWidth, windowHeight);

  nuPot = new Animator(1,6,"./assets/images/gand/nuPot_imgNum_.jpg");
  nuPot.setSize(windowWidth, windowHeight);

  gand = new Animator(1,3,"./assets/images/gand/gand_imgNum_.jpg");
  gand.setSize(windowWidth, windowHeight);

  gandBird = new Animator(1,2,"./assets/images/gand/gandBird_imgNum_.png");
  gandBird.setSize(windowWidth, windowHeight);
  gandBird.setPosition(0, 0);

  dupaTine = new Animator(1,5,"./assets/images/vinb/dupaTine_imgNum_.jpg");
  dupaTine.setSize(windowWidth, windowHeight);

  birdInHands = new Animator(1,7,"./assets/images/refrain2/birdInHands_imgNum_.jpg");
  birdInHands.setSize(windowWidth, windowHeight);

  handBird = new Animator(1,1,"./assets/images/refrain2/handBird.png");
  handBird.setSize(windowWidth, windowHeight);
  handBird.setPosition(0, 0);

  eyes = new Animator(1,1,"./assets/images/refrain2/eyes.jpg");
  eyes.setSize(windowWidth, windowHeight);

  eyesSmokeA = new Animator(1,1,"./assets/images/refrain/fum/fumA_imgNum_.png");
  eyesSmokeA.setSize(windowWidth, windowHeight);
  eyesSmokeA.setPosition(-windowWidth, 0);

  eyesSmokeB = new Animator(1,1,"./assets/images/refrain/fum/fumB_imgNum_.png");
  eyesSmokeB.setSize(windowWidth, windowHeight);
  eyesSmokeB.setPosition(windowWidth, 0);

  ascend = new Animator(1,13,"./assets/images/refrain2/ascend_imgNum_.jpg");
  ascend.setSize(windowWidth, windowHeight);


  handBreak = new Animator(1,1,"./assets/images/break/hand.png");
  handBreak.setSize(windowWidth, windowHeight);
  handBreak.setPosition(0, 0);

  birdBreak = new Animator(1,1,"./assets/images/vin/treasureBird.png");
  birdBreak.setSize(261, 265);
  birdBreak.setPosition(0, 0);

  handReach = new Animator(1,7,"./assets/images/break/handReach_imgNum_.jpg");
  handReach.setSize(windowWidth, windowHeight);

  bigEfemerBirdB = new Animator(1,1,"./assets/images/refrain/efemerBird/bigEfemerBird.png");
  bigEfemerBirdB.setSize(windowWidth, windowHeight);
  bigEfemerBirdB.setPosition(0, windowHeight);

  smokeOne = new Animator(1,1,"./assets/images/refrain/fum/fumA_imgNum_.png");
  smokeOne.setSize(windowWidth, windowHeight);
  smokeOne.setPosition(-windowWidth, 0);

  smokeTwo = new Animator(1,1,"./assets/images/refrain/fum/fumB_imgNum_.png");
  smokeTwo.setSize(windowWidth, windowHeight);
  smokeTwo.setPosition(windowWidth, 0);









sequencer.registerSequence({
		name : "my first sequence", 
		start : 1, 
		stop : 30, 
		onStart : function (event){
			begin1.show();
		}, 
		onStop : function (event){
			begin1.hide();
		},
		onStep : function (event){
			begin1.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

sequencer.registerSequence({
		name : "closeup fly", 
		start : 10, 
		stop : 30, 
		onStart : function (event){
			closeup.show();
		}, 
		onStop : function (event){
			closeup.hide();
		},
		onStep : function (event){
			closeup.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

sequencer.registerSequence({
		name : "above fly", 
		start : 18, 
		stop : 30, 
		onStart : function (event){
			above.show();
		}, 
		onStop : function (event){
			above.hide();
		},
		onStep : function (event){
			above.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "bird fly first", 
		start : 31.75, 
		stop : 33, 
		onStart : function (event){
			bird.show();
		}, 
		onStop : function (event){
			bird.hide();
		}, 
		measure : 10, 
		steps : [1]
	});


sequencer.registerSequence({
		name : "bird fly", 
		start : 32.25, 
		stop : 33, 
		onStart : function (event){
			bird2.show();
		}, 
		onStop : function (event){
			bird2.hide();
		},
		measure : 9, 
		steps : [1]
	});

sequencer.registerSequence({
		name : "bird fly again", 
		start : 32.5, 
		stop : 33, 
		onStart : function (event){
			bird3.show();
		}, 
		onStop : function (event){
			bird3.hide();
		},
		measure : 8, 
		steps : [1]
	});

sequencer.registerSequence({
		name : "bird fly again", 
		start : 32.75, 
		stop : 33, 
		onStart : function (event){
			bird4.show();
		}, 
		onStop : function (event){
			bird4.hide();
		},
		measure : 7, 
		steps : [1]
	});



sequencer.registerSequence({
		name : "eye looking around", 
		start : 34, 
		stop : 40, 
		onStart : function (event){
			cautand1.show();
		}, 
		onStop : function (event){
			cautand1.hide();
		},
		onStep : function (event){
			cautand1.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

sequencer.registerSequence({
		name : "eye looking around again", 
		start : 36, 
		stop : 40, 
		onStart : function (event){
			cautand2.show();
		}, 
		onStop : function (event){
			cautand2.hide();
		},
		onStep : function (event){
			cautand2.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});



sequencer.registerSequence({
		name : "eye spiral", 
		start : 42, 
		stop : 50, 
		onStart : function (event){
			delirand.show();
		}, 
		onStop : function (event){
			delirand.hide();
		},
		onStep : function (event){
			delirand.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

sequencer.registerSequence({
		name : "eye spiral again", 
		start : 44, 
		stop : 50, 
		onStart : function (event){
			delirand2.show();
		}, 
		onStop : function (event){
			delirand2.hide();
		},
		onStep : function (event){
			delirand2.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});



sequencer.registerSequence({
		name : "compassbird fly", 
		start : 52, 
		stop : 62, 
		onStart : function (event){
			compassBird.show();
		}, 
		onStop : function (event){
			compassBird.hide();
		},
		onStep : function (event){
			compassBird.setPosition(compassBird.x+10, compassBird.y-10);
		}, 
		measure : 1, 
		steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
	});

sequencer.registerSequence({
		name : "est", 
		start : 52, 
		stop : 62, 
		onStart : function (event){
			compass1.show();
		}, 
		onStop : function (event){
			compass1.hide();
		},
		onStep : function (event){
			compass1.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

sequencer.registerSequence({
		name : "west", 
		start : 54, 
		stop : 62, 
		onStart : function (event){
			compass2.show();
		}, 
		onStop : function (event){
			compass2.hide();
		},
		onStep : function (event){
			compass2.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

 refrainSequence(63);


sequencer.registerSequence({
		name : " e ", 
		start : 110, 
		stop : 111, 
		onStart : function (event){
			efemer1.show();
		}, 
		onStop : function (event){
			efemer1.hide();
		},
		measure : 1, 
		steps : [1]
	});

sequencer.registerSequence({
		name : " fe ", 
		start : 111, 
		stop : 114, 
		onStart : function (event){
			efemer2.show();
		}, 
		onStop : function (event){
		  efemer2.hide();
		},
		measure : 1, 
		steps : [1]
	});

sequencer.registerSequence({
		name : "mer", 
		start : 114, 
		stop : 123, 
		onStart : function (event){
			efemer3.show();
		}, 
		onStop : function (event){
			efemer3.hide();
		}, 
		measure : 1, 
		steps : [1]
	});
sequencer.registerSequence({
		name : " in ", 
		start : 126, 
		stop : 128, 
		onStart : function (event){
			eter1.show();
		}, 
		onStop : function (event){
			eter1.hide();
		},
		measure : 1, 
		steps : [1]
	});

sequencer.registerSequence({
		name : " et ", 
		start : 128, 
		stop : 129, 
		onStart : function (event){
			eter2.show();
		}, 
		onStop : function (event){
		  eter2.hide();
		},
		measure : 1, 
		steps : [1]
	});

sequencer.registerSequence({
		name : "ter", 
		start : 129, 
		stop : 133, 
		onStart : function (event){
			eter3.show();
		}, 
		onStop : function (event){
			eter3.hide();
		}, 
		measure : 1, 
		steps : [1]
	});

sequencer.registerSequence({
		name : " clouds", 
		start : 90, 
		stop : 133, 
		onStart : function (event){
			clouds.show();
		}, 
		onStop : function (event){
			clouds.hide();
		},
		measure : 1, 
		steps : [1]
	});

sequencer.registerSequence({
		name : "treasurebird fly", 
		start : 133, 
		stop : 150, 
		onStart : function (event){
			treasureBird.show();
		}, 
		onStop : function (event){
			treasureBird.hide();
		},
		onStep : function (event){
			treasureBird.setPosition(treasureBird.x+10, treasureBird.y+5);
		}, 
		measure : 1, 
		steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
	});


sequencer.registerSequence({
		name : "treasure map", 
		start : 133, 
		stop : 150, 
		onStart : function (event){
			treasureMap.show();
		}, 
		onStop : function (event){
			treasureMap.hide();
		},
		measure : 1, 
		steps : [1]
	});



sequencer.registerSequence({
		name : "da nu imi e bine hands", 
		start : 150, 
		stop : 155, 
		onStart : function (event){
			nuiBineHands.show();	
		}, 
		onStop : function (event){
			nuiBineHands.hide();
		},
		onStep : function (event){
			nuiBineHands.setPosition(nuiBineHands.x, nuiBineHands.y+5);
		}, 
		measure : 1, 
		steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
	});

sequencer.registerSequence({
		name : "da nu imi e bine", 
		start : 150, 
		stop : 155, 
		onStart : function (event){
			nuiBine.show();
		}, 
		onStop : function (event){
			
			nuiBine.hide();
		},
		measure : 1, 
		steps : [1]
	});

sequencer.registerSequence({
		name : "scot din", 
		start : 155, 
		stop : 161, 
		onStart : function (event){
			nuPot.show();	
		}, 
		onStop : function (event){
			nuPot.hide();
		},
		onStep : function (event){
			nuPot.next(true);
		}, 
		measure : 1, 
		steps : [1+1/2]
	});

sequencer.registerSequence({
		name : "gand", 
		start : 161, 
		stop : 163, 
		onStart : function (event){
			gand.show();
		}, 
		onStop : function (event){
			gand.hide();	
		},
		onStep : function (event){
			gand.next(true);
		}, 
		measure : 1, 
		steps : [1]
	});

sequencer.registerSequence({
		name : "gandBird", 
		start : 162, 
		stop : 166, 
		onStart : function (event){
			gandBird.show();
		}, 
		onStop : function (event){
			gandBird.hide();	
		},
		onStep : function (event){
			gandBird.next(true);
			gandBird.setPosition(gandBird.x+40, gandBird.y);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

sequencer.registerSequence({
		name : "dupaTine", 
		start : 166, 
		stop : 194, 
		onStart : function (event){
			dupaTine.show();
		}, 
		onStop : function (event){
			dupaTine.hide();	
		},
		onStep : function (event){
			dupaTine.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "person whole again again", 
		start : 194, 
		stop : 201, 
		onStart : function (event){
			smokePerson.show();
		}, 
		onStop : function (event){
			smokePerson.hide();
		}, 
				onStep : function (event){
			smokePerson.next(true);
		}, 

		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "person freeze again", 
		start : 201, 
		stop : 202, 
		onStart : function (event){
			personFreeze.show();
		}, 
		onStop : function (event){
			personFreeze.hide();
		}, 
		measure : 1, 
		steps : [1]
	});

sequencer.registerSequence({
		name : "nisip again", 
		start : 202, 
		stop : 209, 
		onStart : function (event){
			nisip.show();
		}, 
		onStop : function (event){
			nisip.hide();
		},
		onStep : function (event){
			nisip.next(true);
		}, 
		measure : 1, 
		steps : [1]
	});

sequencer.registerSequence({
		name : " bird smoke again", 
		start : 209, 
		stop : 218, 
		onStart : function (event){
			fumBird.show();
		}, 
		onStop : function (event){
			fumBird.hide();
		}, 
		measure : 1, 
		steps : [1]
	});

sequencer.registerSequence({
		name : " smoke into view again", 
		start : 209, 
		stop : 218, 
		onStart : function (event){
			fumA.show();
		}, 
		onStop : function (event){
			fumA.hide();
		}, 
		onStep : function (event){
			fumA.setPosition(fumA.x+5, fumA.y);
		},
		measure : 1, 
		steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
	});

sequencer.registerSequence({
		name : "second smoke into view again", 
		start : 209, 
		stop : 218, 
		onStart : function (event){
			fumB.show();
		}, 
		onStop : function (event){
			fumB.hide();
		}, 
		onStep : function (event){
			fumB.setPosition(fumB.x-5, fumB.y);
		},
		measure : 1, 
		steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]	});



sequencer.registerSequence({
		name : " bird goes straight for you", 
		start : 218, 
		stop : 221, 
		onStart : function (event){
			efemerBird.show();
		}, 
		onStop : function (event){
			efemerBird.hide();
		},
		onStep : function (event){
			efemerBird.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

sequencer.registerSequence({
		name : " bird goes upp", 
		start : 221, 
		stop : 227, 
		onStart : function (event){
			bigEfemerBirdB.show();
		}, 
		onStop : function (event){
			bigEfemerBirdB.hide();
		},
		onStep : function (event){
			bigEfemerBirdB.setPosition(bigEfemerBirdB.x, bigEfemerBirdB.y-50);
		}, 
		measure : 1, 
		steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
	});

sequencer.registerSequence({
		name : " clouds but more", 
		start : 218, 
		stop : 227, 
		onStart : function (event){
			clouds.show();
		}, 
		onStop : function (event){
			clouds.hide();
		},
		measure : 1, 
		steps : [1]
	});


sequencer.registerSequence({
		name : "bird in hands", 
		start : 227, 
		stop : 234, 
		onStart : function (event){
			birdInHands.show();	
		}, 
		onStop : function (event){
			birdInHands.hide();	
		},
		onStep : function (event){
			birdInHands.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

sequencer.registerSequence({
		name : "hand for bird in hands", 
		start : 227, 
		stop : 234, 
		onStart : function (event){
			handBird.show();
		}, 
		onStop : function (event){	
			handBird.hide();	
		},
		onStep : function (event){
			handBird.setPosition(handBird.x, handBird.y+10);
		}, 
		measure : 1, 
		steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
	});

sequencer.registerSequence({
		name : "nisip again again", 
		start : 234, 
		stop : 243, 
		onStart : function (event){
			nisip.show();
		}, 
		onStop : function (event){
			nisip.hide();
		},
		onStep : function (event){
			nisip.next(true);
		}, 
		measure : 1, 
		steps : [1]
	});

sequencer.registerSequence({
		name : "eyes", 
		start : 243, 
		stop : 251, 
		onStart : function (event){
			eyes.show();
		}, 
		onStop : function (event){
			eyes.hide();
		}, 
		measure : 1, 
		steps : [1]
	});

sequencer.registerSequence({
		name : " smoke again", 
		start : 243, 
		stop : 251, 
		onStart : function (event){
			eyesSmokeA.show();
		}, 
		onStop : function (event){
			eyesSmokeA.hide();
		}, 
		onStep : function (event){
			eyesSmokeA.setPosition(eyesSmokeA.x+20, eyesSmokeA.y);
		},
		measure : 1, 
		steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
	});

sequencer.registerSequence({
		name : "second smoke again", 
		start : 243, 
		stop : 251, 
		onStart : function (event){
			eyesSmokeB.show();
		}, 
		onStop : function (event){
			eyesSmokeB.hide();
		}, 
		onStep : function (event){
			eyesSmokeB.setPosition(eyesSmokeB.x-20, eyesSmokeB.y);
		},
		measure : 1, 
		steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]	

	});

sequencer.registerSequence({
		name : "ascending", 
		start : 251, 
		stop : 261, 
		onStart : function (event){
			ascend.show();
		}, 
		onStop : function (event){
			ascend.hide();
		}, 
		onStep : function (event){
			ascend.next(true);
		},
		measure : 1, 
		steps : [1, 1+1/2]	

	});

sequencer.registerSequence({
		name : "hand break", 
		start : 262, 
		stop : 290, 
		onStart : function (event){
			handBreak.show();
		}, 
		onStop : function (event){	
			handBreak.hide();	
		},
		onStep : function (event){
			handBreak.setPosition(handBreak.x+1, handBreak.y+2);
		}, 
		measure : 1, 
		steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
	});

sequencer.registerSequence({
		name : " break fly", 
		start : 277, 
		stop : 290, 
		onStart : function (event){
			birdBreak.show();
		}, 
		onStop : function (event){
			birdBreak.hide();
		},
		onStep : function (event){
			birdBreak.setPosition(birdBreak.x+10, birdBreak.y+2);
		}, 
		measure : 1, 
		steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
	});


sequencer.registerSequence({
		name : "hand reach", 
		start : 290, 
		stop : 306, 
		onStart : function (event){
			handReach.show();
		}, 
		onStop : function (event){
			handReach.hide();
		},
		onStep : function (event){
			handReach.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});


sequencer.registerSequence({
		name : " clouds almost last time", 
		start : 306, 
		stop : 322, 
		onStart : function (event){
			clouds.show();
		}, 
		onStop : function (event){
			clouds.hide();
		},
		measure : 1, 
		steps : [1]
	});

sequencer.registerSequence({
		name : " eh ", 
		start : 306, 
		stop : 310, 
		onStart : function (event){
			efemer1.show();
		}, 
		onStop : function (event){
			efemer1.hide();
		},
		measure : 1, 
		steps : [1]
	});

sequencer.registerSequence({
		name : " feh ", 
		start : 310, 
		stop : 314, 
		onStart : function (event){
			efemer2.show();
		}, 
		onStop : function (event){
		  efemer2.hide();
		},
		measure : 1, 
		steps : [1]
	});

sequencer.registerSequence({
		name : "merr", 
		start : 314, 
		stop : 323, 
		onStart : function (event){
			efemer3.show();
		}, 
		onStop : function (event){
			efemer3.hide();
		}, 
		measure : 1, 
		steps : [1]
	});

	sequencer.registerSequence({
		name : "person goes into smoke", 
		start : 323, 
		stop : 333, 
		onStart : function (event){
			smokePerson.show();
		}, 
		onStop : function (event){
			smokePerson.hide();
		}, 
				onStep : function (event){
			smokePerson.next(true);
		}, 

		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "nisip inca odata", 
		start : 333, 
		stop : 340, 
		onStart : function (event){
			nisip.show();
		}, 
		onStop : function (event){
			nisip.hide();
		},
		onStep : function (event){
			nisip.next(true);
		}, 
		measure : 1, 
		steps : [1]
	});

	sequencer.registerSequence({
		name : " bird in smoke", 
		start : 340, 
		stop : 358, 
		onStart : function (event){
			fumBird.show();
		}, 
		onStop : function (event){
			fumBird.hide();
		}, 
		measure : 1, 
		steps : [1]
	});


sequencer.registerSequence({
		name : " smoke is coming into view", 
		start : 340, 
		stop : 357, 
		onStart : function (event){
			smokeOne.show();
		}, 
		onStop : function (event){
			smokeOne.hide();
		}, 
		onStep : function (event){
			smokeOne.setPosition(smokeOne.x+10, smokeOne.y);
		},
		measure : 1, 
		steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
	});

sequencer.registerSequence({
		name : "second smoke is coming into view", 
		start : 340, 
		stop : 357, 
		onStart : function (event){
			smokeTwo.show();
		}, 
		onStop : function (event){
			smokeTwo.hide();
		}, 
		onStep : function (event){
			smokeTwo.setPosition(smokeTwo.x-10, smokeTwo.y);
		},
		measure : 1, 
		steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]	

	});

	sequencer.registerSequence({
		name : "bird goes into smoke pers", 
		start : 358, 
		stop : 364, 
		onStart : function (event){
			smokePerson.show();
		}, 
		onStop : function (event){
			smokePerson.hide();
		}, 
				onStep : function (event){
			smokePerson.next(true);
		}, 

		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "nisip final", 
		start : 364, 
		stop : 372, 
		onStart : function (event){
			nisip.show();
		}, 
		onStop : function (event){
			nisip.hide();
		},
		onStep : function (event){
			nisip.next(true);
		}, 
		measure : 1, 
		steps : [1]
	});

	sequencer.registerSequence({
		name : " birdSmoking", 
		start : 373, 
		stop : 380, 
		onStart : function (event){
			fumBird.show();
		}, 
		onStop : function (event){
			fumBird.hide();
		}, 
		measure : 1, 
		steps : [1]
	});

	sequencer.registerSequence({
		name : " smokeAFinal", 
		start : 373, 
		stop : 380, 
		onStart : function (event){
			smokeOne.show();
		}, 
		onStop : function (event){
			smokeOne.hide();
		}, 
		onStep : function (event){
			smokeOne.setPosition(smokeOne.x+5, smokeOne.y);
		},
		measure : 1, 
		steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
	});

sequencer.registerSequence({
		name : "smokeBfinal", 
		start : 372, 
		stop : 380, 
		onStart : function (event){
			smokeTwo.show();
		}, 
		onStop : function (event){
			smokeTwo.hide();
		}, 
		onStep : function (event){
			smokeTwo.setPosition(smokeTwo.x-5, smokeTwo.y);
		},
		measure : 1, 
		steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]	

		});

sequencer.registerSequence({
		name : "ascendingOnceMore", 
		start : 385, 
		stop : 390, 
		onStart : function (event){
			ascend.show();
		}, 
		onStop : function (event){
			ascend.hide();
		}, 
		onStep : function (event){
			ascend.next(true);
		},
		measure : 1, 
		steps : [1, 1+1/2]	

	});

sequencer.registerSequence({
		name : "ehh", 
		start : 390, 
		stop : 393, 
		onStart : function (event){
			efemer1.show();
		}, 
		onStop : function (event){
			efemer1.hide();
		},
		measure : 1, 
		steps : [1]
	});

sequencer.registerSequence({
		name : "fehh", 
		start : 393, 
		stop : 397, 
		onStart : function (event){
			efemer2.show();
		}, 
		onStop : function (event){
		  efemer2.hide();
		},
		measure : 1, 
		steps : [1]
	});

sequencer.registerSequence({
		name : "merrr", 
		start : 397, 
		stop : 404, 
		onStart : function (event){
			efemer3.show();
		}, 
		onStop : function (event){
			efemer3.hide();
		}, 
		measure : 1, 
		steps : [1]
	});

sequencer.registerSequence({
		name : "inn", 
		start : 405, 
		stop : 408, 
		onStart : function (event){
			eter1.show();
		}, 
		onStop : function (event){
			eter1.hide();
		},
		measure : 1, 
		steps : [1]
	});

sequencer.registerSequence({
		name : "ett", 
		start : 408, 
		stop : 413, 
		onStart : function (event){
			eter2.show();
		}, 
		onStop : function (event){
		  eter2.hide();
		},
		measure : 1, 
		steps : [1]
	});

sequencer.registerSequence({
		name : "terr", 
		start : 413, 
		stop : 422, 
		onStart : function (event){
			eter3.show();
		}, 
		onStop : function (event){
			eter3.hide();
		}, 
		measure : 1, 
		steps : [1]
	});

sequencer.registerSequence({
		name : " clouds last time", 
		start : 390, 
		stop : 422, 
		onStart : function (event){
			clouds.show();
		}, 
		onStop : function (event){
			clouds.hide();
		},
		measure : 1, 
		steps : [1]
	});



}

function draw(){
	sequencer.update();

	background(7, 0, 36);
	
	if (bird.visible){ 
		bird.display()
	};

	if (bird2.visible){ 
		bird2.display()
	};

	if (bird3.visible){ 
		bird3.display()
	};

if (bird4.visible){ 
		bird4.display()
	};

	if (cautand1.visible){ 
		cautand1.display()
	};

	if (cautand2.visible){ 
		cautand2.display()
	};

if (begin1.visible){ 
		begin1.display()
	};

	if (closeup.visible){ 
		closeup.display()
	};

	if (above.visible){ 
		above.display()
	};

		if (delirand.visible){ 
		delirand.display()
	};
		if (delirand2.visible){ 
		delirand2.display()
	};
			if (compassBird.visible){ 
		compassBird.display()
	};
			if (compass1.visible){ 
		compass1.display()
	};

		if (compass2.visible){ 
		compass2.display()
	};

			if (fumBird.visible){ 
		fumBird.display()
	};
				if (fumA.visible){ 
		fumA.display()
	};

		 if (fumB.visible){ 
		fumB.display()
	};
			 if (smokePerson.visible){ 
		smokePerson.display()
	};
				 if (personFreeze.visible){ 
		personFreeze.display()
	};
				 if (nisip.visible){ 
		nisip.display()
	};

				 if (efemerBird.visible){ 
		efemerBird.display()
	};

				if (bigEfemerBird.visible){ 
		bigEfemerBird.display()
	};

				 if (efemer1.visible){ 
		efemer1.display()
	};

					 if (efemer2.visible){ 
		efemer2.display()
	};

					 if (efemer3.visible){ 
		efemer3.display()
	};

	if (eter1.visible){ 
		eter1.display()
	};

					 if (eter2.visible){ 
		eter2.display()
	};

					 if (eter3.visible){ 
		eter3.display()
	};
				 if (bigEfemerBirdB.visible){ 
		bigEfemerBirdB.display()
	};

					 if (clouds.visible){ 
		clouds.display()
	};

					 if (treasureMap.visible){ 
		treasureMap.display()
	};

					 if (treasureBird.visible){ 
		treasureBird.display()
	};


						 if (nuiBine.visible){ 
		nuiBine.display()
	};
							 if (nuiBineHands.visible){ 
		nuiBineHands.display()
	};

					 if (nuPot.visible){ 
		nuPot.display()
	};
							 if (gand.visible){ 
		gand.display()
	};
							 if (gandBird.visible){ 
		gandBird.display()
	};

					 if (dupaTine.visible){ 
		dupaTine.display()
	};
					if (birdInHands.visible){ 
		birdInHands.display()

	};

			 if (handBird.visible){ 
		handBird.display()
	};

	 if (eyes.visible){ 
		eyes.display()
	};

					 if (eyesSmokeA.visible){ 
		eyesSmokeA.display()
	};

					 if (eyesSmokeB.visible){ 
		eyesSmokeB.display()
	};

				 if (ascend.visible){ 
		ascend.display()
	};

				 if (handBreak.visible){ 
		handBreak.display()
	};
				 if (birdBreak.visible){ 
		birdBreak.display()
	};

				 if (handReach.visible){ 
		handReach.display()
	};

				 if (smokeOne.visible){ 
		smokeOne.display()
	};
				 if (smokeTwo.visible){ 
		smokeTwo.display()
	};
	
}
