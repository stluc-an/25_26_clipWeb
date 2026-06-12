
function spinSequence(startStep){

	sequencer.registerSequence({
		name : "spinning sequence"+startStep, 
		start : startStep, 
		stop : startStep+8, 
		onStart : function (event){
			spinningPng.show();
		}, 
		onStop : function (event){
			spinningPng.hide();
			spinAngle = 0;
		},
		onStep : function (event){
		}, 
		measure : 1, 
		steps : [1]
	});

	sequencer.registerSequence({
		name : "spinAnim Rotate sequence"+startStep, 
		start : startStep, 
		stop : startStep+8, 
		onStep : function (event){
			spinAngle -= TWO_PI / 24;
		}, 
		measure : 1, 
		steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
	});


	sequencer.registerSequence({
		name : "left man"+startStep, 
		start : startStep+9, 
		stop : startStep+15, 
		onStart : function (event){
			spinningLeftMan.show();	
		}, 
		onStop : function (event){
			spinningLeftMan.hide();	
			spinningLeftMan.setPosition(0, -height);	
		},
		onStep : function (event){
			spinningLeftMan.setPosition(spinningLeftMan.x, spinningLeftMan.y-25);
		}, 
		measure : 1, 
		steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
	});


	sequencer.registerSequence({
		name : "right man"+startStep, 
		start : startStep+9, 
		stop : startStep+10, 
		onStart : function (event){
			spinningRightMan.show();
		}, 
		onStop : function (event){
			spinningRightMan.hide();
			spinningRightMan.setPosition(0, -height);
		},
		onStep : function (event){
			spinningRightMan.setPosition(spinningRightMan.x, spinningRightMan.y-25);
		}, 
		measure : 1, 
		steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
	});

	sequencer.registerSequence({
		name : "right man still"+startStep, 
		start : startStep+11, 
		stop : startStep+25, 
		onStart : function (event){
			spinningStill.show();
		}, 
		onStop : function (event){
			spinningStill.hide();
		},
		onStep : function (event){
			spinningStill.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
	});

	sequencer.registerSequence({
		name : "heart soul move"+startStep, 
		start : startStep+7, 
		stop : startStep+13, 
		onStart : function (event){
			spinningHeartSoul.show();
		}, 
		onStop : function (event){
			spinningHeartSoul.hide();
			spinningHeartSoul.setPosition(0, +height);
		},
		onStep : function (event){
			spinningHeartSoul.setPosition(spinningHeartSoul.x, spinningHeartSoul.y-25);

		}, 
		measure : 1, 
		steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
	});

	sequencer.registerSequence({
		name : "heart soul still"+startStep, 
		start : startStep+14, 
		stop : startStep+25, 
		onStart : function (event){
			heartStill.show();
		}, 
		onStop : function (event){
			heartStill.hide();
		},
		onStep : function (event){
			heartStill.next(true);
		}, 
		measure : 1, 
		steps : [1]
	});
}