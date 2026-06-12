/*----------------------------------------*\
  25_26_AN1_clipWeb - main.js
  @author Eugene Harmegnies (eugene.harmegnies@gmail.com)
  @Date:   2026-03-27 11:56
  @Last Modified time: 12/06/2026 , 17:40
\*----------------------------------------*/

//avec BPM115,il y a 396
let BPM = 115;
let audioPath = "assets/audio/SixFeetUnder.mp3";
let sequencer;

let anim0;
let Monsoon;
let SixFeet; 
let Grave;
let FallingLines; 
let BeatingHeart;
let HeartZoom;
let Blood; 
let Back;
let Sick;
let Fish; 

let Death;
let Breathing; 

let bg = 255;

//Le canvas pour que tout soit à la bonne taille par rapport à l'écran.//
function setup(){
	createCanvas(windowWidth, windowHeight);
	sequencer = new Sequencer(audioPath, BPM, false);
	//Change "true" to "False" to hide the numbers :) //
	imageMode(CENTER)

	//Le perso qui marche, sa position et où est l'endroit d'origin de l'image. 
	anim0= new Animator (1, 5, "./assets/images/walk/walk_imgNum_.png")
	anim0.setSize(223, 257);
	anim0.setPosition(anim0.w, height/2);

	//Le texte NON!!! animé! "Monsoon"
	Monsoon= new Animator (1, 1, "./assets/images/Text!/Text².png")
	Monsoon.setSize(223, 257);
	Monsoon.setPosition(width/2, +199);

	//Text animé!!
	MonsoonUP= new Animator (1, 1, "./assets/images/Text!/monsoon-text.png")
	MonsoonUP.setSize(223, 257);
	MonsoonUP.setPosition(width/2, +199);

	//THE FALLING TEXT !!//
	SixFeet= new Animator (1, 14, "./assets/images/SixFeetUnder/SixFeet (_imgNum_).png")
	SixFeet.setSize(233, 257);
	SixFeet.setPosition(width/2, height/2)

	Grave= new Animator (15, 45, "./assets/images/SixFeetUnder/SixFeet (_imgNum_).png")
	Grave.setSize (233, 257);
	Grave.setPosition (width/2, height/2)

	//Holding the last GRAVE frame
	GraveFrame= new Animator (45, 45,"./assets/images/SixFeetUnder/SixFeet (_imgNum_).png")
	GraveFrame.setSize (233, 257);
	GraveFrame.setPosition (width/2, height/2)

	FallingLines= new Animator(1, 1, "./assets/images/FallingLines/Falling_imgNum_.png")
	FallingLines.setSize (windowWidth, windowHeight);
	FallingLines.setPosition (width/2, height/2)

	//RIIISEEEE!!! 
	FromtheDead= new Animator (1, 13,"./assets/images/SixFeetUnder/FromtheDead_imgNum_.png")
	FromtheDead.setSize (233, 257);
	FromtheDead.setPosition (width/2, height/2)

	//Beating heart 
	BeatingHeart= new Animator(1, 2, "./assets/images/FallingLines/Heart (_imgNum_).png")
	BeatingHeart.setSize (233, 257);
	BeatingHeart.setPosition (1020, 300)

	HeartZoom= new Animator (1,1, "./assets/images/FallingLines/Heart (_imgNum_).png")
	HeartZoom.setSize (233, 257);
	HeartZoom.setPosition (1020, 300)

	Blood= new Animator (1, 13, "./assets/images/FallingLines/Blood (_imgNum_).png")
	Blood.setSize (windowWidth, windowHeight);
	Blood.setPosition (width/2, height/2)

	Back= new Animator (1, 1, "./assets/images/Background/Back.png")
	Back.setSize (windowWidth, windowHeight);
	Back.setPosition (width/2, height/2)

	Sick= new Animator (1, 46, "./assets/images/FallingLines/Sick (_imgNum_).png")
	Sick.setSize  (windowWidth, windowHeight);
	Sick.setPosition (width/2, height/2)

	Fish= new Animator (1, 74, "./assets/images/fish/Fish (_imgNum_).png")
	Fish.setSize  (windowWidth, windowHeight);
	Fish.setPosition (width/2, height/2)

	Fish2= new Animator (1, 74, "./assets/images/fish/Fish (_imgNum_).png")
	Fish2.setSize  (windowWidth, windowHeight);
	Fish2.setPosition (width/2, height/2)

	Death= new Animator (1, 103,"./assets/images/fish/Death (_imgNum_).png")
	Death.setSize  (windowWidth, windowHeight);
	Death.setPosition (width/2, height/2)

	Breathing= new Animator (1, 3, "./assets/images/FallingLines/Breathing (_imgNum_).png")
	Breathing.setSize  (windowWidth, windowHeight);
	Breathing.setPosition (width/2, height/2)

//Les séquences ! 
	sequencer.registerSequence({
		name : "Walking", 
		start : 1, 
		stop : 13,  
		onStart : function (event){
			anim0.show();
		}, 
		onStop : function (event){
			anim0.hide();
		},
		onStep : function (event){
			anim0.next(true);

			anim0.x +=16;
		},  
		steps : [1, 1+1/6,1+2/6,1+3/6, 1+4/5, 1+5/6]
	});


//Perso qui monte! 
	sequencer.registerSequence({
		name : "ascencion", 
		start : 11, 
		stop : 13,
		onStep : function (event){
			anim0.y -=16;
		}, 
		steps : [1, 1+1/6,1+2/6,1+3/6, 1+4/5, 1+5/6]
	});

//text just showing up. 
	sequencer.registerSequence({
		name: "Monsoon",
		start:1,
		stop:10,
		onStart : function (event){
			Monsoon.show();
		}, 
		onStop : function (event){
			Monsoon.hide();
		},
		onStep : function (event){
  	Monsoon.next();
  	},  
	})

//text going up!
  sequencer.registerSequence({
  	name:"MonsoonUp",
  	start: 11,
  	stop: 16,
		onStart : function (event){
			MonsoonUP.show();
		}, 
		onStop : function (event){
			MonsoonUP.hide();
		},
		onStep : function (event){
  		MonsoonUP.y -=30
  	},  
  })

//De 14 à 19 "falling lines"!
 sequencer.registerSequence({
 		name:"FallingLines",
 		start: 14,
  	stop: 20,
  	onStart : function(event){
  		FallingLines.show();
  	},
		onStop : function (event){
			FallingLines.hide();
		},
		onStep : function(event){
		  FallingLines.y -=30
  		if(FallingLines.y < -50){
  			FallingLines.y = 0
  		}
		}
 })

//The falling text ! 
  sequencer.registerSequence({
  	name: "SixFeet",
  	start:11,
  	stop:20,
  	onStart: function (event) {
  		SixFeet.show();
  	},
  	onStop: function (even) {
  		SixFeet.hide();
  	},
  	  	onStep: function (event) {
  		SixFeet.next(true);
  	SixFeet.y +=80
  	},
  	steps : [1, 1+1/5,1+2/5,1+3/5, 1+4/5, 1+5/5]
  })
//this is where that code ends!!! More in "Draw" and new animator!! //

//The grave sequence. As you can see from the sequence name... 
  	sequencer.registerSequence({
  		name:"Grave",
  		start:20,
  		stop:25,
  		onStart: function (event) {
  			Grave.show();
  		},
  		onStop: function (even) {
  			Grave.hide();
  		},
  		onStep: function (event){
  			Grave.next(true);
  		},
  		steps : [1, 1+1/6,1+2/6,1+3/6, 1+4/5, 1+5/6]
  	})

  	sequencer.registerSequence({
  	name: "GraveFrame",
  	start: 26,
  	stop:27,
  	onStart: function(event){
  		GraveFrame.show();
  	},
  	onStop: function(event){
  		GraveFrame.hide();
  	},
  })

	sequencer.registerSequence({
		name : "Rising", 
		start : 28, 
		stop : 33,  
		onStart : function (event){
			FromtheDead.show();
		}, 
		onStop : function (event){
			FromtheDead.hide();
			bg = 0
//pour changer le background de couleur 
		},
		onStep : function (event){
			FromtheDead.next();
		},
		steps : [1, 1+1/3, 1+1/3] 
//Pour faire plus rapide 
	})

	sequencer.registerSequence({
  	name: "BeatingHeart",
  	start: 35,
  	stop:38,
  	onStart: function(event){
  		BeatingHeart.show();
  	},
  	onStop: function(event){
  		BeatingHeart.hide();
		},
		onStep : function (event){
			BeatingHeart.next();
		},
	})

	sequencer.registerSequence({
		name: "HeartZoom",
		start: 39,
		stop: 42,
		onStart: function (event){
			HeartZoom.show();
		},
		onStop: function (event){
			HeartZoom.hide();
		},
	}) 

	sequencer.registerSequence({
		name:"DrippingBlood",
		start:43,
		stop: 53,
		onStart: function(event){
			Blood.show();
		},
		onStop: function(event){
			Blood.hide();
		},
		onStep : function (event){
  		Blood.next();
  	},
	})

	sequencer.registerSequence({
		name:"Back",
		start:54,
		stop: 60,
		onStart: function(event){
			Back.show();
		},
		onStop: function(event){
			Back.hide();
		},
	})

	sequencer.registerSequence({
		name:"Sick",
		start:54,
		stop:76,
		onStart: function(event){
			Sick.show();
		},
		onStop: function(event){
			Sick.hide();
		},
		onStep : function (event){
  		Sick.next();
  	},
  	steps : [1, 1+1/3, 1+1/3] 
	})

	sequencer.registerSequence({
  	name: "Fish",
  	start: 77,
  	stop:140,
  	onStart: function(event){
  		Fish.show();
  	},
  	onStop: function(event){
  		Fish.hide();
  	},
  	onStep : function (event){
  		Fish.next();
  	},
  })

  	sequencer.registerSequence({
  	name: "Fish2",
  	start: 143,
  	stop:200,
  	onStart: function(event){
  		Fish2.show();
  	},
  	onStop: function(event){
  		Fish2.hide();
  	},
  	onStep : function (event){
  		Fish2.next();
  	},
  })

  	sequencer.registerSequence({
  	name: "Death",
  	start: 200,
  	stop:280,
  	onStart: function(event){
  		Death.show();
  	},
  	onStop: function(event){
  		Death.hide();
  	},
  	onStep : function (event){
  		Death.next();
  	},
  })

  sequencer.registerSequence({
  	name: "Breathing",
  	start: 280,
  	stop:396,
  	onStart: function(event){
  		Breathing.show();
  	},
  	onStop: function(event){
  		Breathing.hide();
  	},
  	onStep : function (event){
  		Breathing.next();
  	},
  })


}

//SI TON IMAGE NE SE MONTRE PAS C PARCE QUE TU L'AS PAS MISE ICI
function draw(){
	sequencer.update();

	background(bg);
	if (anim0.visible){
		anim0.display();
	}

	if (Monsoon.visible){
		Monsoon.display();
	}

	if (MonsoonUP.visible){
		MonsoonUP.display();
	}

//that one god damn animation.//
	if (SixFeet.visible){
		SixFeet.display();
	}
//Done

	if (Grave.visible){
		Grave.display();
	}

		if (GraveFrame.visible){
		GraveFrame.display();
	}

	//Code pour zoomer dans l'image ! 
	if (FromtheDead.visible){
		if(FromtheDead.pointer == FromtheDead.imgs.length-1){
			FromtheDead.setSize(FromtheDead.w * 1.25, FromtheDead.h * 1.25);
		}
		FromtheDead.display();
	}
		
	if (FallingLines.visible){
		FallingLines.display();
	}
	 
	if (BeatingHeart.visible){ 
	  BeatingHeart.display();
	}

	if (HeartZoom.visible){
		if(HeartZoom.pointer == HeartZoom.imgs.length-1){
		HeartZoom.setSize(HeartZoom.w * 1.89, HeartZoom.h * 1.89);
		}
		HeartZoom.display();
	}

	if (Blood.visible){
		Blood.display();
	}

	if (Back.visible){
		Back.display();
	}

	if (Sick.visible){
		Sick.display();
	}

	if (Fish.visible){
		Fish.display();
	}

	if (Fish2.visible){
		Fish2.display();
	}

	if (Death.visible){
		Death.display();
	}

}