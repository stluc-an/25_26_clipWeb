/*----------------------------------------*\
  23_24_AN1_clipWeb - main.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2024-02-23 00:24:49
  @Last Modified time: 2024-02-23 08:58:36
\*----------------------------------------*/
let BPM = 95;
let audioPath = "assets/audio/785431_Blue-Skies-Over-Langeland.mp3";
let sequencer;

let reveil
let kounou;
//let ours;

function setup(){
	createCanvas(windowWidth, windowHeight);
	sequencer = new Sequencer(audioPath, BPM, false);
  
  noir = new Animator(1, 2, "./assets/images/noir/n_imgNum_.png");
  reveil = new Animator(1, 2, "./assets/images/reveil/r_imgNum_.png");
  kounou = new Animator(1, 4, "./assets/images/kounou/k_imgNum_.png");
  dance = new Animator(1, 5, "./assets/images/dance/d_imgNum_.png");
  bam = new Animator(1, 8, "./assets/images/bam/b_imgNum_.png");
  rideau = new Animator(1, 7, "./assets/images/rideau/ri_imgNum_.png");
  ouvrir = new Animator(1, 9, "./assets/images/ouvrir/or_imgNum_.png");
  close = new Animator(1, 2, "./assets/images/close/c_imgNum_.png");
  flemme = new Animator(1, 2, "./assets/images/flemme/f_imgNum_.png");
  flemmeD = new Animator(1, 4, "./assets/images/flemmeD/fd_imgNum_.png");
  stretch = new Animator(1, 10, "./assets/images/stretch/s_imgNum_.png");
  flemmeT = new Animator(1, 3, "./assets/images/flemmeT/ft_imgNum_.png");
  pow = new Animator(1, 2, "./assets/images/pow/p_imgNum_.png");
  poof = new Animator(1, 2, "./assets/images/poof/po_imgNum_.png");
  saut = new Animator(1, 6, "./assets/images/saut/s_imgNum_.png");
  zap = new Animator(1, 2, "./assets/images/zap/z_imgNum_.png");
  feuille = new Animator(1, 2, "./assets/images/feuille/f_imgNum_.png");
  essai = new Animator(1, 2, "./assets/images/essai/e_imgNum_.png");
  lit = new Animator(1, 2, "./assets/images/lit/l_imgNum_.png");
  wii = new Animator(1, 1, "./assets/images/wii/w_imgNum_.png");
  cafe = new Animator(1, 7, "./assets/images/cafe/c_imgNum_.png");
  disco = new Animator(1, 24, "./assets/images/disco/d_imgNum_.png");
  tourne = new Animator(1, 12, "./assets/images/tourne/t_imgNum_.png");
  recap = new Animator(1, 4, "./assets/images/recap/r_imgNum_.png");
  recapD = new Animator(1, 4, "./assets/images/recapD/rd_imgNum_.png");
  pompe = new Animator(1, 4, "./assets/images/pompe/p_imgNum_.png");
  altere = new Animator(1, 4, "./assets/images/altere/a_imgNum_.png");
  tiroir = new Animator(1, 3, "./assets/images/tiroir/t_imgNum_.png");
  masque = new Animator(1, 6, "./assets/images/masque/m_imgNum_.png");
  cape = new Animator(1, 9, "./assets/images/cape/c_imgNum_.png");
  partir = new Animator(1, 32, "./assets/images/partir/p_imgNum_.png");
  hero = new Animator(1, 3, "./assets/images/hero/h_imgNum_.png");



  noir.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my zero sequence", 
		start : 1, 
		stop : 3, 
		onStart : function (event){
			noir.show();
		}, 
		onStop : function (event){
			noir.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			noir.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

  reveil.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my first sequence", 
		start : 4, 
		stop : 7, 
		onStart : function (event){
			reveil.show();
		}, 
		onStop : function (event){
			reveil.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			reveil.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

  noir.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my second sequence", 
		start : 8, 
		stop : 11, 
		onStart : function (event){
			noir.show();
		}, 
		onStop : function (event){
			noir.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			noir.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

  reveil.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my third sequence", 
		start : 12, 
		stop : 15, 
		onStart : function (event){
			reveil.show();
		}, 
		onStop : function (event){
			reveil.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			reveil.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

  noir.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my fourth sequence", 
		start : 16, 
		stop : 19, 
		onStart : function (event){
			noir.show();
		}, 
		onStop : function (event){
			noir.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			noir.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

  reveil.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my fifth sequence", 
		start : 20, 
		stop : 33, 
		onStart : function (event){
			reveil.show();
		}, 
		onStop : function (event){
			reveil.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			reveil.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

  bam.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my six sequence", 
		start : 34, 
		stop : 36, 
		onStart : function (event){
			bam.show();
		}, 
		onStop : function (event){
			bam.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			bam.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

  rideau.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my seven sequence", 
		start : 37, 
		stop : 47, 
		onStart : function (event){
			rideau.show();
		}, 
		onStop : function (event){
			rideau.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			rideau.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});


  noir.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my eight sequence", 
		start : 48, 
		stop : 49, 
		onStart : function (event){
			noir.show();
		}, 
		onStop : function (event){
			noir.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			noir.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});
	
	reveil.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my nine sequence", 
		start : 50, 
		stop : 51, 
		onStart : function (event){
			reveil.show();
		}, 
		onStop : function (event){
			reveil.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			reveil.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});
	

	noir.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my ten sequence", 
		start : 52, 
		stop : 53, 
		onStart : function (event){
			noir.show();
		}, 
		onStop : function (event){
			noir.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			noir.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	kounou.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my eleven sequence", 
		start : 54, 
		stop : 59, 
		onStart : function (event){
			kounou.show();
		}, 
		onStop : function (event){
			kounou.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			kounou.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});
	
  rideau.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my twelve sequence", 
		start : 60, 
		stop : 61, 
		onStart : function (event){
			rideau.show();
		}, 
		onStop : function (event){
			rideau.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			rideau.next(true);
		}, 
		measure : 1, 
		steps : [1, 1]
	});

  kounou.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my thirteen sequence", 
		start : 62, 
		stop : 67, 
		onStart : function (event){
			kounou.show();
		}, 
		onStop : function (event){
			kounou.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			kounou.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

  

  ouvrir.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my fourteen sequence", 
		start : 68, 
		stop : 71, 
		onStart : function (event){
			ouvrir.show();
		}, 
		onStop : function (event){
			ouvrir.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			ouvrir.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

  kounou.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my fifteen sequence", 
		start : 72, 
		stop : 75, 
		onStart : function (event){
			kounou.show();
		}, 
		onStop : function (event){
			kounou.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			kounou.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	ouvrir.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my seventeen sequence", 
		start : 76, 
		stop : 79, 
		onStart : function (event){
			ouvrir.show();
		}, 
		onStop : function (event){
			ouvrir.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			ouvrir.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	close.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my eighteen sequence", 
		start : 80, 
		stop : 81, 
		onStart : function (event){
			close.show();
		}, 
		onStop : function (event){
			close.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			close.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	flemme.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my nineteen sequence", 
		start : 82, 
		stop : 83, 
		onStart : function (event){
			flemme.show();
		}, 
		onStop : function (event){
			flemme.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			flemme.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	kounou.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my twenty sequence", 
		start : 84, 
		stop : 91, 
		onStart : function (event){
			kounou.show();
		}, 
		onStop : function (event){
			kounou.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			kounou.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	flemme.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my twenty-one sequence", 
		start : 92, 
		stop : 94, 
		onStart : function (event){
			flemme.show();
		}, 
		onStop : function (event){
			flemme.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			flemme.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	flemmeD.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my twenty-two sequence", 
		start : 95, 
		stop : 96, 
		onStart : function (event){
			flemmeD.show();
		}, 
		onStop : function (event){
			flemmeD.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			flemmeD.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1]
	});

	stretch.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my twenty-tree sequence", 
		start : 97, 
		stop : 99, 
		onStart : function (event){
			stretch.show();
		}, 
		onStop : function (event){
			stretch.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			stretch.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/3, 1+2/3]
	});

	pow.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my twenty-four sequence", 
		start : 100, 
		stop : 101, 
		onStart : function (event){
			pow.show();
		}, 
		onStop : function (event){
			pow.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			pow.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/3, 1+2/3]
	});

	flemmeT.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my twenty-five sequence", 
		start : 102, 
		stop : 104, 
		onStart : function (event){
			flemmeT.show();
		}, 
		onStop : function (event){
			flemmeT.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			flemmeT.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/4, 1+2/4, 1+3/4]
	});


  dance.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my twenty-six sequence", 
		start : 105, 
		stop : 108, 
		onStart : function (event){
			dance.show();
		}, 
		onStop : function (event){

			dance.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			dance.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8]
	});

	flemmeT.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my twenty-seven sequence", 
		start : 109, 
		stop : 113, 
		onStart : function (event){
			flemmeT.show();
		}, 
		onStop : function (event){
			flemmeT.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			flemmeT.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/4, 1+2/4, 1+3/4]
	});

	dance.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my twenty-eight sequence", 
		start : 114, 
		stop : 115, 
		onStart : function (event){
			dance.show();
		}, 
		onStop : function (event){

			dance.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			dance.next(true)
		}, 
		measure : 1, 
		steps : [1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8]
	});

	zap.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my twenty-nine sequence", 
		start : 116, 
		stop : 117, 
		onStart : function (event){
			zap.show();
		}, 
		onStop : function (event){
			zap.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			zap.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/3, 1+2/3]
	});

	cafe.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my thirty sequence", 
		start : 118, 
		stop : 120, 
		onStart : function (event){
			cafe.show();
		}, 
		onStop : function (event){
			cafe.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			cafe.next(true)
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	dance.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my thirty-one sequence", 
		start : 121, 
		stop : 125, 
		onStart : function (event){
			dance.show();
		}, 
		onStop : function (event){

			dance.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			dance.next(true)
		}, 
		measure : 1, 
		steps : [1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8]
	});

	saut.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my thirty-two sequence", 
		start : 126, 
		stop : 131, 
		onStart : function (event){
			saut.show();
		}, 
		onStop : function (event){
			saut.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			saut.next(true)
		}, 
		measure : 1, 
		steps : [1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8]
	});

	poof.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my thirty-tree sequence", 
		start : 132, 
		stop : 133, 
		onStart : function (event){
			poof.show();
		}, 
		onStop : function (event){
			poof.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			poof.next(true)
		}, 
		measure : 1, 
		steps : [1, 1+1/3, 1+2/3]
	});

	flemmeT.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my thirty-four sequence", 
		start : 134, 
		stop : 136, 
		onStart : function (event){
			flemmeT.show();
		}, 
		onStop : function (event){
			flemmeT.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			flemmeT.next(true)
		}, 
		measure : 1, 
		steps : [1, 1+1/4, 1+2/4, 1+3/4]
	});

	dance.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my thirty-five sequence", 
		start : 137, 
		stop : 141, 
		onStart : function (event){
			dance.show();
		}, 
		onStop : function (event){

			dance.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			dance.next(true)
		}, 
		measure : 1, 
		steps : [1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8]
	});

	saut.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my thirty-six sequence", 
		start : 142, 
		stop : 145, 
		onStart : function (event){
			saut.show();
		}, 
		onStop : function (event){
			saut.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			saut.next(true)
		}, 
		measure : 1, 
		steps : [1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8]
	});

	dance.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my thirty-seven sequence", 
		start : 146, 
		stop : 147, 
		onStart : function (event){
			dance.show();
		}, 
		onStop : function (event){

			dance.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			dance.next(true)
		}, 
		measure : 1, 
		steps : [1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8]
	});

	wii.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my thirty-eight sequence", 
		start : 148, 
		stop : 149, 
		onStart : function (event){
			wii.show();
		}, 
		onStop : function (event){
			wii.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			wii.next(true)
		}, 
		measure : 1, 
		steps : [1, 1+1/3, 1+2/3]
	});

	cafe.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my thirty-nine sequence", 
		start : 150, 
		stop : 152, 
		onStart : function (event){
			cafe.show();
		}, 
		onStop : function (event){
			cafe.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			cafe.next(true)
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	dance.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my fourty sequence", 
		start : 153, 
		stop : 157, 
		onStart : function (event){
			dance.show();
		}, 
		onStop : function (event){

			dance.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			dance.next(true)
		}, 
		measure : 1, 
		steps : [1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8]
	});

	saut.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my fourty-one sequence", 
		start : 158, 
		stop : 163, 
		onStart : function (event){
			saut.show();
		}, 
		onStop : function (event){
			saut.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			saut.next(true)
		}, 
		measure : 1, 
		steps : [1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8]
	});

  recap.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my fourty-two sequence", 
		start : 164, 
		stop : 167, 
		onStart : function (event){
			recap.show();
		}, 
		onStop : function (event){
			recap.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			recap.next(true)
		}, 
		measure : 1, 
		steps : [1, 1+1]
	});

	disco.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my fourty-three sequence", 
		start : 168, 
		stop : 171, 
		onStart : function (event){
			disco.show();
		}, 
		onStop : function (event){
			disco.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			disco.next(true)
		}, 
		measure : 1, 
		steps : [1, 1+1/12, 1+2/12, 1+3/12, 1+4/12, 1+5/12, 1+6/12, 1+7/12, 1+8/12, 1+9/12, 1+10/12, 1+11/12]
	});

  recapD.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my fourty-four sequence", 
		start : 172, 
		stop : 175, 
		onStart : function (event){
			recapD.show();
		}, 
		onStop : function (event){
			recapD.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			recapD.next(true)
		}, 
		measure : 1, 
		steps : [1, 1+1]
	});

	tourne.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my fourty-five sequence", 
		start : 176, 
		stop : 179, 
		onStart : function (event){
			tourne.show();
		}, 
		onStop : function (event){
			tourne.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			tourne.next(true)
		}, 
		measure : 1, 
		steps : [1, 1+1/12, 1+2/12, 1+3/12, 1+4/12, 1+5/12, 1+6/12, 1+7/12, 1+8/12, 1+9/12, 1+10/12, 1+11/12]
	});

	pompe.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my fourty-six sequence", 
		start : 180, 
		stop : 183, 
		onStart : function (event){
			pompe.show();
		}, 
		onStop : function (event){
			pompe.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			pompe.next(true)
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});


	disco.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my fourty-seven sequence", 
		start : 184, 
		stop : 187, 
		onStart : function (event){
			disco.show();
		}, 
		onStop : function (event){
			disco.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			disco.next(true)
		}, 
		measure : 1, 
		steps : [1, 1+1/12, 1+2/12, 1+3/12, 1+4/12, 1+5/12, 1+6/12, 1+7/12, 1+8/12, 1+9/12, 1+10/12, 1+11/12]
	});

	altere.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my fourty-eight sequence", 
		start : 188, 
		stop : 191, 
		onStart : function (event){
			altere.show();
		}, 
		onStop : function (event){
			altere.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			altere.next(true)
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});


	tourne.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my fourty-nine sequence", 
		start : 192, 
		stop : 195, 
		onStart : function (event){
			tourne.show();
		}, 
		onStop : function (event){
			tourne.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			tourne.next(true)
		}, 
		measure : 1, 
		steps : [1, 1+1/12, 1+2/12, 1+3/12, 1+4/12, 1+5/12, 1+6/12, 1+7/12, 1+8/12, 1+9/12, 1+10/12, 1+11/12]
	});

	tiroir.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my fifty sequence", 
		start : 196, 
		stop : 203, 
		onStart : function (event){
			tiroir.show();
		}, 
		onStop : function (event){
			tiroir.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			tiroir.next(true)
		}, 
		measure : 1, 
		steps : [1, 1+1]
	});

	masque.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my fifty-one sequence", 
		start : 204, 
		stop : 211, 
		onStart : function (event){
			masque.show();
		}, 
		onStop : function (event){
			masque.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			masque.next(true)
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	cape.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my fifty-two sequence",
		start : 212, 
		stop : 219, 
		onStart : function (event){
			cape.show();
		}, 
		onStop : function (event){
			cape.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			cape.next(true)
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	partir.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my fifty-three sequence",
		start : 220, 
		stop : 229, 
		onStart : function (event){
			partir.show();
		}, 
		onStop : function (event){
			partir.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			partir.next(true)
		}, 
		measure : 1, 
		steps : [1, 1+1/3, 1+2/3]
	});

	hero.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "my fifty-four sequence",
		start : 230, 
		stop : 242, 
		onStart : function (event){
			hero.show();
		}, 
		onStop : function (event){
			hero.hide();
		},
		onStep : function (event){
			//console.log(event.amount)
			//kounou.setPointer( event.amount * 3 % 1 );
			hero.next(true)
		}, 
		measure : 1, 
		steps : [1, 1+1/3, 1+2/3]
	});

 

}




function draw(){
	sequencer.update();
	background(0);

	//ours.setPointer(1 - millis()/1000 % 1);

  if(noir.visible){
	  noir.display();
	}

	if(kounou.visible){
	  kounou.display();
	}

	if(reveil.visible){
	  reveil.display();
	}

	if(dance.visible){
	  dance.display();
	}

	if(bam.visible){
	  bam.display();
	}

	if(rideau.visible){
	  rideau.display();
	}

	if(ouvrir.visible){
	  ouvrir.display();
	}

	if(close.visible){
	  close.display();
	}

	if(flemme.visible){
	  flemme.display();
	}

	if(flemmeD.visible){
	  flemmeD.display();
	}

	if(stretch.visible){
	  stretch.display();
	}

	if(flemmeT.visible){
	  flemmeT.display();
	}

	if(pow.visible){
	  pow.display();
	}

	if(poof.visible){
	  poof.display();
	}

	if(saut.visible){
	  saut.display();
	}

	if(zap.visible){
	  zap.display();
	}

	if(feuille.visible){
	  feuille.display();
	}

	if(essai.visible){
	  essai.display();
	}

	if(lit.visible){
	  lit.display();
	}

	if(wii.visible){
	  wii.display();
	}

	if(cafe.visible){
	  cafe.display();
	}

	if(disco.visible){
	  disco.display();
	}

	if(tourne.visible){
	  tourne.display();
	}

	if(recap.visible){
	  recap.display();
	}

	if(recapD.visible){
	  recapD.display();
	}

	if(pompe.visible){
	  pompe.display();
	}

	if(altere.visible){
	  altere.display();
	}

	if(tiroir.visible){
	  tiroir.display();
	}

	if(masque.visible){
	  masque.display();
	}

	if(cape.visible){
	  cape.display();
	}

	if(partir.visible){
	  partir.display();
	}

	if(hero.visible){
	  hero.display();
	}
}