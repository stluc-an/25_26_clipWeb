    /*----------------------------------------*\
  23_24_AN1_clipWeb - main.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2024-02-23 00:24:49
  @Last Modified time: 2024-02-23 08:58:36
\*----------------------------------------*/
let BPM = 150;
let audioPath = "assets/audio/O Samba.mp3";
let sequencer;
let trompette;
let trompette2;
let trompettetriple;
let trompetteface;
let oeuf;
let cymbale;
let cymbaledouble;
let marchedebut;
let danceuse;
let danceuse2;
let couplet;
let dancetoucan;
let dancetoucan2;
let star;
let fin;






function setup(){
    createCanvas(windowWidth, windowHeight);
    sequencer = new Sequencer(audioPath, BPM,false);

    trompette= new Animator(1,2,"./assets/images/trompette/t_imgNum_.png")
   
    trompette2=new Animator(1,2,"./assets/images/trompette2/t_imgNum_.png")
    trompettetriple=new Animator(1,2,"./assets/images/trompettetriple/t_imgNum_.png")
    trompettetriple2=new Animator(1,2,"./assets/images/trompettetriple2/t_imgNum_.png")
    trompetteface=new Animator(1,6,"./assets/images/trompetteface/t_imgNum_.png")

    oeuf= new Animator(0,6,"./assets/images/oeuf/oeuf000_imgNum_.png")
    cymbale= new Animator(1,2,"./assets/images/cymbale/c_imgNum_.png")
    cymbaledouble= new Animator(1,2,"./assets/images/cymbaledouble/c_imgNum_.png")
    marchedebut= new Animator(1,30,"./assets/images/marchedebut/md_imgNum_.png")
    danceuse = new Animator(1,2,"./assets/images/danceuse/d_imgNum_.png")
    danceuse2 = new Animator(1,2,"./assets/images/danceuse2/d_imgNum_.png")
    couplet = new Animator(1,30,"./assets/images/couplet/c_imgNum_.png")
    dancetoucan = new Animator(1,2,"./assets/images/dancetoucan/r_imgNum_.png")
    dancetoucan2 = new Animator(1,2,"./assets/images/dancetoucan2/r_imgNum_.png")
    star = new Animator(1,3,"./assets/images/star/s_imgNum_.png")
    fin = new Animator(1,2,"./assets/images/fin/f_imgNum_.png")




    trompette.setSize(windowWidth,windowHeight);
    trompette2.setSize(windowWidth,windowHeight);
    trompettetriple.setSize(windowWidth,windowHeight);
    trompettetriple2.setSize(windowWidth,windowHeight);
    trompetteface.setSize(windowWidth,windowHeight);

    cymbale.setSize(windowWidth,windowHeight);
    cymbaledouble.setSize(windowWidth,windowHeight);

    oeuf.setSize(windowWidth,windowHeight);
    marchedebut.setSize(windowWidth,windowHeight);
    danceuse.setSize(windowWidth,windowHeight);
    danceuse2.setSize(windowWidth,windowHeight);
    couplet.setSize(windowWidth,windowHeight);
    dancetoucan.setSize(windowWidth,windowHeight);
    dancetoucan2.setSize(windowWidth,windowHeight);
    star.setSize(windowWidth,windowHeight);
    fin.setSize(windowWidth,windowHeight);

    sequencer.registerSequence({
        name : "my first sequence", 
        start : 1, 
        stop : 2, 
        onStart : function (event){
            trompette.show();
        }, 
        onStop : function (event){
            trompette.hide();
        },
        onStep : function (event){
           if(event.step == event.start+1){
            trompette.pointer = 1
           }
        }, 
        measure : 1, 
        steps : [1]
    });

       
    sequencer.registerSequence({
        name : "my second sequence", 
        start :3 , 
        stop : 6, 
        onStart : function (event){
            cymbale.show();
        }, 
        onStop : function (event){
            cymbale.hide();
        },
        onStep : function (event){
            cymbale.pointer ++;
            if(cymbale.pointer > 1){
                cymbale.pointer = 0;
            }
        }, 
        measure : 1, 
        steps : [1, 1+1/4, 1+3/4]
    });

     sequencer.registerSequence({
        name : "my third sequence", 
        start : 7, 
        stop : 8, 
        onStart : function (event){
            trompette2.show();
        }, 
        onStop : function (event){
            trompette2.hide();
        },
        onStep : function (event){
           if(event.step == event.start+1){
            trompette2.pointer = 1
           }
        }, 
        measure : 1, 
        steps : [1]
    });


    sequencer.registerSequence({
        name : "my fourth sequence", 
        start :9 , 
        stop : 12, 
        onStart : function (event){
            cymbale.show();
        }, 
        onStop : function (event){
            cymbale.hide();
        },
        onStep : function (event){
            cymbale.pointer ++;
            if(cymbale.pointer > 1){
                cymbale.pointer = 0;
            }
        }, 
        measure : 1, 
        steps : [1, 1+1/4, 1+3/4]
    });

      sequencer.registerSequence({
        name : "my fifth sequence", 
        start : 13, 
        stop : 14, 
        onStart : function (event){
            trompettetriple.show();
        }, 
        onStop : function (event){
            trompettetriple.hide();
        },
        onStep : function (event){
           if(event.step == event.start+1){
            trompettetriple.pointer = 1
           }
        }, 
        measure : 1, 
        steps : [1]
    });

        sequencer.registerSequence({
        name : "my sixth sequence", 
        start :15 , 
        stop : 18, 
        onStart : function (event){
            cymbaledouble.show();
        }, 
        onStop : function (event){
            cymbaledouble.hide();
        },
        onStep : function (event){
            cymbaledouble.pointer ++;
            if(cymbaledouble.pointer > 1){
                cymbaledouble.pointer = 0;
            }
        }, 
        measure : 1, 
        steps : [1, 1+1/4, 1+3/4]
    });
         sequencer.registerSequence({
        name : "my seventh sequence", 
        start : 19, 
        stop : 20, 
        onStart : function (event){
            trompettetriple2.show();
        }, 
        onStop : function (event){
            trompettetriple2.hide();
        },
        onStep : function (event){
           if(event.step == event.start+1){
            trompettetriple2.pointer = 1
           }
        }, 
        measure : 1, 
        steps : [1]
    });
        sequencer.registerSequence({
  name: "my eighth sequence", 
  start: 21, 
  stop: 22, 
  onStart: function (event) {
    trompetteface.pointer = 0;
    trompetteface.show();
  }, 
  onStop: function (event) {
    trompetteface.hide();
  },
  onStep: function (event) {
    trompetteface.pointer++;
    if (trompetteface.pointer >= 6) {
      trompetteface.pointer = 0;
    }
  },
   measure: 1,
  steps: [1, 1 + 1/3, 1 + 2/3]
});


    sequencer.registerSequence({
  name : "my ninth sequence", 
  start : 23, 
  stop : 24, 
  onStart : function (event){
    trompette.pointer = 0;
    trompette.show();
  }, 
  onStop : function (event){
    trompette.hide();
  },
  onStep : function (event){
    trompette.pointer++;
    if(trompette.pointer >= 2){
      trompette.pointer = 0;
    }
  }, 
  measure : 1, 
  steps : [1]
});

       
    sequencer.registerSequence({
        name : "my tenth sequence", 
        start :24 , 
        stop : 27, 
        onStart : function (event){
            cymbale.show();
        }, 
        onStop : function (event){
            cymbale.hide();
        },
        onStep : function (event){
            cymbale.pointer ++;
            if(cymbale.pointer > 1){
                cymbale.pointer = 0;
            }
        }, 
        measure : 1, 
        steps : [1, 1+1/4, 1+3/4]
    });

    sequencer.registerSequence({
  name : "my eleventh sequence", 
  start : 28, 
  stop : 29, 
  onStart : function (event){
    trompette2.pointer = 0;
    trompette2.show();
  }, 
  onStop : function (event){
    trompette2.hide();
  },
  onStep : function (event){
    trompette2.pointer++;
    if(trompette2.pointer >= 2){
      trompette2.pointer = 0;
    }
  }, 
  measure : 1, 
  steps : [1]
});



    sequencer.registerSequence({
        name : "my twelfth sequence", 
        start :30 , 
        stop : 33, 
        onStart : function (event){
            cymbale.show();
        }, 
        onStop : function (event){
            cymbale.hide();
        },
        onStep : function (event){
            cymbale.pointer ++;
            if(cymbale.pointer > 1){
                cymbale.pointer = 0;
            }
        }, 
        measure : 1, 
        steps : [1, 1+1/4, 1+3/4]
    });
sequencer.registerSequence({
  name : "my thirteenth sequence", 
  start : 34, 
  stop : 35, 
  onStart : function (event){
    trompettetriple.pointer = 0;
    trompettetriple.show();
  }, 
  onStop : function (event){
    trompettetriple.hide();
  },
  onStep : function (event){
    trompettetriple.pointer++;
    if(trompettetriple.pointer >= 2){
      trompettetriple.pointer = 0;
    }
  }, 
  measure : 1, 
  steps : [1]
});

        sequencer.registerSequence({
        name : "my fourteenth  sequence", 
        start :36 , 
        stop : 39, 
        onStart : function (event){
            cymbale.show();
        }, 
        onStop : function (event){
            cymbale.hide();
        },
        onStep : function (event){
            cymbale.pointer ++;
            if(cymbale.pointer > 1){
                cymbale.pointer = 0;
            }
        }, 
        measure : 1, 
        steps : [1, 1+1/4, 1+3/4]
    });


     sequencer.registerSequence({
        name : "my fifteenth sequence", 
        start :40 , 
        stop :45 , 
        onStart : function (event){
            oeuf.show();
        }, 
        onStop : function (event){
            oeuf.hide();
        },
        onStep : function (event){
            oeuf.pointer ++;
            
        }, 
        measure : 1, 
        steps : [1]
    });
let marchePointer = 1;
let marcheMeasureCounter = 0;
const maxMarchePointer = 30; 

sequencer.registerSequence({
  name: "marche dynamique",
  start: 45,
  stop: 114, // fin non incluse
  onStart: function(event) {
    marchePointer = 1;
    marcheMeasureCounter = 0;
    marchedebut.pointer = marchePointer;
    marchedebut.show();
  },
  onStop: function(event) {
    marchedebut.hide();
  },
  onStep: function(event) {
    marcheMeasureCounter++;

   
    if (marchePointer >= 1 && marchePointer < 15) {
      const interval = 43 / 14;
      if (marcheMeasureCounter >= (marchePointer - 1) * interval) {
        marchePointer++;
      }
    }
   
    else if (marchePointer >= 15 && marchePointer < 20) {
      const phase2Start = 43;
      if (marcheMeasureCounter >= phase2Start + (marchePointer - 15)) {
        marchePointer++;
      }
    }
    
    else if (marchePointer >= 20 && marchePointer < 25) {
      const phase3Start = 48;
      const interval = 3;
      if (marcheMeasureCounter >= phase3Start + (marchePointer - 20) * interval) {
        marchePointer++;
      }
    }
   
    else if (marchePointer === 25 && marcheMeasureCounter >= 63) {
      marchePointer++;
    } else if (marchePointer === 26 && marcheMeasureCounter >= 71) {
      marchePointer++;
    } else if (marchePointer === 27 && marcheMeasureCounter >= 80) {
      marchePointer++;
    }
     else if (marchePointer === 28 && marcheMeasureCounter >= 90) {
      marchePointer++;
    } else if (marchePointer === 29 && marcheMeasureCounter >= 101) {
      marchePointer++;
    } else if (marchePointer === 30 && marcheMeasureCounter >= 112) {
      marchePointer++;
    }
    
    if (marchePointer > maxMarchePointer) {
      marchePointer = maxMarchePointer;
    }

    marchedebut.pointer = marchePointer;

    
    console.log("Mesure :", marcheMeasureCounter, "→ md", marchePointer);
  },
  measure: 1,
  steps: [1]
});






sequencer.registerSequence({
  name: "danceuse sequence",
  start: 114,
  stop: 155,
  onStart: function (event) {
    danceuse.pointer = 0;
    danceuse.show();
  },
  onStop: function (event) {
    danceuse.hide();
  },
  onStep: function (event) {
    danceuse.pointer++;
    if (danceuse.pointer > 1) {
      danceuse.pointer = 0;
    }
  },
  measure: 1,
  steps: [1, 1.8] // Un bon rythme intermédiaire
});

sequencer.registerSequence({
  name: "danceuse2 sequence",
  start: 155,
  stop: 190,
  onStart: function (event) {
    danceuse2.pointer = 0;
    danceuse2.show();
  },
  onStop: function (event) {
    danceuse2.hide();
  },
  onStep: function (event) {
    danceuse2.pointer++;
    if (danceuse2.pointer > 1) {
      danceuse2.pointer = 0;
    }
  },
  measure: 1,
  steps: [1, 1.8] // Un bon rythme intermédiaire
});
  sequencer.registerSequence({
        name : "my refrain sequence", 
        start : 206, 
        stop : 207, 
        onStart : function (event){
            trompette.show();
        }, 
        onStop : function (event){
            trompette.hide();
        },
        onStep : function (event){
           if(event.step == event.start+1){
            trompette.pointer = 1
           }
        }, 
        measure : 1, 
        steps : [1]
    });

       
    sequencer.registerSequence({
        name : "my refrain2 sequence", 
        start :208 , 
        stop : 211, 
        onStart : function (event){
            cymbale.show();
        }, 
        onStop : function (event){
            cymbale.hide();
        },
        onStep : function (event){
            cymbale.pointer ++;
            if(cymbale.pointer > 1){
                cymbale.pointer = 0;
            }
        }, 
        measure : 1, 
        steps : [1, 1+1/4, 1+3/4]
    });

     sequencer.registerSequence({
        name : "my refrain3 sequence", 
        start : 212, 
        stop : 213, 
        onStart : function (event){
            trompette2.show();
        }, 
        onStop : function (event){
            trompette2.hide();
        },
        onStep : function (event){
           if(event.step == event.start+1){
            trompette2.pointer = 1
           }
        }, 
        measure : 1, 
        steps : [1]
    });


    sequencer.registerSequence({
        name : "my refrain4 sequence", 
        start :214, 
        stop : 217, 
        onStart : function (event){
            cymbale.show();
        }, 
        onStop : function (event){
            cymbale.hide();
        },
        onStep : function (event){
            cymbale.pointer ++;
            if(cymbale.pointer > 1){
                cymbale.pointer = 0;
            }
        }, 
        measure : 1, 
        steps : [1, 1+1/4, 1+3/4]
    });

      sequencer.registerSequence({
        name : "my refrain5 sequence", 
        start : 218, 
        stop : 219, 
        onStart : function (event){
            trompettetriple.show();
        }, 
        onStop : function (event){
            trompettetriple.hide();
        },
        onStep : function (event){
           if(event.step == event.start+1){
            trompettetriple.pointer = 1
           }
        }, 
        measure : 1, 
        steps : [1]
    });

        sequencer.registerSequence({
        name : "my refrain6 sequence", 
        start :220 , 
        stop : 223, 
        onStart : function (event){
            cymbaledouble.show();
        }, 
        onStop : function (event){
            cymbaledouble.hide();
        },
        onStep : function (event){
            cymbaledouble.pointer ++;
            if(cymbaledouble.pointer > 1){
                cymbaledouble.pointer = 0;
            }
        }, 
        measure : 1, 
        steps : [1, 1+1/4, 1+3/4]
    });
         sequencer.registerSequence({
        name : "my refrain7 sequence", 
        start :224, 
        stop : 225, 
        onStart : function (event){
            trompettetriple2.show();
        }, 
        onStop : function (event){
            trompettetriple2.hide();
        },
        onStep : function (event){
           if(event.step == event.start+1){
            trompettetriple2.pointer = 1
           }
        }, 
        measure : 1, 
        steps : [1]
    });
       sequencer.registerSequence({
  name: "my refrain8 sequence", 
  start: 226, 
  stop: 227, 
  onStart: function (event) {
    trompetteface.pointer = 0;
    trompetteface.show();
  }, 
  onStop: function (event) {
    trompetteface.hide();
  },
  onStep: function (event) {
    trompetteface.pointer++;
    if (trompetteface.pointer >= 6) {
      trompetteface.pointer = 0;
    }
  },
   measure: 1,
  steps: [1, 1 + 1/3, 1 + 2/3]
});



    sequencer.registerSequence({
  name : "my refrain9 sequence", 
  start : 228, 
  stop : 229, 
  onStart : function (event){
    trompette.pointer = 0;
    trompette.show();
  }, 
  onStop : function (event){
    trompette.hide();
  },
  onStep : function (event){
    trompette.pointer++;
    if(trompette.pointer >= 2){
      trompette.pointer = 0;
    }
  }, 
  measure : 1, 
  steps : [1]
});

       
    sequencer.registerSequence({
        name : "my refrain10 sequence", 
        start :230 , 
        stop : 233, 
        onStart : function (event){
            cymbale.show();
        }, 
        onStop : function (event){
            cymbale.hide();
        },
        onStep : function (event){
            cymbale.pointer ++;
            if(cymbale.pointer > 1){
                cymbale.pointer = 0;
            }
        }, 
        measure : 1, 
        steps : [1, 1+1/4, 1+3/4]
    });

    sequencer.registerSequence({
  name : "my refrain11 sequence", 
  start : 234, 
  stop : 235, 
  onStart : function (event){
    trompette2.pointer = 0;
    trompette2.show();
  }, 
  onStop : function (event){
    trompette2.hide();
  },
  onStep : function (event){
    trompette2.pointer++;
    if(trompette2.pointer >= 2){
      trompette2.pointer = 0;
    }
  }, 
  measure : 1, 
  steps : [1]
});



    sequencer.registerSequence({
        name : "my refrain12 sequence", 
        start :236 , 
        stop : 239, 
        onStart : function (event){
            cymbale.show();
        }, 
        onStop : function (event){
            cymbale.hide();
        },
        onStep : function (event){
            cymbale.pointer ++;
            if(cymbale.pointer > 1){
                cymbale.pointer = 0;
            }
        }, 
        measure : 1, 
        steps : [1, 1+1/4, 1+3/4]
    });
sequencer.registerSequence({
  name : "my refrain13 sequence", 
  start : 240, 
  stop : 241, 
  onStart : function (event){
    trompettetriple.pointer = 0;
    trompettetriple.show();
  }, 
  onStop : function (event){
    trompettetriple.hide();
  },
  onStep : function (event){
    trompettetriple.pointer++;
    if(trompettetriple.pointer >= 2){
      trompettetriple.pointer = 0;
    }
  }, 
  measure : 1, 
  steps : [1]
});

        sequencer.registerSequence({
        name : "my refrain14  sequence", 
        start :242 , 
        stop : 245, 
        onStart : function (event){
            cymbale.show();
        }, 
        onStop : function (event){
            cymbale.hide();
        },
        onStep : function (event){
            cymbale.pointer ++;
            if(cymbale.pointer > 1){
                cymbale.pointer = 0;
            }
        }, 
        measure : 1, 
        steps : [1, 1+1/4, 1+3/4]
    });
 let coupletStepCounter = 0;

sequencer.registerSequence({
  name : "my couplet sequence", 
  start : 246,
  stop : 313,
  onStart : function (event) {
    couplet.pointer = 0;
    coupletStepCounter = 0;
    couplet.show();
  },
  onStop : function (event) {
    couplet.hide();
  },
  onStep : function (event) {
    coupletStepCounter++;

   
    const totalMeasures = 68;
    const totalImages = 30;

    
    let currentFrame = Math.floor((coupletStepCounter / totalMeasures) * totalImages);

    if (currentFrame >= totalImages) {
      currentFrame = totalImages - 1; 
    }

    couplet.pointer = currentFrame;

    console.log("Mesure", coupletStepCounter, "→ Image", couplet.pointer);
  },
  measure: 1,
  steps: [1]
});
sequencer.registerSequence({
  name: "dancetoucan sequence",
  start: 314,
  stop: 350,
  onStart: function (event) {
    dancetoucan.pointer = 0;
    dancetoucan.show();
  },
  onStop: function (event) {
    dancetoucan.hide();
  },
  onStep: function (event) {
    dancetoucan.pointer++;
    if (dancetoucan.pointer > 1) {
      dancetoucan.pointer = 0;
    }
  },
  measure: 1,
  steps: [1, 1.8] 
});
sequencer.registerSequence({
  name: "dancetoucan2 sequence",
  start: 351,
  stop: 430,
  onStart: function (event) {
    dancetoucan2.pointer = 0;
    dancetoucan2.show();
  },
  onStop: function (event) {
    dancetoucan2.hide();
  },
  onStep: function (event) {
    dancetoucan2.pointer++;
    if (dancetoucan2.pointer > 1) {
      dancetoucan2.pointer = 0;
    }
  },
  measure: 1,
  steps: [1, 1.8] 
});

      sequencer.registerSequence({
        name : "my star  sequence", 
        start :190 , 
        stop : 206, 
        onStart : function (event){
            star.show();
        }, 
        onStop : function (event){
            star.hide();
        },
        onStep : function (event){
            star.pointer ++;
            if(star.pointer > 1){
                star.pointer = 0;
            }
        }, 
        measure : 1, 
        steps : [1, 1+1/4, 1+3/4]
    });
sequencer.registerSequence({
  name: "fin sequence",
  start: 430,
  stop: 500,
  onStart: function (event) {
    fin.pointer = 0;
    fin.show();
  },
  onStop: function (event) {
    fin.hide();
  },
  onStep: function (event) {
    fin.pointer++;
    if (fin.pointer > 1) {
      fin.pointer = 0;
    }
  },
  measure: 1,
  steps: [1, 1.8] 
});


}

function draw(){
    sequencer.update();
    background(3, 0, 131);
    if (trompette.visible) {
        trompette.display();
    } 

    if (trompette2.visible) {
        trompette2.display();
    }

    if (trompettetriple.visible) {
        trompettetriple.display();
    }

    if (trompettetriple2.visible) {
        trompettetriple2.display();
    }
    if (trompetteface.visible) {
        trompetteface.display();
    } 

    if (oeuf.visible) {
        oeuf.display();
    }

     if (cymbale.visible) {
        cymbale.display();
    }
    if (cymbaledouble.visible) {
        cymbaledouble.display();
    }
    if (marchedebut.visible) {
        marchedebut.display();
    }
     if (danceuse.visible) {
        danceuse.display();
    }
     if (danceuse2.visible) {
        danceuse2.display();
    }
    if (couplet.visible) {
        couplet.display();
    }
    if (dancetoucan.visible) {
        dancetoucan.display();
    }
    if (dancetoucan2.visible) {
        dancetoucan2.display();
    }
      if (star.visible) {
        star.display();
    }
     if (fin.visible) {
        fin.display();
    }
}