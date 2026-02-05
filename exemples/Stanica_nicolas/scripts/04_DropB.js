
let DB_PICTURE
let DB_SKATE

let DB_KNEES
let DB_REACH
let DB_BITE



function initDropB(){

/*DB_PICTURE__1111111111111111111------------------------------------------------------------------*/

DB_PICTURE = new Animator(1, 5,"./assets/images/4_DropB/picture_imgNum_.jpg");
//console.log(BPM);
sequencer.registerSequence({
    name : "DB_PICTURE", 
    start : 194, /*add 2*/
    stop : 212,  /*add 1*/
    onStart : function (event){
        setFullScreen(DB_PICTURE);
        DB_PICTURE.show();
    }, 
    onStop : function (event){
        DB_PICTURE.hide();
    },
    onStep : function (event){
        //console.log(event.amount);
        DB_PICTURE.setPointer(event.amount);
    }, 
    measure : 1, 
    steps : [1]
});

/*DB_BIRD__1111111111111111111------------------------------------------------------------------

DB_BIRD = new Animator(1,0,"./assets/images/memes/Capture d'écran 2025-03-21 125052.jpg");
//console.log(BPM);
sequencer.registerSequence({
    name : "DB_BIRD", 
    start : 204, 
    //add 2
    stop : 212,  
    //add 1
    onStart : function (event){
        setFullScreen(DB_BIRD);
        DB_BIRD.show();
    }, 
    onStop : function (event){
        DB_BIRD.hide();
    },
    onStep : function (event){
        //console.log(event.amount);
        DB_BIRD.setPointer(event.amount);
    }, 
    measure : 1, 
    steps : [1]
});*/

/*DB_SKATE__1111111111111111111------------------------------------------------------------------*/

DB_SKATE = new Animator(1, 5,"./assets/images/4_DropB/skate_imgNum_.jpg");
//console.log(BPM);
sequencer.registerSequence({
    name : "DB_SKATE", 
    start : 213, /*add 2*/
    stop : 228,  /*add 1*/
    onStart : function (event){
        setFullScreen(DB_SKATE);
        DB_SKATE.show();
    }, 
    onStop : function (event){
        DB_SKATE.hide();
    },
    onStep : function (event){
        //console.log(event.amount);
        DB_SKATE.setPointer(event.amount);
    }, 
    measure : 1, 
    steps : [1]
});

/*DB_SKY__1111111111111111111------------------------------------------------------------------

DB_SKY = new Animator(1,0,"./assets/images/tests/test5.png");
//console.log(BPM);
sequencer.registerSequence({
    name : "DB_SKY", 
    start : 220, /*add 2
    stop : 228,  /*add 1
    onStart : function (event){
        setFullScreen(DB_SKY);
        DB_SKY.show();
    }, 
    onStop : function (event){
        DB_SKY.hide();
    },
    onStep : function (event){
        //console.log(event.amount);
        DB_SKY.setPointer(event.amount);
    }, 
    measure : 1, 
    steps : [1]
});*/
   





/*DB_KNEES__222222222222222222222222------------------------------------------------------------------*/

DB_KNEES = new Animator(1, 5,"./assets/images/4_DropB/knees_imgNum_.jpg");
//console.log(BPM);
sequencer.registerSequence({
    name : "DB_KNEES", 
    start : 229, /*add 2*/
    stop : 241,  /*add 1*/
    onStart : function (event){
        setFullScreen(DB_KNEES);
        DB_KNEES.show();
    }, 
    onStop : function (event){
        DB_KNEES.hide();
    },
    onStep : function (event){
        console.log(event.amount);
        DB_KNEES.setPointer(event.amount);
    }, 
    measure : 1, 
    steps : [1]
});

/*DB_NOTICE__222222222222222222222222------------------------------------------------------------------

DB_NOTICE = new Animator(1,0,"./assets/images/memes/Capture d'écran 2025-05-08 232020.jpg");
//console.log(BPM);
sequencer.registerSequence({
    name : "DB_NOTICE", 
    start : 236, add 2
    stop : 241,  add 1
    onStart : function (event){
        setFullScreen(DB_NOTICE);
        DB_NOTICE.show();
    }, 
    onStop : function (event){
        DB_NOTICE.hide();
    },
    onStep : function (event){
        //console.log(event.amount);
        DB_NOTICE.setPointer(event.amount);
    }, 
    measure : 1, 
    steps : [1]
});*/

/*DB_REACH__222222222222222222222222------------------------------------------------------------------*/

DB_REACH = new Animator(1, 5,"./assets/images/4_DropB/reach_imgNum_.jpg");
//console.log(BPM);
sequencer.registerSequence({
    name : "DB_REACH", 
    start : 242, /*add 2*/
    stop : 249,  /*add 1*/
    onStart : function (event){
        setFullScreen(DB_REACH);
        DB_REACH.show();
    }, 
    onStop : function (event){
        DB_REACH.hide();
    },
    onStep : function (event){
        //console.log(event.amount);
        DB_REACH.setPointer(event.amount);
    }, 
    measure : 1, 
    steps : [1]
});

/*DB_HAND__222222222222222222222222------------------------------------------------------------------

DB_HAND = new Animator(1,0,"./assets/images/memes/omgnoway.jpg");
//console.log(BPM);
sequencer.registerSequence({
    name : "DB_HAND", 
    start : 248, add 2
    stop : 249,  add 1
    onStart : function (event){
        setFullScreen(DB_HAND);
        DB_HAND.show();
    }, 
    onStop : function (event){
        DB_HAND.hide();
    },
    onStep : function (event){
        //console.log(event.amount);
        DB_HAND.setPointer(event.amount);
    }, 
    measure : 1, 
    steps : [1]
});*/

/*DB_BITE__222222222222222222222222------------------------------------------------------------------*/

DB_BITE = new Animator(1, 9,"./assets/images/4_DropB/Mord_imgNum_.jpg");
//console.log(BPM);
sequencer.registerSequence({
    name : "DB_BITE", 
    start : 250, /*add 2*/
    stop : 257,  /*add 1*/
    onStart : function (event){
        setFullScreen(DB_BITE);
        DB_BITE.show();
    }, 
    onStop : function (event){
        DB_BITE.hide();
    },
    onStep : function (event){
        //console.log(event.amount);
        DB_BITE.setPointer(event.amount);
    }, 
    measure : 1, 
    steps : [1]
});



}





function drawDropB(){

/*---DB_PICTURE__111111111111111111111--------------------------------------------------*/
	
DB_PICTURE.setPointer(millis()/350 % 1);
//console.log(BPM);

if(DB_PICTURE.visible){
    DB_PICTURE.display();
}

/*---DB_BIRD__111111111111111111111--------------------------------------------------
	
DB_BIRD.setPointer(1 - millis()/1000 % 1);
//console.log(BPM);

if(DB_BIRD.visible){
    DB_BIRD.display();
}
*/

/*---DB_SKATE__111111111111111111111--------------------------------------------------*/
	
DB_SKATE.setPointer(millis()/350 % 1);
//console.log(BPM);

if(DB_SKATE.visible){
    DB_SKATE.display();
}

/*---DB_SKY__111111111111111111111--------------------------------------------------
	
DB_SKY.setPointer(1 - millis()/1000 % 1);
//console.log(BPM);

if(DB_SKY.visible){
    DB_SKY.display();
}
*/


/*---DB_KNEES__22222222222222222222222222222222222--------------------------------------------------*/
	
DB_KNEES.setPointer(millis()/350 % 1);
//console.log(BPM);

if(DB_KNEES.visible){
    DB_KNEES.display();
}

/*---DB_NOTICE__22222222222222222222222222222222222--------------------------------------------------
	
DB_NOTICE.setPointer(1 - millis()/1000 % 1);
//console.log(BPM);

if(DB_NOTICE.visible){
    DB_NOTICE.display();
}*/

/*---DB_REACH__22222222222222222222222222222222222--------------------------------------------------*/
	
DB_REACH.setPointer(millis()/380 % 1);
//console.log(BPM);

if(DB_REACH.visible){
    DB_REACH.display();
}

/*---DB_HAND__22222222222222222222222222222222222--------------------------------------------------
	
DB_HAND.setPointer(millis()/1000 % 1);
//console.log(BPM);

if(DB_HAND.visible){
    DB_HAND.display();
}*/

/*---DB_BITE__22222222222222222222222222222222222--------------------------------------------------*/
	
DB_BITE.setPointer(millis()/800 % 1);
//console.log(BPM);

if(DB_BITE.visible){
    DB_BITE.display();
}


}