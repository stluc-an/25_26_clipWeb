/*----------------------------------------*\
  23_24_AN1_clipWeb - main.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2024-02-23 00:24:49
  @Last Modified time: 2024-02-23 08:58:36
\*----------------------------------------*/
let BPM = 80;
//bpm de 77 mais trop lent pour bouger couleur 
let audioPath = "assets/audio/stoptheshow.mp3";
let sequencer;

let bck;
let lamp;
let billie;
let billiebk;
let walk;
let waw;
let frsh;
let hot;
let night;
let smoke;
let gun;
let blob;
let eye;
let the;
let sunny;
let chill;
let chillu;
let blobu;

function setup(){
	createCanvas(windowWidth, windowHeight);
	sequencer = new Sequencer(audioPath, BPM, false);

	bck = new Animator(3, 1, "./assets/images/BCK/BCK_imgNum_.png");

	lamp = new Animator(4, 0, "./assets/images/lamp/lamp._imgNum_.png");

	billie = new Animator(6, 0, "./assets/images/billie/billie_imgNum_.png");

	billiebk = new Animator(0, 0, "./assets/images/billiebk/billiebk_imgNum_.png");

	walk = new Animator(11, 1, "./assets/images/walk/walk_imgNum_.png");

	waw = new Animator(7, 1, "./assets/images/waw/waw_imgNum_.PNG");

	frsh = new Animator(7, 0, "./assets/images/frch/frsh_imgNum_.png");

	hot = new Animator(1, 0, "./assets/images/hot/hot_imgNum_.png");
  
  night = new Animator(0, 0, "./assets/images/night/night_imgNum_.png");	

	smoke = new Animator(24, 0, "./assets/images/smoke/smoke_imgNum_.png");	

	coucher = new Animator(0, 0, "./assets/images/coucher/coucher_imgNum_.png");	

	sun = new Animator(10, 0, "./assets/images/sun/sun_imgNum_.png");

	gun = new Animator(6, 0, "./assets/images/gun/gun_imgNum_.PNG");

	eye = new Animator(164, 0, "./assets/images/eye/eye_imgNum_.jpeg");

	the = new Animator(2, 0, "./assets/images/the/the_imgNum_.png");

	sunny = new Animator(1, 0, "./assets/images/sunny/sunny_imgNum_.png");	

	chill = new Animator(8, 0, "./assets/images/chill/chill_imgNum_.png");	

	star = new Animator(6, 1, "./assets/images/star/Star_imgNum_.png");	

	chillu = new Animator(8, 0, "./assets/images/chillu/chillu_imgNum_.png");

	blobu = new Animator(3, 1, "./assets/images/blobu/blobu_imgNum_.png");








//size et pose



	bck.setSize(width, height);



	billie.setSize(width, height);
	billie.setPosition( width/2 - billie.w/2, height - billie.h);

	lamp.setSize(900, 800);
	lamp.setPosition ( width/2 - lamp.w/2 , height - lamp.h);

	smoke.setSize(1500, 1200);
	smoke.setPosition (width/2 - smoke.w/2, height - smoke.h);
	


	
	



	billiebk.setSize(width, height);

	

	waw.setSize(width, height);



	//frsh.setSize(820, 1180);
	frsh.setPosition (width/2 - frsh.w/2, height - frsh.h);
	coucher.setSize(width, height)
	sun.setSize(width, height)
	//sun.setPosition(300,100)
	eye.setSize(width, height)
	//hot.setSize(1180, 820)
	hot.setPosition(width/2, height/2)
	the.setSize(1180, 820)
	the.setPosition(width/2 - the.w/2, height/2 - the.h/2)
	night.setSize(width, height)
	//chill.setSize(1180, 820)
	chill.setPosition(width/2, height/2)
	sunny.setSize(width, height)
	sunny.setPosition(0, 0)
	//gun.setSize(1180, 820)
	gun.setPosition(width/2, height/2)

	sequencer.registerSequence({
			name : "billiehand", 
		start : 1, 
		stop : 13, 
		onStart : function (event){
		 	billie.show();
		 	billiebk.show();
		}, 
		onStop : function (event){
			billie.hide();
			billiebk.hide();
		},
		onStep : function (event){
			//console.log(event)
			billie.pointer ++;
		 if(billie.pointer == 6){
		  	billie.pointer = 0;
			}
		}, 
		measure : 1, 
		steps : [1, 1+1/4, 1+2/4, 1+3/4]
	});
	sequencer.registerSequence({
	name : "my first sequence", 
	start : 14, 
	stop : 109, 
	onStart : function (event){
	bck.show();
	}, 
	onStop : function (event){
	bck.hide();
	},
	onStep : function (event){
						//console.log(event)
	bck.pointer ++;
	 if(bck.pointer >= bck.imgs.length){
			bck.pointer = 0;
			 }				
		}, 
	measure : 1, 
	steps : [1, 1+1/4, 1+2/4, 1+3/4]	
	});


	sequencer.registerSequence({
	name : "boom", 
	start : 14, 
	stop : 109, 
	onStart : function (event){
	 lamp.show();
	}, 
	onStop : function (event){
		lamp.hide();
	},
	 
	onStep : function (event){
			//Kick = 255;
		 lamp.pointer++;
		 if(lamp.pointer == 5){
		 	lamp.pointer = 1;
		 }
		}, 

		measure : 1, 
		steps : [1, 1+1/3, 1+2/3]
	});

	sequencer.registerSequence({
		name : "night", 
		start : 18, 
		stop : 25, 
		onStart : function (event){
		 	night.show();
		}, 
		onStop : function (event){
			night.hide();
		},
		onStep : function (event){
		}, 			

			measure : 1, 
			steps : [1]	
   	});


 		sequencer.registerSequence({
		name : "smoke", 
		start : 18, 
		stop : 25, 
		onStart : function (event){
		 	smoke.show();
		}, 
		onStop : function (event){
			smoke.hide();
		},
		onStep : function (event){
			//console.log(event)
			//walk.setPointer(event.amount);
			smoke.pointer++;
			if(smoke.pointer == 24){
				smoke.pointer = 0;
			}
			
		}, 			

			measure : 1, 
			steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+4/6]	
   	});


 		sequencer.registerSequence({
		name : "walking", 
		start : 28, 
		stop : 31, 
		onStart : function (event){
			let ratio = walk.imgs[0].width/walk.imgs[0].height;
			walk.setSize(height * ratio, height);
			walk.setPosition (width/2 - walk.w/2, height - walk.h);
		 	walk.show();
		}, 
		onStop : function (event){
			walk.hide();
		},
		onStep : function (event){
			//console.log(event)
			//walk.setPointer(event.amount);
			if(walk.pointer < 10){
				walk.pointer++;
			}
			
		
		}, 

		measure : 1, 
		steps : [1, 1+1/3, 1+2/3]
	});

 		sequencer.registerSequence({
		name : "the", 
		start : 32, 
		stop : 33, 
		onStart : function (event){
		 	the.show();
		}, 
		onStop : function (event){
			the.hide();
		},
		onStep : function (event){
			//console.log(event)
			//walk.setPointer(event.amount);
			the.pointer++;
			the.pointer = the.pointer % the.imgs.length
	//if(hot.pointer < 1){
	//hot.pointer++;
			}, 			

			measure : 1, 
			steps : [1, 1+1/3, 1+2/3]	
   	}); 


   	sequencer.registerSequence({
		name : "chill", 
		start : 33, 
		stop : 41, 
		onStart : function (event){
			let ratio = chill.imgs[0].width/chill.imgs[0].height;
			chill.setSize(height * ratio, height);
			chill.setPosition (width/2 - chill.w/2,  height - chill.h);			
		 	chill.show();
		}, 
		onStop : function (event){
			chill.hide();
		},
		onStep : function (event){
		chill.pointer++;
			if(chill.pointer == 8)
				chill.pointer = 0;
		}, 			

			measure : 1, 
			steps : [1, 1+1/3, 1+2/3]	
   	}); 


//a regler 
	sequencer.registerSequence({
		name : "hot", 
		start : 42, 
		stop : 44, 
		onStart : function (event){
			let ratio = hot.imgs[0].width/hot.imgs[0].height;
			hot.setSize(height * ratio, height);
			hot.setPosition (width/2 - hot.w/2, height - hot.h);			
		 	hot.show();
		}, 
		onStop : function (event){
			hot.hide();
		},
		onStep : function (event){
			//console.log(event)
			//walk.setPointer(event.amount);
			hot.pointer++;
			hot.pointer = hot.pointer % hot.imgs.length
	//if(hot.pointer < 1){
	//hot.pointer++;
			}, 			

			measure : 1, 
			steps : [1, 1+1/3, 1+2/3]	
   	});  		

		sequencer.registerSequence({
		name : "waw", 
		start : 45, 
		stop : 50, 
		onStart : function (event){
		 	waw.show();
		}, 
		onStop : function (event){
			waw.hide();
		},
		onStep : function (event){
			//console.log(event)
			//walk.setPointer(event.amount);
			waw.pointer++;
			if(waw.pointer == 7){
				waw.pointer = 1;
			}
			
		}, 

		measure : 1, 
		steps : [1, 1+1/3, 1+2/3]
	}); 	

		sequencer.registerSequence({
		name : "eye", 
		start : 52, 
		stop : 70, 
		onStart : function (event){
		 	eye.show();
		}, 
		onStop : function (event){
			eye.hide();
		},
		onStep : function (event){
			//console.log(event)
			//walk.setPointer(event.amount);
			eye.pointer++;
			eye.pointer = eye.pointer % eye.imgs.length
	//if(hot.pointer < 1){
	//hot.pointer++;
			}, 			

			measure : 1, 
			steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+4/6]	
   	}); 

   	sequencer.registerSequence({
		name : "waaccking", 
		start : 94, 
		stop : 98, 
		onStart : function (event){
			walk.pointer = 0;
		 	walk.show();
		}, 
		onStop : function (event){
			walk.hide();
		},
		onStep : function (event){
			//console.log(event)
			//walk.setPointer(event.amount);
			if(walk.pointer < 10){
				walk.pointer++;
			}
			
		
		}, 

		measure : 1, 
		steps : [1, 1+1/3, 1+2/3]
	});   	

   	sequencer.registerSequence({
		name : "show", 
		start : 99, 
		stop : 100, 
		onStart : function (event){
		 	the.show();
		}, 
		onStop : function (event){
			the.hide();
		},
		onStep : function (event){
			//console.log(event)
			//walk.setPointer(event.amount);
			the.pointer++;
			the.pointer = the.pointer % the.imgs.length
	//if(hot.pointer < 1){
	//hot.pointer++;
			}, 			

			measure : 1, 
			steps : [1, 1+1/3, 1+2/3]	
   	});  		

		sequencer.registerSequence({
		name : "frsh", 
		start : 109, 
		stop : 113, 
		onStart : function (event){
			let ratio = frsh.imgs[0].width/frsh.imgs[0].height;
			frsh.setSize(height * ratio, height);
			frsh.setPosition (width/2 - frsh.w/2, height - frsh.h);
		 	frsh.show();
		}, 
		onStop : function (event){
			frsh.hide();
		},
		onStep : function (event){
			//console.log(event)
			//walk.setPointer(event.amount);
			frsh.pointer++;
			if(frsh.pointer == 8){
				frsh.pointer = 1;
			}
			
		}, 			

			measure : 1, 


			steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+4/6]	
   	}); 

	sequencer.registerSequence({
		name : "coucher", 
		start : 113, 
		stop : 225, 
		onStart : function (event){
		 	coucher.show();
		}, 
		onStop : function (event){
			coucher.hide();
		},
		onStep : function (event){			
		}, 			

			measure : 1, 
			steps : [1]	
   	});  

 		sequencer.registerSequence({
		name : "sun", 
		start : 113, 
		stop : 225, 
		onStart : function (event){
		 	sun.show();
		}, 
		onStop : function (event){
			sun.hide();
		},
		onStep : function (event){
			//console.log(event)
			//walk.setPointer(event.amount);
			sun.pointer++;
			if(sun.pointer == 10){
				sun.pointer = 0;
			}
			
		}, 			

			measure : 1, 
			steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+4/6]	
   	}); 	

   	sequencer.registerSequence({
		name : "chilli", 
		start : 120, 
		stop : 135, 
		onStart : function (event){
			let ratio = chillu.imgs[0].width/chillu.imgs[0].height;
			chillu.setSize(height * ratio, height);
			chillu.setPosition (width/2 - chillu.w/2, height - chillu.h);			
		 	chillu.show();
		}, 
		onStop : function (event){
			chillu.hide();
		},
		onStep : function (event){
		chillu.pointer++;
			if(chillu.pointer == 8)
				chillu.pointer = 0;
		}, 			

			measure : 1, 
			steps : [1, 1+1/3, 1+2/3]	
   	}); 

   		sequencer.registerSequence({
		name : "waacking", 
		start : 135, 
		stop : 139, 
		onStart : function (event){
			walk.pointer = 0;
		 	walk.show();
		}, 
		onStop : function (event){
			walk.hide();
		},
		onStep : function (event){
			//console.log(event)
			//walk.setPointer(event.amount);
			if(walk.pointer < 10){
				walk.pointer++;
			}
			
		
		}, 

		measure : 1, 
		steps : [1, 1+1/3, 1+2/3]
	});


 		sequencer.registerSequence({
		name : "sunny", 
		start : 113, 
		stop : 225, 
		onStart : function (event){
		 	sunny.show();
		}, 
		onStop : function (event){
			sunny.hide();
		},
		onStep : function (event){
			//console.log(event)
			//walk.setPointer(event.amount);
			sunny.pointer++;
			if(sunny.pointer == 1){
				sunny.pointer = 0;
			}
			
		}, 			

			measure : 1, 
			steps : [1, 1+1/4, 1+2/4, 1+3/4]	
   	}); 	   	
   	
   	sequencer.registerSequence({
		name : "blobu", 
		start : 150, 
		stop : 160, 
		onStart : function (event){		
			let ratio = blobu.imgs[0].width/blobu.imgs[0].height;
			blobu.setSize(height * ratio, height);
			blobu.setPosition (width/2 - blobu.w/2, height - blobu.h);
		 	blobu.show();
		}, 
		onStop : function (event){
			blobu.hide();
		},
		onStep : function (event){
			//console.log(event)
			//walk.setPointer(event.amount);
			blobu.pointer++;
			if(blobu.pointer == 3){
				blobu.pointer = 1;
			}
			
		}, 			

			measure : 1, 
			steps : [1, 1+1/4, 1+2/4, 1+3/4]	
   	}); 

   	sequencer.registerSequence({
		name : "chilly", 
		start : 160, 
		stop : 170, 
		onStart : function (event){
			let ratio = chillu.imgs[0].width/chillu.imgs[0].height;
			chillu.setSize(height * ratio, height);
			chillu.setPosition (width/2 - chillu.w/2, height - chillu.h);		
		 	chillu.show();
		}, 
		onStop : function (event){
			chillu.hide();
		},
		onStep : function (event){
		chillu.pointer++;
			if(chillu.pointer == 8)
				chillu.pointer = 0;
		}, 			

			measure : 1, 
			steps : [1, 1+1/3, 1+2/3]	
   	}); 


   	sequencer.registerSequence({
		name : "gun", 
		start : 176, 
		stop : 179, 
		onStart : function (event){
			let ratio = gun.imgs[0].width/gun.imgs[0].height;
			gun.setSize(height * ratio, height);
			gun.setPosition (width - gun.w, height/2 - gun.h/2);			
		 	gun.show();
	}, 
		onStop : function (event){
			gun.hide();
		},
		onStep : function (event){
;
		gun.pointer++;
		if(gun.pointer == 6){
		gun.pointer = 0;
		}
			
		},

		measure : 1, 
		steps : [1, 1+1/3, 1+2/3]
	}); 
   	
   	sequencer.registerSequence({
		name : "wacking", 
		start : 179, 
		stop : 183, 
		onStart : function (event){
			let ratio = walk.imgs[0].width/walk.imgs[0].height;
			walk.setSize(height * ratio, height);
			walk.setPosition (width/2 - walk.w/2, height - walk.h);			
			walk.pointer = 0;
		 	walk.show();
		}, 
		onStop : function (event){
			walk.hide();
		},
		onStep : function (event){
			//console.log(event)
			//walk.setPointer(event.amount);
			if(walk.pointer < 10){
				walk.pointer++;
			}
			
		
		}, 

		measure : 1, 
		steps : [1, 1+1/3, 1+2/3]
	}); 

		sequencer.registerSequence({
		name : "eyye", 
		start : 190, 
		stop : 195, 
		onStart : function (event){
		 	star.show();
		}, 
		onStop : function (event){
			star.hide();
		},
		onStep : function (event){
			//console.log(event)
			//walk.setPointer(event.amount);
			star.pointer++;
			star.pointer = star.pointer % star.imgs.length
	//if(hot.pointer < 1){
	//hot.pointer++;
			}, 			

			measure : 1, 
			steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+4/6]	
   	}); 			


   	sequencer.registerSequence({
		name : "chillii", 
		start : 195, 
		stop : 210, 
		onStart : function (event){
			let ratio = chillu.imgs[0].width/chillu.imgs[0].height;
			chillu.setSize(height * ratio, height);
			chillu.setPosition (width/2 - chillu.w/2, height - chillu.h);			
		 	chillu.show();
		}, 
		onStop : function (event){
			chillu.hide();
		},
		onStep : function (event){
		chillu.pointer++;
			if(chillu.pointer == 8)
				chillu.pointer = 0;
		}, 			

			measure : 1, 
			steps : [1, 1+1/3, 1+2/3]	
   	});    	  	

}

function draw(){
	sequencer.update();
	background(19, 5, 38);

	if (coucher.visible){
		coucher.display();
	}

	if (sun.visible){
	sun.display();
	}

	if (sunny.visible){
	sunny.display();
	}


	if (billie.visible){
		billiebk.display();
		billie.display();
	}

	if (bck.visible){
		bck.display();
		lamp.display();
	}

	if (night.visible){	
	night.display();	
	}	

	if (smoke.visible){	
	smoke.display();	
	}	

	if (hot.visible){	
	hot.display();	
	}	

	if (waw.visible){
	waw.display();
	}
	if (eye.visible){
	eye.display();	
	}

	if (frsh.visible){
	frsh.display();
	}

	if (gun.visible){
	gun.display();
	}	

	if (walk.visible){
	walk.display();
	}



	if (walk.visible){
	walk.display();
	}

	if (the.visible){
	the.display();
	}

	if (chill.visible){
	chill.display();
	}
	if (chill.visible){
	chill.display();
	}

	if (chill.visible){
	chill.display();
	}
	if (chill.visible){
	chill.display();
	}

	if (walk.visible){
	walk.display();
	}

	if (walk.visible){
	walk.display();
	}

	if (chillu.visible){
	chillu.display();
	}

	if (blobu.visible){
	blobu.display();
	}

}
