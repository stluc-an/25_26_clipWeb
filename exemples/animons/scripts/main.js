/*----------------------------------------*\
  23_24_AN1_clipWeb - main.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2024-02-23 00:24:49
  @Last Modified time: 2024-02-23 08:58:36
\*----------------------------------------*/
let BPM = 115;
let audioPath = "assets/audio/Hey Slug.mp3";
let sequencer;

let sequencer;

function setup(){

	createCanvas(windowWidth, windowHeight);
	sequencer = new Sequencer(audioPath, BPM, true);
	imagemode(CENTER);

	/*animation-----
initIntro (); →  /*01*/
initBuildup();  /*02*/
initDropA();   /*03*/
initDropB();
/*04*/
initDropC();
/*05*/
initOutro();
/*06*/
}
function draw(){
sequencer update();
background （0）；
/*animation---
drawIntro();
/*01*/
drawBuildup();
/*02*/
drawDropA();
/*03*/
drawDropBO;
/*04*/
drawDropC();
/*05*/
drawOutro ();
/*06*/

function setup(){
	createCanvas(windowWidth, windowHeight);
	sequencer = new Sequencer(audioPath, BPM);

	
	sequencer.registerSequence({
		name : "my first sequence", 
		start : 3, 
		stop : 9, 
		onStart : function (event){
		}, 
		onStop : function (event){
		},
		onStep : function (event){
			
		}, 
		measure : 1, 
		steps : [1]
	});
}

function draw(){
	sequencer.update();
	background(255);
	
}