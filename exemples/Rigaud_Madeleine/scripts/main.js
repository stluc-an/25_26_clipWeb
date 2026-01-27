/*----------------------------------------*\
  23_24_AN1_clipWeb - main.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2024-02-23 00:24:49
  @Last Modified time: 2024-02-23 08:58:36
\*----------------------------------------*/
let BPM = 145;
let audioPath = "assets/audio/2 Мая (Bonus).mp3";
let sequencer;
let arbre
let solPluie
let pluie
let chats ;
let chatsPattern = [0, 1, 2, 3, 2, 1, 0];
let chatsStep = 0;
let chatsBis
let runningCats
let ville
let tombante
let oeil ;
let oeilPattern = [0, 1, 2, 3, 2, 1, 0];
let oeilStep = 0;
let orange 
let dying
let dying2
let ded
let rien 
let soleil
let calme
let light
let illu
let walk
let thoughts
let fleur
let vision
let meteor
let reflet
let scenes
let etoile
let feu  

function setup(){
	createCanvas(windowWidth, windowHeight);
	sequencer = new Sequencer(audioPath, BPM, false);

	feu = new Animator (8, 1,"assets/images/feu/feu__imgNum_.jpg")
	feu.setPosition(0, 0);
	feu.setSize(windowWidth, windowHeight);

	feu.visible = false;
	sequencer.registerSequence({
		name : "sequence feu", 
		start : 313,
		stop :  325, 
		onStart : function (event){
		feu.show()}, 
		onStop : function (event){
		feu.hide()},
		onStep : function (event){
			feu.setPointer(event.amount);
	   }, 
		steps : [1]
	})


	etoile = new Animator (3, 1,"assets/images/etoile/etoile__imgNum_.jpg")
	etoile.setPosition(0, 0);
	etoile.setSize(windowWidth, windowHeight);

	etoile.visible = false;
	sequencer.registerSequence({
		name : "sequence etoile", 
		start : 305,
		stop :  312, 
		onStart : function (event){
		etoile.show()}, 
		onStop : function (event){
		etoile.hide()},
		onStep : function (event){
			etoile.setPointer(event.amount);
	   }, 
		steps : [1]
	})

	scenes = new Animator (5, 1,"assets/images/scenes/scene__imgNum_.jpg")
	scenes.setPosition(0, 0);
	scenes.setSize(windowWidth, windowHeight);

	scenes.visible = false;
	sequencer.registerSequence({
		name : "sequence scenes", 
		start : 263,
		stop :  272, 
		onStart : function (event){
		scenes.show()}, 
		onStop : function (event){
		scenes.hide()},
		onStep : function (event){
			scenes.setPointer(event.amount);
	   }, 
		steps : [1]
	})

	reflet = new Animator (10, 1,"assets/images/reflet/reflet__imgNum_.jpg")
	reflet.setPosition(0, 0);
	reflet.setSize(windowWidth, windowHeight);

	reflet.visible = false;
	sequencer.registerSequence({
		name : "sequence reflet", 
		start : 185,
		stop :  192, 
		onStart : function (event){
		reflet.show()}, 
		onStop : function (event){
		reflet.hide()},
		onStep : function (event){
			reflet.setPointer(event.amount);
	   }, 
		steps : [1]
	})
	sequencer.registerSequence({
		name : "sequence reflet 2", 
		start : 250,
		stop :  256, 
		onStart : function (event){
		reflet.show()}, 
		onStop : function (event){
		reflet.hide()},
		onStep : function (event){
			reflet.setPointer(event.amount);
	   }, 
		steps : [1]
	})


	meteor = new Animator (4, 1,"assets/images/meteor/meteor__imgNum_.jpg")
	meteor.setPosition(0, 0);
	meteor.setSize(windowWidth, windowHeight);

	meteor.visible = false;
	sequencer.registerSequence({
		name : "sequence meteor", 
		start : 177,
		stop :  184, 
		onStart : function (event){
		meteor.show()}, 
		onStop : function (event){
		meteor.hide()},
		onStep : function (event){
			meteor.setPointer(event.amount);
	   }, 
		steps : [1]
	})

	vision = new Animator (3, 1,"assets/images/vision/vision__imgNum_.jpg")
	vision.setPosition(0, 0);
	vision.setSize(windowWidth, windowHeight);

	vision.visible = false;
	sequencer.registerSequence({
		name : "sequence vision", 
		start : 173,
		stop :  176, 
		onStart : function (event){
		vision.show()}, 
		onStop : function (event){
		vision.hide()},
		onStep : function (event){
			vision.setPointer(event.amount);
	   }, 
		steps : [1]
	})
	


	fleur = new Animator (4, 1,"assets/images/fleur/fleur__imgNum_.jpg")
	fleur.setPosition(0, 0);
	fleur.setSize(windowWidth, windowHeight);

	fleur.visible = false;
	sequencer.registerSequence({
		name : "sequence fleur", 
		start : 161,
		stop :  172, 
		onStart : function (event){
		fleur.show()}, 
		onStop : function (event){
		fleur.hide()},
		onStep : function (event){
			fleur.setPointer(event.amount);
	   }, 
		steps : [1]
	})
	sequencer.registerSequence({
		name : "sequence fleur 2", 
		start : 217,
		stop :  221, 
		onStart : function (event){
		fleur.show()}, 
		onStop : function (event){
		fleur.hide()},
		onStep : function (event){
			fleur.setPointer(event.amount);
	   }, 
		steps : [1]
	})
	sequencer.registerSequence({
		name : "sequence fleur 3", 
		start : 242,
		stop :  249, 
		onStart : function (event){
		fleur.show()}, 
		onStop : function (event){
		fleur.hide()},
		onStep : function (event){
			fleur.setPointer(event.amount);
	   }, 
		steps : [1]
	})


	thoughts = new Animator (6, 1,"assets/images/thoughts/thought__imgNum_.jpg")
	thoughts.setPosition(0, 0);
	thoughts.setSize(windowWidth, windowHeight);

	thoughts.visible = false;
	sequencer.registerSequence({
		name : "sequence thoughts", 
		start : 126,
		stop :  129, 
		onStart : function (event){
		thoughts.show()}, 
		onStop : function (event){
		thoughts.hide()},
		onStep : function (event){
			thoughts.setPointer(event.amount);
	   }, 
		steps : [2]
	})
	sequencer.registerSequence({
		name : "sequence thoughts 2", 
		start : 143,
		stop :  145, 
		onStart : function (event){
		thoughts.show()}, 
		onStop : function (event){
		thoughts.hide()},
		onStep : function (event){
			thoughts.setPointer(event.amount);
	   }, 
		steps : [2]
	})
	sequencer.registerSequence({
		name : "sequence thoughts 3", 
		start : 158,
		stop :  160, 
		onStart : function (event){
		thoughts.show()}, 
		onStop : function (event){
		thoughts.hide()},
		onStep : function (event){
			thoughts.setPointer(event.amount);
	   }, 
		steps : [2]
	})
	sequencer.registerSequence({
		name : "sequence thoughts 6", 
		start : 222,
		stop :  225, 
		onStart : function (event){
		thoughts.show()}, 
		onStop : function (event){
		thoughts.hide()},
		onStep : function (event){
			thoughts.setPointer(event.amount);
	   }, 
		steps : [2]
	})
	sequencer.registerSequence({
		name : "sequence thoughts 4", 
		start : 239,
		stop :  241, 
		onStart : function (event){
		thoughts.show()}, 
		onStop : function (event){
		thoughts.hide()},
		onStep : function (event){
			thoughts.setPointer(event.amount);
	   }, 
		steps : [2]
	})
	sequencer.registerSequence({
		name : "sequence thoughts 5", 
		start : 273,
		stop :  288, 
		onStart : function (event){
		thoughts.show()}, 
		onStop : function (event){
		thoughts.hide()},
		onStep : function (event){
			thoughts.setPointer(event.amount);
	   }, 
		steps : [2]
	})
	
	
	

	walk = new Animator (6, 1,"assets/images/walk/walk__imgNum_.jpg")
	walk.setPosition(0, 0);
	walk.setSize(windowWidth, windowHeight);

	walk.visible = false;
	sequencer.registerSequence({
		name : "sequence walk", 
		start : 123,
		stop :  125, 
		onStart : function (event){
		walk.show()}, 
		onStop : function (event){
		walk.hide()},
		onStep : function (event){
			walk.setPointer(event.amount);
	   }, 
		steps : [1]
	})
	sequencer.registerSequence({
		name : "sequence walk 2", 
		start : 130,
		stop :  142, 
		onStart : function (event){
		walk.show()}, 
		onStop : function (event){
		walk.hide()},
		onStep : function (event){
			walk.setPointer(event.amount);
	   }, 
		steps : [1]
	})
	sequencer.registerSequence({
		name : "sequence walk 3", 
		start : 146,
		stop :  157, 
		onStart : function (event){
		walk.show()}, 
		onStop : function (event){
		walk.hide()},
		onStep : function (event){
			walk.setPointer(event.amount);
	   }, 
		steps : [1]
	})
	sequencer.registerSequence({
		name : "sequence walk 4", 
		start : 226,
		stop :  238, 
		onStart : function (event){
		walk.show()}, 
		onStop : function (event){
		walk.hide()},
		onStep : function (event){
			walk.setPointer(event.amount);
	   }, 
		steps : [1]
	})



	illu = new Animator (4, 1,"assets/images/illu/illumine__imgNum_.jpg")
	illu.setPosition(0, 0);
	illu.setSize(windowWidth, windowHeight);

	illu.visible = false;
	sequencer.registerSequence({
		name : "sequence illu", 
		start : 121,
		stop :  122, 
		onStart : function (event){
		illu.show()}, 
		onStop : function (event){
		illu.hide()},
		onStep : function (event){
			illu.setPointer(event.amount);
	   }, 
		steps : [1]
	})
	sequencer.registerSequence({
		name : "sequence illu 2", 
		start : 200,
		stop :  208, 
		onStart : function (event){
		illu.show()}, 
		onStop : function (event){
		illu.hide()},
		onStep : function (event){
			illu.setPointer(event.amount);
	   }, 
		steps : [1]
	})


	light = new Animator (3, 1,"assets/images/light/light__imgNum_.jpg")
	light.setPosition(0, 0);
	light.setSize(windowWidth, windowHeight);

	light.visible = false;
	sequencer.registerSequence({
		name : "sequence light", 
		start : 116,
		stop :  120, 
		onStart : function (event){
		light.show()}, 
		onStop : function (event){
		light.hide()},
		onStep : function (event){
			light.setPointer(event.amount);
	   }, 
		steps : [1]
	})
	sequencer.registerSequence({
		name : "sequence light 2", 
		start : 209,
		stop :  216, 
		onStart : function (event){
		light.show()}, 
		onStop : function (event){
		light.hide()},
		onStep : function (event){
			light.setPointer(event.amount);
	   }, 
		steps : [1]
	})



	soleil = new Animator (3, 1,"assets/images/soleil/soleil__imgNum_.jpg")
	soleil.setPosition(0, 0);
	soleil.setSize(windowWidth, windowHeight);

	soleil.visible = false;
	sequencer.registerSequence({
		name : "sequence soleil", 
		start : 113,
		stop :  115, 
		onStart : function (event){
		soleil.show()}, 
		onStop : function (event){
		soleil.hide()},
		onStep : function (event){
			soleil.setPointer(event.amount);
	   }, 
		steps : [1]
	})
	sequencer.registerSequence({
		name : "sequence soleil 2", 
		start : 193,
		stop :  199, 
		onStart : function (event){
		soleil.show()}, 
		onStop : function (event){
		soleil.hide()},
		onStep : function (event){
			soleil.setPointer(event.amount);
	   }, 
		steps : [1]
	})


	calme = new Animator (2, 1,"assets/images/calme/calme__imgNum_.jpg")
	calme.setPosition(0, 0);
	calme.setSize(windowWidth, windowHeight);

	calme.visible = false;
	sequencer.registerSequence({
		name : "sequence calme", 
		start : 106,
		stop :  112, 
		onStart : function (event){
		calme.show()}, 
		onStop : function (event){
		calme.hide()},
		onStep : function (event){
			calme.setPointer(event.amount);
	   }, 
		steps : [1]
	})

rien = new Animator (4, 1,"assets/images/rien/rien__imgNum_.jpg")
	rien.setPosition(0, 0);
	rien.setSize(windowWidth, windowHeight);

	rien.visible = false;
	sequencer.registerSequence({
		name : "sequence rien", 
		start : 97,
		stop :  105, 
		onStart : function (event){
		rien.show()}, 
		onStop : function (event){
		rien.hide()},
		onStep : function (event){
			rien.setPointer(event.amount);
	   }, 
		steps : [1]
	})

	ded = new Animator (4, 1,"assets/images/ded/ded__imgNum_.jpg")
	ded.setPosition(0, 0);
	ded.setSize(windowWidth, windowHeight);

	ded.visible = false;
	sequencer.registerSequence({
		name : "ded sequence", 
		start : 95,
		stop : 96 , 
		onStart : function (event){
		ded.show()}, 
		onStop : function (event){
		ded.hide()},
		onStep : function (event){
			ded.setPointer(event.amount);
	   }, 
		steps : [2]
	})
	sequencer.registerSequence({
		name : "ded sequence 2", 
		start : 257,
		stop : 262 , 
		onStart : function (event){
		ded.show()}, 
		onStop : function (event){
		ded.hide()},
		onStep : function (event){
			ded.setPointer(event.amount);
	   }, 
		steps : [2]
	})

	dying2 = new Animator (8, 1,"assets/images/dying2/dying2__imgNum_.jpg")
	dying2.setPosition(0, 0);
	dying2.setSize(windowWidth, windowHeight);

	dying2.visible = false;
	sequencer.registerSequence({
		name : "dying sequence", 
		start : 93,
		stop : 94, 
		onStart : function (event){
		dying2.show()}, 
		onStop : function (event){
		dying2.hide()},
		onStep : function (event){
			dying2.setPointer(event.amount);
	   }, 
		steps : [2]
	})

dying = new Animator (6, 1,"assets/images/dying/dying__imgNum_.jpg")
	dying.setPosition(0, 0);
	dying.setSize(windowWidth, windowHeight);

	dying.visible = false;
	sequencer.registerSequence({
		name : "dying sequence 2", 
		start : 89,
		stop : 92, 
		onStart : function (event){
		dying.show()}, 
		onStop : function (event){
		dying.hide()},
		onStep : function (event){
			dying.setPointer(event.amount);
	   }, 
		steps : [2]
	})

orange = new Animator (4, 1,"assets/images/orange/orange__imgNum_.jpg")
	orange.setPosition(0, 0);
	orange.setSize(windowWidth, windowHeight);

	orange.visible = false;
	sequencer.registerSequence({
		name : "orange sequence", 
		start : 85,
		stop : 88, 
		onStart : function (event){
		orange.show()}, 
		onStop : function (event){
		orange.hide()},
		onStep : function (event){
			orange.setPointer(event.amount);
	   }, 
		steps : [1]
	})

	oeil = new Animator (4, 1,"assets/images/oeil/zeuy__imgNum_.jpg")
	oeil.setPosition(0, 0);
	oeil.setSize(windowWidth, windowHeight);

	oeil.visible = false;
	sequencer.registerSequence({
		name : "oeil sequence", 
		start : 81,
		stop : 84, 
		onStart : function (event){
		oeil.show()}, 
		onStop : function (event){
		oeil.hide()},
		onStep : function (event){
			oeil.setPointer(event.amount);
	   }, 
		steps : [1,1]
	})

	tombante = new Animator (4, 1,"assets/images/tombante/tombante__imgNum_.jpg")
	tombante.setPosition(0, 0);
	tombante.setSize(windowWidth, windowHeight);

	tombante.visible = false;
	sequencer.registerSequence({
		name : "tombante sequence", 
		start : 69,
		stop : 72, 
		onStart : function (event){
		tombante.show()}, 
		onStop : function (event){
		tombante.hide()},
		onStep : function (event){
			tombante.setPointer(event.amount);
	   }, 
		steps : [1]
	})

	ville = new Animator (4, 1,"assets/images/ville/ville__imgNum_.jpg")
	ville.setPosition(0, 0);
	ville.setSize(windowWidth, windowHeight);

	ville.visible = false;
	sequencer.registerSequence({
		name : "ville sequence", 
		start : 49,
		stop : 56, 
		onStart : function (event){
		ville.show()}, 
		onStop : function (event){
		ville.hide()},
		onStep : function (event){
			ville.setPointer(event.amount);
	   }, 
		steps : [1]
	})


	runningCats = new Animator (4, 1,"assets/images/runningCats/runningCats__imgNum_.jpg")
	runningCats.setPosition(0, 0);
	runningCats.setSize(windowWidth, windowHeight);

	runningCats.visible = false;
	sequencer.registerSequence({
		name : "runningCats sequence", 
		start : 57,
		stop : 64, 
		onStart : function (event){
		runningCats.show()}, 
		onStop : function (event){
		runningCats.hide()},
		onStep : function (event){
			runningCats.setPointer(event.amount);
	   }, 
		steps : [1]
	})

	chatsBis = new Animator (4, 1,"assets/images/chatsBis/chatsBis__imgNum_.jpg")
	chatsBis.setPosition(0, 0);
	chatsBis.setSize(windowWidth, windowHeight);

	chatsBis.visible = false;
	sequencer.registerSequence({
		name : "chatsBis sequence", 
		start : 33,
		stop : 36, 
		onStart : function (event){
		chatsBis.show()}, 
		onStop : function (event){
		chatsBis.hide()},
		onStep : function (event){
			chatsBis.setPointer(event.amount);
	   }, 
		steps : [1]
	})

	sequencer.registerSequence({
		name : "chatBis sequence 2", 
		start : 39,
		stop : 42, 
		onStart : function (event){
		chatsBis.show()}, 
		onStop : function (event){
		chatsBis.hide()},
		onStep : function (event){
			chatsBis.setPointer(event.amount);
	   }, 
		steps : [1]
	})


	chats = new Animator (4, 1,"assets/images/chats/chats__imgNum_.jpg")
	chats.setPosition(0, 0);
	chats.setSize(windowWidth, windowHeight);

	chats.visible = false;
	sequencer.registerSequence({
		name : "chats sequence", 
		start : 37, 
		stop : 38, 
		onStart : function (event){
		chats.show()}, 
		onStop : function (event){
		chats.hide()},
		onStep : () => {
			
			chats.setPointer(chatsPattern[chatsStep] / 4);
			chatsStep = (chatsStep + 1) % chatsPattern.length;
		},
		steps : [1]
	})


	pluie = new Animator (4, 1,"assets/images/pluie/pluie__imgNum_.jpg")
	pluie.setPosition(0, 0);
	pluie.setSize(windowWidth, windowHeight);

	pluie.visible = false;
	sequencer.registerSequence({
		name : "pluie sequence", 
		start : 65, 
		stop : 68, 
		onStart : function (event){
		pluie.show()}, 
		onStop : function (event){
		pluie.hide()},
		onStep : function (event){
			 pluie.setPointer(event.amount);
		}, 
		measure : 1,
		steps : [1]
	})
sequencer.registerSequence({
		name : "pluie sequence 2", 
		start : 73, 
		stop : 80, 
		onStart : function (event){
		pluie.show()}, 
		onStop : function (event){
		pluie.hide()},
		onStep : function (event){
			 pluie.setPointer(event.amount);
		}, 
		measure : 1,
		steps : [1]
	})

	solPluie = new Animator (4, 1,"assets/images/solPluie/solPluie__imgNum_.jpg")
	solPluie.setPosition(0, 0);
	solPluie.setSize(windowWidth, windowHeight);

	solPluie.visible = false;
	sequencer.registerSequence({
		name : "solPluie sequence", 
		start : 19, 
		stop : 32, 
		onStart : function (event){
		solPluie.show()}, 
		onStop : function (event){
		solPluie.hide()},
		onStep : function (event){
			 solPluie.setPointer(event.amount);
		}, 
		measure : 1,
		steps : [1]
	})

	sequencer.registerSequence({
		name : "solPluie sequence 2", 
		start : 43, 
		stop : 48, 
		onStart : function (event){
		solPluie.show()}, 
		onStop : function (event){
		solPluie.hide()},
		onStep : function (event){
			 solPluie.setPointer(event.amount);
		}, 
		measure : 1,
		steps : [1]
	})


arbre = new Animator (4, 1,"assets/images/arbre/arbre__imgNum_.jpg") 
arbre.setPosition(0, 0);
arbre.setSize(windowWidth, windowHeight);

arbre.visible = false;
	
	sequencer.registerSequence({
		name : "my first sequence", 
		start : 2, 
		stop : 18, 
		onStart : function (event){
		arbre.show()}, 
		onStop : function (event){
		arbre.hide()},
		onStep : function (event){
			 arbre.setPointer(event.amount);
		}, 
		measure : 1, 
		steps : [1]
	});

	arbre.setSize(windowWidth, windowHeight)
	solPluie.setSize(windowWidth, windowHeight)
}


function draw(){
	sequencer.update();
	background(0);

	feu.setPointer((millis() / 1000) % 1);
	if(feu.visible){
		feu.display();
		}

	etoile.setPointer(1 - millis()/1000 * 4 % 1);
	if(etoile.visible){
		etoile.display();
		}

	scenes.setPointer((millis() / 1000) % 1);
	if(scenes.visible){
		scenes.display();
		}


	reflet.setPointer((millis() / 1000) % 1);
	if(reflet.visible){
		reflet.display();
		}


	meteor.setPointer((millis() / 1000) % 1);
	if(meteor.visible){
		meteor.display();
		}


	vision.setPointer(1 - millis()/1000 * 1 % 1);
	if(vision.visible){
		vision.display();
		}

	fleur.setPointer((millis() / 1000) % 1);
	if(fleur.visible){
		fleur.display();
		}

	thoughts.setPointer((millis() / 1000) % 1);
	if(thoughts.visible){
		thoughts.display();
		}

	walk.setPointer((millis() / 1000) % 1);
	if(walk.visible){
		walk.display();
		}


	illu.setPointer(1 - millis()/1000 * 1 % 1);
	if(illu.visible){
		illu.display();
		}

	light.setPointer(1 - millis()/1000 * 2 % 1);
	if(light.visible){
		light.display();
		}

	soleil.setPointer(1 - millis()/1000 * 2 % 1);
	if(soleil.visible){
		soleil.display();
		}

	calme.setPointer(1 - millis()/1000 * 2 % 1);
	if(calme.visible){
		calme.display();
		}

	rien.setPointer(1 - millis()/1000 * 2 % 1);
	if(rien.visible){
		rien.display();
		}

	ded.setPointer(1 - millis()/1000 * 1 % 1);
	if(ded.visible){
		ded.display();
		}

dying2.setPointer(1 - millis()/1000 * 1 % 1);
	if(dying2.visible){
		dying2.display();
		}

	dying.setPointer(1 - millis()/1000 * 1 % 1);
	if(dying.visible){
		dying.display();
		}

orange.setPointer(1 - millis()/1000 * 2 % 1);
	if(orange.visible){
		orange.display();
		}

	oeil.setPointer(1 - millis()/1000 * 2 % 1);
	if(oeil.visible){
		oeil.display();
		}

	tombante.setPointer(1 - millis()/1000 * 2 % 1);
	if(tombante.visible){
		tombante.display();
		}

ville.setPointer(1 - millis()/1000 * 2 % 1);
	if(ville.visible){
		ville.display();
		}

	runningCats.setPointer(1 - millis()/1000 * 2 % 1);
	if(runningCats.visible){
		runningCats.display();
		}

	chatsBis.setPointer(1 - millis()/1000 * 2 % 1);
	if(chatsBis.visible){
		chatsBis.display();
		}

	chats.setPointer(1 - millis()/1000 * 2 % 1);
	if(chats.visible){
		chats.display();
		}

	pluie.setPointer(1 - millis()/1000 * 2 % 1);
	if(pluie.visible){
		pluie.display();
		}
	
	solPluie.setPointer(1 - millis()/1000 * 2 % 1);
	if(solPluie.visible){
		solPluie.display();
		}

	arbre.setPointer(1 - millis()/1000 * 2 % 1);
	if(arbre.visible){
		arbre.display();
		}
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);

	feu.setSize(windowWidth, windowHeight);
	feu.setPosition(0, 0);

	etoile.setSize(windowWidth, windowHeight);
	etoile.setPosition(0, 0);

	scenes.setSize(windowWidth, windowHeight);
	scenes.setPosition(0, 0);

	reflet.setSize(windowWidth, windowHeight);
	reflet.setPosition(0, 0);

	meteor.setSize(windowWidth, windowHeight);
	meteor.setPosition(0, 0);

	vision.setSize(windowWidth, windowHeight);
	vision.setPosition(0, 0);

	fleur.setSize(windowWidth, windowHeight);
	fleur.setPosition(0, 0);

	thoughts.setSize(windowWidth, windowHeight);
	thoughts.setPosition(0, 0);

	walk.setSize(windowWidth, windowHeight);
	walk.setPosition(0, 0);

	illu.setSize(windowWidth, windowHeight);
	illu.setPosition(0, 0);

	light.setSize(windowWidth, windowHeight);
	light.setPosition(0, 0);

	soleil.setSize(windowWidth, windowHeight);
	soleil.setPosition(0, 0);

	calme.setSize(windowWidth, windowHeight);
	calme.setPosition(0, 0);

	rien.setSize(windowWidth, windowHeight);
	rien.setPosition(0, 0);

	ded.setSize(windowWidth, windowHeight);
	ded.setPosition(0, 0);

	dying2.setSize(windowWidth, windowHeight);
	dying2.setPosition(0, 0);


	dying.setSize(windowWidth, windowHeight);
	dying.setPosition(0, 0);

	orange.setSize(windowWidth, windowHeight);
	orange.setPosition(0, 0);

	oeil.setSize(windowWidth, windowHeight);
	oeil.setPosition(0, 0);

tombante.setSize(windowWidth, windowHeight);
	tombante.setPosition(0, 0);


	ville.setSize(windowWidth, windowHeight);
	ville.setPosition(0, 0);

	runningCats.setSize(windowWidth, windowHeight);
	runningCats.setPosition(0, 0);

	chatsBis.setSize(windowWidth, windowHeight);
	chatsBis.setPosition(0, 0);

	chats.setSize(windowWidth, windowHeight);
	chats.setPosition(0, 0);

	pluie.setSize(windowWidth, windowHeight);
	pluie.setPosition(0, 0);

	solPluie.setSize(windowWidth, windowHeight);
	solPluie.setPosition(0, 0);

	arbre.setSize(windowWidth, windowHeight);
	arbre.setPosition(0, 0);
  }




