
class Animator extends Drawable {
	static isInit = false;
	static loadImageTrackingCounter = 0;
	static loaders = [];
	static mainLoaderTimer;
	static loadProgressHandler(event){
		const percent = Math.round(event.detail.progress * 100);
		if(percent != 100){
			document.querySelector("#loader").classList.remove("hide");	
		}
		document.querySelector("#loader #percent").innerText = `${round(event.detail.progress * 100)}%`
	}
	static  mainLoaderHandler(){
		Promise.all(Animator.loaders)
		.then( (data) => {
			document.querySelector("#loader").classList.add("hide");
		})
		.catch( (error) => {
			document.querySelector("#error").classList.remove("hide");
			document.querySelector("#error").innerText = "Error : " + error.path;
		})
		.finally( () => {
			document.removeEventListener("loadProgress", Animator.loadProgressHandler);
			document.querySelector("#loader").classList.add("hide");
		});
	}
	constructor(imgLength, counter, addressPattern){
		super();
		this.imgs = [];
		this.cursor = 0;
		this.pointer = 0;
		this.x = 0;
		this.y = 0;
		this.w = 400;
		this.h = 400;

		while(counter <= imgLength){
			let imgAddress = addressPattern.replace("_imgNum_", counter)
			this.imgs.push(this.loadImageTracking(imgAddress));
			counter ++;
		}

		if(!Animator.isInit){
			Animator.isInit = true;
			document.querySelector("#loader").classList.remove("hide");	
			document.addEventListener("loadProgress", Animator.loadProgressHandler, false);
		}

		clearTimeout(Animator.mainLoaderTimer);
		Animator.mainLoaderTimer = setTimeout(Animator.mainLoaderHandler, 100);
	}

	loadImageTracking(path){
		let res, rej;
		Animator.loaders.push(
			new Promise((resolve, reject)=>{
				res = resolve;
				rej = reject;
			})
		);
		return loadImage(
			path, 
			img => {
				Animator.loadImageTrackingCounter ++;
				document.dispatchEvent(new CustomEvent("loadProgress", {
					bubbles : true,
					detail : {
						current : path,
						progress : Animator.loadImageTrackingCounter / Animator.loaders.length,
						loaders : Animator.loaders
					},
				}));
				res({path, img});
			}, 
			error => {
				rej({path, error});
			}
		);
	}

	setPosition(x, y){
		this.x = x;
		this.y = y;
	}
	setSize(w, h){
		this.w = w;
		this.h = h;
	}
	
	runFast(){
		image(this.imgs[0], this.x, this.y, this.w, this.h);
		let img = this.imgs.shift();
		this.imgs.push(img);
	}
	
	mouseSlide(){
		image(this.imgs[this.cursor],this.x, this.y, this.w, this.h);
		this.cursor = map(mouseX, 0, width, 0, this.imgs.length);
		this.cursor = floor(this.cursor);
		print(mouseX,mouseY);
		//trois façons d'arrondir en progra, en dessous, au dessus ou en 0,5
	}
	
	display(){
		image(this.imgs[this.pointer], this.x, this.y, this.w, this.h);
	}
	
	setPointer(eve){
		this.pointer = floor(eve * (this.imgs.length-1));
	}

	setPointerAbsolute(index){
		this.pointer = floor(index);
	}

	incrementPointer(){
		this.pointer++;
		if(this.pointer >= this.imgs.length){
			this.pointer = 0;
		}

	}
}