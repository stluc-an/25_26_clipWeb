/*----------------------------------------*\
  25_26_AN1_clipWeb - main.js
  @author Inès Ciendones
  @Date: 2026-04-03 11:44:05
  @Last Modified time: 2026-03-06 12:34:05
\*----------------------------------------*/
let BPM = 180;
let audioPath = "assets/audio/pearl.mp3";
let titre;
let smartphoneLyrics;
let sequencer;
let lumTel;
let oeilTV;
let juliaTV
let trio; 
let nose; 
let hater; 
let blocked;
let anActress;
let savage; 
let theOne;
let refrin01; 
let refrin02;
let refrin03; 
let refrin04;
let refrin05;
let refrin06; 
let pissmeoff; 
let job01;
let babygirl;
let job02;
let actress02;
let savage02;
let theOne02; 
let refrin07;
let refrin08;
let refrin09; 
let refrin10; 
let refrin11;
let refrin12;
let star; 
let fin;


let bg = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);
  sequencer = new Sequencer(audioPath, BPM,false); 

  imageMode(CENTER);

  titre= new Animator(1,5,"./assets/images/titre/images (_imgNum_).png");
  titre.setSize(1400, 750);
  titre.setPosition(width/2, height/2)

  smartphoneLyrics = new Animator(1,13,"./assets/images/test/text-(_imgNum_).png");
  smartphoneLyrics.setSize(1400, 750);
  smartphoneLyrics.setPosition(width/2, height/2)

  smartphone = new Animator(1,2,"./assets/images/smartphone/smartphone (_imgNum_).png");
  smartphone.setSize(1400, 750);
  smartphone.setPosition(width/2, height/2)

  lumTel = new Animator(1,11,"./assets/images/lumière_tel/image-(_imgNum_).png");
  lumTel.setSize(1400, 750);
  lumTel.setPosition(width/2, height/2)

  oeilTV = new Animator(1,26,"./assets/images/oeil_tv/image-(_imgNum_).png");
  oeilTV.setSize(1400, 750);
  oeilTV.setPosition(width/2, height/2)

  juliaTV = new Animator(1,33,"./assets/images/julia_TV/image (_imgNum_).png");
  juliaTV .setSize(1400, 750);
  juliaTV .setPosition(width/2, height/2)

  trio = new Animator(1,16,"./assets/images/TRIO/image (_imgNum_) .png");
  trio.setSize(1400, 750);
  trio .setPosition(width/2, height/2)

  nose = new Animator(1,10,"./assets/images/nose/image (_imgNum_).png");
  nose.setSize(1400, 750);
  nose .setPosition(width/2, height/2)

  hater = new Animator(1,27,"./assets/images/hater/image (_imgNum_).png");
  hater.setSize(1400, 750);
  hater .setPosition(width/2, height/2)

  blocked = new Animator(1,21,"./assets/images/blocked/image (_imgNum_).png");
  blocked .setSize(1400, 750);
  blocked .setPosition(width/2, height/2)

  anActress = new Animator(1,18,"./assets/images/suchAnActress/image (_imgNum_).png");
  anActress .setSize(1400, 750);
  anActress .setPosition(width/2, height/2)

  savage = new Animator(1,17,"./assets/images/savage/image (_imgNum_).png");
  savage.setSize(1400, 750);
  savage.setPosition(width/2, height/2)

  theOne = new Animator(1,17,"./assets/images/theOne/image (_imgNum_).png");
  theOne.setSize(1400, 750);
  theOne.setPosition(width/2, height/2)

  refrin01 = new Animator(1,16,"./assets/images/refrin_01/image (_imgNum_).png");
  refrin01.setSize(1400, 750);
  refrin01.setPosition(width/2, height/2)

  refrin02 = new Animator(1,26,"./assets/images/refrin_02/image (_imgNum_).png");
  refrin02.setSize(1400, 750);
  refrin02.setPosition(width/2, height/2)

  refrin03 = new Animator(1,34,"./assets/images/refrin_03/image (_imgNum_).png");
  refrin03.setSize(1400, 750);
  refrin03.setPosition(width/2, height/2)

  refrin04 = new Animator(1,16,"./assets/images/refrin_04/image (_imgNum_).png");
  refrin04.setSize(1400, 750);
  refrin04.setPosition(width/2, height/2)

  refrin05 = new Animator(1,20,"./assets/images/refrin_05/image (_imgNum_).png");
  refrin05.setSize(1400, 750);
  refrin05.setPosition(width/2, height/2)

  refrin06 = new Animator(1,33,"./assets/images/refrin_06/image (_imgNum_).png");
  refrin06.setSize(1400, 750);
  refrin06.setPosition(width/2, height/2)

  pissmeoff = new Animator(1,16,"./assets/images/PissMeOff/image (_imgNum_).png");
  pissmeoff.setSize(1400, 750);
  pissmeoff.setPosition(width/2, height/2)

  job01 = new Animator(1,19,"./assets/images/BetterJob01/image (_imgNum_).png");
  job01.setSize(1400, 750);
  job01.setPosition(width/2, height/2)

  babygirl = new Animator(1,13,"./assets/images/babygirl/image (_imgNum_).png");
  babygirl.setSize(1400, 750);
  babygirl.setPosition(width/2, height/2)

  job02 = new Animator(1,19,"./assets/images/BetterJob02/image (_imgNum_).png");
  job02.setSize(1400, 750);
  job02.setPosition(width/2, height/2)

  actress02 = new Animator(1,21,"./assets/images/actress02/image (_imgNum_).png");
  actress02.setSize(1400, 750);
  actress02.setPosition(width/2, height/2)

  savage02 = new Animator(1,13,"./assets/images/yourShit/image (_imgNum_).png");
  savage02.setSize(1400, 750);
  savage02.setPosition(width/2, height/2)

  theOne02 = new Animator(1,21,"./assets/images/theOne02/image (_imgNum_).png");
  theOne02.setSize(1400, 750);
  theOne02.setPosition(width/2, height/2)

  refrin07 = new Animator(1,15,"./assets/images/refrin_07/image (_imgNum_).png");
  refrin07.setSize(1400, 750);
  refrin07.setPosition(width/2, height/2)

refrin08 = new Animator(1,29,"./assets/images/refrin_08/image (_imgNum_).png");
  refrin08.setSize(1400, 750);
  refrin08.setPosition(width/2, height/2)

  refrin09 = new Animator(1,28,"./assets/images/refrin_09/image (_imgNum_).png");
  refrin09.setSize(1400, 750);
  refrin09.setPosition(width/2, height/2)

refrin10 = new Animator(1,15,"./assets/images/refrin_07/image (_imgNum_).png");
  refrin10.setSize(1400, 750);
  refrin10.setPosition(width/2, height/2)

  refrin11 = new Animator(1,29,"./assets/images/refrin_08/image (_imgNum_).png");
  refrin11.setSize(1400, 750);
  refrin11.setPosition(width/2, height/2)

  refrin12 = new Animator(1,28,"./assets/images/refrin_09/image (_imgNum_).png");
  refrin12.setSize(1400, 750);
  refrin12.setPosition(width/2, height/2)

  star = new Animator(1,20,"./assets/images/STAR/image (_imgNum_).png");
  star.setSize(1400, 750);
  star.setPosition(width/2, height/2)

fin= new Animator(1,27,"./assets/images/FIN/image (_imgNum_).png");
fin.setSize(1400, 750);
fin.setPosition(width/2, height/2)




  sequencer.registerSequence({
    name : "titre",
    start : 2,
    stop : 7,
    onStart : function (event){
     titre.show();
    },
    onStop : function (event){
     titre.hide();
    },
    onStep : function (event){
     titre.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]
  });

  sequencer.registerSequence({
    name : "smartphoneLyrics",
    start : 7,
    stop : 18,
    onStart : function (event){
     smartphoneLyrics.show();
     smartphone.show()
    },
    onStop : function (event){
     smartphoneLyrics.hide();
     smartphone.hide()
    },
    onStep : function (event){
     smartphoneLyrics.next(true);
     if(event.step == 12){
      smartphone.next();
     }
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]
  });

   sequencer.registerSequence({
    name : "lumTel",
    start : 18,
    stop : 22,
    onStart : function (event){
     lumTel.show();
    },
    onStop : function (event){
     lumTel.hide();
    },
    onStep : function (event){
     lumTel.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]
  });

   sequencer.registerSequence({
    name : "oeilTV",
    start : 22,
    stop : 27,
    onStart : function (event){
     oeilTV.show();
    },
    onStop : function (event){
     oeilTV.hide();
    },
    onStep : function (event){
     oeilTV.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]

  });

 sequencer.registerSequence({
    name : "juliaTV",
    start : 27,
    stop : 45,
    onStart : function (event){
     juliaTV.show();
    },
    onStop : function (event){
     juliaTV.hide();
    },
    onStep : function (event){
     juliaTV.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]
  });

  sequencer.registerSequence({
    name : "trio",
    start : 45,
    stop : 55,
    onStart : function (event){
     trio.show();
    },
    onStop : function (event){
     trio.hide();
    },
    onStep : function (event){
     trio.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]
    });

  sequencer.registerSequence({
    name : "nose",
    start : 55,
    stop : 63,
    onStart : function (event){
     nose.show();
    },
    onStop : function (event){
     nose.hide();
    },
    onStep : function (event){
     nose.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]
  });

     sequencer.registerSequence({
    name : "hater",
    start : 63,
    stop : 70,
    onStart : function (event){
     hater.show();
    },
    onStop : function (event){
     hater.hide();
    },
    onStep : function (event){
     hater.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]
  });

     sequencer.registerSequence({
    name : "blocked",
    start : 70,
    stop : 82,
    onStart : function (event){
     blocked.show();
    },
    onStop : function (event){
     blocked.hide();
    },
    onStep : function (event){
     blocked.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]
  });

     sequencer.registerSequence({
    name : "anActress",
    start : 82,
    stop : 97,
    onStart : function (event){
     anActress.show();
    },
    onStop : function (event){
     anActress.hide();
    },
    onStep : function (event){
     anActress.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]
  });

     sequencer.registerSequence({
    name : "savage",
    start : 97,
    stop : 108,
    onStart : function (event){
     savage.show();
    },
    onStop : function (event){
     savage.hide();
    },
    onStep : function (event){
     savage.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]

  });

     sequencer.registerSequence({
    name : "theOne",
    start : 108,
    stop : 120,
    onStart : function (event){
     theOne.show();
    },
    onStop : function (event){
     theOne.hide();
    },
    onStep : function (event){
     theOne.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]

  });

      sequencer.registerSequence({
    name : "refrin01",
    start : 120,
    stop : 129,
    onStart : function (event){
     refrin01.show();
    },
    onStop : function (event){
     refrin01.hide();
    },
    onStep : function (event){
     refrin01.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]

  });

      sequencer.registerSequence({
    name : "refrin02",
    start : 129,
    stop : 136,
    onStart : function (event){
     refrin02.show();
    },
    onStop : function (event){
     refrin02.hide();
    },
    onStep : function (event){
     refrin02.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]

  });

       sequencer.registerSequence({
    name : "refrin03",
    start : 136,
    stop : 156,
    onStart : function (event){
     refrin03.show();
    },
    onStop : function (event){
     refrin03.hide();
    },
    onStep : function (event){
     refrin03.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]

  });

       sequencer.registerSequence({
    name : "refrin04",
    start : 156,
    stop : 170,
    onStart : function (event){
     refrin04.show();
    },
    onStop : function (event){
     refrin04.hide();
    },
    onStep : function (event){
     refrin04.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]

  });

    sequencer.registerSequence({
    name : "refrin05",
    start : 167,
    stop : 173,
    onStart : function (event){
     refrin05.show();
    },
    onStop : function (event){
     refrin05.hide();
    },
    onStep : function (event){
     refrin05.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]

  });

    sequencer.registerSequence({
    name : "refrin06",
    start : 173,
    stop : 194,
    onStart : function (event){
     refrin06.show();
    },
    onStop : function (event){
     refrin06.hide();
    },
    onStep : function (event){
     refrin06.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]

  });

    sequencer.registerSequence({
    name : "pissmeoff",
    start : 194,
    stop : 203,
    onStart : function (event){
     pissmeoff.show();
    },
    onStop : function (event){
     pissmeoff.hide();
    },
    onStep : function (event){
     pissmeoff.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]

  });

    sequencer.registerSequence({
    name : "job01",
    start : 203,
    stop : 211,
    onStart : function (event){
     job01.show();
    },
    onStop : function (event){
     job01.hide();
    },
    onStep : function (event){
     job01.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]

  });

    sequencer.registerSequence({
    name : "babygirl",
    start : 211,
    stop : 220,
    onStart : function (event){
     babygirl.show();
    },
    onStop : function (event){
     babygirl.hide();
    },
    onStep : function (event){
     babygirl.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]

  });

     sequencer.registerSequence({
    name : "job02",
    start : 220,
    stop : 228,
    onStart : function (event){
     job02.show();
    },
    onStop : function (event){
     job02.hide();
    },
    onStep : function (event){
     job02.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]

  });

     sequencer.registerSequence({
    name : "actress02",
    start : 228,
    stop : 245,
    onStart : function (event){
     actress02.show();
    },
    onStop : function (event){
     actress02.hide();
    },
    onStep : function (event){
     actress02.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]

  });

      sequencer.registerSequence({
    name : "savage02",
    start : 245,
    stop : 256,
    onStart : function (event){
     savage02.show();
    },
    onStop : function (event){
     savage02.hide();
    },
    onStep : function (event){
     savage02.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]

    });

      sequencer.registerSequence({
    name : "theOne02",
    start : 256,
    stop : 268,
    onStart : function (event){
     theOne02.show();
    },
    onStop : function (event){
     theOne02.hide();
    },
    onStep : function (event){
     theOne02.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]

  });

    sequencer.registerSequence({
    name : "refrin07",
    start : 268,
    stop : 278,
    onStart : function (event){
     refrin07.show();
    },
    onStop : function (event){
     refrin07.hide();
    },
    onStep : function (event){
     refrin07.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]

  });

sequencer.registerSequence({
    name : "refrin08",
    start : 278,
    stop : 285,
    onStart : function (event){
     refrin08.show();
    },
    onStop : function (event){
     refrin08.hide();
    },
    onStep : function (event){
     refrin08.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]

  });

sequencer.registerSequence({
    name : "refrin09",
    start : 285,
    stop : 303,
    onStart : function (event){
     refrin09.show();
    },
    onStop : function (event){
     refrin09.hide();
    },
    onStep : function (event){
     refrin09.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]

  });

sequencer.registerSequence({
    name : "refrin10",
    start : 303,
    stop : 313,
    onStart : function (event){
     refrin10.show();
    },
    onStop : function (event){
     refrin10.hide();
    },
    onStep : function (event){
     refrin10.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]

  });

sequencer.registerSequence({
    name : "refrin11",
    start : 313,
    stop : 320,
    onStart : function (event){
     refrin11.show();
    },
    onStop : function (event){
     refrin11.hide();
    },
    onStep : function (event){
     refrin11.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]

  });

sequencer.registerSequence({
    name : "refrin12",
    start : 320,
    stop : 338,
    onStart : function (event){
     refrin12.show();
    },
    onStop : function (event){
     refrin12.hide();
    },
    onStep : function (event){
     refrin12.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]

  });

sequencer.registerSequence({
    name : "star",
    start : 335,
    stop : 365,
    onStart : function (event){
     star.show();
    },
    onStop : function (event){
     star.hide();
    },
    onStep : function (event){
     star.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]

  });

sequencer.registerSequence({
    name : "fin",
    start : 365,
    stop : 392,
    onStart : function (event){
     fin.show();
    },
    onStop : function (event){
     fin.hide();
    },
    onStep : function (event){
     fin.next(true);
    },
    measure : 1,
    steps : [1, 1+1/3, 1+2/3]

  });
}

function draw(){
  sequencer.update();
  background(0);

  if(titre.visible){
   titre.display();
  }


  if(smartphone.visible){
   smartphone.display();
  }

  if(smartphoneLyrics.visible){
   smartphoneLyrics.display();
  }


  if(lumTel.visible){
   lumTel.display();
  }

 if(oeilTV.visible){
   oeilTV.display();
  }

if(juliaTV.visible){
   juliaTV.display();
  }

  if(trio.visible){
   trio.display();
  }

  if(nose.visible){
   nose.display();
  }

  if(hater.visible){
   hater.display();
   }

   if(blocked.visible){
   blocked.display();
  }

   if(anActress.visible){
   anActress.display();
  }

  if(savage.visible){
   savage.display();
  }

  if(theOne.visible){
   theOne.display();
  }

  if(refrin01.visible){
   refrin01.display();
  }

if(refrin02.visible){
   refrin02.display();
  }

if(refrin03.visible){
   refrin03.display();
  }

  if(refrin04.visible){
   refrin04.display();
  }

  if(refrin05.visible){
   refrin05.display();
  }

if(refrin06.visible){
   refrin06.display();
  }

  if(pissmeoff.visible){
   pissmeoff.display();
  }

  if(job01.visible){
   job01.display();
  }

  if(babygirl.visible){
   babygirl.display();
  }

if(job02.visible){
   job02.display();
  }

  if( actress02.visible){
   actress02.display();
  }

if(savage02.visible){
   savage02.display();
  }

  if(theOne02.visible){
   theOne02.display();
  }

  if(refrin07.visible){
   refrin07.display();
  }

if(refrin08.visible){
   refrin08.display();
  }

  if(refrin09.visible){
   refrin09.display();
  }

  if(refrin10.visible){
   refrin10.display();
  }

  if(refrin11.visible){
   refrin11.display();
  }

  if(refrin12.visible){
   refrin12.display();
  }

  if(star.visible){
   star.display();
  }

  if(fin.visible){
   fin.display();
  }


}