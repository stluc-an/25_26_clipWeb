/*----------------------------------------*\
  23_24_AN1_clipWeb - main.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2024-02-23 00:24:49
  @Last Modified time: 2024-02-23 08:58:36
\*----------------------------------------*/
let BPM = 115;
let audioPath = "./assets/audio/The_Technicolors-Fever_Bomb.mp3";
let sequencer;
let multiple_line;

let line_fever;

let linetrans;

let love;

let time;

let touch;

let much;

let enough;

let off;

let firework;







function setup(){
	createCanvas(windowWidth, windowHeight);
	sequencer = new Sequencer(audioPath, BPM, false);

	imageMode(CENTER);

	// Intro

	multiple_line = new Animator(1, 31, "./assets/image/multiple_line/_imgNum_.png");
	multiple_line.setSize(windowWidth, windowHeight);
	multiple_line.setPosition(width/2, height/2);

	line_fever = new Animator(1, 54, "./assets/image/line_fever/_imgNum_.png");
	line_fever.setSize(windowWidth, windowHeight);
	line_fever.setPosition(width/2, height/2);

	linetrans = new Animator(1, 26, "./assets/image/linetrans/_imgNum_.png");
	linetrans.setSize(windowWidth, windowHeight);
	linetrans.setPosition(width/2, height/2);
		
	love = new Animator(1, 3, "./assets/image/love/_imgNum_.png");
	love.setSize(windowWidth, windowHeight);
	love.setPosition(width/2, height/2);

	time = new Animator(1, 3, "./assets/image/time/_imgNum_.png");
	time.setSize(windowWidth, windowHeight);
	time.setPosition(width/2, height/2);

	touch = new Animator(1, 3, "./assets/image/touch/_imgNum_.png");
	touch.setSize(windowWidth, windowHeight);
	touch.setPosition(width/2, height/2);

	much = new Animator(1, 3, "./assets/image/much/_imgNum_.png");
	much.setSize(windowWidth, windowHeight);
	much.setPosition(width/2, height/2);

	enough = new Animator(1, 3, "./assets/image/enough/_imgNum_.png");
	enough.setSize(windowWidth, windowHeight);
	enough.setPosition(width/2, height/2);

	off = new Animator(1, 3, "./assets/image/off/_imgNum_.png");
	off.setSize(windowWidth, windowHeight);
	off.setPosition(width/2, height/2);

	firework = new Animator(1, 29, "./assets/image/firework/_imgNum_.png");
	firework.setSize(windowWidth, windowHeight);
	firework.setPosition(width/2, height/2);









	sequencer.registerSequence({
			name : "intro 1", 
			start : 3, 
			stop : 12, 
			onStart : function (event){
				multiple_line.show();
			}, 
			onStop : function (event){
				multiple_line.hide();
			},
			onStep : function (event){
				multiple_line.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 2", 
			start : 15, 
			stop : 32, 
			onStart : function (event){
				line_fever.show();
			}, 
			onStop : function (event){
				line_fever.hide();
			},
			onStep : function (event){
				line_fever.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 

	});

	sequencer.registerSequence({
			name : "intro 3", 
			start : 35, 
			stop : 60, 
			onStart : function (event){
				linetrans.show();
			}, 
			onStop : function (event){
				linetrans.hide();
			},
			onStep : function (event){
				linetrans.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 4", 
			start : 74, 
			stop : 80, 
			onStart : function (event){
				love.show();
			}, 
			onStop : function (event){
				love.hide();
			},
			onStep : function (event){
				love.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 5", 
			start : 80, 
			stop : 85, 
			onStart : function (event){
				time.show();
			}, 
			onStop : function (event){
				time.hide();
			},
			onStep : function (event){
				time.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 6", 
			start : 85, 
			stop : 89, 
			onStart : function (event){
				touch.show();
			}, 
			onStop : function (event){
				touch.hide();
			},
			onStep : function (event){
				touch.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 7", 
			start : 89, 
			stop : 95, 
			onStart : function (event){
				enough.show();
			}, 
			onStop : function (event){
				enough.hide();
			},
			onStep : function (event){
				enough.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 8", 
			start : 95, 
			stop : 100, 
			onStart : function (event){
				love.show();
			}, 
			onStop : function (event){
				love.hide();
			},
			onStep : function (event){
				love.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 9", 
			start : 100, 
			stop : 105, 
			onStart : function (event){
				time.show();
			}, 
			onStop : function (event){
				time.hide();
			},
			onStep : function (event){
				time.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 10", 
			start : 105, 
			stop : 109, 
			onStart : function (event){
				much.show();
			}, 
			onStop : function (event){
				much.hide();
			},
			onStep : function (event){
				much.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 11", 
			start : 109, 
			stop : 114, 
			onStart : function (event){
				off.show();
			}, 
			onStop : function (event){
				off.hide();
			},
			onStep : function (event){
				off.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 12", 
			start : 118, 
			stop : 127, 
			onStart : function (event){
				firework.show();
			}, 
			onStop : function (event){
				firework.hide();
			},
			onStep : function (event){
				firework.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 13", 
			start : 130, 
			stop : 150, 
			onStart : function (event){
				multiple_line.show();
			}, 
			onStop : function (event){
				multiple_line.hide();
			},
			onStep : function (event){
				multiple_line.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 14", 
			start : 155, 
			stop : 162, 
			onStart : function (event){
				linetrans.show();
			}, 
			onStop : function (event){
				linetrans.hide();
			},
			onStep : function (event){
				linetrans.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 15", 
			start : 164, 
			stop : 168, 
			onStart : function (event){
				firework.show();
			}, 
			onStop : function (event){
				firework.hide();
			},
			onStep : function (event){
				firework.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 16", 
			start : 168, 
			stop : 175, 
			onStart : function (event){
				linetrans.show();
			}, 
			onStop : function (event){
				linetrans.hide();
			},
			onStep : function (event){
				linetrans.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 17", 
			start : 176, 
			stop : 193, 
			onStart : function (event){
				line_fever.show();
			}, 
			onStop : function (event){
				line_fever.hide();
			},
			onStep : function (event){
				line_fever.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 

	});

	sequencer.registerSequence({
			name : "intro 18", 
			start : 193, 
			stop : 198, 
			onStart : function (event){
				love.show();
			}, 
			onStop : function (event){
				love.hide();
			},
			onStep : function (event){
				love.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 19", 
			start : 198, 
			stop : 203, 
			onStart : function (event){
				time.show();
			}, 
			onStop : function (event){
				time.hide();
			},
			onStep : function (event){
				time.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 20", 
			start : 204, 
			stop : 208, 
			onStart : function (event){
				touch.show();
			}, 
			onStop : function (event){
				touch.hide();
			},
			onStep : function (event){
				touch.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 21", 
			start : 208, 
			stop : 214, 
			onStart : function (event){
				enough.show();
			}, 
			onStop : function (event){
				enough.hide();
			},
			onStep : function (event){
				enough.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 22", 
			start : 214, 
			stop : 220, 
			onStart : function (event){
				love.show();
			}, 
			onStop : function (event){
				love.hide();
			},
			onStep : function (event){
				love.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 23", 
			start : 220, 
			stop : 225, 
			onStart : function (event){
				time.show();
			}, 
			onStop : function (event){
				time.hide();
			},
			onStep : function (event){
				time.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 24", 
			start : 225, 
			stop : 230, 
			onStart : function (event){
				much.show();
			}, 
			onStop : function (event){
				much.hide();
			},
			onStep : function (event){
				much.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 25", 
			start : 230, 
			stop : 235, 
			onStart : function (event){
				off.show();
			}, 
			onStop : function (event){
				off.hide();
			},
			onStep : function (event){
				off.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 26", 
			start : 239, 
			stop : 247, 
			onStart : function (event){
				firework.show();
			}, 
			onStop : function (event){
				firework.hide();
			},
			onStep : function (event){
				firework.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 27", 
			start : 255, 
			stop : 263, 
			onStart : function (event){
				linetrans.show();
			}, 
			onStop : function (event){
				linetrans.hide();
			},
			onStep : function (event){
				linetrans.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 28", 
			start : 264, 
			stop : 275, 
			onStart : function (event){
				multiple_line.show();
			}, 
			onStop : function (event){
				multiple_line.hide();
			},
			onStep : function (event){
				multiple_line.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 29", 
			start : 276, 
			stop : 326, 
			onStart : function (event){
				line_fever.show();
			}, 
			onStop : function (event){
				line_fever.hide();
			},
			onStep : function (event){
				line_fever.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 30", 
			start : 329, 
			stop : 335, 
			onStart : function (event){
				love.show();
			}, 
			onStop : function (event){
				love.hide();
			},
			onStep : function (event){
				love.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 31", 
			start : 335, 
			stop : 340, 
			onStart : function (event){
				time.show();
			}, 
			onStop : function (event){
				time.hide();
			},
			onStep : function (event){
				time.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 32", 
			start : 340, 
			stop : 345, 
			onStart : function (event){
				touch.show();
			}, 
			onStop : function (event){
				touch.hide();
			},
			onStep : function (event){
				touch.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 33", 
			start : 345, 
			stop : 350, 
			onStart : function (event){
				enough.show();
			}, 
			onStop : function (event){
				enough.hide();
			},
			onStep : function (event){
				enough.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 34", 
			start : 350, 
			stop : 355, 
			onStart : function (event){
				love.show();
			}, 
			onStop : function (event){
				love.hide();
			},
			onStep : function (event){
				love.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 35", 
			start : 355, 
			stop : 360, 
			onStart : function (event){
				time.show();
			}, 
			onStop : function (event){
				time.hide();
			},
			onStep : function (event){
				time.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

		sequencer.registerSequence({
			name : "intro 36", 
			start : 360, 
			stop : 365, 
			onStart : function (event){
				much.show();
			}, 
			onStop : function (event){
				much.hide();
			},
			onStep : function (event){
				much.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 37", 
			start : 365, 
			stop : 370, 
			onStart : function (event){
				off.show();
			}, 
			onStop : function (event){
				off.hide();
			},
			onStep : function (event){
				off.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 38", 
			start : 370, 
			stop : 380, 
			onStart : function (event){
				love.show();
			}, 
			onStop : function (event){
				love.hide();
			},
			onStep : function (event){
				love.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 39", 
			start : 380, 
			stop : 391, 
			onStart : function (event){
				time.show();
			}, 
			onStop : function (event){
				time.hide();
			},
			onStep : function (event){
				time.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 40", 
			start : 391, 
			stop : 402, 
			onStart : function (event){
				love.show();
			}, 
			onStop : function (event){
				love.hide();
			},
			onStep : function (event){
				love.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 41", 
			start : 402, 
			stop : 411, 
			onStart : function (event){
				time.show();
			}, 
			onStop : function (event){
				time.hide();
			},
			onStep : function (event){
				time.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
			name : "intro 42", 
			start : 414, 
			stop : 421, 
			onStart : function (event){
				firework.show();
			}, 
			onStop : function (event){
				firework.hide();
			},
			onStep : function (event){
				firework.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/3, 1+2/3] 
	});


}




function draw(){
	sequencer.update();
	background(0);

	// INTRO

	if (multiple_line.visible) { //si l'anim0 est visible alors je l'affiche, lier avec anim0.show n .hide qui est dans onStart function pour apparettre et onStop function pour disparaitre
		  multiple_line.display();
		}

	if (line_fever.visible) { //si l'anim0 est visible alors je l'affiche, lier avec anim0.show n .hide qui est dans onStart function pour apparettre et onStop function pour disparaitre
		  line_fever.display();
		}

	if (linetrans.visible) { //si l'anim0 est visible alors je l'affiche, lier avec anim0.show n .hide qui est dans onStart function pour apparettre et onStop function pour disparaitre
		  linetrans.display();
		}

	if (love.visible) { //si l'anim0 est visible alors je l'affiche, lier avec anim0.show n .hide qui est dans onStart function pour apparettre et onStop function pour disparaitre
		  love.display();
		}

	if (time.visible) { //si l'anim0 est visible alors je l'affiche, lier avec anim0.show n .hide qui est dans onStart function pour apparettre et onStop function pour disparaitre
		  time.display();
		}

	if (touch.visible) { //si l'anim0 est visible alors je l'affiche, lier avec anim0.show n .hide qui est dans onStart function pour apparettre et onStop function pour disparaitre
		  touch.display();
		}

	if (much.visible) { //si l'anim0 est visible alors je l'affiche, lier avec anim0.show n .hide qui est dans onStart function pour apparettre et onStop function pour disparaitre
		  much.display();
		}

	if (enough.visible) { //si l'anim0 est visible alors je l'affiche, lier avec anim0.show n .hide qui est dans onStart function pour apparettre et onStop function pour disparaitre
		  enough.display();
		}

	if (off.visible) { //si l'anim0 est visible alors je l'affiche, lier avec anim0.show n .hide qui est dans onStart function pour apparettre et onStop function pour disparaitre
		  off.display();
		}

	if (firework.visible) { //si l'anim0 est visible alors je l'affiche, lier avec anim0.show n .hide qui est dans onStart function pour apparettre et onStop function pour disparaitre
		  firework.display();
		}

}

