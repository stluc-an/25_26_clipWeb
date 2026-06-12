// Make Your Bed - Lea Lejeune
// BPM : 135

let BPM = 120;
let audioPath = "assets/audio/Made your bed.mp3";
let sequencer;
let anim;
let ticket;

function setup() {
  createCanvas(windowWidth, windowHeight);
  sequencer = new Sequencer(audioPath, BPM, false);
  
  ticket = new Animator(1, 2, "./assets/images/Ticket_D'intro+album.png");
  ticket.setSize(width, height);
  ticket.setPosition(0, height);
  anim = new Animator(1, 1002, "./assets/images/clipweb-lea-frames/monAnim__imgNum_.jpg"); 
  anim.setSize(width, height);

  sequencer.registerSequence({
    name: "ticket",
    start: 1,
    stop:20,
    onStart: function() { 
      ticket.show(); 
    },
    onStop: function() {
        ticket.hide(); 
    },
    measure: 1,
    steps: [1]
  });


  sequencer.registerSequence({
    name: "start",
    start: 21,
    stop:400,
    onStart: function() { 
      anim.show(); 
    },
    onStop: function() {
        anim.hide(); 
    },
    onStep: function() {
        anim.next();
    },
    measure: 1,
    steps: [1, 1+1/4, 1+2/4, 1+3/4]
  });

}

function draw() {
  background(0);
  sequencer.update();
  if(ticket.visible){
    ticket.setPosition(ticket.x, ticket.y-2);
    ticket.display();
  }
  if(anim.visible){
    anim.display();
  }
}
