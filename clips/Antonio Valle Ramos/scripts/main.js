/*----------------------------------------*\
  25_26_AN1_clipWeb - main.js
  @author Antonio Valle Ramos
  @Date:   2026-06-12 
  @Last Modified time: 2026-06-12 67:67:67
\*----------------------------------------*/
let BPM = 78;
let audioPath = "assets/audio/LooseParts.mp3";
let sequencer;

let flowerClosed;

let mountainLeft;
let mountainRight;
let mountainSky;
let mountainBlueSky;
let mountainStar;
let mountainOffsetX = 0;
let mountainOffsetY = 0;
let comet;

let spinAngle = 0;
let spinningPng;
let spinningBackground;
let spinningRightMan;
let spinningLeftMan;
let spinningHeartSoul;
let heartOffsetY = 0;
let spinningStill;
let heartStill;
let spinPullAway;

let frameNeverFind;
let frameFirst;
let frameLooking;
let frameLookingStill;
let frameFind;
let frameFindStill;
let framePromise;

let spinningTouch;
let spinningEnd;
let spinningStand;

let petalFirst;
let petalSecond;
let petalRotate;
let petalFinal;

let father;
let mother;
let brother;
let sister;

let flowerOpen;
let rotoscope;


let bg = 0;

function setup(){
	createCanvas(windowWidth, windowHeight);
	sequencer = new Sequencer(audioPath, BPM, false);
	
	//-----------animator-----------//
	flowerClosed = new Animator(0,1, "./assets/images/flower_closed/frame_imgNum_.jpg")
	flowerClosed.setSize(windowWidth, windowHeight);
	
	mountainLeft = new Animator(0,1, "./assets/images/mountains/left.png")
	mountainLeft.setSize(windowWidth, windowHeight);

	mountainRight = new Animator(0,1, "./assets/images/mountains/right.png")
	mountainRight.setSize(windowWidth, windowHeight);

	mountainSky = new Animator(1,2, "./assets/images/mountains/sky_imgNum_.jpg");
	mountainSky.setSize(windowWidth, windowHeight);

	mountainBlueSky = new Animator(1,2, "./assets/images/mountains/blueSky_imgNum_.jpg");
	mountainBlueSky.setSize(windowWidth, windowHeight);
	mountainBlueSky.setPosition(0, -windowHeight)

	mountainStar = new Animator(1,2, "./assets/images/mountains/stars_imgNum_.png");
	mountainStar.setSize(windowWidth, windowHeight);
	mountainStar.setPosition(0, -windowHeight)
	
	comet = new Animator(1,14, "./assets/images/comet/frame_imgNum_.png")
	comet.setSize(windowWidth, windowHeight);


	petalFirst = new Animator(1,19,"./assets/images/petals/first_imgNum_.png")
	petalFirst.setSize(windowWidth, windowHeight);

	petalSecond = new Animator(1,7,"./assets/images/petals/second_imgNum_.png")
	petalSecond.setSize(windowWidth, windowHeight);

	petalRotate = new Animator(1,6,"./assets/images/petals/rotate_imgNum_.png")
	petalRotate.setSize(windowWidth, windowHeight);

	petalFinal = new Animator(2,17,"./assets/images/petals/final_imgNum_.png")
	petalFinal.setSize(windowWidth, windowHeight);

	petalFinalStill = new Animator(17,17,"./assets/images/petals/final_imgNum_.png")
	petalFinalStill.setSize(windowWidth, windowHeight);


	spinningPng = new Animator(0,1,"./assets/images/spinning_png/only_spin.png")
	spinningPng.setSize(windowWidth, windowWidth);

	spinningBackground = new Animator(1,2,"./assets/images/spinning_png/bg_imgNum_.jpg")
	spinningBackground.setSize(windowWidth, windowHeight);
	
	spinningRightMan = new Animator(0,1,"./assets/images/spinning_png/looong_loneman.png")
	spinningRightMan.setSize(windowWidth, windowHeight*3);	
	spinningRightMan.setPosition(0, -windowHeight);

	spinningLeftMan = new Animator(0,1,"./assets/images/spinning_png/onepull.png")
	spinningLeftMan.setSize(windowWidth, windowHeight*3);
	spinningLeftMan.setPosition(0, -windowHeight);

	spinningHeartSoul = new Animator(1,2,"./assets/images/spinning_png/heart_soul_imgNum_.png")
	spinningHeartSoul.setSize(windowWidth, windowWidth);
	spinningHeartSoul.setPosition(0, +windowHeight);

	spinningStill = new Animator(0,1,"./assets/images/spinning_png/still.png")
	spinningStill.setSize(windowWidth, windowHeight*3);

	heartStill = new Animator(1,2,"./assets/images/spinning_png/heart_soul_imgNum_.png")
	heartStill.setSize(windowWidth, windowWidth);


	frameNeverFind = new Animator(0,1,"./assets/images/picture_frame/never_find.jpg")
	frameNeverFind.setSize(windowWidth, windowHeight);

	frameFirst = new Animator(1,12,"./assets/images/picture_frame/first_imgNum_.png")
	frameFirst.setSize(windowWidth, windowHeight);

	frameLooking = new Animator(1,8,"./assets/images/picture_frame/looking_imgNum_.jpg")
	frameLooking.setSize(windowWidth, windowHeight);

	frameLookingStill = new Animator(8,8,"./assets/images/picture_frame/looking_imgNum_.jpg")
	frameLookingStill.setSize(windowWidth, windowHeight);

	frameFind = new Animator(1,14,"./assets/images/picture_frame/find_imgNum_.jpg")
	frameFind.setSize(windowWidth, windowHeight);

	frameFindStill = new Animator(14,14,"./assets/images/picture_frame/find_imgNum_.jpg")
	frameFindStill.setSize(windowWidth, windowHeight);	

	framePromise = new Animator(15,15,"./assets/images/picture_frame/find_imgNum_.jpg")
	framePromise.setSize(windowWidth, windowHeight);


	spinningTouch = new Animator(1,11,"./assets/images/spinning_png/spin_imgNum_.png")
	spinningTouch.setSize(windowWidth, windowWidth);

	spinningEnd = new Animator(1,15,"./assets/images/ending_spin/frame_imgNum_.png")
	spinningEnd.setSize(windowWidth, windowHeight);

	spinningStand = new Animator(16,25,"./assets/images/ending_spin/frame_imgNum_.png")
	spinningStand.setSize(windowWidth, windowHeight);
  

  flowerOpen = new Animator(1,2,"./assets/images/flower_opened/frame_imgNum_.jpg")
	flowerOpen.setSize(windowWidth, windowHeight);

	petalFirstTint = new Animator(1,19,"./assets/images/petals/first_imgNum_.png")
	petalFirstTint.setSize(windowWidth, windowHeight);

	rotoscope = new Animator(0,66,"./assets/images/flower_vid/flower_imgNum_.png")
	rotoscope.setSize(windowHeight, windowHeight);


  father = new Animator(1,2,"./assets/images/pictures/father_imgNum_.png")
  father.setSize(windowWidth, windowHeight); 

	mother = new Animator(1,2,"./assets/images/pictures/mother_imgNum_.png")
	mother.setSize(windowWidth, windowHeight);

	brother = new Animator(1,2,"./assets/images/pictures/brother_imgNum_.png")
	brother.setSize(windowWidth, windowHeight);

	sister = new Animator(1,2,"./assets/images/pictures/sister_imgNum_.png")
	sister.setSize(windowWidth, windowHeight);


//------------sequencers-----------//
	   sequencer.registerSequence({
			name : "flowerClosed sequence", 
			start : 1, 
			stop : 17, 
			onStart : function (event){
				flowerClosed.show();
			}, 
			onStop : function (event){
				flowerClosed.hide();
			},
			onStep : function (event){
				flowerClosed.next(true);
			}, 
			measure : 1, 
			steps : [1]
		});


//mountain sequence 
	  sequencer.registerSequence({
			name : "town Mtn sequence", 
			start : 18, 
			stop : 32, 
			onStart : function (event){
				mountainLeft.show();
				mountainRight.show();
				mountainSky.show();
				mountainBlueSky.show();
				mountainStar.show();

			}, 
			onStop : function (event){
				mountainLeft.hide();
				mountainRight.hide();
				mountainSky.hide();
				
			},
			onStep : function (event){
				mountainBlueSky.next(true);
				mountainSky.next(true);
				mountainStar.next(true);
			}, 
			measure : 1, 
			steps : [1]
		});

	  sequencer.registerSequence({
			name : "Mtn AnimX", 
			start : 22, 
			stop : 25, 
			onStep : function (event){
				mountainLeft.setPosition(mountainLeft.x-10, mountainLeft.y);
				mountainRight.setPosition(mountainRight.x+10, mountainRight.y);
			},
			steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
		});

		sequencer.registerSequence({
			name : "Mtn AnimY", 
			start : 26, 
			stop : 31, 
			onStep : function (event){
				mountainLeft.setPosition(mountainLeft.x, mountainLeft.y+25);
				mountainRight.setPosition(mountainRight.x, mountainRight.y+25);
				mountainSky.setPosition(mountainSky.x, mountainSky.y+25);
				mountainBlueSky.setPosition(mountainBlueSky.x, min(0, mountainBlueSky.y+25));
				mountainStar.setPosition(mountainStar.x, min(0, mountainStar.y+25));

			},
			steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
		});
			
		sequencer.registerSequence({
			name : "town Sky sequence", 
			start : 22, 
			stop : 56, 
			onStart : function (event){
			}, 
			onStop : function (event){
				mountainBlueSky.hide();
				mountainStar.hide();
			},
			onStep : function (event){
				mountainStar.next(true);
			}, 
			measure : 1, 
			steps : [1]
		});

		sequencer.registerSequence({
			name : "comet sequence", 
			start : 45, 
			stop : 50, 
			onStart : function (event){
				comet.show();
			}, 
			onStop : function (event){
				comet.hide();
			},
			onStep : function (event){
				comet.next(true);
			}, 
			measure : 1, 
			steps : [1,1+1/2]
		});


//background 1
	sequencer.registerSequence({
		name : "background1", 
		start : 57, 
		stop : 105, 
		onStart : function (event){
			spinningBackground.show();	
		}, 
		onStop : function (event){
			spinningBackground.hide();
		},
		onStep : function (event){
			spinningBackground.next(true);
		}, 
		measure : 1, 
		steps : [1]
	});


//petal sequence 1 
		petalSequence(57);


//spinning sequence
		spinSequence(80);


//picture sequence
		sequencer.registerSequence({
			name : "father sequence", 
			start : 106, 
			stop : 113, 
			onStart : function (event){
				father.show();
			}, 
			onStop : function (event){
				father.hide();
			},
			onStep : function (event){
				father.next(true);
			}, 
			measure : 1, 
			steps : [1]
		});

		sequencer.registerSequence({
			name : "mother sequence", 
			start : 114, 
			stop : 120, 
			onStart : function (event){
				mother.show();
			}, 
			onStop : function (event){
				mother.hide();
			},
			onStep : function (event){
				mother.next(true);
			}, 
			measure : 1, 
			steps : [1]
		});

		sequencer.registerSequence({
			name : "brother sequence", 
			start : 121, 
			stop : 129, 
			onStart : function (event){
				brother.show();
			}, 
			onStop : function (event){
				brother.hide();
			},
			onStep : function (event){
				brother.next(true);
			}, 
			measure : 1, 
			steps : [1]
		});

		sequencer.registerSequence({
			name : "sister sequence", 
			start : 130, 
			stop : 140, 
			onStart : function (event){
				sister.show();
			}, 
			onStop : function (event){
				sister.hide();
			},
			onStep : function (event){
				sister.next(true);
			}, 
			measure : 1, 
			steps : [1]
		});


//background 2
	sequencer.registerSequence({
		name : "background2", 
		start : 141, 
		stop : 189, 
		onStart : function (event){
			spinningBackground.show();	
		}, 
		onStop : function (event){
			spinningBackground.hide();
		},
		onStep : function (event){
			spinningBackground.next(true);
		}, 
		measure : 1, 
		steps : [1]
	});


//petal sequence 2
		petalSequence(141);


//spinning sequence 2
		spinSequence(164);
		

// picture frame sequence 
		sequencer.registerSequence({
			name : "never find it", 
			start : 194, 
			stop : 198, 
			onStart : function (event){
				frameNeverFind.show();
				frameFirst.show();
			}, 
			onStop : function (event){
				frameNeverFind.hide();
				frameFirst.hide();
			},
			onStep : function (event){
				frameNeverFind.next(true);
				frameFirst.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/2]
		});

		sequencer.registerSequence({
			name : "till you stop looking", 
			start : 199, 
			stop : 201, 
			onStart : function (event){
				frameLooking.show();
			}, 
			onStop : function (event){
				frameLooking.hide();
			},
			onStep : function (event){
				frameLooking.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/2]
		});

		sequencer.registerSequence({
			name : "looking still", 
			start : 202, 
			stop : 206, 
			onStart : function (event){
				frameLookingStill.show();
			}, 
			onStop : function (event){
				frameLookingStill.hide();
			},
			onStep : function (event){
				frameLookingStill.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/2]
		});

		sequencer.registerSequence({
			name : "when you find it", 
			start : 207, 
			stop : 212, 
			onStart : function (event){
				frameFind.show();
			}, 
			onStop : function (event){
				frameFind.hide();
			},
			onStep : function (event){
				frameFind.next(true);

			}, 
			measure : 1, 
			steps : [1,1+1/2]
		});

		sequencer.registerSequence({
			name : "it still", 
			start : 213, 
			stop : 216, 
			onStart : function (event){
				frameFindStill.show();
			}, 
			onStop : function (event){
				frameFindStill.hide();
			},
			onStep : function (event){
				frameFindStill.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/2]
		});

		sequencer.registerSequence({
			name : "promise tell me", 
			start : 217, 
			stop : 224, 
			onStart : function (event){
				framePromise.show();
			}, 
			onStop : function (event){
				framePromise.hide();
			},
			onStep : function (event){
				framePromise.next(true);
			}, 
			measure : 1, 
			steps : [1,1+1/2]
		});


//spin sequence 3
   	sequencer.registerSequence({
			name : "background 3", 
			start : 225, 
			stop : 281, 
			onStart : function (event){
				spinningBackground.show();
			}, 
			onStop : function (event){
				spinningBackground.hide();
			},
			onStep : function (event){
				spinningBackground.next(true);
			}, 
			measure : 1, 
			steps : [1]
		});

   	sequencer.registerSequence({
			name : "spinning sequence 3", 
			start : 225, 
			stop : 240, 
			onStart : function (event){
				spinningPng.show();				
			}, 
			onStop : function (event){
				spinningPng.hide();
			},
			onStep : function (event){
			}, 
			measure : 1, 
			steps : [1]
		});

		sequencer.registerSequence({
			name : "spinAnim Rotate sequence 3", 
			start : 225, 
			stop : 240, 
			onStep : function (event){
				spinAngle -= TWO_PI / 24;
			}, 
			measure : 1, 
			steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
		});
	
   	sequencer.registerSequence({
			name : "rotoscope sequence", 
			start : 225, 
			stop : 272, 
			onStart : function (event){
				rotoscope.show();				
			}, 
			onStop : function (event){
				rotoscope.hide();
			},
			onStep : function (event){
				rotoscope.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8]
		});

		sequencer.registerSequence({
			name : "petal transparant", 
			start : 240, 
			stop : 269, 
			onStart : function (event){
				petalFirstTint.show();
			}, 
			onStop : function (event){
				petalFirstTint.hide();
			},
			onStep : function (event){
				petalFirstTint.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
		});

   	sequencer.registerSequence({
			name : "spinning sequence touch", 
			start : 241, 
			stop : 242, 
			onStart : function (event){
				spinningTouch.show();				
			}, 
			onStop : function (event){
				spinningTouch.hide();
			},
			onStep : function (event){
				spinningTouch.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
		});
	
		sequencer.registerSequence({
			name : "spin to standing spin", 
			start : 243, 
			stop : 244, 
			onStart : function (event){
				spinningEnd.show();
			}, 
			onStop : function (event){
				spinningEnd.hide();
			},
			onStep : function (event){
				spinningEnd.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
		});

		sequencer.registerSequence({
			name : "standing spin", 
			start : 245, 
			stop : 281, 
			onStart : function (event){
				spinningStand.show();
			}, 
			onStop : function (event){
				spinningStand.hide();
			},
			onStep : function (event){
				spinningStand.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
		});


//flower sequence
		sequencer.registerSequence({
			name : "flower opened", 
			start : 282, 
			stop : 300, 
			onStart : function (event){
				flowerOpen.show();
			}, 
			onStop : function (event){
				flowerOpen.hide();
			},
			onStep : function (event){
				flowerOpen.next(true);
			}, 
			measure : 1, 
			steps : [1]
		});



	}

function draw(){
	sequencer.update();
	background(0, 0, 0);

	//-----------if loops-----------//
	if(flowerClosed.visible){
	flowerClosed.display();
	}

	if(mountainSky.visible){
		mountainSky.display();
	}

	if(mountainBlueSky.visible){
		mountainBlueSky.display();
	}

	if(mountainStar.visible){
		tint(255, map(mountainStar.y, -windowHeight, 0, 0, 255));
		mountainStar.display();
		noTint();
	}
	
	if(mountainLeft.visible){
		mountainLeft.display();
	}

	if(mountainRight.visible){
		mountainRight.display();
	}

	if(comet.visible){
	comet.display();
	}


	if(spinningBackground.visible){
		spinningBackground.display();
	}

	if(petalFirst.visible){
	petalFirst.display();
	}

	if(petalSecond.visible){
	petalSecond.display();
	}

	if(petalRotate.visible){
	petalRotate.display();
	}

	if(petalFinal.visible){
	petalFinal.display();
	}

	if(petalFinalStill.visible){
	petalFinalStill.display();
	}

	if(spinningPng.visible){
		push();
		translate(width/2, height/2);
		rotate(spinAngle);
		translate(-spinningPng.w/2, -spinningPng.h/2);
		spinningPng.display();
		pop();
	}

	if(spinningHeartSoul.visible){
		spinningHeartSoul.display();
	}

	if(heartStill.visible){
		push();
		translate(width/2, height/2);
		translate(-heartStill.w/2, -heartStill.h/2);
		heartStill.display();
		pop();
	}

	if(spinningRightMan.visible){
		spinningRightMan.display();	
	}

	if(spinningLeftMan.visible){
		spinningLeftMan.display();
	}

	if(spinningStill.visible){
		spinningStill.display();	
	}	


	if(father.visible){
	father.display();
	}

	if(mother.visible){
	mother.display();
	}

	if(brother.visible){
	brother.display();
	}

	if(sister.visible){
	sister.display();
	}


	if(frameNeverFind.visible){
	frameNeverFind.display();
	}

	if(frameFirst.visible){
	frameFirst.display();
	}

	if(frameLooking.visible){
	frameLooking.display();
	}

	if(frameLookingStill.visible){
	frameLookingStill.display();
	}

	if(frameFind.visible){
	frameFind.display();
	}

	if(frameFindStill.visible){
	frameFindStill.display();
	}

	if(framePromise.visible){
	framePromise.display();
	}


	if(spinningTouch.visible){
		push();
		translate(width/2, height/2);
		rotate(QUARTER_PI/2);
		rotate(QUARTER_PI/2);
		rotate(QUARTER_PI/2);
		rotate(QUARTER_PI/2);
		rotate(QUARTER_PI/2);
		rotate(QUARTER_PI/2);
		translate(-spinningTouch.w/2, -spinningTouch.h/2);
		spinningTouch.display();
		pop();
	}

	if(spinningEnd.visible){
	spinningEnd.display();
	}

	if(spinningStand.visible){
	spinningStand.display();
	}

	if(petalFirstTint.visible){
		push();
		tint(255, 117);
		petalFirstTint.display();
		pop();
	}

	if(rotoscope.visible){
		push();
		tint(255, 117);
		translate(width/2, height/2);
		translate(-rotoscope.w/2, -rotoscope.h/2);
		rotoscope.display();
		pop();
	}

	if(flowerOpen.visible){
	flowerOpen.display();
	}

}