/*----------------------------------------*\
  23_24_AN1_clipWeb - main.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2024-02-23 00:24:49
  @Last Modified time: 2024-02-23 08:58:36
\*----------------------------------------*/
let BPM = 115;
let audioPath = "assets/audio/Hey Slug.mp3";
let sequencer;

let bg = 0;

function setup(){
	createCanvas(windowWidth, windowHeight);
	sequencer = new Sequencer(audioPath, BPM);

	sequencer.registerSequence({
		name : "my first sequence", 
		start : 1, 
		stop : 100, 
		onStart : function (event){}, 
		onStop : function (event){},
		onStep : function (event){
			bg = 255 - bg;
		}, 
		measure : 1, 
		steps : [1]
	});
}

function draw(){
	sequencer.update();

	background(bg);
	rect(0, 0, 200, 200);
	
}