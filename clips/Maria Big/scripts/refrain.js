function refrainSequence(startStep){
	sequencer.registerSequence({
		name : "person whole" +startStep, 
		start : startStep, 
		stop : startStep+7, 
		onStart : function (event){
			smokePerson.show();
		}, 
		onStop : function (event){
			smokePerson.hide();
		}, 
				onStep : function (event){
			smokePerson.next(true);
		}, 

		measure : 1, 
		steps : [1, 1+1/2]
	});

sequencer.registerSequence({
		name : "person freeze"+startStep, 
		start : startStep+7, 
		stop : startStep+12, 
		onStart : function (event){
			personFreeze.show();
		}, 
		onStop : function (event){
			personFreeze.hide();
		}, 
		measure : 1, 
		steps : [1]
	});

sequencer.registerSequence({
		name : "nisip"+startStep, 
		start : startStep+12, 
		stop : startStep+17, 
		onStart : function (event){
			nisip.show();
		}, 
		onStop : function (event){
			nisip.hide();
		},
		onStep : function (event){
			nisip.next(true);
		}, 
		measure : 1, 
		steps : [1]
	});


sequencer.registerSequence({
		name : " bird smoke"+startStep, 
		start : startStep+18, 
		stop : startStep+27, 
		onStart : function (event){
			fumBird.show();
		}, 
		onStop : function (event){
			fumBird.hide();
		}, 
		measure : 1, 
		steps : [1]
	});

sequencer.registerSequence({
		name : " smoke into view"+startStep, 
		start : startStep+20, 
		stop : startStep+27, 
		onStart : function (event){
			fumA.show();
		}, 
		onStop : function (event){
			fumA.hide();
		}, 
		onStep : function (event){
			fumA.setPosition(fumA.x+20, fumA.y);
		},
		measure : 1, 
		steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
	});

sequencer.registerSequence({
		name : "second smoke into view"+startStep, 
		start : startStep+20, 
		stop : startStep+27, 
		onStart : function (event){
			fumB.show();
		}, 
		onStop : function (event){
			fumB.hide();
		}, 
		onStep : function (event){
			fumB.setPosition(fumB.x-20, fumB.y);
		},
		measure : 1, 
		steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]	});



sequencer.registerSequence({
		name : " bird comes at you"+startStep, 
		start : startStep+27, 
		stop : startStep+29, 
		onStart : function (event){
			efemerBird.show();
		}, 
		onStop : function (event){
			efemerBird.hide();
		},
		onStep : function (event){
			efemerBird.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

sequencer.registerSequence({
		name : " bird goes up"+startStep, 
		start : startStep+32, 
		stop : startStep+39, 
		onStart : function (event){
			bigEfemerBird.show();
		}, 
		onStop : function (event){
			bigEfemerBird.hide();
		},
		onStep : function (event){
			bigEfemerBird.setPosition(bigEfemerBird.x, bigEfemerBird.y-50);
		}, 
		measure : 1, 
		steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
	});

}