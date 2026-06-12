function petalSequence(startStep){

		sequencer.registerSequence({
			name : "first sequence"+startStep, 
			start : startStep, 
			stop : startStep+2, 
			onStart : function (event){
				petalFirst.show();
			}, 
			onStop : function (event){
				petalFirst.hide();
			},
			onStep : function (event){
				petalFirst.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
		});

		sequencer.registerSequence({
			name : "second sequence"+startStep, 
			start : startStep+3, 
			stop : startStep+3, 
			onStart : function (event){
				petalSecond.show();
			}, 
			onStop : function (event){
				petalSecond.hide();
			},
			onStep : function (event){
				petalSecond.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
		});

		sequencer.registerSequence({
			name : "rotate sequence"+startStep, 
			start : startStep+4, 
			stop : startStep+19, 
			onStart : function (event){
				petalRotate.show();
			}, 
			onStop : function (event){
				petalRotate.hide();
			},
			onStep : function (event){
				petalRotate.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
		});

		sequencer.registerSequence({
			name : "final sequence"+startStep, 
			start : startStep+20, 
			stop : startStep+21, 
			onStart : function (event){
				petalFinal.show();
			}, 
			onStop : function (event){
				petalFinal.hide();
			},
			onStep : function (event){
				petalFinal.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
		});

		sequencer.registerSequence({
			name : "final still sequence"+startStep, 
			start : startStep+22, 
			stop : startStep+22, 
			onStart : function (event){
				petalFinalStill.show();
			}, 
			onStop : function (event){
				petalFinalStill.hide();
			},
			onStep : function (event){
				petalFinalStill.next(true);
			}, 
			measure : 1, 
			steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
		});


}