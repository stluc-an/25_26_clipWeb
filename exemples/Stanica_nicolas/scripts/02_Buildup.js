

let CL_above
let CL_side
let CL_firefocus


let BU_shark
let BU_forest
let BU_reach
let BU_firefocus
let BU_MIX
let BU_TVflash


let StopBlackScreen


function initBuildup(){

    /*--CLIMAX_ABOVE11111111------------------------------------------------------------------*/

	CL_above = new Animator(1, 5,"./assets/images/2_buildup/above_imgNum_.jpg");

	sequencer.registerSequence({
		name : "CL_above", 
		start : 66, /*add 2*/
		stop : 81,  /*add 1*/
		onStart : function (event){
			setFullScreen(CL_above);
			CL_above.show();
		}, 
		onStop : function (event){
			CL_above.hide();
		},
		onStep : function (event){
			console.log(event.amount);
			CL_above.setPointer(event.amount);
		}, 
		measure : 1, 
		steps : [1]
	});
    /*--CLIMAX_SIDE11111111------------------------------------------------------------------*/

	CL_side = new Animator(1, 5,"./assets/images/2_buildup/side_imgNum_.jpg");

	sequencer.registerSequence({
		name : "CL_side", 
		start : 82, /*add 2*/
		stop : 92,  /*add 1*/
		onStart : function (event){
			setFullScreen(CL_side);
			CL_side.show();
		}, 
		onStop : function (event){
			CL_side.hide();
		},
		onStep : function (event){
			//console.log(event.amount);
			CL_side.setPointer(event.amount);
		}, 
		measure : 1, 
		steps : [1]
	});

    /*--CLIMAX_FIREFOCUS1111111------------------------------------------------------------------*/

	CL_firefocus = new Animator(1, 5,"./assets/images/2_buildup/CLFire_imgNum_.jpg");

	sequencer.registerSequence({
		name : "CL_firefocus", 
		start : 93, /*add 2*/
		stop : 97,  /*add 1*/
		onStart : function (event){
			setFullScreen(CL_firefocus);
			CL_firefocus.show();
		}, 
		onStop : function (event){
			CL_firefocus.hide();
		},
		onStep : function (event){
			//console.log(event.amount);
			CL_firefocus.setPointer(event.amount);
		}, 
		measure : 1, 
		steps : [1]
	});
    



    /*BU_shark2222222222222222------------------------------------------------------------------*/

	BU_shark = new Animator(1, 5,"./assets/images/2_buildup/shark_imgNum_.jpg");

	sequencer.registerSequence({
		name : "BU_shark", 
		start : 98, /*add 2*/
		stop : 105,  /*add 1*/
		onStart : function (event){
			setFullScreen(BU_shark);
			BU_shark.show();
		}, 
		onStop : function (event){
			BU_shark.hide();
		},
		onStep : function (event){
			//console.log(event.amount);
			BU_shark.setPointer(event.amount);
		}, 
		measure : 1, 
		steps : [1]
	});

    /*BU_forest2222222222222222------------------------------------------------------------------*/

	BU_forest = new Animator(1, 5,"./assets/images/2_buildup/BUforest_imgNum_.jpg");

	sequencer.registerSequence({
		name : "BU_forest", 
		start : 106, /*add 2*/
		stop : 113,  /*add 1*/
		onStart : function (event){
			setFullScreen(BU_forest);
			BU_forest.show();
		}, 
		onStop : function (event){
			BU_forest.hide();
		},
		onStep : function (event){
			//console.log(event.amount);
			BU_forest.setPointer(event.amount);
		}, 
		measure : 1, 
		steps : [1]
	});

    /*BU_reach2222222222222222------------------------------------------------------------------*/

	BU_reach = new Animator(1, 5,"./assets/images/2_buildup/reach_imgNum_.jpg");

	sequencer.registerSequence({
		name : "BU_reach", 
		start : 114, /*add 2*/
		stop : 119,  /*add 1*/
		onStart : function (event){
			setFullScreen(BU_reach);
			BU_reach.show();
		}, 
		onStop : function (event){
			BU_reach.hide();
		},
		onStep : function (event){
			//console.log(event.amount);
			BU_reach.setPointer(event.amount);
		}, 
		measure : 1, 
		steps : [1]
	});

    /*BU_firefocus2222222222222222------------------------------------------------------------------*/

	BU_firefocus = new Animator(1, 5,"./assets/images/2_buildup/FFocus_imgNum_.jpg");

	sequencer.registerSequence({
		name : "BU_firefocus", 
		start : 120, /*add 2*/
		stop : 121,  /*add 1*/
		onStart : function (event){
			setFullScreen(BU_firefocus);
			BU_firefocus.show();
		}, 
		onStop : function (event){
			BU_firefocus.hide();
		},
		onStep : function (event){
			//console.log(event.amount);
			BU_firefocus.setPointer(event.amount);
		}, 
		measure : 1, 
		steps : [1]
	});

    /*BU_MIX2222222222222222------------------------------------------------------------------*/

	
	BU_MIX = new Animator(1, 9,"./assets/images/2_buildup/MIXXING/MIX_imgNum_.jpg");
	
	sequencer.registerSequence({
		name : "BU_MIX", 
		start : 122, /*add 2*/
		stop : 125,  /*add 1*/
		onStart : function (event){
			setFullScreen(BU_MIX);
			BU_MIX.show();
		}, 
		onStop : function (event){
			BU_MIX.hide();
		},
		onStep : function (event){
			//console.log(event.amount);
			BU_MIX.setPointer(event.amount);
		}, 
		measure : 1, 
		steps : [1]
	});

    /*BU_TVflash2222222222222222------------------------------------------------------------------*/

	BU_TVflash = new Animator(1, 4,"./assets/images/2_buildup/blank_imgNum_.jpg");

	sequencer.registerSequence({
		name : "BU_TVflash", 
		start : 126, /*add 2*/
		stop : 128,  /*add 1*/
		onStart : function (event){
			setFullScreen(BU_TVflash);
			BU_TVflash.show();
		}, 
		onStop : function (event){
			BU_TVflash.hide();
		},
		onStep : function (event){
			//console.log(event.amount);
			BU_TVflash.setPointer(event.amount);
		}, 
		measure : 1, 
		steps : [1]
	});



	/*STOPBLACKSCREEN__2222222222222222------------------------------------------------------------------*/

	StopBlackScreen = new Animator(0, 1,"./assets/images/2_buildup/Z_blackscreen.jpg");

	sequencer.registerSequence({
		name : "StopBlackScreen", 
		start : 129, /*add 2*/
		stop : 129,  /*add 1*/
		onStart : function (event){
			setFullScreen(StopBlackScreen);
			StopBlackScreen.show();
		}, 
		onStop : function (event){
			StopBlackScreen.hide();
		},
		onStep : function (event){
			//console.log(event.amount);
			StopBlackScreen.setPointer(event.amount);
		}, 
		measure : 1, 
		steps : [1]
	});
}





function drawBuildup(){

    /*---CLIMAX_ABOVE1111111111111--------------------------------------------------*/
	
	CL_above.setPointer(millis()/900 % 1);

	if(CL_above.visible){
        CL_above.display();
	}

    /*---CL_side11111111111111111--------------------------------------------------*/
	
	CL_side.setPointer(millis()/900 % 1);

	if(CL_side.visible){
        CL_side.display();
	}

    /*---CL_firefocus1111111111111111--------------------------------------------------*/
	
	CL_firefocus.setPointer(millis()/400 % 1);

	if(CL_firefocus.visible){
        CL_firefocus.display();
	}




    /*---BU_SHARK2222222222222--------------------------------------------------*/
	
	BU_shark.setPointer(millis()/700 % 1);

	if(BU_shark.visible){
        BU_shark.display();
	}

    /*---BU_forest2222222222222--------------------------------------------------*/
	
	BU_forest.setPointer(millis()/700 % 1);

	if(BU_forest.visible){
        BU_forest.display();
	}

    /*---BU_reach2222222222222--------------------------------------------------*/
	
	BU_reach.setPointer(millis()/350 % 1);

	if(BU_reach.visible){
        BU_reach.display();
	}

    /*---BU_firefocus2222222222222--------------------------------------------------*/
	
	BU_firefocus.setPointer(millis()/300 % 1);

	if(BU_firefocus.visible){
        BU_firefocus.display();
	}

    /*---BU_MIX2222222222222--------------------------------------------------*/
	
	BU_MIX.setPointer(millis()/600 % 1);

	if(BU_MIX.visible){
        BU_MIX.display();
	}

    /*---BU_TVflash2222222222222--------------------------------------------------*/
	
	BU_TVflash.setPointer(millis()/700 % 1);

	if(BU_TVflash.visible){
        BU_TVflash.display();
	}




	/*---STOPBLACKSCREEN2222222222222--------------------------------------------------*/
	
	StopBlackScreen.setPointer(millis()/1000 % 1);

	if(StopBlackScreen.visible){
        StopBlackScreen.display();
	}

}