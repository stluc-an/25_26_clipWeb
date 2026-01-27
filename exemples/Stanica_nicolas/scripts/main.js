/*----------------------------------------*\
  23_24_AN1_clipWeb - main.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2024-02-23 00:24:49
  @Last Modified time: 2024-02-23 08:58:36
\*----------------------------------------*/
let BPM = 172;
let audioPath = "assets/audio/Sharks - watching everything burn right in front of me.mp3";

let sequencer;

function setup(){
	
	createCanvas(windowWidth, windowHeight);
	sequencer = new Sequencer(audioPath, BPM, false);
	imageMode(CENTER);


	/*animation-------------------------------------------------------------------------------------------------------------------*/

	initIntro();  	/*01*/
	initBuildup();	/*02*/
	initDropA();  	/*03*/
	initDropB();  	/*04*/
	initDropC();  	/*05*/
	initOutro();  	/*06*/
	
}

function draw(){

	sequencer.update();
	background(0);

	
	/*animation--------------------------------------------------------------------------------------------------------------------*/

	drawIntro();  	 /*01*/
	drawBuildup();	 /*02*/
	drawDropA();  	 /*03*/
	drawDropB();  	 /*04*/
	drawDropC();  	 /*05*/
	drawOutro();  	 /*06*/

}



function setFullScreen(anim){
	let ratio = anim.imgs[0].width /anim.imgs[0].height;


	anim.setSize(height * ratio, height);
	anim.setPosition(width/2, height/2)
}