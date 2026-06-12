/*----------------------------------------*\
  25_26_AN1_clipWeb - main.js
  @author Seren Duez
  @Date:   2026-02-23 00:24:49
  @Last Modified Time: 2026-06-12 08:58:36
\*----------------------------------------*/
let BPM = 164;
let audioPath = "assets/audio/MidnightGallery.mp3";
let sequencer;

let anim0;
let clap;
let credits;
let clapduo;
let fun;
let enjoy;
let comfort;
let distant;
let plead;
let things;
let thim;
let whoIam;
let whoWeAre;
let young;
let youngTwo;
let youngThree;
let youngFour;
let youngFive;
let youngSix;

let bg = 0;

//Le canvas pour que tout soit à la bonne taille par rapport à l'écran.//
function setup(){
    createCanvas(windowWidth, windowHeight);
    sequencer = new Sequencer(audioPath, BPM, false);
    //pour retire le numéro rouge, remplacer "true" par "false"

    //L'animation , sa position et ou est l'endroit d'origin de l'image. 
    anim0= new Animator (1, 3, "./assets/images/Clip1/premiere (_imgNum_).png")
    //change les "anim0" ps: 1 et 5 c'est début/fin animation
    anim0.setSize(windowWidth, windowHeight);

    clap= new Animator (1,2, "./assets/images/Clip1/clap_imgNum_.png")
    clap.setSize(windowWidth, windowHeight);

    credits= new Animator (1, 3, "./assets/images/Clip1/credits (_imgNum_).png")
    credits.setSize(windowWidth, windowHeight);

    clapduo= new Animator (1,2, "./assets/images/Clip1/clapduo_imgNum_.png")
    clapduo.setSize(windowWidth, windowHeight);

    fun= new Animator (1,3, "./assets/images/Clip1/funCredit (_imgNum_).png")
    fun.setSize(windowWidth, windowHeight);

    enjoy= new Animator (1, 3, "./assets/images/Clip1/enjoy (_imgNum_).png")
    enjoy.setSize(windowWidth, windowHeight);

    comfort= new Animator (1, 2, "./assets/images/clip2/comfort (1).png")
    comfort.setSize(windowWidth, windowHeight);

    distant= new Animator (1, 2, "./assets/images/clip2/distant (1).png")
    distant.setSize(windowWidth, windowHeight);

    plead= new Animator (1, 2, "./assets/images/clip2/plead (1).png")
    plead.setSize(windowWidth, windowHeight);

    things= new Animator (1, 2, "./assets/images/clip2/things (1).png")
    things.setSize(windowWidth, windowHeight);

    thim= new Animator (1, 2, "./assets/images/clip2/thims (1).png")
    thim.setSize(windowWidth, windowHeight);

    whoIam= new Animator (1, 2, "./assets/images/clip2/who i am (1).png")
    whoIam.setSize(windowWidth, windowHeight);

    whoWeAre= new Animator (1, 2, "./assets/images/clip2/who we are (1).png")
    whoWeAre.setSize(windowWidth, windowHeight);

    young= new Animator (1, 2, "./assets/images/clip2/young (1).png")
    young.setSize(windowWidth, windowHeight);

    youngTwo= new Animator (1, 2,"./assets/images/clip2/young two (1).png")
    youngTwo.setSize(windowWidth, windowHeight);

    youngThree= new Animator (1, 2, "./assets/images/clip2/young three (1).png")
    youngThree.setSize(windowWidth, windowHeight);

    youngFour= new Animator (1, 2, "./assets/images/clip2/young four (1).png")
    youngFour.setSize(windowWidth, windowHeight);

    youngFive= new Animator (1, 2, "./assets/images/clip2/young five (1).png")
    youngFive.setSize(windowWidth, windowHeight);

    youngSix= new Animator (1, 2, "./assets/images/clip2/young six (1).png")
    youngSix.setSize(windowWidth, windowHeight); 



    sequencer.registerSequence({
        name : "Introduction", 
        start : 10, 
        stop : 21, 
        onStart : function (event){
            anim0.show();
        }, 
        onStop : function (event){
            anim0.hide();
        },
        onStep : function (event){
            anim0.next(true);
        }, 
        measure : 1, 
        steps : [1]
    });


    sequencer.registerSequence({
        name : "clap", 
        start : 22, 
        stop : 24, 
        onStart : function (event){
            clap.next(true);
            clap.show();
        }, 
        onStop : function (event){
          clap.hide();
        },
        onStep : function (event){
            clap.next(true);

            clap.x +=165;
        }, 
        measure : 1, 
        steps : [1, 1+1/2, ]
    });

    sequencer.registerSequence({
        name : "credits", 
        start : 25, 
        stop : 37, 
        onStart : function (event){
            credits.show();
        }, 
        onStop : function (event){
            credits.hide();
        },
        onStep : function (event){
            credits.next(true);
        }, 
        measure : 1, 
        steps : [1]
    });

    sequencer.registerSequence({
        name : "clapduo", 
        start : 38, 
        stop : 40, 
        onStart : function (event){
            clapduo.next(true);
            clapduo.show();
        }, 
        onStop : function (event){
          clapduo.hide();
        },
        onStep : function (event){
            clapduo.next(true);

            clapduo.x +=165;
        }, 



        measure : 1, 
        steps : [1, 1+1/2, ]
    });

    sequencer.registerSequence({
        name : "funCredit", 
        start : 41, 
        stop : 57, 
        onStart : function (event){
            fun.show();
        }, 
        onStop : function (event){
            fun.hide();
        },
        onStep : function (event){
            fun.next(true);
        }, 
        measure : 1, 
        steps : [1]
    });

    sequencer.registerSequence({
        name : "enjoy", 
        start : 74, 
        stop : 89, 
        onStart : function (event){
            enjoy.show();
        }, 
        onStop : function (event){
            enjoy.hide();
        },
        onStep : function (event){
            enjoy.next(true);
        }, 
        measure : 1, 
        steps : [1]
    });

    sequencer.registerSequence({
        name : "first chorus", 
        start : 110, 
        stop : 125, 
        onStart : function (event){
            comfort.show();
        }, 
        onStop : function (event){
            comfort.hide();
        },
        onStep : function (event){
            comfort.next(true);
        }, 
        measure : 1, 
        steps : [1]
    });

    sequencer.registerSequence({
        name : "first chorus", 
        start : 126, 
        stop : 132, 
        onStart : function (event){
            distant.show();
        }, 
        onStop : function (event){
            distant.hide();
        },
        onStep : function (event){
            distant.next(true);
        }, 
        measure : 1, 
        steps : [1]
    });

    sequencer.registerSequence({
        name : "first chorus", 
        start : 133, 
        stop : 140, 
        onStart : function (event){
            plead.show();
        }, 
        onStop : function (event){
            plead.hide();
        },
        onStep : function (event){
            plead.next(true);
        }, 
        measure : 1, 
        steps : [1]
    });

    sequencer.registerSequence({
        name : "first chorus", 
        start : 141, 
        stop : 150, 
        onStart : function (event){
            things.show();
        }, 
        onStop : function (event){
            things.hide();
        },
        onStep : function (event){
            things.next(true);
        }, 
        measure : 1, 
        steps : [1]
    });

    sequencer.registerSequence({
        name : "first chorus", 
        start : 151, 
        stop : 165, 
        onStart : function (event){
            thim.show();
        }, 
        onStop : function (event){
            thim.hide();
        },
        onStep : function (event){
            thim.next(true);
        }, 
        measure : 1, 
        steps : [1]
    });

    sequencer.registerSequence({
        name : "first chorus", 
        start : 166, 
        stop : 170, 
        onStart : function (event){
            whoIam.show();
        }, 
        onStop : function (event){
            whoIam.hide();
        },
        onStep : function (event){
            whoIam.next(true);
        }, 
        measure : 1, 
        steps : [1]
    });

    sequencer.registerSequence({
        name : "first chorus", 
        start : 171, 
        stop : 200, 
        onStart : function (event){
            whoWeAre.show();
        }, 
        onStop : function (event){
            whoWeAre.hide();
        },
        onStep : function (event){
            whoWeAre.next(true);
        }, 
        measure : 1, 
        steps : [1]
    });

    sequencer.registerSequence({
        name : "first chorus", 
        start : 201, 
        stop : 210, 
        onStart : function (event){
            young.show();
        }, 
        onStop : function (event){
            young.hide();
        },
        onStep : function (event){
            young.next(true);
        }, 
        measure : 1, 
        steps : [1]
    });

    sequencer.registerSequence({
        name : "first chorus", 
        start : 211, 
        stop : 223, 
        onStart : function (event){
            youngTwo.show();
        }, 
        onStop : function (event){
            youngTwo.hide();
        },
        onStep : function (event){
            youngTwo.next(true);
        }, 
        measure : 1, 
        steps : [1]
    });

    sequencer.registerSequence({
        name : "first chorus", 
        start : 224, 
        stop : 236, 
        onStart : function (event){
            youngThree.show();
        }, 
        onStop : function (event){
            youngThree.hide();
        },
        onStep : function (event){
            youngThree.next(true);
        }, 
        measure : 1, 
        steps : [1]
    });

    sequencer.registerSequence({
        name : "first chorus", 
        start : 237, 
        stop : 240, 
        onStart : function (event){
            youngFour.show();
        }, 
        onStop : function (event){
            youngFour.hide();
        },
        onStep : function (event){
            youngFour.next(true);
        }, 
        measure : 1, 
        steps : [1]
    });

    sequencer.registerSequence({
        name : "first chorus", 
        start : 241, 
        stop : 258, 
        onStart : function (event){
            youngFive.show();
        }, 
        onStop : function (event){
            youngFive.hide();
        },
        onStep : function (event){
            youngFive.next(true);
        }, 
        measure : 1, 
        steps : [1]
    });

    sequencer.registerSequence({
        name : "first chorus", 
        start : 259, 
        stop : 279, 
        onStart : function (event){
            youngSix.show();
        }, 
        onStop : function (event){
            youngSix.hide();
        },
        onStep : function (event){
            youngSix.next(true);
        }, 
        measure : 1, 
        steps : [1]
    });

}

function draw(){
    sequencer.update();

    background(bg);
    if (anim0.visible){
        anim0.display();
    }

    if (clap.visible){
        clap.display();
    }

    if (credits.visible){
        credits.display();
    }

    if (clapduo.visible){
        clapduo.display();
    }

    if (fun.visible){
        fun.display();
    }

    if (enjoy.visible){
        enjoy.display();
    }

    if (comfort.visible){
        comfort.display();
    }

    if (distant.visible){
        distant.display();
    }

    if (plead.visible){
        plead.display();
    }

    if (things.visible){
        things.display();
    }

    if (thim.visible){
        thim.display();
    }

    if (whoIam.visible){
        whoIam.display();
    }

    if (whoWeAre.visible){
        whoWeAre.display();
    }

    if (young.visible){
        young.display();
    }

    if (youngTwo.visible){
        youngTwo.display();
    }

    if (youngThree.visible){
        youngThree.display();
    }

    if (youngFour.visible){
        youngFour.display();
    }

    if (youngFive.visible){
        youngFive.display();
    }

    if (youngSix.visible){
        youngSix.display();
    }


}