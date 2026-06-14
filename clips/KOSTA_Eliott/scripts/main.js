/*----------------------------------------*\
  23_24_AN1_clipWeb - main.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2024-02-23 00:24:49
  @Last Modified time: 2024-02-23 08:58:36
\*----------------------------------------*/



let BPM = 145;
let audioPath = "assets/audio/HIME.mp3";
let sequencer;

let riviere;
let roue;
let stationart;
let stationgames1;
let stationgames2;
let stationgames3;
let stationgames4;
let outlast;
let fallingangel;
let menrel;
let satellite;
let drap;
let intro;
let ecg;
let crane;
let crane3d;
let demon6

let fallingAlpha = 255;
let flashAlpha = 0;

let ecgAlpha = 255;

function preload() {
    crane3d = loadModel('assets/mesh/crane.stl', true);
}

function triggerFlash() {
    flashAlpha = 255;
}

function drawFlash() {
    if (flashAlpha <= 0) return;
    noStroke();
    fill(255, 255, 255, flashAlpha);

    push();
    translate(-width/2, -height/2);
    rect(0, 0, width, height);
    pop();

    flashAlpha -= 3;
    if (flashAlpha < 0) flashAlpha = 0;
}

function setup(){
	createCanvas(windowWidth, windowHeight, WEBGL);
	sequencer = new Sequencer(audioPath, BPM, false);


    crane = {
        visible: false,
        show: function() { 
            this.visible = true; 
        },
        hide: function() { 
            this.visible = false; 
        },
        display: function() {
            push();
            rotateY(frameCount * 0.07);
            rotateX(radians(90))
            scale(3);
            model(crane3d);
            pop();
        }
    };


    intro= new Animator(1,96,"assets/images/intro_96/_imgNum_.jpg")
    intro.setSize(windowWidth,windowHeight);

    sequencer.registerSequence({
        name : "intro", 
        start : 1, 
        stop : 23, 
        onStart : function (event){
            intro.show();
        }, 
        onStop : function (event){
            intro.hide();
        },
        onStep : function (event){
            intro.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/4, 1+2/4, 1+3/4]
    });


    fallingangel = new Animator(1, 9, "assets/images/fallingangel_9/_imgNum_.jpg");
    fallingangel.setSize(windowWidth, windowHeight);

    const fallingSteps = [1, 1+1/9, 1+2/9, 1+3/9, 1+4/9, 1+5/9, 1+6/9, 1+7/9, 1+8/9];

    sequencer.registerSequence({
        name    : "fallingangel1", 
        start   : 25, 
        stop    : 26, 
        onStart : function(event){
            fallingAlpha = 255;
            fallingangel.show();
            triggerFlash();
        }, 
        onStop  : function(event){ 
            fallingangel.hide(); 
        },
        onStep  : function(event){
            fallingAngelAlpha = map(event.amount, 0, 1, 255, 30);
            fallingangel.next(true); 
        }, 
        measure : 1, 
        steps   : fallingSteps
    });

    sequencer.registerSequence({
        name    : "fallingangel2", 
        start   : 41, 
        stop    : 44, 
        onStart : function(event){
            fallingAlpha = 255;
            fallingangel.show();
            triggerFlash();
        }, 
        onStop  : function(event){ 
            fallingangel.hide(); 
        },
        onStep  : function(event){
            fallingAngelAlpha = map(event.amount, 0, 1, 255, 30);
            fallingangel.next(true); 
        }, 
        measure : 1, 
        steps   : fallingSteps
    });

    sequencer.registerSequence({
        name    : "fallingangel3", 
        start   : 57, 
        stop    : 60, 
        onStart : function(event){
            fallingAlpha = 255;
            fallingangel.show();
            triggerFlash();
        }, 
        onStop  : function(event){ 
            fallingangel.hide(); 
        },
        onStep  : function(event){
            fallingAngelAlpha = map(event.amount, 0, 1, 255, 30);
            fallingangel.next(true); 
        }, 
        measure : 1, 
        steps   : fallingSteps
    });

    sequencer.registerSequence({
        name    : "fallingangel4", 
        start   : 73, 
        stop    : 74, 
        onStart : function(event){
            fallingAlpha = 255;
            fallingangel.show();
            triggerFlash();
        }, 
        onStop  : function(event){ 
            fallingangel.hide(); 
        },
        onStep  : function(event){
            fallingAngelAlpha = map(event.amount, 0, 1, 255, 30);
            fallingangel.next(true); 
        }, 
        measure : 1, 
        steps   : fallingSteps
    });

    sequencer.registerSequence({
        name    : "fallingangel5", 
        start   : 89, 
        stop    : 90, 
        onStart : function(event){
            fallingAlpha = 255;
            fallingangel.show();
            triggerFlash();
        }, 
        onStop  : function(event){ 
            fallingangel.hide(); 
        },
        onStep  : function(event){
            fallingAngelAlpha = map(event.amount, 0, 1, 255, 30);
            fallingangel.next(true); 
        }, 
        measure : 1, 
        steps   : fallingSteps
    });

    sequencer.registerSequence({
        name    : "fallingangel6", 
        start   : 105, 
        stop    : 106, 
        onStart : function(event){
            fallingAlpha = 255;
            fallingangel.show();
            triggerFlash();
        }, 
        onStop  : function(event){ 
            fallingangel.hide(); 
        },
        onStep  : function(event){
            fallingAngelAlpha = map(event.amount, 0, 1, 255, 30);
            fallingangel.next(true); 
        }, 
        measure : 1, 
        steps   : fallingSteps
    });

    sequencer.registerSequence({
        name    : "fallingangel7", 
        start   : 248, 
        stop    : 250, 
        onStart : function(event){
            fallingAlpha = 255;
            fallingangel.show();
            triggerFlash();
        }, 
        onStop  : function(event){ 
            fallingangel.hide(); 
        },
        onStep  : function(event){
            fallingAngelAlpha = map(event.amount, 0, 1, 255, 30);
            fallingangel.next(true); 
        }, 
        measure : 1, 
        steps   : fallingSteps
    });

    sequencer.registerSequence({
        name    : "fallingangel8", 
        start   : 264, 
        stop    : 266, 
        onStart : function(event){
            fallingAlpha = 255;
            fallingangel.show();
            triggerFlash();
        }, 
        onStop  : function(event){ 
            fallingangel.hide(); 
        },
        onStep  : function(event){
            fallingAngelAlpha = map(event.amount, 0, 1, 255, 30);
            fallingangel.next(true); 
        }, 
        measure : 1, 
        steps   : fallingSteps
    });

    sequencer.registerSequence({
        name    : "fallingangel9", 
        start   : 280, 
        stop    : 282, 
        onStart : function(event){
            fallingAlpha = 255;
            fallingangel.show();
            triggerFlash();
        }, 
        onStop  : function(event){ 
            fallingangel.hide(); 
        },
        onStep  : function(event){
            fallingAngelAlpha = map(event.amount, 0, 1, 255, 30);
            fallingangel.next(true); 
        }, 
        measure : 1, 
        steps   : fallingSteps
    });

    sequencer.registerSequence({
        name    : "fallingangel10", 
        start   : 296, 
        stop    : 298, 
        onStart : function(event){
            fallingAlpha = 255;
            fallingangel.show();
            triggerFlash();
        }, 
        onStop  : function(event){ 
            fallingangel.hide(); 
        },
        onStep  : function(event){
            fallingAngelAlpha = map(event.amount, 0, 1, 255, 30);
            fallingangel.next(true); 
        }, 
        measure : 1, 
        steps   : fallingSteps
    });


    roue= new Animator(1,48,"assets/images/roue_50/_imgNum_.jpg")
    roue.setSize(windowWidth,windowHeight);

    sequencer.registerSequence({
        name : "roue1", 
        start : 27, 
        stop : 40, 
        onStart : function (event){
            roue.show();
        }, 
        onStop : function (event){
            roue.hide();
        },
        onStep : function (event){
            roue.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
    });

    sequencer.registerSequence({
        name : "roue2", 
        start : 196, 
        stop : 219, 
        onStart : function (event){
            roue.show();
        }, 
        onStop : function (event){
            roue.hide();
        },
        onStep : function (event){
            roue.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/4, 1+2/4, 1+3/4]
    });


    stationart= new Animator(1,75,"assets/images/hellstation_art_75/_imgNum_.jpg")
    stationart.setSize(windowWidth,windowHeight);

    sequencer.registerSequence({
        name : "stationart", 
        start : 45, 
        stop : 56, 
        onStart : function (event){
            stationart.show();
        }, 
        onStop : function (event){
            stationart.hide();
        },
        onStep : function (event){
            stationart.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
    });

    sequencer.registerSequence({
        name : "stationart2", 
        start : 283, 
        stop : 295, 
        onStart : function (event){
            stationart.show();
        }, 
        onStop : function (event){
            stationart.hide();
        },
        onStep : function (event){
            stationart.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
    });


    sequencer.registerSequence({
        name : "crane", 
        start : 61,
        stop : 72,
        onStart : function(event){
            crane.show();
        }, 
        onStop : function(event){ 
            crane.hide(); 
        },
        onStep : function(event){ 
        }, 
        measure : 1, 
        steps : [1]
    });

    sequencer.registerSequence({
        name : "crane2", 
        start : 312,
        stop : 462,
        onStart : function(event){
            crane.show();
        }, 
        onStop : function(event){ 
            crane.hide(); 
        },
        onStep : function(event){ 
        }, 
        measure : 1, 
        steps : [1]
    });


    ecg = new Animator(1, 12, "assets/images/ecg_12/_imgNum_.jpg");
    ecg.setSize(windowWidth, windowHeight);

    sequencer.registerSequence({
        name : "ecg1", 
        start : 75, 
        stop : 88, 
        onStart : function(event){
            ecgAlpha = 255;
            ecg.show();
        }, 
        onStop : function(event){ 
            ecg.hide(); },
        onStep : function(event){ 
            ecg.next(true); 
        }, 
        measure : 1, 
        steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
    });

    sequencer.registerSequence({
        name : "ecg2", 
        start : 91,
        stop : 104, 
        onStart : function(event){
            ecgAlpha = 130;
            ecg.show();
        }, 
        onStop : function(event){ 
            ecg.hide(); 
        },
        onStep : function(event){ 
            ecg.next(true); 
        }, 
        measure : 1, 
        steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
    });

    sequencer.registerSequence({
        name : "ecg3", 
        start : 107,
        stop : 120, 
        onStart : function(event){
            ecgAlpha = 40;
            ecg.show();
        }, 
        onStop : function(event){ 
            ecg.hide(); 
        },
        onStep : function(event){ 
            ecg.next(true); 
        }, 
        measure : 1, 
        steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
    });


    riviere= new Animator(1,281,"assets/images/riviere_281/_imgNum_.jpg")
    riviere.setSize(windowWidth,windowHeight);

    sequencer.registerSequence({
        name : "riviere", 
        start : 121,
        stop : 155, 
        onStart : function(event){
            riviere.show();
        }, 
        onStop : function(event){ 
            riviere.hide(); 
        },
        onStep : function(event){ 
            riviere.next(true); 
        }, 
        measure : 1, 
        steps : [1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8]
    });

    sequencer.registerSequence({
        name : "riviere2", 
        start : 312,
        stop : 380, 
        onStart : function(event){
            riviere.show();
        }, 
        onStop : function(event){ 
            riviere.hide(); 
        },
        onStep : function(event){ 
            riviere.next(true); 
        }, 
        measure : 1, 
        steps : [1, 1+1/4, 1+2/4, 1+3/4]
    });


    menrel= new Animator(1,75,"assets/images/menrel_75/_imgNum_.jpg")
    menrel.setSize(windowWidth,windowHeight);

    sequencer.registerSequence({
        name : "menrel", 
        start : 194,
        stop : 210, 
        onStart : function(event){
            menrel.show();
        }, 
        onStop : function(event){ 
            menrel.hide(); 
        },
        onStep : function(event){ 
            menrel.next(true); 
        }, 
        measure : 1, 
        steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
    });

    stationgames1= new Animator(1,75,"assets/images/hellstation_games1_75/_imgNum_.jpg")
    stationgames1.setSize(windowWidth,windowHeight);

    sequencer.registerSequence({
        name : "stationgames1", 
        start : 156,
        stop : 174, 
        onStart : function(event){
            stationgames1.show();
        }, 
        onStop : function(event){ 
            stationgames1.hide(); 
        },
        onStep : function(event){ 
            stationgames1.next(true); 
        }, 
        measure : 1, 
        steps : [1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8]
    });

    stationgames2= new Animator(1,75,"assets/images/hellstation_games2_75/_imgNum_.jpg")
    stationgames2.setSize(windowWidth,windowHeight);

    sequencer.registerSequence({
        name : "stationgames2", 
        start : 175,
        stop : 193, 
        onStart : function(event){
            stationgames2.show();
        }, 
        onStop : function(event){ 
            stationgames2.hide(); 
        },
        onStep : function(event){ 
            stationgames2.next(true); 
        }, 
        measure : 1, 
        steps : [1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8]
    });

    stationgames3= new Animator(1,75,"assets/images/hellstation_games3_75/_imgNum_.jpg")
    stationgames3.setSize(windowWidth,windowHeight);

    sequencer.registerSequence({
        name : "stationgames3", 
        start : 211,
        stop : 229, 
        onStart : function(event){
            stationgames3.show();
        }, 
        onStop : function(event){ 
            stationgames3.hide(); 
        },
        onStep : function(event){ 
            stationgames3.next(true); 
        }, 
        measure : 1, 
        steps : [1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8]
    });

    stationgames4= new Animator(1,75,"assets/images/hellstation_games4_75/_imgNum_.jpg")
    stationgames4.setSize(windowWidth,windowHeight);

    sequencer.registerSequence({
        name : "stationgames4", 
        start : 230,
        stop : 247, 
        onStart : function(event){
            stationgames4.show();
        }, 
        onStop : function(event){ 
            stationgames4.hide(); 
        },
        onStep : function(event){ 
            stationgames4.next(true); 
        }, 
        measure : 1, 
        steps : [1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8]
    });


    demon6= new Animator(1,6,"assets/images/6fdemon/_imgNum_.png")
    demon6.setSize(windowWidth,windowHeight);


    sequencer.registerSequence({
        name : "demon61", 
        start : 267, 
        stop : 279, 
        onStart : function (event){
            demon6.show();
        }, 
        onStop : function (event){
            demon6.hide();
        },
        onStep : function (event){
            demon6.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/3, 1+2/3]
    });

    sequencer.registerSequence({
        name : "demon62", 
        start : 251, 
        stop : 263, 
        onStart : function (event){
            demon6.show();
        }, 
        onStop : function (event){
            demon6.hide();
        },
        onStep : function (event){
            demon6.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/3, 1+2/3]
    });

    sequencer.registerSequence({
        name : "demon63", 
        start : 299, 
        stop : 311, 
        onStart : function (event){
            demon6.show();
        }, 
        onStop : function (event){
            demon6.hide();
        },
        onStep : function (event){
            demon6.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/3, 1+2/3]
    });

    satellite= new Animator(1,75,"assets/images/satellite_75/_imgNum_.jpg")
    satellite.setSize(windowWidth,windowHeight);


    sequencer.registerSequence({
        name : "satellite", 
        start : 381, 
        stop : 430, 
        onStart : function (event){
            satellite.show();
        }, 
        onStop : function (event){
            satellite.hide();
        },
        onStep : function (event){
            satellite.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
    });


    drap= new Animator(1,24,"assets/images/drap_48/_imgNum_.jpg")
    drap.setSize(windowWidth,windowHeight);


    sequencer.registerSequence({
        name : "drap", 
        start : 431, 
        stop : 462, 
        onStart : function (event){
            drap.show();
        }, 
        onStop : function (event){
            drap.hide();
        },
        onStep : function (event){
            drap.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/4, 1+2/4, 1+3/4]
    });
}

function draw(){
	sequencer.update();
    background(0);

    push();
    translate(-width/2, -height/2);
	
    if (intro.visible) {
        intro.display();
    }
	
    if (fallingangel.visible) {
        tint(255, fallingAlpha);
        fallingangel.display();
        noTint();
    }

    if (roue.visible) {
        roue.display();
    }

    if (stationart.visible) {
        stationart.display();
    }

    if (ecg.visible) {
        tint(255, ecgAlpha);
        ecg.display();
        noTint();
    }

    if (riviere.visible) {
        riviere.display();
    }

    if (menrel.visible) {
        menrel.display();
    }

    if (stationgames1.visible) {
        stationgames1.display();
    }

    if (stationgames2.visible) {
        push();

        stationgames2.display();

        tint(255, 120); 
        translate(2, 2);   stationgames2.display();
        translate(-4, -4); stationgames2.display();
        noTint();
        pop();
    }

    if (stationgames3.visible) {
        push();

        stationgames3.display();
        
        tint(255, 90); 
        translate(5, 5);    stationgames3.display();
        translate(-10, -10); stationgames3.display();
        translate(5, -5);   stationgames3.display();
        noTint();
        pop();
    }

    if (stationgames4.visible) {
        push();

        stationgames4.display();

        tint(255, 70); 
        translate(9, 9);     stationgames4.display();
        translate(-18, -18); stationgames4.display();
        translate(9, -9);    stationgames4.display();
        translate(-9, 18);   stationgames4.display();
        noTint();
        pop();
    }

    if (demon6.visible) {
        demon6.display();
    }

    if (satellite.visible) {
        satellite.display();
    }

    if (drap.visible) {
        drap.display();
    }

    pop();

    if (crane.visible) {
        push();
        noStroke();
        normalMaterial();
        
        let x = mouseX - width / 2;
        let y = mouseY - height / 2;
        
        translate(x, y, 0);
        crane.display();
        
        pop();
    }
    
    drawFlash();
}