

let Intro1_blank1;
let Intro1_text;
let Intro1_blank2;


let Intro2_appear;
let Intro2_zoom1;
let Intro2_zoom2;
let Intro2_inforest;


function initIntro(){
	/*--Intro1111111111111_blank1---------------------------------------------------------------------------------------------------------------------
										5,1,"./assets/images/tests/test_imgNum_.jpg"*/
	
    Intro1_blank1 = new Animator(1, 4,"./assets/images/1_intro/blank_imgNum_.jpg");

	sequencer.registerSequence({
		name : "Intro1_blank1", 
		start : 2, 
		stop : 9, 
		onStart : function (event){
			setFullScreen(Intro1_blank1);
			Intro1_blank1.show();
		}, 
		onStop : function (event){
			Intro1_blank1.hide();
		},
		onStep : function (event){
			console.log(event.amount);
			Intro1_blank1.setPointer(event.amount);
		}, 
		measure : 1, 
		steps : [1]
	});

    /*-Intro1111111111111111_text-------------------------------------------------------------------*/

	Intro1_text = new Animator(1, 4,"./assets/images/1_intro/text_imgNum_.jpg");

	sequencer.registerSequence({
		name : "Intro1_text", 
		start : 10, 
		stop : 25,
		onStart : function (event){
			setFullScreen(Intro1_text);
			Intro1_text.show();
		}, 
		onStop : function (event){
			Intro1_text.hide();
		},
		onStep : function (event){
			//console.log(event.amount);
			Intro1_text.setPointer(event.amount);
		}, 
		measure : 1, 
		steps : [1]
	});

	/*--Intro1111111111111111_blank2------------------------------------------------------------------*/

	Intro1_blank2 = new Animator(1, 4,"./assets/images/1_intro/blank_imgNum_.jpg");

	sequencer.registerSequence({
		name : "Intro1_blank2", 
		start : 26, 
		stop : 33, 
		onStart : function (event){
			setFullScreen(Intro1_blank2);
			Intro1_blank2.show();
		}, 
		onStop : function (event){
			Intro1_blank2.hide();
		},
		onStep : function (event){
			//console.log(event.amount);
			Intro1_blank2.setPointer(event.amount);
		}, 
		measure : 1, 
		steps : [1]
	});

	



	/*--Intro2222222222222222222222_appear------------------------------------------------------------------*/

	Intro2_appear = new Animator(1, 4,"./assets/images/1_intro/appear_imgNum_.jpg");

	sequencer.registerSequence({
		name : "Intro2_appear", 
		start : 34, 
		stop : 41, 
		onStart : function (event){
			setFullScreen(Intro2_appear);
			Intro2_appear.show();
		}, 
		onStop : function (event){
			Intro2_appear.hide();
		},
		onStep : function (event){
			//console.log(event.amount);
			Intro2_appear.setPointer(event.amount);
		}, 
		measure : 1, 
		steps : [1]
	});

	/*--Intro2_zoom1------------------------------------------------------------------*/

	Intro2_zoom1 = new Animator(1, 4,"./assets/images/1_intro/zoom1__imgNum_.jpg");

	sequencer.registerSequence({
		name : "Intro2_zoom1", 
		start : 42, /*add 2*/
		stop : 49,  /*add 1*/
		onStart : function (event){
			setFullScreen(Intro2_zoom1);
			Intro2_zoom1.show();
		}, 
		onStop : function (event){
			Intro2_zoom1.hide();
		},
		onStep : function (event){
			//console.log(event.amount);
			Intro2_zoom1.setPointer(event.amount);
		}, 
		measure : 1, 
		steps : [1]
	});

	/*--Intro2_zoom2------------------------------------------------------------------*/

	Intro2_zoom2 = new Animator(1, 4,"./assets/images/1_intro/zoom2__imgNum_.jpg");

	sequencer.registerSequence({
		name : "Intro2_zoom2", 
		start : 50, /*add 2*/
		stop : 57,  /*add 1*/
		onStart : function (event){
			setFullScreen(Intro2_zoom2);
			Intro2_zoom2.show();
		}, 
		onStop : function (event){
			Intro2_zoom2.hide();
		},
		onStep : function (event){
			//console.log(event.amount);
			Intro2_zoom2.setPointer(event.amount);
		}, 
		measure : 1, 
		steps : [1]
	});

	/*--Intro2_inforest------------------------------------------------------------------*/

	Intro2_inforest = new Animator(1, 4,"./assets/images/1_intro/Inforest_imgNum_.jpg");

	sequencer.registerSequence({
		name : "Intro2_inforest", 
		start : 58, /*add 2*/
		stop : 65,  /*add 1*/
		onStart : function (event){
			setFullScreen(Intro2_inforest);
			Intro2_inforest.show();
		}, 
		onStop : function (event){
			Intro2_inforest.hide();
		},
		onStep : function (event){
			//console.log(event.amount);
			Intro2_inforest.setPointer(event.amount);
		}, 
		measure : 1, 
		steps : [1]
	});
}





function drawIntro(){

	/*---Intro111111111111111111111_blank1--------------------------------------------------*/

    Intro1_blank1.setPointer(millis()/500 % 1);

	if(Intro1_blank1.visible){
	Intro1_blank1.display();
	}
    /*---Intro11111111111111111111111111111_text--------------------------------------------------*/

	Intro1_text.setPointer(millis()/500 % 1);

	if(Intro1_text.visible){
	Intro1_text.display();
	}

	/*---Intro1111111111111111111111111111111_blank2--------------------------------------------------*/
	
	Intro1_blank2.setPointer(millis()/500 % 1);

	if(Intro1_blank2.visible){
	Intro1_blank2.display();
	}



	/*---Intro22222222222222222222_appear--------------------------------------------------*/
	
	Intro2_appear.setPointer(millis()/500 % 1);

	if(Intro2_appear.visible){
	Intro2_appear.display();
	}

	/*---Intro2_zoom1--------------------------------------------------*/
	
	Intro2_zoom1.setPointer(millis()/500 % 1);

	if(Intro2_zoom1.visible){
	Intro2_zoom1.display();
	}

	/*---Intro2_zoom2--------------------------------------------------*/
	
	Intro2_zoom2.setPointer(millis()/500 % 1);

	if(Intro2_zoom2.visible){
	Intro2_zoom2.display();
	}

	/*---Intro2_inforest--------------------------------------------------*/
	
	Intro2_inforest.setPointer(millis()/500 % 1);

	if(Intro2_inforest.visible){
	Intro2_inforest.display();
	}
}