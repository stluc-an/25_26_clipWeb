/*----------------------------------------*\
  23_24_AN1_clipWeb - main.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2024-02-23 00:24:49
  @Last Modified time: 2024-02-23 08:58:36
\*----------------------------------------*/
let BPM = 100;
let audioPath = "assets/audio/1404100_falter-demo.mp3";
let sequencer;

let titre;
let pose;
let lesdeux;
let regardfem;
let standm;
let standf;
let dame;
let man;
let wom;
let rose;
let bleu;
let mauve;
let orange;
let rbmo;
let adm;
let danse;
let admi;
let every;
let ever;
let eve;
let ev;
let e;
let v;
let h;
let handtouch;
let electric;
let color;
let kiss;


function setup() {
    createCanvas(windowWidth, windowHeight);
    sequencer = new Sequencer(audioPath, BPM, false);  
             

    titre = new Animator(3, 1, "./assets/images/titre/titre_imgNum_.jpg");
    pose = new Animator(19, 1, "./assets/images/figurant/pose_imgNum_.jpg");
    lesdeux = new Animator(14, 1, "./assets/images/lesdeux/b_imgNum_.jpg");
    regardfem = new Animator(5, 1, "./assets/images/regardf/f_imgNum_.jpg");
    standm = new Animator(14, 1, "./assets/images/droitm/m_imgNum_.jpg");
    standf = new Animator(7, 1, "./assets/images/droitef/f_imgNum_.jpg");
    dame = new Animator(18, 1, "./assets/images/dansef/danse_imgNum_.jpg");
    man = new Animator(18, 1, "./assets/images/man/standing_imgNum_.jpg");
    wom = new Animator(17, 1, "./assets/images/wom/standing_imgNum_.jpg");
    rose = new Animator(5, 1, "./assets/images/deplacementrose/rose_imgNum_.jpg");
    bleu = new Animator(5, 1, "./assets/images/deplacementbleu/bleu_imgNum_.jpg");
    mauve = new Animator(5, 1, "./assets/images/deplacementmauve/mauve_imgNum_.jpg");
    orange = new Animator(4, 1, "./assets/images/deplacementorange/orange_imgNum_.jpg");
    rbmo = new Animator(5, 1, "./assets/images/deplacementrbmo/rbmo_imgNum_.jpg");
    adm = new Animator(6, 1, "./assets/images/admiration/adm_imgNum_.jpg");
    danse = new Animator(12, 1, "./assets/images/dansefdeux/danse_imgNum_.jpg");
    admi = new Animator(6, 1, "./assets/images/admirationb/adm_imgNum_.jpg");
    every = new Animator(6, 1, "./assets/images/everybody/d_imgNum_.jpg");
    ever = new Animator(6, 1, "./assets/images/everybodya/d_imgNum_.jpg");
    eve = new Animator(3, 1, "./assets/images/everybodyc/d_imgNum_.jpg");
    ev = new Animator(3, 1, "./assets/images/everybodyd/d_imgNum_.jpg");
    e = new Animator(3, 1, "./assets/images/everybodye/d_imgNum_.jpg");
    v = new Animator(3, 1, "./assets/images/everybodyf/d_imgNum_.jpg");
    h = new Animator(5, 1, "./assets/images/heels/h_imgNum_.jpg");
    handtouch = new Animator(6, 1, "./assets/images/handtouching/hand_imgNum_.jpg");
    electric = new Animator(3, 1, "./assets/images/handelectric/hand_imgNum_.jpg");
    color = new Animator(5, 1, "./assets/images/handcolor/hand_imgNum_.jpg");
    kiss = new Animator(7, 1, "./assets/images/kiss/kiss_imgNum_.jpg");

    titre.setSize(windowWidth, windowHeight);
    pose.setSize(windowWidth, windowHeight);
    lesdeux.setSize(windowWidth, windowHeight);
    regardfem.setSize(windowWidth, windowHeight);
    standm.setSize(windowWidth, windowHeight);
    standf.setSize(windowWidth, windowHeight);
    dame.setSize(windowWidth, windowHeight);
    man.setSize(windowWidth, windowHeight);
    wom.setSize(windowWidth, windowHeight);
    rose.setSize(windowWidth, windowHeight);
    bleu.setSize(windowWidth, windowHeight);
    mauve.setSize(windowWidth, windowHeight);
    orange.setSize(windowWidth, windowHeight);
    rbmo.setSize(windowWidth, windowHeight);
    adm.setSize(windowWidth, windowHeight);
    danse.setSize(windowWidth, windowHeight);
    admi.setSize(windowWidth, windowHeight);
    every.setSize(windowWidth, windowHeight);
    ever.setSize(windowWidth, windowHeight);
    eve.setSize(windowWidth, windowHeight);
    ev.setSize(windowWidth, windowHeight);
    e.setSize(windowWidth, windowHeight);
    v.setSize(windowWidth, windowHeight);
    h.setSize(windowWidth, windowHeight);
    handtouch.setSize(windowWidth, windowHeight);
    electric.setSize(windowWidth, windowHeight);
    color.setSize(windowWidth, windowHeight);
    kiss.setSize(windowWidth, windowHeight);

    sequencer.registerSequence({
        name: "my first sequence",
        start: 1,
        stop: 5,
        onStart: function (event) {
            titre.show();
        },
        onStop: function (event) {
            titre.hide();
        },
        onStep: function (event) {
            titre.setPointer(event.amount);
        },
        measure: 1,
        steps: [1]
    });

    sequencer.registerSequence({
        name: "my first first sequence",
        start: 6,
        stop: 12,
        onStart: function (event) {
            pose.show();
        },
        onStop: function (event) {
            pose.hide();
        },
        onStep: function (event) {
            pose.setPointer(event.amount);
        },
        measure: 1,
        steps: [1]
    });

    sequencer.registerSequence({
        name: "my second sequence",
        start: 13,
        stop: 15,
        onStart: function (event) {
            lesdeux.show();
        },
        onStop: function (event) {
            lesdeux.hide();
        },
        onStep: function (event) {
            lesdeux.setPointer(event.amount);
        },
        measure: 1,
        steps: [1]
    });

    sequencer.registerSequence({
        name: "my second second sequence",
        start: 16,
        stop: 16,
        onStart: function (event) {
            regardfem.show();
        },
        onStop: function (event) {
            regardfem.hide();
        },
        onStep: function (event) {
            regardfem.setPointer(event.amount);
        },
        measure: 1,
        steps: [1]
    });

    sequencer.registerSequence({
        name: "my third sequence",
        start: 17,
        stop: 32,
        onStart: function (event) {
            dame.show();
        },
        onStop: function (event) {
            dame.hide();
        },
        onStep: function (event) {
            dame.setPointer(event.amount);
        },
        measure: 1,
        steps: [1]
    });

    sequencer.registerSequence({
        name: "my third third sequence",
        start: 33,
        stop: 37,
        onStart: function (event) {
            man.show();
        },
        onStop: function (event) {
            man.hide();
        },
        onStep: function (event) {
            man.setPointer(event.amount);
        },
        measure: 1,
        steps: [1]
    });

    sequencer.registerSequence({
        name: "my third third third sequence",
        start: 38,
        stop: 42,
        onStart: function (event) {
            wom.show();
        },
        onStop: function (event) {
            wom.hide();
        },
        onStep: function (event) {
            wom.setPointer(event.amount);
        },
        measure: 1,
        steps: [1]
    });

    sequencer.registerSequence({
        name: "my third third third third sequence",
        start: 43,
        stop: 49,
        onStart: function (event) {
            rose.show();
        },
        onStop: function (event) {
            rose.hide();
        },
        onStep: function (event) {
            rose.setPointer(event.amount);
        },
        measure: 1,
        steps: [1]
    });

    sequencer.registerSequence({
        name: "my third third third third sequence",
        start: 50,
        stop: 55,
        onStart: function (event) {
            bleu.show();
        },
        onStop: function (event) {
            bleu.hide();
        },
        onStep: function (event) {
            bleu.setPointer(event.amount);
        },
        measure: 1,
        steps: [1]
    });

    sequencer.registerSequence({
        name: "mauve",
        start: 56,
        stop: 60,
        onStart: function (event) {
            mauve.show();
        },
        onStop: function (event) {
            mauve.hide();
        },
        onStep: function (event) {
            mauve.setPointer(event.amount);
        },
        measure: 1,
        steps: [1]
    });

    sequencer.registerSequence({
        name: "orange",
        start: 61,
        stop: 66,
        onStart: function (event) {
            orange.show();
        },
        onStop: function (event) {
            orange.hide();
        },
        onStep: function (event) {
            orange.setPointer(event.amount);
        },
        measure: 1,
        steps: [1]
    });

    sequencer.registerSequence({
        name: "rbmo",
        start: 67,
        stop: 73,
        onStart: function (event) {
            rbmo.show();
        },
        onStop: function (event) {
            rbmo.hide();
        },
        onStep: function (event) {
            rbmo.setPointer(event.amount);
        },
        measure: 1,
        steps: [1]
    });

    sequencer.registerSequence({
        name: "adm",
        start: 74,
        stop: 81,
        onStart: function (event) {
            adm.show();
        },
        onStop: function (event) {
            adm.hide();
        },
        onStep: function (event) {
            adm.setPointer(event.amount);
        },
        measure: 1,
        steps: [1]
    });

    sequencer.registerSequence({
        name: "danse",
        start: 82,
        stop: 97,
        onStart: function (event) {
            danse.show();
        },
        onStop: function (event) {
            danse.hide();
        },
        onStep: function (event) {
            danse.setPointer(event.amount);
        },
        measure: 1,
        steps: [1]
    });

    sequencer.registerSequence({
        name: "admi",
        start: 98,
        stop: 100,
        onStart: function (event) {
            admi.show();
        },
        onStop: function (event) {
            admi.hide();
        },
        onStep: function (event) {
            admi.setPointer(event.amount);
        },
        measure: 1,
        steps: [1]
    });

    sequencer.registerSequence({
        name: "every",
        start: 101,
        stop: 113,
        onStart: function (event) {
            every.show();
        },
        onStop: function (event) {
            every.hide();
        },
        onStep: function (event) {
            every.setPointer(event.amount);
        },
        measure: 1,
        steps: [1]
    });

    sequencer.registerSequence({
        name: "ever",
        start: 114,
        stop: 128,
        onStart: function (event) {
            ever.show();
        },
        onStop: function (event) {
            ever.hide();
        },
        onStep: function (event) {
            ever.setPointer(event.amount);
        },
        measure: 1,
        steps: [1]
    });

    sequencer.registerSequence({
        name: "eve",
        start: 129,
        stop: 132,
        onStart: function (event) {
            eve.show();
        },
        onStop: function (event) {
            eve.hide();
        },
        onStep: function (event) {
            eve.setPointer(event.amount);
        },
        measure: 1,
        steps: [1]
    });

    sequencer.registerSequence({
        name: "ev",
        start: 133,
        stop: 136,
        onStart: function (event) {
            ev.show();
        },
        onStop: function (event) {
            ev.hide();
        },
        onStep: function (event) {
            ev.setPointer(event.amount);
        },
        measure: 1,
        steps: [1]
    });

    sequencer.registerSequence({
        name: "e",
        start: 137,
        stop: 140,
        onStart: function (event) {
            e.show();
        },
        onStop: function (event) {
            e.hide();
        },
        onStep: function (event) {
            e.setPointer(event.amount);
        },
        measure: 1,
        steps: [1]
    });

    sequencer.registerSequence({
        name: "v",
        start: 141,
        stop: 145,
        onStart: function (event) {
            v.show();
        },
        onStop: function (event) {
            v.hide();
        },
        onStep: function (event) {
            v.setPointer(event.amount);
        },
        measure: 1,
        steps: [1]
    });

    sequencer.registerSequence({
        name: "heels",
        start: 146,
        stop: 152,
        onStart: function (event) {
            h.show();
        },
        onStop: function (event) {
            h.hide();
        },
        onStep: function (event) {
            h.setPointer(event.amount);
        },
        measure: 1,
        steps: [1]
    });

    sequencer.registerSequence({
        name: "handtouch",
        start: 153,
        stop: 160,
        onStart: function (event) {
            handtouch.show();
        },
        onStop: function (event) {
            handtouch.hide();
        },
        onStep: function (event) {
            handtouch.setPointer(event.amount);
        },
        measure: 1,
        steps: [1]
    });

    sequencer.registerSequence({
        name: "electric",
        start: 161,
        stop: 166,
        onStart: function (event) {
            electric.show();
        },
        onStop: function (event) {
            electric.hide();
        },
        onStep: function (event) {
            electric.setPointer(event.amount);
        },
        measure: 1,
        steps: [1]
    });

    sequencer.registerSequence({
        name: "color",
        start: 167,
        stop: 175,
        onStart: function (event) {
            color.show();
        },
        onStop: function (event) {
            color.hide();
        },
        onStep: function (event) {
            color.setPointer(event.amount);
        },
        measure: 1,
        steps: [1]
    });

    sequencer.registerSequence({
        name: "kiss",
        start: 176,
        stop: 207,
        onStart: function (event) {
            kiss.show();
        },
        onStop: function (event) {
            kiss.hide();
        },
        onStep: function (event) {
            kiss.setPointer(event.amount);
        },
        measure: 1,
        steps: [1]
    });
}




function draw() {
    sequencer.update();
    background(5, 0, 0);

    titre.setPointer(1 - millis() / 100 % 1);
    if (titre.visible) {
       titre.display();
    }

    pose.setPointer(1 - millis() / 100 % 1);
    if (pose.visible) {
       pose.display();
    }
    
    lesdeux.setPointer(1 - millis() / 1000 % 1);
    if (lesdeux.visible) {
        lesdeux.display();
    }
   
    regardfem.setPointer(1 - millis() / 1000 % 1);
    if (regardfem.visible) {
        regardfem.display();
    }

    standm.setPointer(1 - millis() / 100 % 1);
    if (standm.visible) {
       standm.display();
    }

    standf.setPointer(1 - millis() / 100 % 1);
    if (standf.visible) {
       standf.display();
    }

    dame.setPointer(1 - millis() / 1000 % 1);
    if (dame.visible) {
        dame.display();
    }

    man.setPointer(1 - millis() / 10 % 1);
    if (man.visible) {
        man.display();
    }

    wom.setPointer(1 - millis() / 10 % 1);
    if (wom.visible) {
        wom.display();
    }

    rose.setPointer(1 - millis() / 100 % 1);
    if (rose.visible) {
        rose.display();
    }

    bleu.setPointer(1 - millis() / 100 % 1);
    if (bleu.visible) {
        bleu.display();
    }

    mauve.setPointer(1 - millis() / 100 % 1);
    if (mauve.visible) {
        mauve.display();
    }

    orange.setPointer(1 - millis() / 100 % 1);
    if (orange.visible) {
        orange.display();
    }

    rbmo.setPointer(1 - millis() / 1000 % 1);
    if (rbmo.visible) {
        rbmo.display();
    }

    adm.setPointer(1 - millis() / 1000 % 1);
    if (adm.visible) {
        adm.display();
    }

    danse.setPointer(1 - millis() / 1000 % 1);
    if (danse.visible) {
        danse.display();
    }

    admi.setPointer(1 - millis() / 1000 % 1);
    if (admi.visible) {
        admi.display();
    }

    every.setPointer(1 - millis() / 1000 % 1);
    if (every.visible) {
        every.display();
    }

    ever.setPointer(1 - millis() / 1000 % 1);
    if (ever.visible) {
        ever.display();
    }

    eve.setPointer(1 - millis() / 100 % 1);
    if (eve.visible) {
        eve.display();
    }

    ev.setPointer(1 - millis() / 100 % 1);
    if (ev.visible) {
        ev.display();
    }

    e.setPointer(1 - millis() / 100 % 1);
    if (e.visible) {
        e.display();
    }

    v.setPointer(1 - millis() / 100 % 1);
    if (v.visible) {
        v.display();
    }

    h.setPointer(1 - millis() / 1000 % 1);
    if (h.visible) {
        h.display();
    }

    handtouch.setPointer(1 - millis() / 1000 % 1);
    if (handtouch.visible) {
        handtouch.display();
    }

    electric.setPointer(1 - millis() / 100 % 1);
    if (electric.visible) {
        electric.display();
    }

    color.setPointer(1 - millis() / 1000 % 1);
    if (color.visible) {
        color.display();
    }

    kiss.setPointer(1 - millis() / 1000 % 1);
    if (kiss.visible) {
        kiss.display();
    }
}