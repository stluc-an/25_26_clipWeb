/*----------------------------------------*\
  23_24_AN1_clipWeb - main.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2024-02-23 00:24:49
  @Last Modified time: 2024-02-23 08:58:36
\*----------------------------------------*/
// === Configuration générale ===
let BPM = 500;
let audioPath = "assets/audio/Who Could Have Done This.mp3";

let sequencer;
let Frame;
let Intro;

// === Setup initial ===
function setup() {
	createCanvas(windowWidth, windowHeight);

	// Initialisation du séquenceur avec la musique et le BPM
	sequencer = new Sequencer(audioPath, BPM, false);

	// Initialisation de l'animation "ours"
	ours = new Animator(163, 0, "./assets/images/Dream/dream.jpg._imgNum_.jpg");
	ours.setSize(width, height);

	// Initialisation de l'animation "intro"
	Intro = new Animator(1, 1, "./assets/images/Intro/e0.jpg");
	Intro.setSize(width, height);

	// Enregistrement des séquences
	setupSequences();
}

// === Définition des séquences ===
function setupSequences() {
	// Séquence 1 : animation "ours"
	sequencer.registerSequence({
		name: "ours sequence",
		start: 1,
		stop: 900,
		onStart: function (event) {
			ours.show();
		},
		onStop: function (event) {
			ours.hide();
		},
		onStep: function (event) {
			ours.setPointer(event.amount);
		},
		measure: 1,
		steps: [1],
	});

	// Séquence 2 : animation "intro"
	sequencer.registerSequence({
		name: "Intro sequence",
		start: 900,
		stop: 900,
		onStart: function (event) {
			Intro.show();
		},
		onStop: function (event) {
			intro.hide();
		},
		onStep: function (event) {
			intro.setPointer(event.amount);
		},
		measure: 1,
		steps: [1],
	});
}

// === Dessin à chaque frame ===
function draw() {
	sequencer.update();
	background(255);

	// Affiche l'animation "ours" si elle est visible
	if (ours.visible) {
		ours.display();
	}

	// Affiche l'animation "intro" si elle est visible
	if (Intro.visible) {
		Intro.display();
	}
}
