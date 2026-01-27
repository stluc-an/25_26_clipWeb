/*----------------------------------------*\
  23_24_AN1_clipWeb - main.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2024-02-23 00:24:49
  @Last Modified time: 2024-02-23 08:58:36
\*----------------------------------------*/
let BPM = 55;
let audioPath = "assets/audio/Prinsessa.mp3";
let sequencer;

let clip;
let birds;

let bulle1;
let bulle1Target;


let bulle2;
let bulle2Target;


let bulle3;
let bulle3Target;

let bulle4;
let bulle4Target;

let marche;

let mean;

let angry;

let glitter;

let fly;

let cri; 

function setup(){
	createCanvas(windowWidth, windowHeight);
	sequencer = new Sequencer(audioPath, BPM, false);

	clip = new Animator(54, 1, "./assets/images/sketch/Clipweb_imgNum_.jpg");
	clip.setSize(windowWidth,windowHeight);


	birds = new Animator(1, 1, "./assets/images/mouvement/birds.png");
	birds.setSize(227, 65);
	birds.setPosition(width, 100);

	cri = new Animator(2, 1, "./assets/images/mouvement/cri_imgNum_.png");
	cri.setSize(570,415);
	cri.setPosition(width-cri.w, 0);

	bulle1 = new Animator(1, 1, "./assets/images/mouvement/bulle1.png");
	bulle1.setSize(windowWidth,windowHeight);
	bulle1.setPosition(0, height);

	bulle2 = new Animator(1, 1, "./assets/images/mouvement/bulle2.png");
	bulle2.setSize(windowWidth,windowHeight);
	bulle2.setPosition(0, height);

	bulle3 = new Animator(1, 1, "./assets/images/mouvement/bulle3.png");
	bulle3.setSize(windowWidth,windowHeight);
	bulle3.setPosition(0, height);

	bulle4 = new Animator(1, 1, "./assets/images/mouvement/bulle4.png");
	bulle4.setSize(windowWidth,windowHeight);
	bulle4.setPosition(0, height);

	marche = new Animator(1, 1, "./assets/images/mouvement/marche13.png");
	marche.setSize(255,365);
	marche.setPosition(550, 250);

	mean = new Animator(2, 1, "./assets/images/mouvement/mean_imgNum_.png");
	mean.setSize(140,135);
	mean.setPosition(630, 100);

	angry = new Animator(2, 1, "./assets/images/mouvement/angry_imgNum_.png");
	angry.setSize(80,75);
	angry.setPosition(660, 140);
	
	glitter = new Animator(2, 1, "./assets/images/mouvement/glitter_imgNum_.png");
	glitter.setSize(97,80);
	glitter.setPosition(879, 630);

	fly = new Animator(1, 1, "./assets/images/mouvement/fly.png");
	fly.setSize(87,101);
	fly.setPosition(width/2, 0);
	

	sequencer.registerSequence({
		name : "my first sequence", 
		start : 1, 
		stop : 200, 
		onStart : function (event){
			clip.show()
		}, 
		onStep : function (event){
			clip.pointer++;
		},
		measure : 200,
		//alligner mesure a stop
		steps : [2,4,6,8,10,12,14,15,16,17,19,21,25,29,33,65,69,74,79,82,87,90,93,96,100,108,112,116,118,120,123,125,128,131,135,138,141,144,146,150,153,155,157,160,162,165,169,174,176,180,183,186,189,192]
	});

		sequencer.registerSequence({
			name : "my bird sequence", 
			start : 17, 
			stop : 20, 
			onStart : function (event){
				birds.show()
			}, 
			onStop : function (event){
				birds.hide()
			}
		});


		sequencer.registerSequence({
			name : "my cri sequence", 
			start : 21, 
			stop : 28, 
			onStart : function (event){
				cri.show()
			}, 
			onStop : function (event){
				cri.hide()
			}, 
			onStep : function (event){
				cri.pointer++;
				cri.pointer = cri.pointer % cri.imgs.length;
			}
		});


		sequencer.registerSequence({
			name : "my bulle1 sequence", 
			start : 33, 
			stop : 41, 
			onStart : function (event){
				bulle1.show()
				bulle1Target = 0
			}, 
			onStop : function (event){
				bulle1.hide()
			}
		});


		sequencer.registerSequence({
			name : "my bulle2 sequence", 
			start : 42, 
			stop : 48, 
			onStart : function (event){
				bulle2.show()
				bulle2Target = 0
			}, 
			onStop : function (event){
				bulle2.hide()
			}
		});


		sequencer.registerSequence({
			name : "my bulle3 sequence", 
			start : 49, 
			stop : 56, 
			onStart : function (event){
				bulle3.show()
				bulle3Target = 0
			}, 
			onStop : function (event){
				bulle3.hide()
			}
		});


		sequencer.registerSequence({
			name : "my bulle4 sequence", 
			start : 57, 
			stop : 64, 
			onStart : function (event){
				bulle4.show()
				bulle4Target = 0
			}, 
			onStop : function (event){
				bulle4.hide()
			}
		});

		sequencer.registerSequence({
			name : "my marche sequence", 
			start : 69, 
			stop : 73, 
			onStart : function (event){
				marche.show()
				// marcheTarget = 600
			}, 
			onStop : function (event){
				marche.hide()
			}
		});


		sequencer.registerSequence({
			name : "my mean sequence", 
			start : 74, 
			stop : 78, 
			onStart : function (event){
				mean.show()
			}, 
			onStop : function (event){
				mean.hide()
			},
			onStep : function (event){
				mean.pointer++;
				mean.pointer = mean.pointer % mean.imgs.length;
			}
		});

		sequencer.registerSequence({
			name : "my angry sequence", 
			start : 79, 
			stop : 81, 
			onStart : function (event){
				angry.show()
			}, 
			onStop : function (event){
				angry.hide()
			},
			onStep : function (event){
				angry.pointer++;
				angry.pointer = angry.pointer % angry.imgs.length;
			}
		});

		sequencer.registerSequence({
			name : "my glitter sequence", 
			start : 87, 
			stop : 89, 
			onStart : function (event){
				glitter.show()
			}, 
			onStop : function (event){
				glitter.hide()
			},
			onStep : function (event){
				glitter.pointer++;
				glitter.pointer = glitter.pointer % glitter.imgs.length;
			}
		});
					

		sequencer.registerSequence({
			name : "my fly sequence", 
			start : 93, 
			stop : 95, 
			onStart : function (event){
				fly.show()
			}, 
			onStop : function (event){
				fly.hide()
			}

		});


}


function draw(){
	sequencer.update();
	background(255);
	
	if(clip.visible){
		clip.display();
	}

	if(birds.visible){
		birds.setPosition(birds.x - 3, lerp(-100, 100, birds.x/width ) + (noise(millis() / 1000) * 100)   )
		birds.display();
	}

	if(bulle1.visible){
		bulle1.y += (bulle1Target - bulle1.y) * 0.1;
		bulle1.setPosition(0, bulle1.y)
		bulle1.display();
	}

	if(bulle2.visible){
		bulle2.y += (bulle2Target - bulle2.y) * 0.1;
		bulle2.setPosition(0, bulle2.y)
		bulle2.display();
	}

	if(bulle3.visible){
		bulle3.y += (bulle3Target - bulle3.y) * 0.1;
		bulle3.setPosition(0, bulle3.y)
		bulle3.display();
	}

	if(bulle4.visible){
		bulle4.y += (bulle4Target - bulle4.y) * 0.1;
		bulle4.setPosition(0, bulle4.y)
		bulle4.display();
	}

	if(marche.visible){
	//	marche.x = (marcheTarget - marche.x) * 0.01;
		marche.setPosition(marche.x +0.2 , marche.y +0.2 )
		marche.display();
	}

	if(cri.visible){
		cri.display();
	}

	if(mean.visible){
		mean.display();
	}

	if(angry.visible){
		angry.display();
	}

	if(glitter.visible){
		glitter.display();
	}


	if(fly.visible){
		fly.setPosition(fly.x - 2, fly.y + 0.2, lerp(-100, 100, fly.x/width ) + (noise(millis() / 1000) * 100)   )
		fly.display();
	}


}



