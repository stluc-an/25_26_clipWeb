/*----------------------------------------*\
  23_24_AN1_clipWeb - main.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2024-02-23 00:24:49
  @Last Modified time: 2024-02-23 08:58:36
\*----------------------------------------*/
let BPM = 180;
let audioPath = "./assets/audio/Denis Swillen - The Cartman.mp3";
let sequencer;
let nombreImages =13;
let tempsEclair = 3;//secondes
let fond;
let fondHorizontale;
let fondHorizontale2;
let backgroundSpeed = 0;
let backgroundTranslateSpeed = 0;
let sequenceEclair;
let interieurmonstre;
let first = true;
let step=1;
let timeStep = 0;
let fh2Start ;
let spriteParallaxe;
let perso ;
let personnageTombe;
let persoStep=1;
let persoheight=0;
let bateau;
let flash = 1;
let flashOp=255;
let flashStep= 1;
let currentStep = 0;
let pauseStart=3000;
let showh9=false;
let tempoT=0;

function setup(){
	console.log("width " +windowWidth +" " +windowHeight);
	createCanvas(windowWidth, windowHeight);
	sequencer = new Sequencer(audioPath, BPM, false);

	fond = new Animator (1, 0, "./assets/images/fond/fond 1.jpg");
	
	fond.setSize(width, 4096/1714 * width);
	fondHorizontale1 = new Animator (1, 0,"./assets/images/fond/premier fond H.JPG")
	fondHorizontale1.setSize(/*4096/1714*width*/1714,height);//width, 1714/4096 * width)
	fondHorizontale1.setPosition(1,1);
	fondHorizontale2 = new Animator (1, 0,"./assets/images/fond/troisème fond.jpg")
	fondHorizontale2.setSize(/*4096/1714*width*/1714,height);//width, 1714/4096 * width)
	fondHorizontale2.setPosition(width,1);	
	fondHorizontale3 = new Animator (1, 0,"./assets/images/fond/noir.jpg");
	fondHorizontale3.setSize(/*4096/1714*width*/303,height);
	fondHorizontale3.setPosition(width,1);
	fondHorizontale4 = new Animator (1, 0,"./assets/images/fond/interieuranimal.jpg");
	fondHorizontale4.setSize(/*4096/1714*width*/1714,height);
	fondHorizontale4.setPosition(width,1);
	fondHorizontale5 = new Animator (1, 0,"./assets/images/fond/portail.jpg");
	fondHorizontale5.setSize(/*4096/1714*width*/1714,height);
	fondHorizontale5.setPosition(width,1);
	fondHorizontale6 = new Animator (1, 0,"./assets/images/fond/fond avant dernier H.jpg");
	fondHorizontale6.setSize(/*4096/1714*width*/1714,height);
	fondHorizontale6.setPosition(width,1);
	fondHorizontale7 = new Animator (1, 0,"./assets/images/fond/fond dernier H.jpg");
	fondHorizontale7.setSize(/*4096/1714*width*/1714,height);
	fondHorizontale7.setPosition(width,1);
	fondHorizontale8 = new Animator (1, 0,"./assets/images/fond/brume de transition.jpg");
	fondHorizontale8.setSize(width, 4096/1714 * width);
	fondHorizontale8.setPosition(1,height);
	fondHorizontale8.setPosition (fondHorizontale8.x,-100);
	fondHorizontale9 = new Animator (1, 0,"./assets/images/fond/final.jpg");
	fondHorizontale9.setSize(/*4096/1714*width*/1714,height);
	fondHorizontale9.setPosition(1,1);
	fondHorizontale9.visible=false;;
	sequenceEclair = new Animator (99, 87,"./assets/images/eclair/eclair _imgNum_.JPG");
	sequenceEclair.setSize(width,height);
	personnageMarche = new Animator (8, 1,"./assets/images/Personnage/marche _imgNum_.PNG");
	personnageMarche.setSize(500,400);
	personnageTombe = new Animator (3, 1,"./assets/images/perso qui tombe/persoTombe _imgNum_.PNG");
	personnageTombe.setSize(300,800);
	bateau = new Animator (1, 1,"./assets/images/fond/bateau.png");
	bateau.setSize(300,300);
	
	


	sequencer.registerSequence({
		name : "my first sequence", 
		start :1, 
		stop :345, 
		onStart : function (event){
			
			console.log("onstart")
			backgroundSpeed = 2;
			backgroundTranslateSpeed = 2;
			first = false;
			timeStep=millis();


		}, 
		onStop : function (event){
			backgroundSpeed = 0;
			backgroundTranslateSpeed = 0;
		},
		onStep : function (event){ 
			step++;
			
		}, 
		measure : 1, 
		steps : [1]
	});
}

function draw(){
	console.log("draw step:"+step+" currenstep:"+currentStep);
	
	if (first){	
		background(255);
		
		
		sequenceEclair.setPosition(1,1);
		sequenceEclair.setPointer(0);  
		sequenceEclair.show();
		sequenceEclair.display();
	 
		
	}else{
			
		// }
		if (step<11) {
			let pointer = (((((nombreImages/tempsEclair)*((millis()-timeStep)%(tempsEclair*1000+1))))/1000))/13;
	
			sequenceEclair.setPointer(pointer);
			sequenceEclair.display();
		 }
		if(step==11)currentStep=1;	
		if (currentStep==1){      
			fond.setPosition(fond.x,fond.y-backgroundSpeed); 
			fond.display();
			sequenceEclair.hide();
		} 
		
		if(currentStep==1&&(fond.y+fond.h)-height>=0&&(fond.y+fond.h)-height<backgroundSpeed){
			currentStep=2;
		}
		if(currentStep==2){
			fondHorizontale1.setPosition(fondHorizontale1.x-backgroundTranslateSpeed,fondHorizontale1.y);
			fondHorizontale1.display();
			fond.hide();
		}
		
		if(currentStep==2&&(fondHorizontale1.x+fondHorizontale1.w)-width<0){
			currentStep=3;
			fh2Start=width;
		}
		
		if(currentStep==3){

			fh2Start = fh2Start-backgroundTranslateSpeed;
			fondHorizontale1.setPosition(fondHorizontale1.x-backgroundTranslateSpeed,fondHorizontale1.y);
			fondHorizontale1.display();
			fondHorizontale2.setPosition ( fh2Start,fondHorizontale2.y);
			fondHorizontale2.display();	
		}
	
		if(currentStep==3&&(fondHorizontale2.x+fondHorizontale2.w)-width>=0&&(fondHorizontale2.x+fondHorizontale2.w)-width<backgroundSpeed){
			currentStep=4;
			fh2Start=width;
		}

		if(currentStep==4){
			
			fh2Start = fh2Start-backgroundTranslateSpeed;
			fondHorizontale2.setPosition(fondHorizontale2.x-backgroundTranslateSpeed,fondHorizontale2.y);
			fondHorizontale2.display();
			fondHorizontale3.setPosition ( fh2Start,fondHorizontale3.y);
			fondHorizontale3.display();	
		}

		if(currentStep==4&&(fondHorizontale3.x+fondHorizontale3.w)-width>=0&&(fondHorizontale3.x+fondHorizontale3.w)-width<backgroundSpeed){
			currentStep=5;
			fh2Start=width;
		}

		
		if(currentStep==5){

			fh2Start = fh2Start-backgroundTranslateSpeed;
			fondHorizontale2.setPosition(fondHorizontale2.x-backgroundTranslateSpeed,fondHorizontale2.y);
			fondHorizontale2.display();
			fondHorizontale3.setPosition(fondHorizontale3.x-backgroundTranslateSpeed,fondHorizontale3.y);
			fondHorizontale3.display();
			fondHorizontale4.setPosition ( fh2Start,fondHorizontale4.y);
			fondHorizontale4.display();	
		
		}

		if(currentStep==5&&(fondHorizontale4.x+fondHorizontale4.w)-width>=0&&(fondHorizontale4.x+fondHorizontale4.w)-width<backgroundSpeed){
			currentStep=6;
			fh2Start=width;
		}

	
		if(currentStep==6){
			fh2Start = fh2Start-backgroundTranslateSpeed;
			fondHorizontale3.setPosition(fondHorizontale3.x-backgroundTranslateSpeed,fondHorizontale3.y);
			fondHorizontale3.display();
			fondHorizontale4.setPosition(fondHorizontale4.x-backgroundTranslateSpeed,fondHorizontale4.y);
			fondHorizontale4.display();
			fondHorizontale5.setPosition ( fh2Start,fondHorizontale5.y);
			fondHorizontale5.display();	
		}

		if(currentStep==6&&(fondHorizontale5.x+fondHorizontale5.w)-width>=0&&(fondHorizontale5.x+fondHorizontale5.w)-width<backgroundSpeed){
			currentStep=7;
			fh2Start=width;
		}


		if (currentStep==7){


			fh2Start = fh2Start-backgroundTranslateSpeed;
			fondHorizontale5.setPosition(fondHorizontale5.x-backgroundTranslateSpeed,fondHorizontale5.y);
			fondHorizontale5.display();
			fondHorizontale6.setPosition ( fh2Start,fondHorizontale6.y);
			fondHorizontale6.display();	
		}
		
		if(currentStep==7&&(fondHorizontale6.x+fondHorizontale6.w)-width>=0&&(fondHorizontale6.x+fondHorizontale6.w)-width<backgroundSpeed){
			currentStep=8;
			fh2Start=width;
		}

		if ( currentStep==8){
			fh2Start = fh2Start-backgroundTranslateSpeed;
			fondHorizontale6.setPosition(fondHorizontale6.x-backgroundTranslateSpeed,fondHorizontale6.y);
			fondHorizontale6.display();
			fondHorizontale7.setPosition ( fh2Start,fondHorizontale7.y);
			fondHorizontale7.display();	
			
		}
		if(currentStep==8&&(fondHorizontale7.x+fondHorizontale7.w)-width>=0&&(fondHorizontale7.x+fondHorizontale7.w)-width<backgroundSpeed){
			currentStep=9;
			pauseStart=step;
		}

		if(currentStep==9){

			fondHorizontale7.setPosition ( fh2Start,fondHorizontale7.y);
			fondHorizontale7.display();	
		}

		if (currentStep==9&&step-pauseStart>9){
			currentStep=10;
			fh2Start=-(fondHorizontale8.h-height)
		}
		
		if (currentStep==10){
			fh2Start +=backgroundSpeed;
			fondHorizontale8.setPosition (fondHorizontale8.x,fh2Start);
			fondHorizontale8.display();	
		}
		if(currentStep==10&&fondHorizontale8.y>=0&&fondHorizontale8.y<backgroundSpeed){
			currentStep=11;
			showh9=true;
		}

		if(showh9&&currentStep==11){
		;
			fondHorizontale9.setPosition ( 1,1);
			fondHorizontale9.display();	
		}
		if(currentStep==0 )tempoT=step;

		if (currentStep==1) {
			if(step-tempoT>6){

			
				let pointer =((millis()-timeStep)/1000)%1;
				personnageTombe.setPointer(pointer);  
				personnageTombe.setPosition((width/2)-(personnageTombe.w/2),height-((personnageTombe.h/12)*10));
				personnageTombe.display();
			}

			
		 }
		

		if (currentStep>1&&currentStep<10) {
			let pointer =((millis()-timeStep)/1000)%1;
			personnageMarche.setPointer(pointer);
			if (currentStep==1|| currentStep==2) persoStep+=0.3; 
			if(currentStep==9)persoStep+=1.3;

			personnageMarche.setPosition(Math.min(width/2,persoStep),height-380-persoheight);
				/*fill(255,0,0);
				rect((fondHorizontale2.x+(fondHorizontale2.w/2)),100,(fondHorizontale3.x)-(fondHorizontale2.x+(fondHorizontale2.w/2)),100);
				fill(0,255,0);
				rect((fondHorizontale2.x+((fondHorizontale2.w/16)*13)),1,(fondHorizontale4.x)-(fondHorizontale2.x+((fondHorizontale2.w/16)*13)),100);
				fill(0,0,255);*/
				//rect((fondHorizontale3.x),100,(fondHorizontale3.w),100);
			if (personnageMarche.x+(personnageMarche.w/2)>=(fondHorizontale2.x+(fondHorizontale2.w/2))
				&&personnageMarche.x+(personnageMarche.w/2)<fondHorizontale3.x){persoheight+=0.4;}

			
			if (personnageMarche.x+(personnageMarche.w/2)>=fondHorizontale3.x&&
			personnageMarche.x+(personnageMarche.w/2)<fondHorizontale3.x+fondHorizontale3.w){ persoheight-=1.2;}
			console.log("personnageMarche.x:"+personnageMarche.x +" personnageMarche.w: "+personnageMarche.w +" fondHorizontale3.x:"+fondHorizontale3.x +" fondHorizontale3.w:"+fondHorizontale3.w)
			if ((personnageMarche.x+(personnageMarche.w/2)>=(fondHorizontale2.x+((fondHorizontale2.w/16)*13)))&&
				(personnageMarche.x+(personnageMarche.w/2)<=fondHorizontale4.x)){
					
			}else{
				personnageMarche.display();

			}
		 }

		 if (currentStep==4){
			 spriteParallaxe=width+(fondHorizontale4.w/3*2);
		 }
		 
		 if (currentStep==5 ||currentStep==6|| currentStep==7){
			console.log("spriteParallaxe:"+spriteParallaxe+ " bateau.x:"+bateau.x);
			spriteParallaxe-=backgroundTranslateSpeed;
			bateau.setPosition (spriteParallaxe,height-300);
			bateau.display();	
			
		}
			

		
	}
	sequencer.update();
	
}