

let OU_SCENE
let OU_CLOUDS
let OU_PUDDLE
let OU_SINK


let END_DROWN
let END_TEXT
let END_SHARK


function initOutro(){

/*OU_SCENE__-------------------------------------------------------------------------------------------*/

OU_SCENE = new Animator(5,1,"./assets/images/6_Outro/scene_imgNum_.jpg");
//console.log(BPM);
sequencer.registerSequence({
    name : "OU_SCENE", 
    start : 322, /*add 2*/
    stop : 340,  /*add 1*/
    onStart : function (event){
        setFullScreen(OU_SCENE);
        OU_SCENE.show();
    }, 
    onStop : function (event){
        OU_SCENE.hide();
    },
    onStep : function (event){
        //console.log(event.amount);
        OU_SCENE.setPointer(event.amount);
    }, 
    measure : 1, 
    steps : [1]
});

/*OU_CLOUDS__-----------------------------------------------------------------------------------------*/

OU_CLOUDS = new Animator(5,1,"./assets/images/6_Outro/clouds_imgNum_.png"); /*PNG!!!*/
//console.log(BPM);
sequencer.registerSequence({
    name : "OU_CLOUDS", 
    start : 341, /*add 2*/
    stop : 356,  /*add 1*/
    onStart : function (event){
        setFullScreen(OU_CLOUDS);
        OU_CLOUDS.show();
    }, 
    onStop : function (event){
        OU_CLOUDS.hide();
    },
    onStep : function (event){
        //console.log(event.amount);
        OU_CLOUDS.setPointer(event.amount);
    }, 
    measure : 1, 
    steps : [1]
});

/*OU_PUDDLE__----------------------------------------------------------------------------------------------------*/

OU_PUDDLE = new Animator(5,1,"./assets/images/6_Outro/puddle_imgNum_.jpg");
//console.log(BPM);
sequencer.registerSequence({
    name : "OU_PUDDLE", 
    start : 357, /*add 2*/
    stop : 369,  /*add 1*/
    onStart : function (event){
        setFullScreen(OU_PUDDLE);
        OU_PUDDLE.show();
    }, 
    onStop : function (event){
        OU_PUDDLE.hide();
    },
    onStep : function (event){
        //console.log(event.amount);
        OU_PUDDLE.setPointer(event.amount);
    }, 
    measure : 1, 
    steps : [1]
});

/*OU_SINK__----------------------------------------------------------------------------------------------------*/

OU_SINK = new Animator(5,1,"./assets/images/6_Outro/sink_imgNum_.jpg");
//console.log(BPM);
sequencer.registerSequence({
    name : "OU_SINK", 
    start : 370, /*add 2*/
    stop : 385,  /*add 1*/
    onStart : function (event){
        setFullScreen(OU_SINK);
        OU_SINK.show();
    }, 
    onStop : function (event){
        OU_SINK.hide();
    },
    onStep : function (event){
        //console.log(event.amount);
        OU_SINK.setPointer(event.amount);
    }, 
    measure : 1, 
    steps : [1]
});





/*END_DROWN__2222222222222222222222222222222------------------------------------------------------------------------------------*/

END_DROWN = new Animator(5,1,"./assets/images/7_Ending/drown_imgNum_.jpg");
//console.log(BPM);
sequencer.registerSequence({
    name : "END_DROWN", 
    start : 386, /*add 2*/
    stop : 401,  /*add 1*/
    onStart : function (event){
        setFullScreen(END_DROWN);
        END_DROWN.show();
    }, 
    onStop : function (event){
        END_DROWN.hide();
    },
    onStep : function (event){
        //console.log(event.amount);
        END_DROWN.setPointer(event.amount);
    }, 
    measure : 1, 
    steps : [1]
});

/*END_TEXT__2222222222222222222222222222222------------------------------------------------------------------------------------*/

END_TEXT = new Animator(5,1,"./assets/images/7_Ending/text_imgNum_.jpg");
console.log(BPM);
sequencer.registerSequence({
    name : "END_TEXT", 
    start : 402, /*add 2*/
    stop : 417,  /*add 1*/
    onStart : function (event){
        setFullScreen(END_TEXT);
        END_TEXT.show();
    }, 
    onStop : function (event){
        END_TEXT.hide();
    },
    onStep : function (event){
        //console.log(event.amount);
        END_TEXT.setPointer(event.amount);
    }, 
    measure : 1, 
    steps : [1]
});

/*END_SHARK__2222222222222222222222222222222------------------------------------------------------------------------------------*/

END_SHARK = new Animator(5,1,"./assets/images/7_Ending/sharks_imgNum_.jpg");
//console.log(BPM);
sequencer.registerSequence({
    name : "END_SHARK", 
    start : 418, /*add 2*/
    stop : 449,  /*add 1*/
    onStart : function (event){
        setFullScreen(END_SHARK);
        END_SHARK.show();
    }, 
    onStop : function (event){
        END_SHARK.hide();
    },
    onStep : function (event){
        //console.log(event.amount);
        END_SHARK.setPointer(event.amount);
    }, 
    measure : 1, 
    steps : [1]
});

}







function drawOutro(){

/*---OU_SCENE__1111111111111111111111--------------------------------------------------*/
	
OU_SCENE.setPointer(millis()/600 % 1);
//console.log(BPM);

if(OU_SCENE.visible){
    OU_SCENE.display();
}

/*---OU_CLOUDS__1111111111111111111111--------------------------------------------------*/
	
OU_CLOUDS.setPointer(millis()/600 % 1);
//console.log(BPM);

if(OU_CLOUDS.visible){
    OU_CLOUDS.display();
}

/*---OU_PUDDLE__1111111111111111111111--------------------------------------------------*/
	
OU_PUDDLE.setPointer(millis()/600 % 1);
//console.log(BPM);

if(OU_PUDDLE.visible){
    OU_PUDDLE.display();
}

/*---OU_SINK__1111111111111111111111--------------------------------------------------*/
	
OU_SINK.setPointer(millis()/700 % 1);
//console.log(BPM);

if(OU_SINK.visible){
    OU_SINK.display();
}






/*---END_DROWN__1111111111111111111111--------------------------------------------------*/
	
END_DROWN.setPointer(millis()/900 % 1);
//console.log(BPM);

if(END_DROWN.visible){
    END_DROWN.display();
    
}

/*---END_TEXT__1111111111111111111111--------------------------------------------------*/
	
END_TEXT.setPointer(millis()/900 % 1);
console.log(BPM);

if(END_TEXT.visible){
    END_TEXT.display();
    
}

/*---END_SHARK__1111111111111111111111--------------------------------------------------*/
	
END_SHARK.setPointer(millis()/900 % 1);
//console.log(BPM);

if(END_SHARK.visible){
    END_SHARK.display();
}


}