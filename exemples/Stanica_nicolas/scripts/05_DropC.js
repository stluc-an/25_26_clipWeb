

let KAL1
let KAL2
let KAL3
let DC_MIX


let DC_ROOM
let DC_FOREST
let DC_SHARK
let DC_REUNION


function initDropC(){

/*KAL1__1111111111111111111111111------------------------------------------------------------------*/

KAL1 = new Animator(9,1,"./assets/images/5_DropC/kal_imgNum_.jpg");
//console.log(BPM);
sequencer.registerSequence({
    name : "KAL1", 
    start : 258, /*add 2*/
    stop : 265,  /*add 1*/
    onStart : function (event){
        setFullScreen(KAL1);
        KAL1.show();
    }, 
    onStop : function (event){
        KAL1.hide();
    },
    onStep : function (event){
        //console.log(event.amount);
        KAL1.setPointer(event.amount);
    }, 
    measure : 1, 
    steps : [1]
});

/*KAL2__1111111111111111111111111------------------------------------------------------------------*/

KAL2 = new Animator(9,1,"./assets/images/5_DropC/2kal_imgNum_.jpg");
//console.log(BPM);
sequencer.registerSequence({
    name : "KAL2", 
    start : 266, /*add 2*/
    stop : 273,  /*add 1*/
    onStart : function (event){
        setFullScreen(KAL2);
        KAL2.show();
    }, 
    onStop : function (event){
        KAL2.hide();
    },
    onStep : function (event){
        //console.log(event.amount);
        KAL2.setPointer(event.amount);
    }, 
    measure : 1, 
    steps : [1]
});

/*KAL3__1111111111111111111111111------------------------------------------------------------------*/

KAL3 = new Animator(9,1,"./assets/images/5_DropC/kal_imgNum_.jpg");
//console.log(BPM);
sequencer.registerSequence({
    name : "KAL3", 
    start : 274, /*add 2*/
    stop : 281,  /*add 1*/
    onStart : function (event){
        setFullScreen(KAL3);
        KAL3.show();
    }, 
    onStop : function (event){
        KAL3.hide();
    },
    onStep : function (event){
        //console.log(event.amount);
        KAL3.setPointer(event.amount);
    }, 
    measure : 1, 
    steps : [1]
});

/*DC_MIX__1111111111111111111111111------------------------------------------------------------------*/

DC_MIX = new Animator(13,1,"./assets/images/5_DropC/MIXXING/mix_imgNum_.jpg");
//console.log(BPM);
sequencer.registerSequence({
    name : "DC_MIX", 
    start : 282, /*add 2*/
    stop : 287,  /*add 1*/
    onStart : function (event){
        setFullScreen(DC_MIX);
        DC_MIX.show();
    }, 
    onStop : function (event){
        DC_MIX.hide();
    },
    onStep : function (event){
        //console.log(event.amount);
        DC_MIX.setPointer(event.amount);
    }, 
    measure : 1, 
    steps : [1]
});





/*DC_ROOM__2222222222222222222222------------------------------------------------------------------*/

DC_ROOM = new Animator(5,1,"./assets/images/5_DropC/room_imgNum_.jpg");
//console.log(BPM);
sequencer.registerSequence({
    name : "DC_ROOM", 
    start : 290, /*add 2*/
    stop : 297,  /*add 1*/
    onStart : function (event){
        setFullScreen(DC_ROOM);
        DC_ROOM.show();
    }, 
    onStop : function (event){
        DC_ROOM.hide();
    },
    onStep : function (event){
        //console.log(event.amount);
        DC_ROOM.setPointer(event.amount);
    }, 
    measure : 1, 
    steps : [1]
});

/*DC_FOREST__2222222222222222222222------------------------------------------------------------------*/

DC_FOREST = new Animator(5,1,"./assets/images/5_DropC/forest_imgNum_.jpg");
//console.log(BPM);
sequencer.registerSequence({
    name : "DC_FOREST", 
    start : 298, /*add 2*/
    stop : 305,  /*add 1*/
    onStart : function (event){
        setFullScreen(DC_FOREST);
        DC_FOREST.show();
    }, 
    onStop : function (event){
        DC_FOREST.hide();
    },
    onStep : function (event){
        //console.log(event.amount);
        DC_FOREST.setPointer(event.amount);
    }, 
    measure : 1, 
    steps : [1]
});

/*DC_SHARK__2222222222222222222222------------------------------------------------------------------*/

DC_SHARK = new Animator(5,1,"./assets/images/5_DropC/shark_imgNum_.jpg");
//console.log(BPM);
sequencer.registerSequence({
    name : "DC_SHARK", 
    start : 306, /*add 2*/
    stop : 313,  /*add 1*/
    onStart : function (event){
        setFullScreen(DC_SHARK);
        DC_SHARK.show();
    }, 
    onStop : function (event){
        DC_SHARK.hide();
    },
    onStep : function (event){
        //console.log(event.amount);
        DC_SHARK.setPointer(event.amount);
    }, 
    measure : 1, 
    steps : [1]
});

/*DC_REUNION__2222222222222222222222------------------------------------------------------------------*/

DC_REUNION = new Animator(5,1,"./assets/images/5_DropC/reunion_imgNum_.jpg");
//console.log(BPM);
sequencer.registerSequence({
    name : "DC_REUNION", 
    start : 314, /*add 2*/
    stop : 321,  /*add 1*/
    onStart : function (event){
        setFullScreen(DC_REUNION);
        DC_REUNION.show();
    }, 
    onStop : function (event){
        DC_REUNION.hide();
    },
    onStep : function (event){
        //console.log(event.amount);
        DC_REUNION.setPointer(event.amount);
    }, 
    measure : 1, 
    steps : [1]
});


}






function drawDropC(){

/*---KAL1__1111111111111111111111--------------------------------------------------*/
	
KAL1.setPointer(1 - millis()/700 % 1);
//console.log(BPM);

if(KAL1.visible){
    KAL1.display();
}


/*---KAL2__1111111111111111111111--------------------------------------------------*/
	
KAL2.setPointer(1 - millis()/700 % 1);
//console.log(BPM);

if(KAL2.visible){
    KAL2.display();
}


/*---KAL3__1111111111111111111111--------------------------------------------------*/
	
KAL3.setPointer(millis()/700 % 1);
//console.log(BPM);

if(KAL3.visible){
    KAL3.display();
}

/*---DC_MIX__1111111111111111111111--------------------------------------------------*/
	
DC_MIX.setPointer(millis()/1050 % 1);
//console.log(BPM);

if(DC_MIX.visible){
    DC_MIX.display();
}





/*---DC_ROOM__1111111111111111111111--------------------------------------------------*/
	
DC_ROOM.setPointer(millis()/400 % 1);
//console.log(BPM);

if(DC_ROOM.visible){
    DC_ROOM.display();
}

/*---DC_FOREST__1111111111111111111111--------------------------------------------------*/
	
DC_FOREST.setPointer(millis()/400 % 1);
//console.log(BPM);

if(DC_FOREST.visible){
    DC_FOREST.display();
}

/*---DC_SHARK__1111111111111111111111--------------------------------------------------*/
	
DC_SHARK.setPointer(millis()/450 % 1);
//console.log(BPM);

if(DC_SHARK.visible){
    DC_SHARK.display();
}

/*---DC_REUNION__1111111111111111111111--------------------------------------------------*/
	
DC_REUNION.setPointer(millis()/500 % 1);
//console.log(BPM);

if(DC_REUNION.visible){
    DC_REUNION.display();
}

}