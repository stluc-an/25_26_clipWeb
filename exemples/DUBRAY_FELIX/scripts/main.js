/*----------------------------------------*\
  23_24_AN1_clipWeb - main.js
  @author Dubray
  @Date:   2024-02-23 00:24:49
  @Last Modified time: 2025-13-06 11:58:36
\*----------------------------------------*/
let BPM = 112;
let audioPath = "assets/audio/ALT_236_SOUNDTRACKS_ARCADIAN_FIELDS.mp3";
let sequencer;
let activeScene = 1;

// ----- Variables Sequence 01 (maison) -----
let maisonbg, maison, maisonfront;

// ----- Variables Sequence 02 (stars) -----
let starsback, starbg, starsmid, starsfront;
let scrollX_bg = 0;
let scrollX_starsback = 0;
let scrollX_starsmid = 0;
let scrollX_starsfront = 0;
let speed_bg = 0;
let speed_starsback = 0;
let speed_starsmid = 0;
let speed_starsfront = 0;

// ----- Variables Sequence 03 (loneplanet2) -----
let loneplanet2, loneplanet2bg;
let scrollX_bgloneplanet2 = 0;
let scrollX_loneplanet2 = 0;
let speed_loneplanet2bg = 0;
let speed_loneplanet2 = 0;

// ----- Variables Sequence 04 (rocks) -----
let rocksbg, rocksmid, rocks;
let scrollX_bgrocks = 0;
let scrollX_rocksmid = 0;
let scrollX_rocks = 0;
let speed_bgrocks = 0;
let speed_rocksmid = 0;
let speed_rocks = 0;

// ----- Variables Sequence 05 (saturn2)) -----
let saturn2bg, saturn2;
let scrollX_saturn2bg = 0;
let scrollX_saturn2 = 0;
let speed_saturn2 = 0;
let speed_saturn2bg = 0;

// ----- Variables Sequence 06 (galaxie) -----
let galaxiebg, galaxieback, galaxiemid1, galaxiemid2, galaxiefront;
let scrollX_galaxiebg = 0;
let scrollX_galaxieback = 0;
let scrollX_galaxiemid1 = 0;
let scrollX_galaxiemid2 = 0;
let scrollX_galaxiefront = 0;
let speed_galaxiebg = 0;
let speed_galaxieback = 0;
let speed_galaxiemid1 = 0;
let speed_galaxiemid2 = 0;
let speed_galaxiefront = 0;

// ----- Variables Sequence 07 (loneplanet3) -----
let loneplanet3, loneplanet3bg;
let scrollX_bgloneplanet3 = 0;
let scrollX_loneplanet3 = 0;
let speed_loneplanet3bg = 0;
let speed_loneplanet3 = 0;

// ----- Variables Sequence 08 (star) -----
let starback, star;
let scrollX_starback = 0;
let scrollX_star = 0;
let speed_starback = 0;
let speed_star = 0;

// ----- Variables Sequence 09 (jupiter) -----
let jupiter, jupiterbg;
let scrollX_jupiterbg = 0;
let scrollX_jupiter = 0;
let speed_jupiterbg = 0;
let speed_jupiter = 0;

// ----- Variables Sequence 10 (colonnes) -----
let colonnes, colonnesback, colonnesbg, colonnesmid;
let scrollX_colonnes = 0;
let scrollX_colonnesback = 0;
let scrollX_colonnesmid = 0;
let scrollX_colonnesbg = 0;
let speed_colonnes = 0;
let speed_colonnesback = 0;
let speed_colonnesbg = 0;
let speed_colonnesmid = 0;

// ----- Variables Sequence 11 (moon) -----
let moon, moonbgbg;
let scrollX_moonbg = 0;
let scrollX_moon = 0;
let speed_moonbg = 0;
let speed_moon = 0;

// ----- Variables Sequence 12 (galaxy2) -----
let galaxy2, galaxy2bg;
let scrollX_galaxy2bg = 0;
let scrollX_galaxy2 = 0;
let speed_galaxy2bg = 0;
let speed_galaxy2 = 0;

// ----- Variables Sequence 13 (rocks2) -----
let rocks2bg, rocks2back, rocks2mid, rocks2front;
let scrollX_rocks2bg = 0;
let scrollX_rocks2back = 0;
let scrollX_rocks2mid = 0;
let scrollX_rocks2front = 0;
let speed_rocks2bg = 0;
let speed_rocks2back = 0;
let speed_rocks2mid = 0;
let speed_rocks2front = 0;

// ----- Variables Sequence 14 (saturn) -----
let saturn, saturnbgbg;
let scrollX_saturnbg = 0;
let scrollX_saturn = 0;
let speed_saturnbg = 0;
let speed_saturn = 0;

// ----- Variables Sequence 15 (2planets) -----
let planets2mid, planets2bg, planets2front;
let scrollX_planets2bg = 0;
let scrollX_planets2front = 0;
let scrollX_planets2mid = 0;
let speed_planets2bg = 0;
let speed_planets2front = 0;
let speed_planets2mid = 0;

// ----- Variables Sequence 16 (galaxy3) -----
let galaxy3back, galaxy3bg, galaxy3front, galaxy3mid;
let scrollX_galaxy3bg = 0;
let scrollX_galaxy3back = 0;
let scrollX_galaxy3mid = 0;
let scrollX_galaxy3front = 0;
let speed_galaxy3bg = 0;
let speed_galaxy3back = 0;
let speed_galaxy3mid = 0;
let speed_galaxy3front = 0;

// ----- Variables Sequence 17 (loneplanet) -----
let loneplanet, loneplanetbg;
let scrollX_loneplanetbg = 0;
let scrollX_loneplanet = 0;
let speed_loneplanetbg = 0;
let speed_loneplanet = 0;

// ----- Variables Sequence 18 (blackhole) -----
let blackhole, blackholebg, maisonblackhole;
let scrollX_blackholebg = 0;
let scrollX_blackhole = 0;
let speed_blackholebg = 0;
let speed_blackhole = 0;

//----- Variables Sequence 19 (maison2) -----
let maisonbg2, maison2, maisonfront2;

function setup(){
    createCanvas(windowWidth, windowHeight);
    sequencer = new Sequencer(audioPath, BPM, false,);

    initFirstSequence();
    initSecondSequence();
    initThirdSequence();
    initFourthSequence();
    initFifthSequence();
    initSixthSequence();
    initSeventhSequence();
    initEighthSequence();
    initNinthSequence();
    initTenthSequence();
    initEleventhSequence();
    initTwelfthSequence();
    initThirteenthSequence();
    initFourteenthSequence();
    initFifteenthSequence();
    initSixteenthSequence();
    initSeventeenthSequence();
    initEighteenthSequence();
    initNineteenthSequence();
}

function draw(){
    sequencer.update();
    console.log("Scene actuelle:", activeScene);
    background(0);

    if (activeScene === 1) {
      drawFirstSeq();
    } 
    else if (activeScene === 2) {
      drawSecondSeq();
    }
    else if (activeScene === 3) {
      drawThirdSeq();
    }
    else if (activeScene === 4) {
      drawFourthSeq();
    }
    else if (activeScene === 5) {
      drawFifthSeq();
    }
    else if (activeScene === 6) {
      drawSixthSeq();
    }
    else if (activeScene === 7) {
      drawSeventhSeq();
    }
    else if (activeScene === 8) {
      drawEighthSeq();
    }
    else if (activeScene === 9) {
      drawNinthSeq();
    }
    else if (activeScene === 10) {
      drawTenthSeq();
    }
    else if (activeScene === 11) {
      drawEleventhSeq();
    }
    else if (activeScene === 12) {
      drawTwelfthSeq();
    }
    else if (activeScene === 13) {
      drawThirteenthSeq();
    }
    else if (activeScene === 14) {
      drawFourteenthSeq();
    }
    else if (activeScene === 15) {
      drawFifteenthSeq();
    }
    else if (activeScene === 16) {
      drawSixteenthSeq();
    }
    else if (activeScene === 17) {
      drawSeventeenthSeq();
    }
    else if (activeScene === 18) {
      drawEighteenthSeq();
    }
    else if (activeScene === 19) {
      drawNineteenthSeq();
    }
    
}

// ----------- Sequence 1 -----------
function initFirstSequence() {
  maisonbg = new Animator(1, 0, "./assets/images/maison/maisonbg.0.png");
  maisonbg.setSize(windowWidth * 1.1, windowHeight * 1);

  maison = new Animator(1, 0, "./assets/images/maison/maison.0.png");
  maison.setSize(windowWidth * 1.1, windowHeight * 1);

  maisonfront = new Animator(1, 0, "./assets/images/maison/maisonfront.0.png");
  maisonfront.setSize(windowWidth * 1.1, windowHeight * 1);

  sequencer.registerSequence({
    name: "affichage images maison",
    start: 1,
    stop: 12,
    onStart: () => {
      maisonbg.show();
      maisonfront.show();
      maison.show();
    },
    onStop: () => {
      maisonbg.hide();
      maisonfront.hide();
      maison.hide();
      activeScene = 2;
    },
  });
}

function drawFirstSeq() {
  imageMode(CENTER);
  if (maisonbg.visible) {
    maisonbg.setPosition(windowWidth / 2, windowHeight / 2);
    maisonbg.display();
  }

  if (maison.visible) {
    maison.setPosition(windowWidth / 2, windowHeight / 2);
    maison.display();
  }

  if (maisonfront.visible) {
    maisonfront.setPosition(windowWidth / 2, windowHeight / 2);
    maisonfront.display();
  }
}

// ----------- Sequence 2 -----------
function initSecondSequence() {
  starbg = new Animator(1, 0, "./assets/images/stars/stars.0.png");
  starbg.setSize(windowWidth * 1.1, windowHeight * 1);

  starsback = new Animator(1, 0, "./assets/images/stars/starsback.0.png");
  starsback.setSize(windowWidth * 1.1, windowHeight * 1);

  starsmid = new Animator(1, 0, "./assets/images/stars/starsmid.0.png");
  starsmid.setSize(windowWidth * 1.1, windowHeight * 1);

  starsfront = new Animator(1, 0, "./assets/images/stars/starsfront.0.png");
  starsfront.setSize(windowWidth * 1.1, windowHeight * 1);
  
  maisonfront = new Animator(1, 0, "./assets/images/maison/maisonfront.0.png");
  maisonfront.setSize(windowWidth * 1.1, windowHeight * 1);

  sequencer.registerSequence({
    name: "affichage images stars",
    start: 13,
    stop: 21,
    onStart: () => {
      starbg.show();
      starsback.show();
      starsmid.show();
      starsfront.show();
      maison.show();
    },
    onStop: () => {
      starbg.hide();
      starsback.hide();
      starsmid.hide();
      starsfront.hide();
      maison.hide();
    },
  });

  sequencer.registerSequence({
    name: "deplacement images stars",
    start: 13,
    stop: 21,
    onStart: () => {
      speed_bg = 0.2;
      speed_starsback = 0.3;
      speed_starsmid = 0.4;
      speed_starsfront = 0.5;
    },
    onStop: () => {
      speed_bg = 0;
      speed_starsback = 0;
      speed_starsmid = 0.5;
      speed_starsfront = 0.5;
      activeScene = 3;
    },
  });
}

function drawSecondSeq() {
  imageMode(CENTER);

  scrollX_bg += speed_bg;
  scrollX_starsback += speed_starsback;
  scrollX_starsmid += speed_starsmid;
  scrollX_starsfront += speed_starsfront;

  if (starbg.visible) {
    starbg.setPosition(windowWidth / 2 - scrollX_bg, windowHeight / 2);
    starbg.display();
  }

  if (starsback.visible) {
    starsback.setPosition((windowWidth / 2) + windowWidth*0.1 - scrollX_starsback, windowHeight / 2);
    starsback.display();
  }

  if (starsmid.visible) {
    starsmid.setPosition((windowWidth / 2) + windowWidth*0.1 - scrollX_starsmid, windowHeight / 2);
    starsmid.display();
  }

  if (starsfront.visible) {
    starsfront.setPosition((windowWidth / 2) + windowWidth*0.1 - scrollX_starsfront, windowHeight / 2);
    starsfront.display();
  }

  if (maison.visible) {
    maison.setPosition(windowWidth / 2, windowHeight / 2);
    maison.display();
  }

}

// ----------- Sequence 3 -----------
function initThirdSequence() {
  loneplanet2bg = new Animator(1, 0, "./assets/images/loneplanet2/loneplanet2bg.0.png");
  loneplanet2bg.setSize(windowWidth * 1.1, windowHeight * 1.1);

  loneplanet2 = new Animator(1, 0, "./assets/images/loneplanet2/loneplanet2.0.png");
  loneplanet2.setSize(windowWidth * 1.1, windowHeight * 1.1);
  
  maison = new Animator(1, 0, "./assets/images/maison/maison.0.png");
  maison.setSize(windowWidth * 1.1, windowHeight * 1.1);

  sequencer.registerSequence({
    name: "affichage images loneplanet2",
    start: 22,
    stop: 31,
    onStart: () => {
      loneplanet2bg.show();
      loneplanet2.show();
      maison.show();
    },
    onStop: () => {
      loneplanet2bg.hide();
      loneplanet2.hide();
      maison.hide();
      activeScene = 4;
    },
  });

  sequencer.registerSequence({
    name: "deplacement images loneplanet2",
    start: 22,
    stop: 31,
    onStart: () => {
      speed_loneplanet2bg = 0.2;
      speed_loneplanet2 = 0.3;
    },
    onStop: () => {
      speed_loneplanet2bg = 0;
      speed_loneplanet2 = 0;
    },
  });
}
function drawThirdSeq() {
  imageMode(CENTER);

  scrollX_bgloneplanet2 += speed_loneplanet2bg;
  scrollX_loneplanet2 += speed_loneplanet2;

  if (loneplanet2bg.visible) {
    loneplanet2bg.setPosition(windowWidth / 2 - scrollX_bgloneplanet2, windowHeight / 2);
    loneplanet2bg.display();
  }

  if (loneplanet2.visible) {
    loneplanet2.setPosition((windowWidth / 2) + windowWidth*0.1 - scrollX_loneplanet2, windowHeight / 2);
    loneplanet2.display();
  }

  if (maison.visible) {
    maison.setPosition(windowWidth / 2, windowHeight / 2);
    maison.display();
  }

}
//---------- Sequence 4 ----------

function initFourthSequence() {
  rocksbg = new Animator(1, 0, "./assets/images/rocks/rocksbg.0.png");
  rocksbg.setSize(windowWidth * 1.1, windowHeight * 1.1);

  rocksmid = new Animator(1, 0, "./assets/images/rocks/rocksmid.0.png");
  rocksmid.setSize(windowWidth * 1.1, windowHeight * 1.1);

  rocks = new Animator(1, 0, "./assets/images/rocks/rocks.0.png");
  rocks.setSize(windowWidth * 1.1, windowHeight * 1.1);
    
  maison = new Animator(1, 0, "./assets/images/maison/maison.0.png");
  maison.setSize(windowWidth * 1.1, windowHeight * 1.1);

  sequencer.registerSequence({
    name: "affichage images rocks",
    start: 32,
    stop: 41,
    onStart: () => {
      rocksbg.show();
      rocksmid.show();
      rocks.show();
      maison.show();
    },
    onStop: () => {
      rocksbg.hide();
      rocksmid.hide();
      rocks.hide();
      maison.hide();
    },
  });

  sequencer.registerSequence({
    name: "deplacement images rocks",
    start: 32,
    stop: 41,
    onStart: () => {
      speed_bgrocks = 0.2;
      speed_rocksmid = 0.3;
      speed_rocks = 0.4;
    },
    onStop: () => {
      speed_bgrocks = 0;
      speed_rocksmid = 0;
      speed_rocks = 0.5;
      activeScene = 5;
    },
  });
}
function drawFourthSeq() {
  imageMode(CENTER);

  scrollX_bgrocks += speed_bgrocks;
  scrollX_rocks += speed_rocks;
  scrollX_rocksmid += speed_rocksmid;

  if (rocksbg.visible) {
    rocksbg.setPosition(windowWidth / 2 - scrollX_bgrocks, windowHeight / 2);
    rocksbg.display();
  }

  if (rocks.visible) {
    rocks.setPosition((windowWidth / 2) + windowWidth*0.1 - scrollX_rocks, windowHeight / 2);
    rocks.display();
  }

  if (rocksmid.visible) {
    rocksmid.setPosition((windowWidth / 2) - scrollX_rocksmid, windowHeight / 2);
    rocksmid.display();
  }

  if (maison.visible) {
    maison.setPosition(windowWidth / 2, windowHeight / 2);
    maison.display();
  }
}

//---------- Sequence 5 ----------

function initFifthSequence() {
  saturn2bg = new Animator(1, 0, "./assets/images/saturn2/saturnbg2.0.png");
  saturn2bg.setSize(windowWidth * 1.1, windowHeight * 1.1);

  saturn2 = new Animator(1, 0, "./assets/images/saturn2/saturn2.0.png");
  saturn2.setSize(windowWidth * 1.1, windowHeight * 1.1);
    
  maison = new Animator(1, 0, "./assets/images/maison/maison.0.png");
  maison.setSize(windowWidth * 1.1, windowHeight * 1.1);

  sequencer.registerSequence({
    name: "affichage images saturn2",
    start: 42,
    stop: 53,
    onStart: () => {
      saturn2bg.show();
      saturn2.show();
      maison.show();
    },
    onStop: () => {
      saturn2bg.hide();
      saturn2.hide();
      maison.hide();
    },
  });

  sequencer.registerSequence({
    name: "deplacement images saturn2",
    start: 42,
    stop: 53,
    onStart: () => {
      speed_saturn2bg = 0.2;
      speed_saturn2 = 0.5;
    },
    onStop: () => {
      speed_saturn2bg = 0;
      speed_saturn2 = 0;
      activeScene = 6;
    },
  });
}
function drawFifthSeq() {
  imageMode(CENTER);

  scrollX_saturn2bg += speed_saturn2bg;
  scrollX_saturn2 += speed_saturn2;

  if (saturn2bg.visible) {
    saturn2bg.setPosition(windowWidth / 2 - scrollX_saturn2bg, windowHeight / 2);
    saturn2bg.display();
  }

  if (saturn2.visible) {
    saturn2.setPosition((windowWidth / 2) + windowWidth*0.2 - scrollX_saturn2, windowHeight / 2);
    saturn2.display();
  }

  if (maison.visible) {
    maison.setPosition(windowWidth / 2, windowHeight / 2);
    maison.display();
  }

}

//---------- Sequence 6 ----------

function initSixthSequence() {
  galaxiebg = new Animator(1, 0, "./assets/images/galaxy/galaxiebg.0.png");
  galaxiebg.setSize(windowWidth * 1.1, windowHeight * 1.1);

  galaxieback = new Animator(1, 0, "./assets/images/galaxy/galaxieback.0.png");
  galaxieback.setSize(windowWidth * 1.1, windowHeight * 1.1);

  galaxiemid1 = new Animator(1, 0, "./assets/images/galaxy/galaxiemid1.0.png");
  galaxiemid1.setSize(windowWidth * 1.1, windowHeight * 1.1);

  galaxiemid2 = new Animator(1, 0, "./assets/images/galaxy/galaxiemid2.0.png");
  galaxiemid2.setSize(windowWidth * 1.1, windowHeight * 1.1);

  galaxiefront = new Animator(1, 0, "./assets/images/galaxy/galaxiefront.0.png");
  galaxiefront.setSize(windowWidth * 1.1, windowHeight * 1.1);
    
  maison = new Animator(1, 0, "./assets/images/maison/maison.0.png");
  maison.setSize(windowWidth * 1.1, windowHeight * 1.1);

  sequencer.registerSequence({
    name: "affichage images galaxie",
    start: 54,
    stop: 65,
    onStart: () => {
      galaxiebg.show();
      galaxieback.show();
      galaxiemid1.show();
      galaxiemid2.show();
      galaxiefront.show();
      maison.show();
    },
    onStop: () => {
      galaxiebg.hide();
      galaxieback.hide();
      galaxiemid1.hide();
      galaxiemid2.hide();
      galaxiefront.hide();
      maison.hide();
    },
  });

  sequencer.registerSequence({
    name: "deplacement images galaxie",
    start: 54,
    stop: 65,
    onStart: () => {
      speed_galaxiebg = 0.2;
      speed_galaxieback = 0.05;
      speed_galaxiemid1 = 0.1;
      speed_galaxiemid2 = 0.15;
      speed_galaxiefront = 0.2;
    },
    onStop: () => {
      speed_galaxiebg = 0;
      speed_galaxieback = 0;
      speed_galaxiemid1 = 0;
      speed_galaxiemid2 = 0;
      speed_galaxiefront = 0;
      activeScene = 7;
    },
  });
}
function drawSixthSeq() {
  imageMode(CENTER);

  scrollX_galaxiebg += speed_galaxiebg;
  scrollX_galaxieback += speed_galaxieback;
  scrollX_galaxiemid1 += speed_galaxiemid1;
  scrollX_galaxiemid2 += speed_galaxiemid2;
  scrollX_galaxiefront += speed_galaxiefront;

  if (galaxiebg.visible) {
    galaxiebg.setPosition(windowWidth / 2 - scrollX_galaxiebg, windowHeight / 2);
    galaxiebg.display();
  }

  if (galaxieback.visible) {
    galaxieback.setPosition((windowWidth / 2) + windowWidth*0.1 - scrollX_galaxieback, windowHeight / 2);
    galaxieback.display();
  }

  if (galaxiemid1.visible) {
    galaxiemid1.setPosition((windowWidth / 2) + windowWidth*0.1 - scrollX_galaxiemid1, windowHeight / 2);
    galaxiemid1.display();
  }

  if (galaxiemid2.visible) {
    galaxiemid2.setPosition((windowWidth / 2) + windowWidth*0.1 - scrollX_galaxiemid2, windowHeight / 2);
    galaxiemid2.display();
  }

  if (galaxiefront.visible) {
    galaxiefront.setPosition((windowWidth / 2) + windowWidth*0.1 - scrollX_galaxiefront, windowHeight / 2);
    galaxiefront.display();
  }

  if (maison.visible) {
    maison.setPosition(windowWidth / 2, windowHeight / 2);
    maison.display();
  }

}

//---------- Sequence 7 ----------

function initSeventhSequence() {
  loneplanet3bg = new Animator(1, 0, "./assets/images/loneplanet3/loneplanet3bg.0.png");
  loneplanet3bg.setSize(windowWidth * 1.1, windowHeight * 1.2);

  loneplanet3 = new Animator(1, 0, "./assets/images/loneplanet3/loneplanet3.0.png");
  loneplanet3.setSize(windowWidth * 1.1, windowHeight * 1.4);
    
  maison = new Animator(1, 0, "./assets/images/maison/maison.0.png");
  maison.setSize(windowWidth * 1.1, windowHeight * 1.1);

  sequencer.registerSequence({
    name: "affichage images loneplanet3",
    start: 66,
    stop: 75,
    onStart: () => {
      loneplanet3bg.show();
      loneplanet3.show();
      maison.show();
    },
    onStop: () => {
      loneplanet3bg.hide();
      loneplanet3.hide();
      maison.hide();
      activeScene = 8;
    },
  });

  sequencer.registerSequence({
    name: "deplacement images loneplanet3",
    start: 66,
    stop: 75,
    onStart: () => {
      speed_loneplanet3bg = 0.05;
      speed_loneplanet3 = 0.2;
    },
    onStop: () => {
      speed_loneplanet3bg = 0;
      speed_loneplanet3 = 0;
    },
  });
}
function drawSeventhSeq() {
  imageMode(CENTER);

  scrollX_bgloneplanet3 += speed_loneplanet3bg;
  scrollX_loneplanet3 += speed_loneplanet3;

  if (loneplanet3bg.visible) {
    loneplanet3bg.setPosition(windowWidth / 2 - scrollX_bgloneplanet3, windowHeight / 2);
    loneplanet3bg.display();
  }

  if (loneplanet3.visible) {
    loneplanet3.setPosition((windowWidth / 2) - scrollX_loneplanet3, windowHeight / 2 + (windowHeight*0.3));
    loneplanet3.display();
  }

  if (maison.visible) {
    maison.setPosition(windowWidth / 2, windowHeight / 2);
    maison.display();
  }

}

//---------- Sequence 8 ----------

function initEighthSequence() {
  starback = new Animator(1, 0, "./assets/images/star/starback.0.png");
  starback.setSize(windowWidth * 1.1, windowHeight * 1.2);

  star = new Animator(1, 0, "./assets/images/star/star.0.png");
  star.setSize(windowWidth * 1, windowHeight * 1);
    
  maison = new Animator(1, 0, "./assets/images/maison/maison.0.png");
  maison.setSize(windowWidth * 1.1, windowHeight * 1.1);

  sequencer.registerSequence({
    name: "affichage images star",
    start: 76,
    stop: 85,
    onStart: () => {
      starback.show();
      star.show();
      maison.show();
    },
    onStop: () => {
      starsback.hide();
      star.hide();
      maison.hide();
      activeScene = 9;
    },
  });

  sequencer.registerSequence({
    name: "deplacement images star",
    start: 76,
    stop: 85,
    onStart: () => {
      speed_starback = 0.2;
      speed_star = 0.3;
    },
    onStop: () => {
      speed_starback = 0;
      speed_star = 0;
    },
  });
}
function drawEighthSeq() {
  imageMode(CENTER);

  scrollX_starback += speed_starback;
  scrollX_star += speed_star;

  if (starback.visible) {
    starback.setPosition(windowWidth / 2 - scrollX_starback, windowHeight / 2);
    starback.display();
  }

  if (star.visible) {
    star.setPosition((windowWidth / 2) + windowWidth*0.1 - scrollX_star, windowHeight / 2 + (windowHeight*0.2));
    star.display();
  }

  if (maison.visible) {
    maison.setPosition(windowWidth / 2, windowHeight / 2);
    maison.display();
  }

}

//---------- Sequence 9 ----------

function initNinthSequence() {
  jupiterbg = new Animator(1, 0, "./assets/images/jupiter/jupiterbg.0.png");
  jupiterbg.setSize(windowWidth * 1.1, windowHeight * 1.2);

  jupiter = new Animator(1, 0, "./assets/images/jupiter/jupiter.0.png");
  jupiter.setSize(windowWidth * 1.1, windowHeight * 1.4);
    
  maison = new Animator(1, 0, "./assets/images/maison/maison.0.png");
  maison.setSize(windowWidth * 1.1, windowHeight * 1.1);

  sequencer.registerSequence({
    name: "affichage images jupiter",
    start: 86,
    stop: 94,
    onStart: () => {
      jupiterbg.show();
      jupiter.show();
      maison.show();
    },
    onStop: () => {
      jupiterbg.hide();
      jupiter.hide();
      maison.hide();
      activeScene = 10;
    },
  });

  sequencer.registerSequence({
    name: "deplacement images jupiter",
    start: 86,
    stop: 94,
    onStart: () => {
      speed_jupiterbg = 0.1;
      speed_jupiter = 0.2;
    },
    onStop: () => {
      speed_jupiterbg = 0;
      speed_jupiter = 0;
    },
  });
}
function drawNinthSeq() {
  imageMode(CENTER);

  scrollX_jupiterbg += speed_jupiterbg;
  scrollX_jupiter += speed_jupiter;

  if (jupiterbg.visible) {
    jupiterbg.setPosition(windowWidth / 2 - scrollX_jupiterbg, windowHeight / 2);
    jupiterbg.display();
  }

  if (jupiter.visible) {
    jupiter.setPosition((windowWidth / 2) + windowWidth*0.3 - scrollX_jupiter, windowHeight / 2);
    jupiter.display();
  }

  if (maison.visible) {
    maison.setPosition(windowWidth / 2, windowHeight / 2);
    maison.display();
  }

}

//---------- Sequence 10 ----------

function initTenthSequence() {
  colonnesbg = new Animator(1, 0, "./assets/images/colonnes/colonnesbg.0.png");
  colonnesbg.setSize(windowWidth * 1.1, windowHeight * 1.2);

  colonnesback = new Animator(1, 0, "./assets/images/colonnes/colonnesback.0.png");
  colonnesback.setSize(windowWidth * 1.1, windowHeight * 1.4);

  colonnesmid = new Animator(1, 0, "./assets/images/colonnes/colonnesmid.0.png");
  colonnesmid.setSize(windowWidth * 1.1, windowHeight * 1.4);

  colonnes = new Animator(1, 0, "./assets/images/colonnes/colonnes.0.png");
  console.log("valide");
  colonnes.setSize(windowWidth * 1.1, windowHeight * 1.4);
    
  maison = new Animator(1, 0, "./assets/images/maison/maison.0.png");
  maison.setSize(windowWidth * 1.1, windowHeight * 1.1);

  sequencer.registerSequence({
    name: "affichage images colonnes",
    start: 95,
    stop: 103,
    onStart: () => {
      colonnesbg.show();
      colonnesback.show();
      colonnesmid.show();
      colonnes.show();
      maison.show();
    },
    onStop: () => {
      colonnesbg.hide();
      colonnesback.hide();
      colonnesmid.hide();
      colonnes.hide();
      maison.hide();
      activeScene = 11;
    },
  });

  sequencer.registerSequence({
    name: "deplacement images colonnes",
    start: 95,
    stop: 103,
    onStart: () => {
      speed_colonnesbg = 0.1;
      speed_colonnesback = 0.15;
      speed_colonnesmid = 0.2;
      speed_colonnes = 0.28;
    },
    onStop: () => {
      speed_colonnesbg = 0;
      speed_colonnesmid = 0;
      speed_colonnesmid = 0;
      speed_colonnes = 0;
    },
  });
}
function drawTenthSeq() {
  imageMode(CENTER);

  scrollX_colonnesbg += speed_colonnesbg;
  scrollX_colonnesback += speed_colonnesback;
  scrollX_colonnesmid += speed_colonnesmid;
  scrollX_colonnes += speed_colonnes;

  if (colonnesbg.visible) {
    colonnesbg.setPosition(windowWidth / 2 - scrollX_colonnesbg, windowHeight / 2);
    colonnesbg.display();
  }

  if (colonnesback.visible) {
    colonnesback.setPosition((windowWidth / 2) + windowWidth*0.1 - scrollX_colonnesback, windowHeight / 2);
    colonnesback.display();
  }

  if (colonnesmid.visible) {
    colonnesmid.setPosition((windowWidth / 2) + windowWidth*0.1 - scrollX_colonnesmid, windowHeight / 2);
    colonnesmid.display();
  }

  if (colonnes.visible) {
    colonnes.setPosition((windowWidth / 2) + windowWidth*0.1 - scrollX_colonnes, windowHeight / 2);
    colonnes.display();
  }

  if (maison.visible) {
    maison.setPosition(windowWidth / 2, windowHeight / 2);
    maison.display();
  }

}

//---------- Sequence 11 ----------

function initEleventhSequence() {
  moonbg = new Animator(1, 0, "./assets/images/moon/moonbg.0.png");
  moonbg.setSize(windowWidth * 1.1, windowHeight * 1.2); 

  moon = new Animator(1, 0, "./assets/images/moon/moon.0.png");
  moon.setSize(windowWidth * 1.1, windowHeight * 1.4);
    
  maison = new Animator(1, 0, "./assets/images/maison/maison.0.png");
  maison.setSize(windowWidth * 1.1, windowHeight * 1.1);

  sequencer.registerSequence({
    name: "affichage images moon",
    start: 104,
    stop: 111,
    onStart: () => {
      moonbg.show();
      moon.show();
      maison.show();
    },
    onStop: () => {
      moonbg.hide();
      moon.hide();
      maison.hide();
      activeScene = 12;
    },
  });

  sequencer.registerSequence({
    name: "deplacement images moon",
    start: 103,
    stop: 111,
    onStart: () => {
      speed_moonbg = 0.1;
      speed_moon = 0.3;   
    },
    onStop: () => {
      speed_moonbg = 0;
      speed_moon = 0;
    },
  });
}

function drawEleventhSeq() {
  imageMode(CENTER);

  scrollX_moonbg += speed_moonbg;
  scrollX_moon += speed_moon; 

  if (moonbg.visible) {
    moonbg.setPosition(windowWidth / 2 - scrollX_moonbg, windowHeight / 2);
    moonbg.display();
  }

  if (moon.visible) {
    moon.setPosition((windowWidth / 2) - scrollX_moon, windowHeight / 2);
    moon.display();
  }

  if (maison.visible) {
    maison.setPosition(windowWidth / 2, windowHeight / 2);
    maison.display();
  }

}

//---------- Sequence 12 ----------

function initTwelfthSequence() {
  galaxy2bg = new Animator(1, 0, "./assets/images/galaxy2/galaxybg2.0.png");
  galaxy2bg.setSize(windowWidth * 1.1, windowHeight * 1.2);

  galaxy2 = new Animator(1, 0, "./assets/images/galaxy2/galaxy2.0.png");
  galaxy2.setSize(windowWidth * 1.1, windowHeight * 1.4);
    
  maison = new Animator(1, 0, "./assets/images/maison/maison.0.png");
  maison.setSize(windowWidth * 1.1, windowHeight * 1.1);

  sequencer.registerSequence({
    name: "affichage images galaxy2",
    start: 112,
    stop: 119,
    onStart: () => {
      galaxy2bg.show();
      galaxy2.show();
      maison.show();
    },
    onStop: () => {
      galaxy2bg.hide();
      galaxy2.hide();
      maison.hide();
      activeScene = 13;
    },
  });

  sequencer.registerSequence({
    name: "deplacement images galaxy2",
    start: 112,
    stop: 119,
    onStart: () => {
      speed_galaxy2bg = 0.1;
      speed_galaxy2 = 0.24;
    },
    onStop: () => {
      speed_galaxy2bg = 0;
      speed_galaxy2 = 0;
    },
  });
}

function drawTwelfthSeq() {
  imageMode(CENTER);

  scrollX_galaxy2bg += speed_galaxy2bg;
  scrollX_galaxy2 += speed_galaxy2;

  if (galaxy2bg.visible) {
    galaxy2bg.setPosition(windowWidth / 2 - scrollX_galaxy2bg, windowHeight / 2);
    galaxy2bg.display();
  }

  if (galaxy2.visible) {
    galaxy2.setPosition((windowWidth / 2) + windowWidth * 0.05 - scrollX_galaxy2, windowHeight / 2);
    galaxy2.display();
  }

  if (maison.visible) {
    maison.setPosition(windowWidth / 2, windowHeight / 2);
    maison.display();
  }

}

//---------- Sequence 13 ----------

function initThirteenthSequence() {
  rocks2bg = new Animator(1, 0, "./assets/images/rocks2/rocks2bg.0.png");
  rocks2bg.setSize(windowWidth * 1.1, windowHeight * 1.2);

  rocks2back = new Animator(1, 0, "./assets/images/rocks2/rocks2back.0.png");
  rocks2back.setSize(windowWidth * 1.1, windowHeight * 1.4);
  
  rocks2mid = new Animator(1, 0, "./assets/images/rocks2/rocks2mid.0.png");
  rocks2mid.setSize(windowWidth * 1.1, windowHeight * 1.4);
  
  rocks2front = new Animator(1, 0, "./assets/images/rocks2/rocks2front.0.png");
  rocks2front.setSize(windowWidth * 1.1, windowHeight * 1.4);
    
  maison = new Animator(1, 0, "./assets/images/maison/maison.0.png");
  maison.setSize(windowWidth * 1.1, windowHeight * 1.1);

  sequencer.registerSequence({
    name: "affichage images rocks2",
    start: 120,
    stop: 127,
    onStart: () => {
      rocks2bg.show();
      rocks2back.show();
      rocks2mid.show();
      rocks2front.show();
      maison.show();
    },
    onStop: () => {
      rocks2bg.hide();
      rocks2back.hide();
      rocks2mid.hide();
      rocks2front.hide();
      maison.hide();
      activeScene = 14;
    },
  });

  sequencer.registerSequence({
    name: "deplacement images rocks2",
    start: 120,
    stop: 127,
    onStart: () => {
      speed_rocks2bg = 0.1;
      speed_rocks2back = 0.2;
      speed_rocks2mid = 0.3;
      speed_rocks2front = 0.4;
    },
    onStop: () => {
      speed_rocks2bg = 0;
      speed_rocks2back = 0;
      speed_rocks2mid = 0;
      speed_rocks2front = 0;
    },
  });
}
function drawThirteenthSeq() {
  imageMode(CENTER);

  scrollX_rocks2bg += speed_rocks2bg;
  scrollX_rocks2back += speed_rocks2back;
  scrollX_rocks2mid += speed_rocks2mid;
  scrollX_rocks2front += speed_rocks2front;

  if (rocks2bg.visible) {
    rocks2bg.setPosition(windowWidth / 2 - scrollX_rocks2bg, windowHeight / 2);
    rocks2bg.display();
  }

  if (rocks2back.visible) {
    rocks2back.setPosition((windowWidth / 2) + windowWidth*0.05 - scrollX_rocks2back, windowHeight / 2);
    rocks2back.display();
  }

  if (rocks2mid.visible) {
    rocks2mid.setPosition((windowWidth / 2) + windowWidth*0.05 - scrollX_rocks2mid, windowHeight / 2);
    rocks2mid.display();
  }

  if (rocks2front.visible) {
    rocks2front.setPosition((windowWidth / 2) + windowWidth*0.05 - scrollX_rocks2front, windowHeight / 2);
    rocks2front.display();
  }

  if (maison.visible) {
    maison.setPosition(windowWidth / 2, windowHeight / 2);
    maison.display();
  }

}

//---------- Sequence 14 ----------

function initFourteenthSequence() {
  planets2bg = new Animator(1, 0, "./assets/images/2planets/2planetsbg.0.png");
  planets2bg.setSize(windowWidth * 1.1, windowHeight * 1.2);

  planets2mid = new Animator(1, 0, "./assets/images/2planets/2planetsmid.0.png");
  planets2mid.setSize(windowWidth * 1.1, windowHeight * 1.1);

  planets2front = new Animator(1, 0, "./assets/images/2planets/2planetsfront.0.png");
  planets2front.setSize(windowWidth * 1.1, windowHeight * 1.1);
    
  maison = new Animator(1, 0, "./assets/images/maison/maison.0.png");
  maison.setSize(windowWidth * 1.1, windowHeight * 1.1);

  sequencer.registerSequence({
    name: "affichage images planets2",
    start: 128,
    stop: 136,
    onStart: () => {
      planets2bg.show();
      planets2mid.show();
      planets2front.show();
      maison.show();
    },
    onStop: () => {
      planets2bg.hide();
      planets2mid.hide();
      planets2front.hide();
      maison.hide();
      activeScene = 15;
    },
  });

  sequencer.registerSequence({
    name: "deplacement images planets2",
    start: 128,
    stop: 136,
    onStart: () => {
      speed_planets2bg = 0.1;
      speed_planets2mid = 0.2;
      speed_planets2front = 0.4;
    },
    onStop: () => {
      speed_planets2bg = 0;
      speed_planets2mid = 0;
      speed_planets2front = 0;
    },
  });
}

function drawFourteenthSeq() {
  imageMode(CENTER);

  scrollX_planets2bg += speed_planets2bg;
  scrollX_planets2mid += speed_planets2mid;
  scrollX_planets2front += speed_planets2front;

  if (planets2bg.visible) {
    planets2bg.setPosition(windowWidth / 2 - scrollX_planets2bg, windowHeight / 2);
    planets2bg.display();
  }

  if (planets2mid.visible) {
    planets2mid.setPosition((windowWidth / 2) + windowWidth * 0.05 - scrollX_planets2mid, windowHeight / 2);
    planets2mid.display();
  }

  if (planets2front.visible) {
    planets2front.setPosition((windowWidth / 2) + windowWidth * 0.05 - scrollX_planets2front, windowHeight / 2);
    planets2front.display();
  }

  if (maison.visible) {
    maison.setPosition(windowWidth / 2, windowHeight / 2);
    maison.display();
  }

}


//---------- Sequence 15 ----------

function initFifteenthSequence() {
  saturnbg = new Animator(1, 0, "./assets/images/saturn/saturnbg.0.png");
  saturnbg.setSize(windowWidth * 1.1, windowHeight * 1.1);

  saturn = new Animator(1, 0, "./assets/images/saturn/saturn.0.png");
  saturn.setSize(windowWidth * 1.1, windowHeight * 1.1);
    
  maison = new Animator(1, 0, "./assets/images/maison/maison.0.png");
  maison.setSize(windowWidth * 1.1, windowHeight * 1.1);

  sequencer.registerSequence({
    name: "affichage images saturn",
    start: 137,
    stop: 145,
    onStart: () => {
      saturnbg.show();
      saturn.show();
      maison.show();
    },
    onStop: () => {
      saturnbg.hide();
      saturn.hide();
      maison.hide();
      activeScene = 16;
    },
  });

  sequencer.registerSequence({
    name: "deplacement images saturn",
    start: 137,
    stop: 145,
    onStart: () => {
      speed_saturnbg = 0.1;
      speed_saturn = 0.4;
    },
    onStop: () => {
      speed_saturnbg = 0;
      speed_saturn = 0;
    },
  });
}

function drawFifteenthSeq() {
  imageMode(CENTER);

  scrollX_saturnbg += speed_saturnbg;
  scrollX_saturn += speed_saturn;

  if (saturnbg.visible) {
    saturnbg.setPosition(windowWidth / 2 - scrollX_saturnbg, windowHeight / 2);
    saturnbg.display();
  }

  if (saturn.visible) {
    saturn.setPosition((windowWidth / 2) + windowWidth * 0.05 - scrollX_saturn, windowHeight / 2);
    saturn.display();
  }

  if (maison.visible) {
    maison.setPosition(windowWidth / 2, windowHeight / 2);
    maison.display();
  }

}


//---------- Sequence 16 ----------

function initSixteenthSequence() {
  galaxy3bg = new Animator(1, 0, "./assets/images/galaxy3/galaxy3bg.0.png");
  galaxy3bg.setSize(windowWidth * 1.1, windowHeight * 1.1);

  galaxy3back = new Animator(1, 0, "./assets/images/galaxy3/galaxy3back.0.png");
  galaxy3back.setSize(windowWidth * 1.1, windowHeight * 1.1);
  
  galaxy3mid = new Animator(1, 0, "./assets/images/galaxy3/galaxy3mid.0.png");
  galaxy3mid.setSize(windowWidth * 1.1, windowHeight * 1.1);
  
  galaxy3front = new Animator(1, 0, "./assets/images/galaxy3/galaxy3front.0.png");
  galaxy3front.setSize(windowWidth * 1.1, windowHeight * 1.1);
    
  maison = new Animator(1, 0, "./assets/images/maison/maison.0.png");
  maison.setSize(windowWidth * 1.1, windowHeight * 1.1);

  sequencer.registerSequence({
    name: "affichage images galaxy3",
    start: 146,
    stop: 154,
    onStart: () => {
      galaxy3bg.show();
      galaxy3back.show();
      galaxy3mid.show();
      galaxy3front.show();
      maison.show();
    },
    onStop: () => {
      galaxy3bg.hide();
      galaxy3back.hide();
      galaxy3mid.hide();
      galaxy3mid.hide();
      maison.hide();
      activeScene = 17;
    },
  });

  sequencer.registerSequence({
    name: "deplacement images galaxy3",
    start: 146,
    stop: 154,
    onStart: () => {
      speed_galaxy3bg = 0;
      speed_galaxy3back = 0.1;
      speed_galaxy3mid = 0.15;
      speed_galaxy3front = 0.2;
    },
    onStop: () => {
      speed_galaxy3bg = 0;
      speed_galaxy3back = 0;
      speed_galaxy3mid = 0;
      speed_galaxy3front = 0;
    },
  });
}

function drawSixteenthSeq() {
  imageMode(CENTER);

  scrollX_galaxy3bg += speed_galaxy3bg;
  scrollX_galaxy3back += speed_galaxy3back;
  scrollX_galaxy3mid += speed_galaxy3mid;
  scrollX_galaxy3front += speed_galaxy3front;

  if (galaxy3bg.visible) {
    galaxy3bg.setPosition(windowWidth / 2 - scrollX_galaxy3bg, windowHeight / 2);
    galaxy3bg.display();
  }

  if (galaxy3back.visible) {
    galaxy3back.setPosition((windowWidth / 2) + windowWidth * 0.05 - scrollX_galaxy3back, windowHeight / 2);
    galaxy3back.display();
  }

  if (galaxy3mid.visible) {
    galaxy3mid.setPosition((windowWidth / 2) + windowWidth * 0.05 - scrollX_galaxy3mid, windowHeight / 2);
    galaxy3mid.display();
  }

  if (galaxy3front.visible) {
    galaxy3front.setPosition((windowWidth / 2) + windowWidth * 0.05 - scrollX_galaxy3front, windowHeight / 2);
    galaxy3front.display();
  }

  if (maison.visible) {
    maison.setPosition(windowWidth / 2, windowHeight / 2);
    maison.display();
  }

}

//---------- Sequence 17 ----------

function initSeventeenthSequence() {
  loneplanetbg = new Animator(1, 0, "./assets/images/loneplanet/loneplanetbg.0.png");
  loneplanetbg.setSize(windowWidth * 1.1, windowHeight * 1.2);

  loneplanet = new Animator(1, 0, "./assets/images/loneplanet/loneplanet.0.png");
  loneplanet.setSize(windowWidth * 1.1, windowHeight * 1.1);
    
  maison = new Animator(1, 0, "./assets/images/maison/maison.0.png");
  maison.setSize(windowWidth * 1.1, windowHeight * 1.1);

  sequencer.registerSequence({
    name: "affichage images loneplanet",
    start: 155,
    stop: 165,
    onStart: () => {
      loneplanetbg.show();
      loneplanet.show();
      maison.show();
    },
    onStop: () => {
      loneplanetbg.hide();
      loneplanet.hide();
      maison.hide();
      activeScene = 18;
    },
  });

  sequencer.registerSequence({
    name: "deplacement images loneplanet",
    start: 155,
    stop: 165,
    onStart: () => {
      speed_loneplanetbg = 0.1;
      speed_loneplanet = 0.3;
    },
    onStop: () => {
      speed_loneplanetbg = 0;
      speed_loneplanet = 0;
    },
  });
}

function drawSeventeenthSeq() {
  imageMode(CENTER);

  scrollX_loneplanetbg += speed_loneplanetbg;
  scrollX_loneplanet += speed_loneplanet;

  if (loneplanetbg.visible) {
    loneplanetbg.setPosition(windowWidth / 2 - scrollX_loneplanetbg, windowHeight / 2);
    loneplanetbg.display();
  }

  if (loneplanet.visible) {
    loneplanet.setPosition((windowWidth / 2) + windowWidth * 0.05 - scrollX_loneplanet, windowHeight / 2);
    loneplanet.display();
  }

  if (maison.visible) {
    maison.setPosition(windowWidth / 2, windowHeight / 2);
    maison.display();
  }

}

//---------- Sequence 18 ----------

function initEighteenthSequence() {
  blackholebg = new Animator(1, 0, "./assets/images/blackhole/blackholebg.0.png");
  blackholebg.setSize(windowWidth * 1.1, windowHeight * 1.2);

  blackhole = new Animator(1, 0, "./assets/images/blackhole/blackhole.0.png");
  blackhole.setSize(windowWidth * 1, windowHeight * 1.1);
    
  maisonblackhole = new Animator(1, 0, "./assets/images/blackhole/maisonblackhole.0.png");
  maisonblackhole.setSize(windowWidth * 1.1, windowHeight * 1.1);

  sequencer.registerSequence({
    name: "affichage images blackhole",
    start: 165,
    stop: 178,
    onStart: () => {
      blackholebg.show();
      blackhole.show();
      maisonblackhole.show();
      console.log("Maison devrait être visible");
    },
    onStop: () => {
      blackholebg.hide();
      blackhole.hide();
      maisonblackhole.hide();
      activeScene = 19;
    },
  });

  sequencer.registerSequence({
    name: "deplacement images blackhole",
    start: 165,
    stop: 178,
    onStart: () => {
      speed_blackholebg = 0.1;
      speed_blackhole = 0.25;
    },
    onStop: () => {
      speed_blackholebg = 0;
      speed_blackhole = 0;
    },
  });
}

function drawEighteenthSeq() {
  imageMode(CENTER);

  scrollX_blackholebg += speed_blackholebg;
  scrollX_blackhole += speed_blackhole;

  if (blackholebg.visible) {
    blackholebg.setPosition(windowWidth / 2 - scrollX_blackholebg, windowHeight / 2);
    blackholebg.display();
  }

  if (blackhole.visible) {
    blackhole.setPosition((windowWidth / 2) + windowWidth * 0.05 - scrollX_blackhole, windowHeight / 2);
    blackhole.display();
  }

  if (maisonblackhole.visible) {
    maisonblackhole.setPosition(windowWidth / 2, windowHeight / 2);
    maisonblackhole.display();
  }
}

//---------- Sequence 19 ----------

function initNineteenthSequence() {
  maisonbg2 = new Animator(1, 0, "./assets/images/maison/maisonbg.0.png");
  maisonbg2.setSize(windowWidth * 1.1, windowHeight * 1.1);

  maison2 = new Animator(1, 0, "./assets/images/maison/maison.0.png");
  maison2.setSize(windowWidth * 1.1, windowHeight * 1.1);

  maisonfront2 = new Animator(1, 0, "./assets/images/maison/maisonfront.0.png");
  maisonfront2.setSize(windowWidth * 1.1, windowHeight * 1.1);

  sequencer.registerSequence({
    name: "affichage images maison2",
    start: 179,
    stop: 187,
    onStart: () => {
      maisonbg2.show();
      maisonfront2.show();
      maison2.show();
    },
    onStop: () => {
      maisonbg2.hide();
      maisonfront2.hide();
      maison2.hide();
    },
  });
}

function drawNineteenthSeq() {
  imageMode(CENTER);
  if (maisonbg2.visible) {
    maisonbg2.setPosition(windowWidth / 2, windowHeight / 2);
    maisonbg2.display();
  }

  if (maison2.visible) {
    maison2.setPosition(windowWidth / 2, windowHeight / 2);
    maison2.display();
  }

  if (maisonfront2.visible) {
    maisonfront2.setPosition(windowWidth / 2, windowHeight / 2);
    maisonfront2.display();
  }
}
