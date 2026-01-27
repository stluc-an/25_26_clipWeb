
let DA_ROOM
let DA_FORESTFIRE
let DA_HOUSEFIRE

let DA_SF1
let DA_SF2
let DA_PERSONFIRE

let STOP_STRESS


function initDropA(){

    /*DA_ROOM__1111111111111111111------------------------------------------------------------------*/

	DA_ROOM = new Animator(5,1,"./assets/images/3_DropA/room_imgNum_.jpg");

	sequencer.registerSequence({
		name : "DA_ROOM", 
		start : 130, /*add 2*/
		stop : 145,  /*add 1*/
		onStart : function (event){
			setFullScreen(DA_ROOM);
			DA_ROOM.show();
		}, 
		onStop : function (event){
			DA_ROOM.hide();
		},
		onStep : function (event){
			console.log(event.amount);
			DA_ROOM.setPointer(event.amount);
		}, 
		measure : 1, 
		steps : [1]
	});

    /*DA_FORESTFIRE__1111111111111111111------------------------------------------------------------------*/

	DA_FORESTFIRE = new Animator(5,1,"./assets/images/3_DropA/forest_imgNum_.jpg");
    
	sequencer.registerSequence({
		name : "DA_FORESTFIRE", 
		start : 146, /*add 2*/
		stop : 151,  /*add 1*/
		onStart : function (event){
			setFullScreen(DA_FORESTFIRE);
			DA_FORESTFIRE.show();
		}, 
		onStop : function (event){
			DA_FORESTFIRE.hide();
		},
		onStep : function (event){
			//console.log(event.amount);
			DA_FORESTFIRE.setPointer(event.amount);
		}, 
		measure : 1, 
		steps : [1]
	});

    /*DA_HOUSEFIRE__1111111111111111111------------------------------------------------------------------*/

	DA_HOUSEFIRE = new Animator(5,1,"./assets/images/3_DropA/house_imgNum_.jpg");
   
	sequencer.registerSequence({
		name : "DA_HOUSEFIRE", 
		start : 152, /*add 2*/
		stop : 161,  /*add 1*/
		onStart : function (event){
			setFullScreen(DA_HOUSEFIRE);
			DA_HOUSEFIRE.show();
		}, 
		onStop : function (event){
			DA_HOUSEFIRE.hide();
		},
		onStep : function (event){
			//console.log(event.amount);
			DA_HOUSEFIRE.setPointer(event.amount);
		}, 
		measure : 1, 
		steps : [1]
	});





    /*DA_SF1__22222222222222222222222------------------------------------------------------------------*/

	DA_SF1 = new Animator(5,1,"./assets/images/3_DropA/Abovesf_imgNum_.jpg");
    
	sequencer.registerSequence({
		name : "DA_SF1", 
		start : 162, /*add 2*/
		stop : 169,  /*add 1*/
		onStart : function (event){
			setFullScreen(DA_SF1);
			DA_SF1.show();
		}, 
		onStop : function (event){
			DA_SF1.hide();
		},
		onStep : function (event){
			//console.log(event.amount);
			DA_SF1.setPointer(event.amount);
		}, 
		measure : 1, 
		steps : [1]
	});

    /*DA_SF2__22222222222222222222222------------------------------------------------------------------*/

	DA_SF2 = new Animator(5,1,"./assets/images/3_DropA/Sidesf_imgNum_.jpg");
    
	sequencer.registerSequence({
		name : "DA_SF2", 
		start : 170, /*add 2*/
		stop : 177,  /*add 1*/
		onStart : function (event){
			setFullScreen(DA_SF2);
			DA_SF2.show();
		}, 
		onStop : function (event){
			DA_SF2.hide();
		},
		onStep : function (event){
			//console.log(event.amount);
			DA_SF2.setPointer(event.amount);
		}, 
		measure : 1, 
		steps : [1]
	});

    /*DA_PERSONFIRE__22222222222222222222222------------------------------------------------------------------*/

	DA_PERSONFIRE = new Animator(5,1,"./assets/images/3_DropA/personfire_imgNum_.jpg");
    
	sequencer.registerSequence({
		name : "DA_PERSONFIRE", 
		start : 178, /*add 2*/
		stop : 185,  /*add 1*/
		onStart : function (event){
			setFullScreen(DA_PERSONFIRE);
			DA_PERSONFIRE.show();
		}, 
		onStop : function (event){
			DA_PERSONFIRE.hide();
		},
		onStep : function (event){
			//console.log(event.amount);
			DA_PERSONFIRE.setPointer(event.amount);
		}, 
		measure : 1, 
		steps : [1]
	});





    /*STOP_STRESS__22222222222222222222222------------------------------------------------------------------*/

	STOP_STRESS = new Animator(4,1,"./assets/images/3_DropA/stress_imgNum_.jpg");
    //console.log(BPM);
	sequencer.registerSequence({
		name : "STOP_STRESS", 
		start : 186, /*add 2*/
		stop : 193,  /*add 1*/
		onStart : function (event){
			setFullScreen(STOP_STRESS);
			STOP_STRESS.show();
		}, 
		onStop : function (event){
			STOP_STRESS.hide();
		},
		onStep : function (event){
			//console.log(event.amount);
			STOP_STRESS.setPointer(event.amount);
		}, 
		measure : 1, 
		steps : [1]
	});


}






function drawDropA(){

    /*---DA_ROOM11111111111111111--------------------------------------------------*/
	
	DA_ROOM.setPointer(millis()/350 % 1);

	if(DA_ROOM.visible){
        DA_ROOM.display();
	}

    /*---DA_FORESTFIRE__11111111111111111--------------------------------------------------*/
	
	DA_FORESTFIRE.setPointer(millis()/350 % 1);

	if(DA_FORESTFIRE.visible){
        DA_FORESTFIRE.display();
	}

    /*---DA_HOUSEFIRE__11111111111111111--------------------------------------------------*/
	
	DA_HOUSEFIRE.setPointer(millis()/350 % 1);

	if(DA_HOUSEFIRE.visible){
        DA_HOUSEFIRE.display();
	}





     /*---DA_SF1__22222222222222222--------------------------------------------------*/
	
     DA_SF1.setPointer(millis()/500 % 1);

	if(DA_SF1.visible){
        DA_SF1.display();
	}

    /*---DA_SF2__22222222222222222222--------------------------------------------------*/
	
    DA_SF2.setPointer(millis()/500 % 1);
    //console.log(BPM);

	if(DA_SF2.visible){
        DA_SF2.display();
	}

    /*---DA_PERSONFIRE__22222222222222222222--------------------------------------------------*/
	
    DA_PERSONFIRE.setPointer(millis()/350 % 1);
    //console.log(BPM);

	if(DA_PERSONFIRE.visible){
        DA_PERSONFIRE.display();
	}




    
    /*---STOP_STRESS__22222222222222222222--------------------------------------------------*/
	
    STOP_STRESS.setPointer(millis()/290 % 1);
    //console.log(BPM);

	if(STOP_STRESS.visible){
        STOP_STRESS.display();
	}




}